import os
import json
from datetime import datetime
from PIL import Image
import exifread
from collections import defaultdict
from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut
import time

def get_location_details(latitude, longitude):
    """Reverse geocode coordinates to get location details."""
    # print(f"  Fetching location details for coordinates: {latitude:.4f}, {longitude:.4f}")
    geolocator = Nominatim(user_agent="my_photo_analyzer")
    try:
        time.sleep(1)
        location = geolocator.reverse((latitude, longitude), language='en')
        if location:
            address = location.raw.get('address', {})
            details = {
                'city': address.get('city') or address.get('town') or address.get('village'),
                'state': address.get('state'),
                'country': address.get('country'),
                'neighborhood': address.get('suburb') or address.get('neighborhood'),
                'point_of_interest': address.get('tourism') or address.get('amenity') or address.get('leisure'),
            }
            # print(f"  ✓ Location found: {details.get('city', '')}, {details.get('country', '')}")
            return details
    except (GeocoderTimedOut, Exception) as e:
        print(f"  ⚠ Error getting location: {str(e)}")
        return {"error": str(e)}
    return None

def extract_photo_metadata(photo_path):
    """Extract metadata from a photo file."""
    # print(f"  Processing: {os.path.basename(photo_path)}")
    metadata = {}
    
    # Read EXIF data
    with open(photo_path, 'rb') as f:
        tags = exifread.process_file(f)
        
        # Get datetime
        if 'EXIF DateTimeOriginal' in tags:
            date_str = str(tags['EXIF DateTimeOriginal'])
            metadata['datetime'] = datetime.strptime(date_str, '%Y:%m:%d %H:%M:%S')
            # print(f"    ✓ Found datetime: {metadata['datetime']}")
        else:
            print("    ⚠ No datetime found in EXIF data")
        
        # Get GPS data if available
        if 'GPS GPSLatitude' in tags and 'GPS GPSLongitude' in tags:
            lat = tags['GPS GPSLatitude'].values
            lon = tags['GPS GPSLongitude'].values
            
            # Convert to decimal degrees
            lat_d = float(lat[0].num) / float(lat[0].den) + \
                   float(lat[1].num) / float(lat[1].den) / 60 + \
                   float(lat[2].num) / float(lat[2].den) / 3600
                   
            lon_d = float(lon[0].num) / float(lon[0].den) + \
                   float(lon[1].num) / float(lon[1].den) / 60 + \
                   float(lon[2].num) / float(lon[2].den) / 3600
                   
            if 'GPS GPSLatitudeRef' in tags and tags['GPS GPSLatitudeRef'].values == 'S':
                lat_d = -lat_d
            if 'GPS GPSLongitudeRef' in tags and tags['GPS GPSLongitudeRef'].values == 'W':
                lon_d = -lon_d
                
            metadata['location'] = (lat_d, lon_d)
            # print(f"    ✓ Found GPS coordinates: {lat_d:.4f}, {lon_d:.4f}")
            
            # Get location details
            location_details = get_location_details(lat_d, lon_d)
            if location_details:
                metadata['location_details'] = location_details
        else:
            print("    ⚠ No GPS data found in EXIF")
    
    metadata['filepath'] = photo_path
    return metadata

def generate_title_from_location(location_details):
    """Generate a title based on location details."""
    if not location_details:
        return "Photo Day"
        
    parts = []
    if location_details.get('point_of_interest'):
        parts.append(location_details['point_of_interest'])
    if location_details.get('neighborhood'):
        parts.append(location_details['neighborhood'])
    if location_details.get('city'):
        parts.append(location_details['city'])
    
    if not parts and location_details.get('country'):
        parts.append(f"Day in {location_details['country']}")
    
    title = " - ".join(parts) if parts else "Photo Day"
    print(f"  Generated title: {title}")
    return title

def generate_trip_json(directory, output_file="trip_itinerary.json"):
    """Generate a JSON file containing the trip itinerary."""
    print(f"\n📸 Starting photo analysis in: {directory}")
    photos_by_date = defaultdict(list)
    
    # Updated file extensions to include .NEF
    image_files = [f for f in os.listdir(directory) 
                  if f.lower().endswith(('.jpg', '.jpeg', '.png', '.heic', '.nef'))]
    total_photos = len(image_files)
    print(f"\nFound {total_photos} photos to process")
    
    # Process all image files in the directory
    for idx, filename in enumerate(image_files, 1):
        print(f"\n[Photo {idx}/{total_photos}]")
        file_path = os.path.join(directory, filename)
        try:
            metadata = extract_photo_metadata(file_path)
            if 'datetime' in metadata:
                date = metadata['datetime'].date()
                photos_by_date[date].append(metadata)
        except Exception as e:
            print(f"  ❌ Error processing {filename}: {str(e)}")
    
    # Sort dates and create itinerary
    sorted_dates = sorted(photos_by_date.keys())
    print(f"\n📅 Organizing photos into {len(sorted_dates)} days")
    itinerary = []
    
    for day_num, date in enumerate(sorted_dates, 1):
        print(f"\n[Day {day_num}/{len(sorted_dates)}: {date}]")
        day_photos = photos_by_date[date]
        print(f"  Processing {len(day_photos)} photos from this day")
        
        # Get the most interesting location from the day's photos
        best_location = None
        for photo in day_photos:
            if 'location_details' in photo:
                if photo['location_details'].get('point_of_interest') or \
                   photo['location_details'].get('neighborhood') or \
                   photo['location_details'].get('city'):
                    best_location = photo['location_details']
                    break
        if not best_location and day_photos[0].get('location_details'):
            best_location = day_photos[0]['location_details']
            
        # Create day entry
        day_entry = {
            "day": day_num,
            "date": date.strftime('%Y-%m-%d'),
            "title": generate_title_from_location(best_location),
            "description": "",
            "activities": []
        }
        
        # Handle images
        photo_paths = [os.path.relpath(photo['filepath'], directory) for photo in day_photos]
        if len(photo_paths) == 1:
            day_entry["image"] = photo_paths[0]
        else:
            day_entry["images"] = photo_paths
        
        itinerary.append(day_entry)
    
    # Save to JSON file
    print(f"\n💾 Saving itinerary to {output_file}")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump({"itinerary": itinerary}, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Process complete! Itinerary saved to {output_file}")
    print(f"   • Total photos processed: {total_photos}")
    print(f"   • Days in itinerary: {len(sorted_dates)}")
    return itinerary

if __name__ == "__main__":
    # Replace with your photos directory path
    # photos_directory = "./trip_photos"
    photos_directory = '/Users/mtvogel/Downloads/Montreal Eclipse '
    # photos_directory = "/Users/mtvogel/Downloads/Forest and Friends/"

    # Create JSON filename based on directory name
    dir_name = os.path.basename(os.path.normpath(photos_directory))  # Gets the last part of the path
    output_file = f"{dir_name.lower().replace(' ', '_')}_itinerary.json"
    
    generate_trip_json(photos_directory, output_file)