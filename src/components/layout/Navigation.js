import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { trips } from '../../data/trips';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentTripId = location.pathname.slice(1);
  const currentTrip = trips.find(trip => trip.id === currentTripId);
  
  const isHomePage = location.pathname === '/';

  const navLinks = currentTrip 
    ? [
        { name: 'Overview', href: '#overview' },
        { name: 'Itinerary', href: '#itinerary' },
        { name: 'Info', href: '#info' },
      ]
    : [
        // { name: 'Destinations', href: '#destinations' },
        // { name: 'Interests', href: '#interests' },
        // { name: 'About', href: '#about' },
        // { name: 'Contact', href: '#contact' },
      ];

  return (
    <div className="fixed bottom-0 z-20 w-full bg-white/50 shadow-[4px_0_4px_4px_rgba(64,64,64,0.03)] backdrop-blur md:sticky md:bottom-auto md:top-0">
      <div className="container mx-auto flex h-20 px-4 md:justify-between">
        {/* Logo/Home Link */}
        <Link to="/" className="flex items-center">
        {currentTrip ? (
            <span className="font-serif text-xl">← ‎‎ ‎ Back to all trips</span>
          ) : (
            <span className="font-serif text-xl">Trips</span>
          )}
          
        </Link>

        {/* Mobile menu button */}
        {/* <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X /> : <MenuIcon />}
        </button> */}

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex w-full items-center justify-between md:w-auto md:justify-start md:gap-4">
          {currentTrip ? (
            <>
              {/* <div>
                <span className="block sm:inline">From</span>{' '}
                <span className="font-bold">${currentTrip.price.amount.toLocaleString()}</span>{' '}
                <span>{currentTrip.price.currency}</span>
              </div> */}

              {/* <div className="flex items-center gap-4">
                <button className="bg-hermes-red text-white px-6 py-2 rounded-lg hover:bg-hermes-red-dark">
                  See dates
                </button>
                <button className="border border-hermes-red text-hermes-red px-6 py-2 rounded-lg hover:bg-hermes-cream">
                  Contact us
                </button>
              </div> */}
            </>
          ) : (
            <div className="flex items-center gap-4">
              {/* <button className="bg-hermes-red text-white px-6 py-2 rounded-lg hover:bg-hermes-red-dark">
                Plan your trip
              </button> */}
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}