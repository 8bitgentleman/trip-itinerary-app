import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import TripGrid from './components/trip/TripGrid';
import TripOverview from './components/trip/TripOverview';
import TripItinerary from './components/trip/TripItinerary';
import TripGallery from './components/trip/TripGallery';
import TripInfo from './components/trip/TripInfo';
import TripAdditionalInfo from './components/trip/TripAdditionalInfo';
import { trips } from './data/trips';

const TripPage = () => {
  const { tripId } = useParams();
  const trip = trips.find(t => t.id === tripId);
  const baseUrl = 'https://trips.treasurechest.design';

  if (!trip) {
    return (
      <>
        <Helmet>
          <title>Trip Not Found | My Travel</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Trip Not Found</h1>
            <p className="text-gray-600 mb-8">We couldn't find the trip you're looking for.</p>
            <a href="/" className="text-hermes-red hover:text-hermes-red-dark">
              ← Back to all trips
            </a>
          </div>
        </div>
      </>
    );
  }

  const imageUrl = trip.heroImage.startsWith('http') 
    ? trip.heroImage 
    : `${baseUrl}${trip.heroImage}`;

  return (
    <>
      <Helmet>
        <title>{trip.title}</title>
        <link rel="canonical" href={`${baseUrl}/${trip.id}`} />
        <meta name="title" content={trip.title} Trip/>
        <meta name="description" content={trip.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/${trip.id}`} />
        <meta property="og:title" content={trip.title} />
        <meta property="og:description" content={trip.subtitle} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={trip.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${baseUrl}/${trip.id}`} />
        <meta name="twitter:title" content={trip.title} />
        <meta name="twitter:description" content={trip.subtitle} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="description" content={trip.subtitle} />
        <title>{trip.title} Trip</title>
      </Helmet>
      <div>
        <TripOverview trip={trip} />
        <TripItinerary trip={trip} />
        <TripGallery trip={trip} />
        <TripInfo trip={trip} />
        <TripAdditionalInfo trip={trip} />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<TripGrid />} />
            <Route path="/:tripId" element={<TripPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;