import { Link } from 'react-router-dom';
import { trips } from '../../data/trips';
import { hasProperty, getProperty } from '../../utils/data-helpers';

const TripGrid = () => {
  return (
    <div className="min-h-screen bg-white trip-grid">
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {trips.map((trip) => (
            <Link
              key={trip.id}
              to={`/${trip.id}`}
              className="group block overflow-hidden rounded hover:shadow-sm transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                {hasProperty(trip, 'heroImage') && (
                  <img
                    src={trip.heroImage}
                    alt={trip.title}
                    className="h-full w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              
              <div className="p-3">
                <div className="flex flex-col gap-0.5 mb-1.5">
                  <span className="text-[11px] font-medium tracking-wider uppercase text-gray-600">
                    {trip.destination}
                    {hasProperty(trip, 'dates.0.startDate') && (
                      <> - {trip.dates[0].startDate.split('-')[0]}</>
                    )}
                  </span>
                  {hasProperty(trip, 'duration') && (
                    <span className="text-[11px] tracking-wider uppercase text-gray-500">
                      {trip.duration.days} Days, {trip.duration.nights} Nights
                    </span>
                  )}
                </div>
                
                <h2 className="text-sm font-medium leading-snug mb-2 line-clamp-2">
                  {trip.title}
                </h2>
                
                <div className="text-xs font-medium text-hermes-red group-hover:text-hermes-red-dark">
                  View trip →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripGrid;