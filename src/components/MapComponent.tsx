'use client';

import { APIProvider, ControlPosition, Map, MapCameraProps, MapControl,MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import supabase from '@/lib/supabaseClient';
import { useTheme } from '@/providers/ThemeProvider';
import { useCallback, useState } from 'react';

// Center point on Serbia
const defaultCenter = {
  lat: 44.0165, // Center of Serbia
  lng: 21.0059
};

// Serbia bounds (approximate)
const serbiaBounds = {
  north: 46.19, // Northernmost point
  south: 41.85, // Southernmost point
  west: 18.82,  // Westernmost point
  east: 23.01   // Easternmost point
};

const INITIAL_CAMERA: MapCameraProps = {
  center: defaultCenter,
  zoom: 7.7,
}

export function MapComponent() {
  const { resolvedTheme } = useTheme();
  const [cameraProps, setCameraProps] = useState<MapCameraProps>(INITIAL_CAMERA);

  const handleCameraChange = useCallback((event: MapCameraChangedEvent) => {
    setCameraProps(event.detail);
  }, []);
  
  // If we're still loading locations or there are no approved locations yet, 
  // show a loading indicator or use the test locations
  const locationsToShow =  [
        {
          id: 'test-1',
          name: 'Belgrade, Serbia',
          google_maps_link: 'https://maps.google.com',
          event_url: 'https://example.com',
          latitude: 44.787197,
          longitude: 20.457273
        },
        {
          id: 'test-2',
          name: 'Novi Sad, Serbia',
          google_maps_link: 'https://maps.google.com',
          event_url: 'https://example.com',
          latitude: 45.2671,
          longitude: 19.8335
        },
        {
          id: 'test-3',
          name: 'Niš, Serbia',
          google_maps_link: 'https://maps.google.com',
          event_url: 'https://example.com',
          latitude: 43.3209,
          longitude: 21.8958
        }
      ];

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <Map 
        {...cameraProps}
        mapId="63220e5542135d25"
        gestureHandling="greedy"
        disableDefaultUI={true}
        defaultBounds={serbiaBounds}
        colorScheme={resolvedTheme === 'dark' ? 'DARK' : 'LIGHT'}
        onCameraChanged={handleCameraChange}
      />
    </APIProvider>
  );
} 