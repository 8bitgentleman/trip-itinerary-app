import Navigation from './components/layout/Navigation';
import TripOverview from './components/trip/TripOverview';
import TripItinerary from './components/trip/TripItinerary';
import TripInfo from './components/trip/TripInfo';
import Footer from './components/layout/Footer';
import { trips } from './data/trips';
import TripAdditionalInfo from './components/trip/TripAdditionalInfo'

export default function App() {
  // For demo purposes, we're using the first trip
  const trip = trips[0];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <TripOverview trip={trip} />
        <TripItinerary trip={trip} />
        <TripInfo trip={trip} />
        <TripAdditionalInfo trip={trip} />
      </main>
      <Footer />
    </div>
  );
}