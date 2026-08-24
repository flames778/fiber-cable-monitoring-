"use client";

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // initialize map only once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: [8.6753, 9.0820], // Center of Nigeria
      zoom: 5.5,
      pitch: 0,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Placeholder for infrastructure layers
      console.log('Map loaded successfully');
    });

  }, []);

  return (
    <div className="flex-1 relative flex flex-col md:flex-row">
      <div className="absolute inset-0 z-0">
        <div ref={mapContainer} className="w-full h-full" />
      </div>
      
      {/* Overlay Panel */}
      <div className="relative z-10 w-full md:w-80 bg-[#111111]/90 backdrop-blur-md border-r border-gray-800 p-4 h-full flex flex-col">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Map Layers</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xs text-gray-500 mb-2">INFRASTRUCTURE</h3>
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500" defaultChecked />
              <span>Cell Towers</span>
            </label>
            <label className="flex items-center space-x-2 text-sm mt-2">
              <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500" defaultChecked />
              <span>Fiber Routes</span>
            </label>
            <label className="flex items-center space-x-2 text-sm mt-2">
              <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500" defaultChecked />
              <span>Switches & Routers</span>
            </label>
          </div>
          
          <div>
            <h3 className="text-xs text-gray-500 mb-2">NETWORK</h3>
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-purple-500 focus:ring-purple-500" defaultChecked />
              <span>Active Incidents</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
