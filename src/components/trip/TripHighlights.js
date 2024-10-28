export default function TripHighlights({ trip }) {
  return (
    <section className="bg-hermes-cream rounded-2xl p-8 my-16 mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Trip Highlights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the best of {trip.destination} with these carefully curated highlights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trip.highlights.map((highlight, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="mt-1 h-8 w-8 flex-shrink-0 rounded-full bg-hermes-teal flex items-center justify-center text-white">
                {index + 1}
              </div>
              <span className="text-lg font-medium text-gray-900">{highlight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
