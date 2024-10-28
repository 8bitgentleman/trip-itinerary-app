import { useState } from 'react';
import { BedDouble, Utensils } from 'lucide-react';

export default function TripItinerary({ trip }) {
  const [expandedDay, setExpandedDay] = useState(null);

  return (
    <section id="itinerary" className="relative py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif">
          Explore pyramids, tombs, and local cuisine<br />
          with your Egyptologist guide.
        </h2>
      </div>

      <div className="container mx-auto px-4">
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Dotted Line - Only visible on desktop */}
          <div className="absolute left-1/2 h-full w-px border-l-2 border-dotted border-hermes-teal hidden md:block" />

          {/* Days */}
          {trip.itinerary.map((day, index) => (
            <div key={index}>
              {/* Desktop Layout */}
              <div className={`relative hidden md:flex mb-24 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Desktop Dot on Timeline */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-hermes-teal rounded-full" />
                
                {/* Content Container */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <p className="text-gray-500 mb-2">DAY {day.day}</p>
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

                  {/* Accommodation and Meals */}
                  <div className="mt-4 space-y-2">
                    {day.accommodation && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <BedDouble className="w-5 h-5" />
                        <span>{day.accommodation}</span>
                      </div>
                    )}
                    {day.meals?.length > 0 && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <Utensils className="w-5 h-5" />
                        <span>{day.meals.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Container */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                  <img
                    src={day.image || 'https://placehold.co/600x400'}
                    alt={day.imageAlt}
                    className="rounded-lg w-full h-64 object-cover"
                  />
                  <p className="text-sm text-gray-500 mt-2">{day.imageAlt}</p>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden relative pb-12 mb-12">
                {/* Horizontal Timeline for Mobile */}
                <div className="relative h-12 mb-4">
                  {/* Horizontal Dotted Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-px border-t-2 border-dotted border-hermes-teal" />
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-hermes-teal rounded-full" />
                </div>
                
                {/* Day Content */}
                <div>
                  <div className="text-center mb-6">
                    <p className="text-gray-500 mb-1">DAY {day.day}</p>
                    <h3 className="text-2xl font-serif">{day.title}</h3>
                  </div>

                  {/* Image */}
                  <div className="mb-6">
                    <img
                      src={day.image || 'https://placehold.co/600x400'}
                      alt={day.imageAlt}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                    <p className="text-sm text-gray-500 mt-2">{day.imageAlt}</p>
                  </div>

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

                    {/* Accommodation and Meals */}
                    <div className="mt-4 space-y-2">
                      {day.accommodation && (
                        <div className="flex items-center gap-2 text-gray-500">
                          <BedDouble className="w-5 h-5" />
                          <span>{day.accommodation}</span>
                        </div>
                      )}
                      {day.meals?.length > 0 && (
                        <div className="flex items-center gap-2 text-gray-500">
                          <Utensils className="w-5 h-5" />
                          <span>{day.meals.join(', ')}</span>
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
    </section>
  );
}