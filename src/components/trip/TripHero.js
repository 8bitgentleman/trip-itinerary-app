export default function TripHero({ trip }) {
  return (
    <div className="relative h-screen-safe">
      <div className="absolute h-full w-full bg-gray-800">
        <img
          src="https://placehold.co/1920x1080"
          alt={trip.title}
          className="h-full w-full object-cover object-center opacity-90"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/40 to-black/40" />
      </div>
      
      <div className="absolute top-0 flex h-full min-h-[600px] w-full flex-col justify-between">
        <div className="relative grow bg-transparent">
          <div className="absolute flex h-full w-full flex-col items-center justify-center pt-28 pb-44 md:pb-56">
            <div className="flex w-full grow flex-col items-center justify-end px-4 text-white sm:px-6 lg:px-8">
              <div className="mb-4 flex w-full items-center justify-center text-center">
                {trip.destination} <span className="text-hermes-teal mx-4">•</span> {trip.interest.join(', ')}
              </div>
              
              <div className="mb-4 max-w-full sm:max-w-[600px] md:max-w-[800px]">
                <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
                  {trip.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
