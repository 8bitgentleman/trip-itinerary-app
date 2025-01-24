import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const getRouteCoordinates = async (points, routeOverride) => {
  const coordinatesToRoute = routeOverride || points;
  const coordinates = coordinatesToRoute.map(p => p.join(',')).join(';');
  const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${coordinates}?geometries=geojson`);
  const data = await response.json();
  return data.routes[0].geometry.coordinates;
};

const TripMap = ({ trip, activeDay }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!trip?.itinerary) return;

    const locations = trip.itinerary
      .filter(day => day.location)
      .map(day => ({
        day: day.day,
        location: day.location,
        title: day.title,
        locationName: day.locationName
      }));

    if (locations.length === 0) return;

    // Calculate bounds here
    const bounds = locations.reduce((acc, loc) => ({
      minLng: Math.min(acc.minLng, loc.location[0]),
      maxLng: Math.max(acc.maxLng, loc.location[0]),
      minLat: Math.min(acc.minLat, loc.location[1]),
      maxLat: Math.max(acc.maxLat, loc.location[1])
    }), {
      minLng: Infinity,
      maxLng: -Infinity,
      minLat: Infinity,
      maxLat: -Infinity
    });

    if (!map.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
            }
          },
          layers: [{
            id: 'osm',
            type: 'raster',
            source: 'osm',
            paint: {
              'raster-opacity': 0.7,  // Reduce opacity further
              // 'raster-saturation': -1, // Maximum desaturation
              'raster-contrast': 0,    // Reduce contrast
              'raster-brightness-min': 0.5 // Lighten the map
            },
            layout: {
              'visibility': 'visible'
            },
            // minzoom: 10, // Only show at higher zoom levels
          }]
        },
        bounds: [
          [bounds.minLng - 0.5, bounds.minLat - 0.5],
          [bounds.maxLng + 0.5, bounds.maxLat + 0.5]
        ],
        fitBoundsOptions: { padding: 50 }
      });

      map.current.addControl(new maplibregl.NavigationControl());

      map.current.on('load', async () => {
        map.current.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: []
            }
          }
        });

        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#0f766e',
            'line-width': 2,
            'line-dasharray': [2, 2]
          }
        });

        try {
          const routeCoords = await getRouteCoordinates(locations.map(loc => loc.location), trip.routeOverride);
          map.current.getSource('route').setData({
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: routeCoords
            }
          });
        } catch (error) {
          console.error('Error fetching route:', error);
        }
      });
    }

    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    locations.forEach((loc) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = loc.day === activeDay ? '#0f766e' : '#64748b';
      el.style.border = '2px solid white';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';

      const popup = new maplibregl.Popup({ offset: 25 })
        .setHTML(`<h3 class="font-bold">${loc.locationName}</h3><p>${loc.title}</p>`);

      const marker = new maplibregl.Marker(el)
        .setLngLat(loc.location)
        .setPopup(popup)
        .addTo(map.current);

      markersRef.current.push(marker);

      if (loc.day === activeDay) {
        marker.togglePopup();
        map.current.easeTo({
          center: loc.location,
          zoom: 12
        });
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [trip, activeDay]);

  return (
    <div ref={mapContainer} className="w-full h-96 bg-gray-100 rounded-lg shadow-lg" />
  );
};

export default TripMap;