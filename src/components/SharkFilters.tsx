
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FilterState } from '@/types';
import { 
  getAllCounties, 
  getAllInjuryTypes, 
  getAllSpecies, 
  getAllActivities,
  getYearRange 
} from '@/utils/sharkData';

interface SharkFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const SharkFilters: React.FC<SharkFiltersProps> = ({ filters, setFilters }) => {
  const years = getYearRange();
  const counties = getAllCounties();
  const injuries = getAllInjuryTypes();
  const species = getAllSpecies();
  const activities = getAllActivities();
  
  const handleYearChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      years: [value[0], value[1]]
    }));
  };
  
  const toggleCounty = (county: string) => {
    setFilters(prev => {
      if (prev.counties.includes(county)) {
        return {
          ...prev,
          counties: prev.counties.filter(c => c !== county)
        };
      } else {
        return {
          ...prev,
          counties: [...prev.counties, county]
        };
      }
    });
  };
  
  const toggleInjury = (injury: string) => {
    setFilters(prev => {
      if (prev.injuries.includes(injury)) {
        return {
          ...prev,
          injuries: prev.injuries.filter(i => i !== injury)
        };
      } else {
        return {
          ...prev,
          injuries: [...prev.injuries, injury]
        };
      }
    });
  };
  
  const toggleSpecies = (speciesName: string) => {
    setFilters(prev => {
      if (prev.species.includes(speciesName)) {
        return {
          ...prev,
          species: prev.species.filter(s => s !== speciesName)
        };
      } else {
        return {
          ...prev,
          species: [...prev.species, speciesName]
        };
      }
    });
  };
  
  const toggleActivity = (activity: string) => {
    setFilters(prev => {
      if (prev.activities.includes(activity)) {
        return {
          ...prev,
          activities: prev.activities.filter(a => a !== activity)
        };
      } else {
        return {
          ...prev,
          activities: [...prev.activities, activity]
        };
      }
    });
  };
  
  const resetFilters = () => {
    setFilters({
      years: years,
      counties: [],
      injuries: [],
      species: [],
      activities: []
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button
          onClick={resetFilters}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
        >
          Reset
        </button>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2">Year Range: {filters.years[0]} - {filters.years[1]}</h3>
        <Slider 
          value={[filters.years[0], filters.years[1]]}
          min={years[0]}
          max={years[1]}
          step={1}
          onValueChange={handleYearChange}
          className="mt-6"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        {/* Counties */}
        <div className="space-y-2">
          <h3 className="font-medium mb-2">Counties</h3>
          <div className="max-h-40 overflow-y-auto space-y-2 pr-2">
            {counties.map(county => (
              <div key={county} className="flex items-center">
                <Checkbox 
                  id={`county-${county}`}
                  checked={filters.counties.includes(county)}
                  onCheckedChange={() => toggleCounty(county)}
                />
                <Label htmlFor={`county-${county}`} className="ml-2 text-sm">{county}</Label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Injury Types */}
        <div className="space-y-2">
          <h3 className="font-medium mb-2">Injury Severity</h3>
          <div className="space-y-2">
            {injuries.map(injury => (
              <div key={injury} className="flex items-center">
                <Checkbox 
                  id={`injury-${injury}`}
                  checked={filters.injuries.includes(injury)}
                  onCheckedChange={() => toggleInjury(injury)}
                />
                <Label htmlFor={`injury-${injury}`} className="ml-2 text-sm capitalize">{injury}</Label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Species */}
        <div className="space-y-2">
          <h3 className="font-medium mb-2">Shark Species</h3>
          <div className="max-h-40 overflow-y-auto space-y-2 pr-2">
            {species.map(s => (
              <div key={s} className="flex items-center">
                <Checkbox 
                  id={`species-${s}`}
                  checked={filters.species.includes(s)}
                  onCheckedChange={() => toggleSpecies(s)}
                />
                <Label htmlFor={`species-${s}`} className="ml-2 text-sm">{s}</Label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Activities */}
        <div className="space-y-2">
          <h3 className="font-medium mb-2">Activities</h3>
          <div className="max-h-40 overflow-y-auto space-y-2 pr-2">
            {activities.map(activity => (
              <div key={activity} className="flex items-center">
                <Checkbox 
                  id={`activity-${activity}`}
                  checked={filters.activities.includes(activity)}
                  onCheckedChange={() => toggleActivity(activity)}
                />
                <Label htmlFor={`activity-${activity}`} className="ml-2 text-sm">{activity}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharkFilters;
