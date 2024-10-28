import { Globe, Sun, Moon, Users, Activity, Building } from 'lucide-react';
import { hasProperty } from '../../utils/data-helpers';

export default function TripOverview({ trip }) {
  return (
    <section id="overview" className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Left Column - Main Content */}
      <div className="lg:col-span-2">
        <h2 className="text-gray-500 uppercase tracking-wide mb-4">OVERVIEW</h2>
        <h1 className="text-4xl font-serif mb-8">{trip.title}</h1>

        {/* Trip Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {hasProperty(trip, 'destination') && (
            <div className="flex items-start gap-3">
              <Globe className="w-6 h-6 text-gray-400" />
              <div>
                <p className="text-gray-500 text-sm">CONTINENT</p>
                <p>{trip.destination}</p>
              </div>
            </div>
          )}
          
          {hasProperty(trip, 'duration.days') && (
            <div className="flex items-start gap-3">
              <Sun className="w-6 h-6 text-gray-400" />
              <div>
                <p className="text-gray-500 text-sm">DAYS</p>
                <p>{trip.duration.days} days</p>
              </div>
            </div>
          )}

          {hasProperty(trip, 'duration.nights') && (
            <div className="flex items-start gap-3">
              <Moon className="w-6 h-6 text-gray-400" />
              <div>
                <p className="text-gray-500 text-sm">NIGHTS</p>
                <p>{trip.duration.nights} nights</p>
              </div>
            </div>
          )}

          {hasProperty(trip, 'groupSize') && (
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-gray-400" />
              <div>
                <p className="text-gray-500 text-sm">GROUP SIZE</p>
                <p>{trip.groupSize} people</p>
              </div>
            </div>
          )}

          {hasProperty(trip, 'activity') && (
            <div className="flex items-start gap-3">
              <Activity className="w-6 h-6 text-gray-400" />
              <div>
                <p className="text-gray-500 text-sm">ACTIVITY</p>
                <p>{trip.activity}</p>
              </div>
            </div>
          )}

          {hasProperty(trip, 'interest') && (
            <div className="flex items-start gap-3">
              <Building className="w-6 h-6 text-gray-400" />
              <div>
                <p className="text-gray-500 text-sm">INTEREST</p>
                <p>{trip.interest.join(', ')}</p>
              </div>
            </div>
          )}
        </div>

        {hasProperty(trip, 'description') && (
          <div className="text-gray-600 space-y-4">
            <p>{trip.description}</p>
          </div>
        )}
      </div>

      {/* Right Column - Highlights Box */}
      {hasProperty(trip, 'highlights') && trip.highlights.length > 0 && (
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl mb-6">Highlights</h2>
          <ul className="space-y-4">
            {trip.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-hermes-teal" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}