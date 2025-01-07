import { Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="border-t border-gray-800 mt-12 pt-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://github.com/8bitgentleman/trip-itinerary-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
            <span>Check out the code on GitHub</span>
          </a>
          <div className="text-gray-400">
            © {currentYear} Matt Vogel. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}