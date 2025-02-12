import React, { useState, useMemo } from 'react';
import ImageViewer from './ImageViewer';

export default function TripGallery({ trip }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Combine gallery and daily images
  const allImages = useMemo(() => {
    const dailyImages = trip.itinerary.reduce((acc, day) => {
      if (day.images) {
        return [...acc, ...day.images];
      } else if (day.image) {
        return [...acc, day.image];
      }
      return acc;
    }, []);

    return [...(trip.gallery || []), ...dailyImages];
  }, [trip]);

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {isOpen && (
        <ImageViewer
          images={allImages}
          onClose={closeLightbox}
          startIndex={currentImageIndex}
        />
      )}
    </>
  );
}
