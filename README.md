# Trip Itinerary App

A React-based web application for displaying and sharing travel itineraries with interactive maps, photo galleries, and detailed day-by-day breakdowns. Built with React, Tailwind CSS, and hosted on Netlify.

## Features

- 📍 Interactive trip maps showing travel routes and key locations
- 📅 Day-by-day itinerary breakdowns
- 🖼️ Photo galleries with metadata cleaning
- 💰 Trip cost breakdowns and budgeting
- 📱 Responsive design for mobile and desktop viewing
- 🌙 Dark mode support

## Tech Stack

- React
- Tailwind CSS
- React Router
- Lucide React (for icons)
- React Simple Maps
- React Helmet (for SEO)

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/8bitgentleman/trip-itinerary-app.git
cd trip-itinerary-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Photo Management

The project includes a Python script (`clean_metadata.py`) for cleaning EXIF data from photos before they're added to the site. To use it:

1. Place new photos in the `public/photos` directory
2. Run the script:
```bash
python clean_metadata.py
```

## Deployment

The site is configured for deployment on Netlify with continuous deployment from the main branch. The `netlify.toml` file includes the necessary build settings and redirects for the React router.

## Project Structure

```
trip-itinerary-app/
├── public/
│   └── photos/         # Trip photos (with cleaned metadata)
├── src/
│   ├── components/     # React components
│   │   ├── layout/     # Layout components (header, footer, etc.)
│   │   └── trip/       # Trip-specific components
│   ├── data/          # Trip data and configuration
│   ├── styles/        # CSS and Tailwind styles
│   └── utils/         # Helper functions and utilities
└── clean_metadata.py  # Photo metadata cleaning script
```

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements or find any bugs.

## Contact

Created by [Matt Vogel](https://github.com/8bitgentleman) based on the [Atlas Obscura](https://www.atlasobscura.com/adventures/trips) trips site.