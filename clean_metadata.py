from PIL import Image
import os
from pathlib import Path

def strip_metadata(image_path):
    """
    Remove metadata from an image while preserving the image content.
    Returns True if successful, False otherwise.
    """
    try:
        # Open the image
        with Image.open(image_path) as img:
            # Create a new image without metadata
            data = list(img.getdata())
            image_without_metadata = Image.new(img.mode, img.size)
            image_without_metadata.putdata(data)
            
            # Save the image back to the same location
            image_without_metadata.save(image_path, format=img.format)
            return True
    except Exception as e:
        print(f"Error processing {image_path}: {str(e)}")
        return False

def process_directory(directory):
    """
    Recursively process all images in a directory and its subdirectories.
    """
    # Common image file extensions
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'}
    
    # Convert directory to Path object
    dir_path = Path(directory)
    
    # Statistics
    total_files = 0
    successful = 0
    failed = 0

    # Walk through all files in directory and subdirectories
    for filepath in dir_path.rglob('*'):
        if filepath.suffix.lower() in image_extensions:
            total_files += 1
            print(f"Processing: {filepath}")
            
            if strip_metadata(filepath):
                successful += 1
            else:
                failed += 1

    # Print summary
    print("\nProcessing complete!")
    print(f"Total images found: {total_files}")
    print(f"Successfully processed: {successful}")
    print(f"Failed to process: {failed}")

if __name__ == "__main__":
    # Replace this with your directory path
    public_folder = "public/photos"
    
    # Ensure the directory exists
    if not os.path.exists(public_folder):
        print(f"Directory not found: {public_folder}")
    else:
        process_directory(public_folder)