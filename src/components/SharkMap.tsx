
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { SharkIncident } from '@/types';
import { processedSharkIncidents } from '@/utils/sharkData';

// Define injury color mapping
const injuryColors: Record<string, string> = {
  'none': '#3b82f6', // Blue
  'minor': '#f59e0b', // Amber
  'major': '#ef4444', // Red
  'fatal': '#000000', // Black
};

interface SharkMapProps {
  incidents: SharkIncident[];
}

const SharkMap: React.FC<SharkMapProps> = ({ incidents }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const mapMarkers = useRef<mapboxgl.Marker[]>([]);
  
  const MAPBOX_TOKEN = 'pk.eyJ1IjoidGFuZ2RlcmVrIiwiYSI6ImNtOWowNnU3cjA3eHgyaXB5eXNlYXA3YmkifQ.ghj0wIrJnSLBkdee7IuioQ';

  const clearMarkers = () => {
    if (mapMarkers.current) {
      mapMarkers.current.forEach(marker => marker.remove());
      mapMarkers.current = [];
    }
  };

  const addMarkers = () => {
    if (!map.current) return;
    
    clearMarkers();
    
    incidents.forEach(incident => {
      if (incident.lat && incident.lng) {
        // Create custom marker element
        const el = document.createElement('div');
        el.className = 'shark-marker';
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.borderRadius = '50%';
        el.style.background = injuryColors[incident.injury] || '#3b82f6';
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
        
        // Create popup with incident info
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-2">
            <h3 class="font-semibold text-sm">${incident.location}</h3>
            <p class="text-xs text-gray-700">${incident.date}</p>
            <p class="text-xs"><strong>Species:</strong> ${incident.species}</p>
            <p class="text-xs"><strong>Activity:</strong> ${incident.activity}</p>
            <p class="text-xs"><strong>Injury:</strong> ${incident.injury}</p>
          </div>
        `);
        
        // Create and add marker
        const marker = new mapboxgl.Marker(el)
          .setLngLat([incident.lng, incident.lat])
          .setPopup(popup)
          .addTo(map.current);
        
        mapMarkers.current.push(marker);
      }
    });
  };

  // Initialize map 
  useEffect(() => {
    if (!mapContainer.current) return;
    
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [-119.6982, 36.7783], // Center of California
      zoom: 5.5,
    });
    
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.current.addControl(new mapboxgl.FullscreenControl());
    
    map.current.on('load', () => {
      addMarkers();
    });
    
    return () => {
      clearMarkers();
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);
  
  // Update markers when incidents change
  useEffect(() => {
    if (map.current) {
      addMarkers();
    }
  }, [incidents]);
  
  return (
    <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg z-10">
        <h3 className="font-semibold mb-2 text-sm">Injury Severity</h3>
        <div className="space-y-2">
          {Object.entries(injuryColors).map(([injury, color]) => (
            <div key={injury} className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-2" 
                style={{ backgroundColor: color }}
              />
              <span className="text-xs capitalize">{injury}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharkMap;
