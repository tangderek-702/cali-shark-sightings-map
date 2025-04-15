
import React, { useState, useEffect } from 'react';
import SharkMap from '@/components/SharkMap';
import SharkFilters from '@/components/SharkFilters';
import SharkStats from '@/components/SharkStats';
import { 
  processedSharkIncidents, 
  filterIncidents, 
  getYearRange 
} from '@/utils/sharkData';
import { FilterState, SharkIncident } from '@/types';

const Index = () => {
  const yearRange = getYearRange();
  
  const [filters, setFilters] = useState<FilterState>({
    years: yearRange,
    counties: [],
    injuries: [],
    species: [],
    activities: []
  });
  
  const [filteredIncidents, setFilteredIncidents] = useState<SharkIncident[]>(processedSharkIncidents);
  
  useEffect(() => {
    const filtered = filterIncidents(processedSharkIncidents, filters);
    setFilteredIncidents(filtered);
  }, [filters]);
  
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-6 px-4 mb-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">California Shark Incidents Map</h1>
          <p className="mt-2 text-blue-100">
            Interactive visualization of documented shark incidents from 1950-2025
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="mb-6">
          <SharkFilters filters={filters} setFilters={setFilters} />
        </div>
        
        {/* Stats */}
        <div className="mb-6">
          <SharkStats incidents={filteredIncidents} />
        </div>
        
        {/* Map */}
        <div className="mb-6">
          <SharkMap incidents={filteredIncidents} />
        </div>
        
        {/* Data Source */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Data source: California Department of Fish and Wildlife</p>
          <p>Showing {filteredIncidents.length} of {processedSharkIncidents.length} total incidents</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
