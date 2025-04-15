
import { SharkIncident, FilterState } from "../types";

// County coordinates (approximate)
const countyCoordinates: Record<string, [number, number]> = {
  "San Diego": [32.7157, -117.1611],
  "Monterey": [36.6002, -121.8947],
  "San Luis Obispo": [35.2828, -120.6596],
  "San Francisco": [37.7749, -122.4194],
  "Sonoma": [38.5780, -122.9888],
  "Los Angeles": [34.0522, -118.2437],
  "Marin": [38.0834, -122.7633],
  "Santa Cruz": [36.9741, -122.0308],
  "Island - Farallones": [37.7001, -123.0034],
  "Santa Barbara": [34.4208, -119.6982],
  "Mendocino": [39.3076, -123.7995],
  "San Mateo": [37.4337, -122.4014],
  "Humboldt": [40.7450, -124.1853],
  "Del Norte": [41.7558, -124.1997],
  "Island - San Miguel": [34.0377, -120.3510],
  "Island - San Nicolas": [33.2446, -119.4965],
  "Orange": [33.7175, -117.8311],
  "Ventura": [34.3705, -119.1391],
  "Island - Catalina": [33.3886, -118.4158],
  "Island - Santa Cruz": [34.0205, -119.7698],
  "Island - Santa Rosa": [33.9680, -120.0970]
};

// Added some variation to prevent markers from stacking exactly on top of each other
const addVariation = () => (Math.random() - 0.5) * 0.15;

export const sharkIncidents: SharkIncident[] = [
  {
    id: 1,
    date: "10/08/1950",
    time: "12:00",
    county: "San Diego",
    location: "Imperial Beach",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 2,
    date: "05/27/1952",
    time: "14:00",
    county: "San Diego",
    location: "Imperial Beach",
    activity: "Swimming",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 3,
    date: "12/07/1952",
    time: "14:00",
    county: "Monterey",
    location: "Lovers Point",
    activity: "Swimming",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 4,
    date: "02/06/1955",
    time: "12:00",
    county: "Monterey",
    location: "Pacific Grove",
    activity: "Freediving",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 5,
    date: "08/14/1956",
    time: "16:30",
    county: "San Luis Obispo",
    location: "Pismo Beach",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 6,
    date: "04/28/1957",
    time: "13:30",
    county: "San Luis Obispo",
    location: "Morro Bay",
    activity: "Swimming",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 7,
    date: "10/12/1958",
    time: "Unknown",
    county: "San Diego",
    location: "Coronado Strand",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 8,
    date: "05/07/1959",
    time: "17:30",
    county: "San Francisco",
    location: "Baker Beach",
    activity: "Swimming",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 9,
    date: "06/14/1959",
    time: "17:00",
    county: "San Diego",
    location: "La Jolla",
    activity: "Freediving",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 10,
    date: "07/28/1959",
    time: "19:30",
    county: "San Diego",
    location: "La Jolla",
    activity: "Freediving",
    injury: "minor",
    depth: "surface",
    species: "Hammerhead"
  },
  // More recent incidents
  {
    id: 11,
    date: "06/26/2021",
    time: "9:00",
    county: "San Mateo",
    location: "Gray Whale State Beach",
    activity: "Freediving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 12,
    date: "06/30/2021",
    time: "7:15",
    county: "Island - Catalina",
    location: "Parson's Landing",
    activity: "Kayaking / Canoeing",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 13,
    date: "07/05/2021",
    time: "9:15",
    county: "San Luis Obispo",
    location: "Cambria, Leffingwell Landing",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 14,
    date: "07/22/2021",
    time: "11:15",
    county: "Monterey",
    location: "Moss Landing Jetty",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 15,
    date: "10/03/2021",
    time: "9:00",
    county: "Sonoma",
    location: "Salmon Creek Beach",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 16,
    date: "12/22/2021",
    time: "16:00",
    county: "Sonoma",
    location: "Salmon Creek Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 17,
    date: "12/24/2021",
    time: "10:40",
    county: "San Luis Obispo",
    location: "Morro Strand State Beach",
    activity: "Surfing / Boarding",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 18,
    date: "02/26/2022",
    time: "11:30",
    county: "Island - San Miguel",
    location: "San Miguel Island - Northeast side",
    activity: "Scuba Diving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 19,
    date: "06/22/2022",
    time: "10:30",
    county: "Monterey",
    location: "Lovers Point",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 20,
    date: "08/10/2022",
    time: "11:30",
    county: "Monterey",
    location: "Lovers Point",
    activity: "Paddleboarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 21,
    date: "09/28/2022",
    time: "16:00",
    county: "Mendocino",
    location: "Mackerricher State Park – Laguna Pt.",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 22,
    date: "10/02/2022",
    time: "15:30",
    county: "Humboldt",
    location: "Centerville Beach",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 23,
    date: "10/22/2022",
    time: "14:30",
    county: "San Luis Obispo",
    location: "Cayucos Pier",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 24,
    date: "10/31/2022",
    time: "17:15",
    county: "Monterey",
    location: "Otter Point – Pacific Grove",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 25,
    date: "11/04/2022",
    time: "10:15",
    county: "San Diego",
    location: "Del Mar",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 26,
    date: "08/22/2023",
    time: "13:00",
    county: "San Mateo",
    location: "Bean Hollow",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 27,
    date: "10/01/2023",
    time: "10:15",
    county: "Marin",
    location: "Wildcat Beach – Point Reyes",
    activity: "Swimming",
    injury: "fatal",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 28,
    date: "10/13/2023",
    time: "15:30",
    county: "San Mateo",
    location: "Linda Mar Beach, Pacifica",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 29,
    date: "04/03/2024",
    time: "18:00",
    county: "San Luis Obispo",
    location: "Montana de Oro State Park",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 30,
    date: "05/26/2024",
    time: "19:45",
    county: "Orange",
    location: "T-Street San Clemente",
    activity: "Surfing",
    injury: "none",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 31,
    date: "06/02/2024",
    time: "9:00",
    county: "San Diego",
    location: "Del Mar",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 32,
    date: "07/02/2024",
    time: "10:30",
    county: "Santa Barbara",
    location: "Hollister Ranch",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 33,
    date: "07/26/2024",
    time: "8:00",
    county: "Santa Barbara",
    location: "Gaviota State Beach",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 34,
    date: "09/10/2024",
    time: "15:40",
    county: "Orange",
    location: "Dana Point",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 35,
    date: "11/09/2024",
    time: "11:00",
    county: "Orange",
    location: "Dana Point",
    activity: "Paddleboarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 36,
    date: "12/31/2024",
    time: "10:30",
    county: "Marin",
    location: "Drake's Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  // More historical incidents (2000s)
  {
    id: 37,
    date: "08/19/2003",
    time: "8:30",
    county: "San Luis Obispo",
    location: "Avila Beach",
    activity: "Swimming",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 38,
    date: "08/15/2004",
    time: "16:30",
    county: "Mendocino",
    location: "Kibesillah Rock",
    activity: "Freediving",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 39,
    date: "08/24/2005",
    time: "11:00",
    county: "San Diego",
    location: "La Jolla",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 40,
    date: "04/25/2008",
    time: "7:00",
    county: "San Diego",
    location: "Solana Beach",
    activity: "Swimming",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 41,
    date: "10/22/2010",
    time: "9:00",
    county: "Santa Barbara",
    location: "Surf Beach, Lompoc",
    activity: "Surfing / Boarding",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 42,
    date: "10/23/2012",
    time: "11:00",
    county: "Santa Barbara",
    location: "Surf Beach, Lompoc",
    activity: "Surfing / Boarding",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 43,
    date: "07/05/2014",
    time: "7:30",
    county: "San Luis Obispo",
    location: "Oceano Dunes State Beach, Oceano",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 44,
    date: "12/28/2014",
    time: "11:30",
    county: "San Luis Obispo",
    location: "Montana de Oro State Park",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 45,
    date: "05/29/2016",
    time: "15:00",
    county: "Orange",
    location: "Corona del Mar State Beach",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 46,
    date: "04/29/2017",
    time: "17:30",
    county: "San Diego",
    location: "\"Church\", San Onofre State Beach",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  // Adding several 1990s incidents
  {
    id: 47,
    date: "09/09/1989",
    time: "12:00",
    county: "Island - Farallones",
    location: "Farallon Islands",
    activity: "Hookah Diving",
    injury: "major",
    depth: "25",
    species: "White"
  },
  {
    id: 48,
    date: "07/01/1991",
    time: "9:30",
    county: "Santa Cruz",
    location: "Davenport",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 49,
    date: "10/05/1991",
    time: "7:30",
    county: "Santa Cruz",
    location: "Davenport, Scott Creek, 1 mi north",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 50,
    date: "08/18/1992", 
    time: "20:15",
    county: "Del Norte",
    location: "Klamath River",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  }
];

// Process data to add coordinates
export const processedSharkIncidents = sharkIncidents.map(incident => {
  const coords = countyCoordinates[incident.county];
  if (coords) {
    return {
      ...incident,
      lat: coords[0] + addVariation(),
      lng: coords[1] + addVariation(),
    };
  }
  return incident;
});

export const getYearRange = (): [number, number] => {
  const years = sharkIncidents.map(incident => {
    const date = new Date(incident.date);
    return date.getFullYear();
  });
  return [Math.min(...years), Math.max(...years)];
};

export const getAllCounties = (): string[] => {
  return [...new Set(sharkIncidents.map(incident => incident.county))].sort();
};

export const getAllSpecies = (): string[] => {
  return [...new Set(sharkIncidents.map(incident => incident.species))].sort();
};

export const getAllActivities = (): string[] => {
  return [...new Set(sharkIncidents.map(incident => incident.activity))].sort();
};

export const getAllInjuryTypes = (): string[] => {
  return [...new Set(sharkIncidents.map(incident => incident.injury))].sort();
};

export const filterIncidents = (
  incidents: SharkIncident[],
  filters: FilterState
): SharkIncident[] => {
  return incidents.filter((incident) => {
    const date = new Date(incident.date);
    const year = date.getFullYear();
    
    const yearMatch = year >= filters.years[0] && year <= filters.years[1];
    const countyMatch = filters.counties.length === 0 || filters.counties.includes(incident.county);
    const injuryMatch = filters.injuries.length === 0 || filters.injuries.includes(incident.injury);
    const speciesMatch = filters.species.length === 0 || filters.species.includes(incident.species);
    const activityMatch = filters.activities.length === 0 || filters.activities.includes(incident.activity);
    
    return yearMatch && countyMatch && injuryMatch && speciesMatch && activityMatch;
  });
};
