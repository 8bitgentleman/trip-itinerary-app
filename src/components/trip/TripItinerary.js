import React, { useState } from 'react';

import {
  BedDouble,
  Utensils,
  Drama,
  Music4,
  Map,
  Bus,
  Pyramid,
  FlameKindling,
  Plane,
  Bike,
  Mountain,
  Ship,
  Sailboat,
  MountainSnow,
  Theater,
  TicketX,
  Telescope,
  TreePalm,
  TrainTrack,
  House,
  Waves,
  Landmark,
  Building,
  Building2,
  Castle,
  Hotel,
  Camera,
  Footprints,
  Caravan,
  Car,
  CarFront,
  Worm,
  Laptop,
  Laptop2,
  Pen,
  BriefcaseBusiness,
  ExternalLink,
  Image as ImageIcon
} from 'lucide-react';

export default function TripItinerary({ trip }) {
  const [expandedDay, setExpandedDay] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Custom icon mapping
  const iconMapping = {
    BedDouble,
    Utensils,
    Drama,
    Music4,
    Map,
    Bus,
    Pyramid,
    FlameKindling,
    Plane,
    Bike,
    Mountain,
    Ship,
    Sailboat,
    MountainSnow,
    Theater,
    TicketX,
    Telescope,
    TreePalm,
    TrainTrack,
    House,
    Waves,
    Landmark,
    Building,
    Building2,
    Castle,
    Hotel,
    Camera,
    Footprints,
    Caravan,
    Car,
    CarFront,
    Worm,
    Laptop,
    Laptop2,
    Pen,
    BriefcaseBusiness,
  };

  // Get icon function now uses the mapping
  const getIcon = (customIcon, defaultType) => {
    // If a custom icon name is provided and exists in our mapping, use it
    if (customIcon && iconMapping[customIcon]) {
      return iconMapping[customIcon];
    }

    // Default icons for each type
    const defaultIcons = {
      accommodation: BedDouble,
      meals: Utensils,
      activities: Map
    };

    return defaultIcons[defaultType] || ImageIcon;
  };

  return (
    <section id="itinerary" className="relative py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif">
          {trip.subtitle || 'Explore your journey day by day'}
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Vertical Timeline Line - Desktop Only */}
          <div className="absolute left-1/2 h-full w-px border-l-2 border-dotted border-hermes-teal hidden md:block" />

          {/* Days */}
          {trip.itinerary.map((day, index) => (
            <div key={index}>
              {/* Desktop Layout */}
              <div className={`relative hidden md:flex mb-24 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-hermes-teal rounded-full" />

                {/* Content Container */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <p className="text-gray-500 mb-2">DAY {day.day}</p>
                  {day.date && (
                    <p className="text-gray-400 text-sm mb-2">{new Date(day.date + 'T12:00:00').toLocaleDateString()}</p>
                  )}
                  <h3 className="text-2xl font-serif mb-4">{day.title}</h3>

                  <div className="prose">
                    <p className={expandedDay === index ? '' : 'line-clamp-3'}>
                      {day.description}
                    </p>
                    {day.description.length > 150 && (
                      <button
                        onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                        className="text-hermes-red hover:text-hermes-red-dark"
                      >
                        {expandedDay === index ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </div>

                  {/* Details Section */}
                  <div className="mt-4 space-y-2">
                    {/* Accommodation with optional link */}
                    {day.accommodation && (
                      <div className="flex items-center gap-2 text-gray-500">
                        {React.createElement(getIcon(day.iconIndex?.accommodation, 'accommodation'), { className: "w-5 h-5" })}
                        {day.accommodationUrl ? (
                          <a
                            href={day.accommodationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-hermes-red"
                          >
                            <span>{day.accommodation}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <span>{day.accommodation}</span>
                        )}
                      </div>
                    )}
                    {/* Meals with optional links */}
                    {day.meals?.length > 0 && (
                      <div className="flex items-center gap-2 text-gray-500">
                        {React.createElement(getIcon(day.iconIndex?.meals, 'meals'), { className: "w-5 h-5" })}
                        <span>
                          {day.meals.map((meal, mealIndex) => {
                            const mealUrl = day.mealUrls?.[mealIndex];

                            return (
                              <React.Fragment key={mealIndex}>
                                {mealIndex > 0 && ', '}
                                {mealUrl ? (
                                  <a
                                    href={mealUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 hover:text-hermes-red"
                                  >
                                    {meal}
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : (
                                  meal
                                )}
                              </React.Fragment>
                            );
                          })}
                        </span>
                      </div>
                    )}
                    {/* Activities with optional links */}
                    {day.activities?.length > 0 && (
                      <div className="flex items-center gap-2 text-gray-500">
                        {React.createElement(getIcon(day.iconIndex?.activities, 'activities'), { className: "w-5 h-5" })}
                        <span>
                          {day.activities.map((activity, actIndex) => {
                            // Check if this activity has a corresponding URL
                            const activityUrl = day.activityUrls?.[actIndex];

                            return (
                              <React.Fragment key={actIndex}>
                                {actIndex > 0 && ', '}
                                {activityUrl ? (
                                  <a
                                    href={activityUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 hover:text-hermes-red"
                                  >
                                    {activity}
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : (
                                  activity
                                )}
                              </React.Fragment>
                            );
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Container */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                  {day.images ? (
                    day.images.length === 1 ? (
                      // Single image from images array - use same layout as day.image
                      <div
                        className="cursor-pointer"
                        onClick={() => setSelectedImage(day.images[0])}
                      >
                        <img
                          src={day.images[0]}
                          alt={day.imageAlt || day.title}
                          className="rounded-lg w-full h-64 object-cover"
                        />
                        {day.imageAlt && (
                          <p className="text-sm text-gray-500 mt-2">{day.imageAlt}</p>
                        )}
                      </div>
                    ) : (
                      // Multiple images - use grid layout
                      <div className="grid grid-cols-2 gap-2">
                        {day.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="aspect-square cursor-pointer overflow-hidden rounded-lg"
                            onClick={() => setSelectedImage(image)}
                          >
                            <img
                              src={image}
                              alt={`${day.title} - ${imgIndex + 1}`}
                              className="h-full w-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    )
                  ) : day.image && (
                    // Single image from day.image
                    <div
                      className="cursor-pointer"
                      onClick={() => setSelectedImage(day.image)}
                    >
                      <img
                        src={day.image}
                        alt={day.imageAlt || day.title}
                        className="rounded-lg w-full h-64 object-cover"
                      />
                      {day.imageAlt && (
                        <p className="text-sm text-gray-500 mt-2">{day.imageAlt}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden relative pb-12 mb-12">
                {/* Horizontal Timeline */}
                <div className="relative h-12 mb-4">
                  <div className="absolute top-1/2 left-0 right-0 h-px border-t-2 border-dotted border-hermes-teal" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-hermes-teal rounded-full" />
                </div>

                {/* Content */}
                <div>
                  <div className="text-center mb-6">
                    <p className="text-gray-500 mb-1">DAY {day.day}</p>
                    {day.date && (
                      <p className="text-gray-400 text-sm mb-1">{new Date(day.date + 'T12:00:00').toLocaleDateString()}</p>
                    )}
                    <h3 className="text-2xl font-serif">{day.title}</h3>
                  </div>

                  {/* Image Container */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'} h-64`}>
                    {day.images ? (
                      <div className="grid grid-cols-2 gap-2 h-full">
                        {day.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative w-full h-full cursor-pointer overflow-hidden rounded-lg"
                            onClick={() => setSelectedImage(image)}
                          >
                            <img
                              src={image}
                              alt={`${day.title} - ${imgIndex + 1}`}
                              className="absolute inset-0 h-full w-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    ) : day.image && (
                      <div
                        className="relative w-full h-full cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => setSelectedImage(day.image)}
                      >
                        <img
                          src={day.image}
                          alt={day.imageAlt || day.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform hover:scale-105"
                        />
                        {day.imageAlt && (
                          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
                            {day.imageAlt}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Mobile Layout Image Section */}
                  {day.images ? (
                    <div className="grid grid-cols-2 gap-2 h-48 mb-6">
                      {day.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative w-full h-full cursor-pointer overflow-hidden rounded-lg"
                          onClick={() => setSelectedImage(image)}
                        >
                          <img
                            src={image}
                            alt={`${day.title} - ${imgIndex + 1}`}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ) : day.image && (
                    <div className="relative h-48 mb-6">
                      <div
                        className="relative w-full h-full cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => setSelectedImage(day.image)}
                      >
                        <img
                          src={day.image}
                          alt={day.imageAlt || day.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        {day.imageAlt && (
                          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
                            {day.imageAlt}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Description and Details */}
                  <div>
                    <div className="prose">
                      <p className={expandedDay === index ? '' : 'line-clamp-3'}>
                        {day.description}
                      </p>
                      {day.description.length > 150 && (
                        <button
                          onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                          className="text-hermes-red hover:text-hermes-red-dark"
                        >
                          {expandedDay === index ? 'Read less' : 'Read more'}
                        </button>
                      )}
                    </div>

                    {/* Details Section */}
                    <div className="mt-4 space-y-2">
                      {/* Accommodation with optional link */}
                      {day.accommodation && (
                        <div className="flex items-center gap-2 text-gray-500">
                          {React.createElement(getIcon(day.iconIndex?.accommodation, 'accommodation'), { className: "w-5 h-5" })}
                          {day.accommodationUrl ? (
                            <a
                              href={day.accommodationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 hover:text-hermes-red"
                            >
                              <span>{day.accommodation}</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : (
                            <span>{day.accommodation}</span>
                          )}
                        </div>
                      )}

                      {/* Meals with optional links */}
                      {day.meals?.length > 0 && (
                        <div className="flex items-center gap-2 text-gray-500">
                          {React.createElement(getIcon(day.iconIndex?.meals, 'meals'), { className: "w-5 h-5" })}
                          <span>
                            {day.meals.map((meal, mealIndex) => {
                              const mealUrl = day.mealUrls?.[mealIndex];

                              return (
                                <React.Fragment key={mealIndex}>
                                  {mealIndex > 0 && ', '}
                                  {mealUrl ? (
                                    <a
                                      href={mealUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 hover:text-hermes-red"
                                    >
                                      {meal}
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  ) : (
                                    meal
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </span>
                        </div>
                      )}

                      {/* Activities with optional links */}
                      {day.activities?.length > 0 && (
                        <div className="flex items-center gap-2 text-gray-500">
                          {React.createElement(getIcon(day.iconIndex?.activities, 'activities'), { className: "w-5 h-5" })}
                          <span>
                            {day.activities.map((activity, actIndex) => {
                              // Check if this activity has a corresponding URL
                              const activityUrl = day.activityUrls?.[actIndex];

                              return (
                                <React.Fragment key={actIndex}>
                                  {actIndex > 0 && ', '}
                                  {activityUrl ? (
                                    <a
                                      href={activityUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 hover:text-hermes-red"
                                    >
                                      {activity}
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  ) : (
                                    activity
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <ImageIcon className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}