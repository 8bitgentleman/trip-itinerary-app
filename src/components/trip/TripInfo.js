import { hasProperty } from '../../utils/data-helpers';

export default function TripInfo({ trip }) {
  const hasIncluded = hasProperty(trip, 'included') && trip.included.length > 0;
  const hasNotIncluded = hasProperty(trip, 'notIncluded') && trip.notIncluded.length > 0;
  const hasHighlights = hasProperty(trip, 'highlights') && trip.highlights.length > 0;

  if (!hasIncluded && !hasNotIncluded && !hasHighlights) {
    return null;
  }

  return (
    <section className="section from-hermes-cream bg-gradient-to-b to-white py-16 sm:py-20">
      <div className="container mx-auto px-4 md:flex lg:gap-5">
        {hasIncluded && (
          <div className="p-4 md:basis-1/2 lg:basis-3/5 lg:p-8">
            <h2 className="text-2xl font-semibold pb-6 lg:pb-8">
              What is included?
            </h2>
            <hr className="mb-6" />
            <ul className="space-y-4">
              {trip.included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-hermes-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasNotIncluded && (
          <div className="p-4 md:basis-1/2 lg:basis-2/5 lg:p-8">
            <h2 className="text-2xl font-semibold pb-6 lg:pb-8">
              What is <span className="italic">not</span> included?
            </h2>
            <hr className="mb-6" />
            <ul className="space-y-4">
              {trip.notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gray-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {hasHighlights && (
        <div className="mt-16 bg-hermes-cream rounded-2xl p-6 sm:p-10 lg:mt-8 lg:w-4/5 lg:mx-auto">
          <h3 className="text-xl font-semibold mb-8 text-center text-gray-900">
            Highlights
          </h3>
          <ul className="space-y-4">
            {trip.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-hermes-teal" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}