# Trip Itinerary App

A React-based web application for creating and displaying trip itineraries with an elegant, modern interface. Built with React 18, React Router, and styled using Tailwind CSS.

## Features

- Interactive trip grid display
- Detailed trip pages with:
  - Trip overview
  - Detailed itinerary
  - Trip information
  - Additional trip details
- Responsive navigation
- Mobile-friendly design

## Tech Stack

- React 18.3.1
- React Router 6.27.0
- Tailwind CSS 3.4.14
- HeadlessUI for UI components
- Lucide React for icons
- React Simple Maps for map visualizations

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd trip-itinerary-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
trip-itinerary-app/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/      # Layout components (Navigation, Footer)
│   │   └── trip/        # Trip-related components
│   ├── data/           # Trip data and configurations
│   ├── styles/         # CSS and styling files
│   ├── utils/          # Utility functions
│   └── App.js          # Main application component
├── package.json
└── tailwind.config.js  # Tailwind CSS configuration
```

## Deployment

The application can be deployed to platforms like Netlify or Vercel. For Netlify deployments, make sure to:

1. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

2. Set environment variables if needed

## Development

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
