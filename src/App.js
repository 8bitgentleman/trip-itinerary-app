import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import TripGrid from './components/trip/TripGrid';
import TripHero from './components/trip/TripHero';
import TripOverview from './components/trip/TripOverview';
import TripItinerary from './components/trip/TripItinerary';
import TripGallery from './components/trip/TripGallery';
import TripInfo from './components/trip/TripInfo';
import TripHighlights from './components/trip/TripHighlights';
import TripAdditionalInfo from './components/trip/TripAdditionalInfo';
import { trips } from './data/trips';

const TripPage = () => {
  const { tripId } = useParams();
  const trip = trips.find(t => t.id === tripId);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Trip Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find the trip you're looking for.</p>
          <a href="/" className="text-hermes-red hover:text-hermes-red-dark">
            ← Back to all trips
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <TripHero trip={trip} />
      <TripOverview trip={trip} />
      <TripHighlights trip={trip} />
      <TripItinerary trip={trip} />
      <TripGallery trip={trip} />
      <TripInfo trip={trip} />
      <TripAdditionalInfo trip={trip} />
    </>
  );
};

export default function App() {
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