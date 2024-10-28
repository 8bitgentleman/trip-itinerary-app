import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === trip.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? trip.gallery.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {trip.gallery.map((image, index) => (
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

      {/* Lightbox */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 text-white hover:text-gray-300"
            onClick={previousImage}
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={trip.gallery[currentImageIndex]}
            alt={`Gallery image ${currentImageIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white hover:text-gray-300"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-4 text-white">
            {currentImageIndex + 1} / {trip.gallery.length}
          </div>
        </div>
      )}
    </>
  );
}
