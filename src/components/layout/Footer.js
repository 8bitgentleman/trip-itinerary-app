export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p>Questions about our trips?</p>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gray-700" />
              <span>+1 833-919-9154</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li>Africa</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Middle East</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Interests</h3>
            <ul className="space-y-2">
              <li>Family Trip</li>
              <li>Food & Drink</li>
              <li>History & Culture</li>
              <li>Wildlife & Nature</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>FAQ</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          © 2024 Trip Itinerary. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
