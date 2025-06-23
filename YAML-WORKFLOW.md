# YAML Workflow for Trip Data

Your trip data has been successfully converted from JSON to individual YAML files! 🎉

## New File Structure

```
src/data/trips/
├── egypt-2027.yaml
├── france-rockclimbing-2024.yaml
├── italy-rome-2024.yaml
├── montreal-eclipse-2024.yaml
├── new-zealand-adventure-2023.yaml
├── puerto-rico-2025.yaml
└── seattle-vancouver-2024.yaml
```

## How It Works

1. **Individual YAML files** - Each trip is now a separate, human-readable YAML file
2. **Build script** - `scripts/build-trips.js` automatically converts all YAML files to `src/data/trips.js`
3. **Your app code stays the same** - Still imports `{ trips }` from `./data/trips`

## Workflow

### Adding a New Trip
1. Create a new YAML file: `src/data/trips/my-new-trip-2025.yaml`
2. Use the same structure as existing files
3. Run `npm run build:trips` or just `npm start` (it runs automatically)

### Editing Existing Trips
1. Open any YAML file in `src/data/trips/`
2. Edit in your favorite text editor
3. Run `npm run build:trips` or `npm start`

### YAML Format Benefits
- **Much more readable** than JSON
- **Comments supported** - add `# Notes about this trip`
- **Multi-line strings** - use `>` for descriptions
- **No more escaping quotes** or trailing commas
- **Easy to find and edit** specific trips

## Commands

- `npm run build:trips` - Convert YAML files to trips.js
- `npm start` - Auto-builds trips + starts dev server
- `npm run build` - Auto-builds trips + builds for production

## Example

```yaml
id: my-trip-2025
title: Amazing Adventure
subtitle: A wonderful journey through beautiful places
destination: New Zealand

# This is a comment - you can add notes!
duration:
  days: 7
  nights: 6

highlights:
  - Saw amazing mountains
  - Met friendly locals
  - Ate incredible food

# Multi-line descriptions are easy:
itinerary:
  - day: 1
    title: Arrival Day
    description: >
      Landed at the airport and took a shuttle to the hotel.
      The weather was perfect and we were excited to start
      our adventure!
```

## Important Notes

- **Never edit `src/data/trips.js` directly** - it's auto-generated
- The build script validates required fields (`id`, `title`)
- YAML files are processed in alphabetical order
- All existing functionality is preserved

Enjoy your much easier trip editing experience! ✈️