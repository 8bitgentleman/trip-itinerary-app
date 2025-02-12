import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageViewer({ images, onClose, startIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    } else if (e.key === 'ArrowRight') {
      setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [images.length, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    } else if (isRightSwipe) {
      setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button 
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      <button
        className="absolute left-4 text-white hover:text-gray-300"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
        }}
      >
        <ChevronLeft size={40} />
      </button>

      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="absolute right-4 text-white hover:text-gray-300"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
        }}
      >
        <ChevronRight size={40} />
      </button>

      <div className="absolute bottom-4 text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}