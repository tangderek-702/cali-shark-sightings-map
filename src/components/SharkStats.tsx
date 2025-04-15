
import React, { useMemo } from 'react';
import { SharkIncident } from '@/types';

interface SharkStatsProps {
  incidents: SharkIncident[];
}

const SharkStats: React.FC<SharkStatsProps> = ({ incidents }) => {
  const stats = useMemo(() => {
    const totalIncidents = incidents.length;
    
    // Injury counts
    const injuries = {
      none: 0,
      minor: 0,
      major: 0,
      fatal: 0
    };
    
    incidents.forEach(incident => {
      if (incident.injury in injuries) {
        injuries[incident.injury as keyof typeof injuries]++;
      }
    });
    
    // Top counties
    const countiesCounts: Record<string, number> = {};
    incidents.forEach(incident => {
      countiesCounts[incident.county] = (countiesCounts[incident.county] || 0) + 1;
    });
    
    const topCounties = Object.entries(countiesCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    
    // Top species
    const speciesCounts: Record<string, number> = {};
    incidents.forEach(incident => {
      speciesCounts[incident.species] = (speciesCounts[incident.species] || 0) + 1;
    });
    
    const topSpecies = Object.entries(speciesCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    
    // Most common activities
    const activitiesCounts: Record<string, number> = {};
    incidents.forEach(incident => {
      activitiesCounts[incident.activity] = (activitiesCounts[incident.activity] || 0) + 1;
    });
    
    const topActivities = Object.entries(activitiesCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    
    return {
      totalIncidents,
      injuries,
      topCounties,
      topSpecies,
      topActivities
    };
  }, [incidents]);
  
  const { totalIncidents, injuries, topCounties, topSpecies, topActivities } = stats;
  
  // Calculate fatality percentage
  const fatalityRate = totalIncidents > 0 
    ? ((injuries.fatal / totalIncidents) * 100).toFixed(1) 
    : "0";
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Shark Incident Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total incidents */}
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-600 font-medium">Total Incidents</p>
          <p className="text-2xl font-bold">{totalIncidents}</p>
        </div>
        
        {/* Fatalities */}
        <div className="bg-red-50 p-3 rounded-lg">
          <p className="text-sm text-red-600 font-medium">Fatal Incidents</p>
          <p className="text-2xl font-bold">{injuries.fatal} <span className="text-sm text-gray-500">({fatalityRate}%)</span></p>
        </div>
        
        {/* Major injuries */}
        <div className="bg-orange-50 p-3 rounded-lg">
          <p className="text-sm text-orange-600 font-medium">Major Injuries</p>
          <p className="text-2xl font-bold">{injuries.major}</p>
        </div>
        
        {/* Minor injuries */}
        <div className="bg-yellow-50 p-3 rounded-lg">
          <p className="text-sm text-yellow-600 font-medium">Minor Injuries</p>
          <p className="text-2xl font-bold">{injuries.minor}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Top Counties */}
        <div className="border border-gray-200 rounded-lg p-3">
          <h3 className="font-medium text-gray-700 mb-2">Top Counties</h3>
          <ul className="space-y-1">
            {topCounties.map(([county, count]) => (
              <li key={county} className="flex justify-between items-center">
                <span className="text-sm">{county}</span>
                <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{count}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Top Species */}
        <div className="border border-gray-200 rounded-lg p-3">
          <h3 className="font-medium text-gray-700 mb-2">Most Common Species</h3>
          <ul className="space-y-1">
            {topSpecies.map(([species, count]) => (
              <li key={species} className="flex justify-between items-center">
                <span className="text-sm">{species}</span>
                <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">{count}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Top Activities */}
        <div className="border border-gray-200 rounded-lg p-3">
          <h3 className="font-medium text-gray-700 mb-2">Most Common Activities</h3>
          <ul className="space-y-1">
            {topActivities.map(([activity, count]) => (
              <li key={activity} className="flex justify-between items-center">
                <span className="text-sm">{activity}</span>
                <span className="text-sm font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SharkStats;
