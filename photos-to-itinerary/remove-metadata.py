import os
from PIL import Image
import piexif
from pathlib import Path

def remove_metadata(directory):
    """
    Recursively remove metadata from all image files in the given directory and its subdirectories.
    """
    # Supported image extensions
    IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.tiff'}
    
    base_dir = Path(directory)
    processed_count = 0
    skipped_count = 0
    
    print(f"Starting metadata removal from {base_dir}...")
    
    for file_path in base_dir.rglob('*'):
        if file_path.suffix.lower() in IMAGE_EXTENSIONS:
            try:
                # Open image and get original size
                original_size = os.path.getsize(file_path)
                
                # Remove EXIF data
                try:
                    piexif.remove(str(file_path))
                    processed_count += 1
                    
                    # Get new size and calculate difference
                    new_size = os.path.getsize(file_path)
                    size_diff = new_size - original_size
                    
                    print(f"Processed: {file_path}")
                    print(f"Size change: {size_diff/1024:.1f}KB ({((new_size/original_size)-1)*100:.1f}%)")
                    
                except piexif.InvalidImageDataError:
                    # If piexif fails, try a more gentle approach with PIL
                    with Image.open(file_path) as img:
                        # Remove EXIF data while keeping the image data intact
                        data = img.getdata()
                        mode = img.mode
                        size = img.size
                        
                        new_image = Image.new(mode, size)
                        new_image.putdata(data)
                        
                        # Save with original format
                        new_image.save(file_path, format=img.format)
                    
                    new_size = os.path.getsize(file_path)
                    size_diff = new_size - original_size
                    print(f"Processed (fallback method): {file_path}")
                    print(f"Size change: {size_diff/1024:.1f}KB ({((new_size/original_size)-1)*100:.1f}%)")
                    
            except Exception as e:
                print(f"Error processing {file_path}: {str(e)}")
                skipped_count += 1
                continue
    
    print(f"\nProcessing complete!")
    print(f"Successfully processed: {processed_count} files")
    print(f"Skipped/Errors: {skipped_count} files")

if __name__ == "__main__":
    target_directory = r"C:\Users\matt.vogel\Documents\GitHub\trip-itinerary-app\public\photos"
    remove_metadata(target_directory)