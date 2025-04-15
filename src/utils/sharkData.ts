import { SharkIncident, FilterState } from "../types";

// County coordinates (approximate)
const countyCoordinates: Record<string, [number, number]> = {
  "San Diego": [32.7157, -117.1611],
  "Imperial Beach": [32.5839, -117.1131],
  "Monterey": [36.6002, -121.8947],
  "San Luis Obispo": [35.2828, -120.6596],
  "San Francisco": [37.7749, -122.4194],
  "Santa Cruz": [36.9741, -122.0308],
  "Sonoma": [38.5075, -122.7236],
  "Marin": [38.0834, -122.7633],
  "Los Angeles": [34.0522, -118.2437],
  "Island - Farallones": [37.6989, -123.0034],
  "Santa Barbara": [34.4208, -119.6982],
  "Mendocino": [39.3076, -123.7995],
  "Humboldt": [40.7450, -124.1964],
  "San Mateo": [37.5630, -122.3255],
  "Island - San Miguel": [34.0380, -120.3516],
  "Del Norte": [41.7435, -124.1054],
  "Orange": [33.7175, -117.8311],
  "Ventura": [34.2805, -119.2945],
  "Island - Catalina": [33.3877, -118.4164],
  "Island - San Nicolas": [33.2428, -119.5025],
  "Island - Santa Cruz": [34.0200, -119.7651],
  "Island - Santa Rosa": [33.9395, -120.1171]
};

// Added some variation to prevent markers from stacking exactly on top of each other
const addVariation = () => (Math.random() - 0.5) * 0.15;

export const sharkIncidents: SharkIncident[] = [
  // 1950s
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
  {
    id: 11,
    date: "10/04/1959",
    time: "15:00",
    county: "Sonoma",
    location: "Bodega Rock",
    activity: "Freediving",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 12,
    date: "11/10/1959",
    time: "10:30",
    county: "Los Angeles",
    location: "Malibu, Paradise Cove",
    activity: "Freediving",
    injury: "minor",
    depth: "surface",
    species: "Blue"
  },
  
  // 1960s
  {
    id: 13,
    date: "04/24/1960",
    time: "14:00",
    county: "Marin",
    location: "Tomales Point",
    activity: "Freediving",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 14,
    date: "05/19/1960",
    time: "13:00",
    county: "Santa Cruz",
    location: "Santa Cruz, Hidden Beach, Aptos",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 15,
    date: "05/21/1961",
    time: "8:30",
    county: "Marin",
    location: "Tomales Point",
    activity: "Freediving",
    injury: "none",
    depth: "25",
    species: "White"
  },
  {
    id: 16,
    date: "08/20/1961",
    time: "9:30",
    county: "Sonoma",
    location: "Salmon Creek Beach",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 17,
    date: "01/14/1962",
    time: "10:30",
    county: "Island - Farallones",
    location: "Farallon Islands",
    activity: "Scuba Diving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 18,
    date: "11/11/1962",
    time: "12:45",
    county: "Island - Farallones",
    location: "Farallon Islands",
    activity: "Scuba Diving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 19,
    date: "01/11/1964",
    time: "12:00",
    county: "Island - Farallones",
    location: "Farallon Islands",
    activity: "Scuba Diving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 20,
    date: "01/22/1966",
    time: "11:00",
    county: "Monterey",
    location: "Cypress Point",
    activity: "Freediving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 21,
    date: "07/27/1968",
    time: "11:00",
    county: "Sonoma",
    location: "Bodega Rock",
    activity: "Freediving",
    injury: "major",
    depth: "20",
    species: "White"
  },
  {
    id: 22,
    date: "09/06/1969",
    time: "11:20",
    county: "Marin",
    location: "Tomales Point",
    activity: "Freediving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  
  // 1970s
  {
    id: 23,
    date: "07/19/1971",
    time: "Unknown",
    county: "Santa Barbara",
    location: "Purisma Point",
    activity: "Hookah Diving",
    injury: "major",
    depth: "20",
    species: "White"
  },
  {
    id: 24,
    date: "10/02/1971",
    time: "14:00",
    county: "Sonoma",
    location: "Sea Ranch",
    activity: "Scuba Diving",
    injury: "major",
    depth: "15",
    species: "White"
  },
  {
    id: 25,
    date: "05/28/1972",
    time: "13:30",
    county: "Marin",
    location: "Tomales Point",
    activity: "Freediving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 26,
    date: "05/26/1974",
    time: "11:30",
    county: "Marin",
    location: "Tomales Point",
    activity: "Freediving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 27,
    date: "07/26/1974",
    time: "Unknown",
    county: "Mendocino",
    location: "Albion",
    activity: "Freediving",
    injury: "minor",
    depth: "25",
    species: "White"
  },
  {
    id: 28,
    date: "08/05/1974",
    time: "Unknown",
    county: "San Mateo",
    location: "San Gregorio State Beach",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 29,
    date: "09/02/1974",
    time: "17:30",
    county: "San Mateo",
    location: "Franklin Point",
    activity: "Scuba Diving",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 30,
    date: "09/02/1974",
    time: "17:30",
    county: "San Mateo",
    location: "Franklin Point",
    activity: "Scuba Diving",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 31,
    date: "09/14/1974",
    time: "13:35",
    county: "Island - Farallones",
    location: "Farallon Islands",
    activity: "Hookah Diving",
    injury: "major",
    depth: "28",
    species: "White"
  },
  {
    id: 32,
    date: "09/28/1974",
    time: "7:30",
    county: "Monterey",
    location: "Point Sur",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 33,
    date: "07/19/1975",
    time: "13:30",
    county: "Santa Barbara",
    location: "Point Conception, Perch Rock",
    activity: "Hookah Diving",
    injury: "none",
    depth: "30",
    species: "White"
  },
  {
    id: 34,
    date: "07/23/1975",
    time: "14:30",
    county: "Santa Barbara",
    location: "Point Conception",
    activity: "Scuba Diving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 35,
    date: "08/09/1975",
    time: "13:30",
    county: "Mendocino",
    location: "Usal Creek",
    activity: "Freediving",
    injury: "major",
    depth: "19",
    species: "White"
  },
  {
    id: 36,
    date: "12/06/1975",
    time: "12:00",
    county: "Island - Farallones",
    location: "Farallon Islands",
    activity: "Scuba Diving",
    injury: "major",
    depth: "20",
    species: "White"
  },
  {
    id: 37,
    date: "10/18/1976",
    time: "14:30",
    county: "Humboldt",
    location: "Moonstone Beach",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 38,
    date: "12/18/1976",
    time: "9:00",
    county: "Island - San Miguel",
    location: "San Miguel Island",
    activity: "Hookah Diving",
    injury: "major",
    depth: "18",
    species: "White"
  },
  {
    id: 39,
    date: "08/14/1977",
    time: "Unknown",
    county: "Marin",
    location: "Tomales Point",
    activity: "Freediving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 40,
    date: "08/05/1978",
    time: "12:45",
    county: "Santa Cruz",
    location: "Pajaro Dunes",
    activity: "Swimming",
    injury: "minor",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 41,
    date: "03/11/1979",
    time: "10:00",
    county: "San Mateo",
    location: "Año Nuevo Island",
    activity: "Scuba Diving",
    injury: "none",
    depth: "20",
    species: "White"
  },
  
  // 1980s
  {
    id: 42,
    date: "10/17/1980",
    time: "9:30",
    county: "Humboldt",
    location: "Moonstone Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 43,
    date: "12/19/1981",
    time: "Unknown",
    county: "Monterey",
    location: "Spanish Bay",
    activity: "Surfing / Boarding",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 44,
    date: "02/07/1982",
    time: "11:00",
    county: "Sonoma",
    location: "Stillwater Cove",
    activity: "Scuba Diving",
    injury: "major",
    depth: "40",
    species: "White"
  },
  {
    id: 45,
    date: "07/24/1982",
    time: "11:00",
    county: "San Luis Obispo",
    location: "Point Buchon",
    activity: "Paddleboarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 46,
    date: "09/19/1982",
    time: "Unknown",
    county: "Mendocino",
    location: "Bear Harbor",
    activity: "Freediving",
    injury: "major",
    depth: "12",
    species: "White"
  },
  {
    id: 47,
    date: "09/25/1982",
    time: "8:00",
    county: "Monterey",
    location: "Monastery Beach",
    activity: "Scuba Diving",
    injury: "minor",
    depth: "40",
    species: "White"
  },
  {
    id: 48,
    date: "09/15/1984",
    time: "8:30",
    county: "San Mateo",
    location: "Pigeon Point",
    activity: "Freediving",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 49,
    date: "09/17/1984",
    time: "15:30",
    county: "San Diego",
    location: "Mission Beach",
    activity: "Swimming",
    injury: "minor",
    depth: "surface",
    species: "Blue"
  },
  {
    id: 50,
    date: "09/30/1984",
    time: "10:00",
    county: "Marin",
    location: "Tomales Point",
    activity: "Freediving",
    injury: "major",
    depth: "10",
    species: "White"
  },
  {
    id: 51,
    date: "02/18/1985",
    time: "12:45",
    county: "Island - San Miguel",
    location: "San Miguel Island",
    activity: "Scuba Diving",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 52,
    date: "05/26/1985",
    time: "11:00",
    county: "Orange",
    location: "Seal Beach",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 53,
    date: "09/28/1985",
    time: "Unknown",
    county: "Marin",
    location: "Tomales Point, Elephant Rock",
    activity: "Freediving",
    injury: "none",
    depth: "14",
    species: "White"
  },
  {
    id: 54,
    date: "10/22/1985",
    time: "16:00",
    county: "Santa Barbara",
    location: "Point Conception",
    activity: "Hookah Diving",
    injury: "minor",
    depth: "15",
    species: "Unknown"
  },
  {
    id: 55,
    date: "12/06/1986",
    time: "9:00",
    county: "Monterey",
    location: "Monastery Beach",
    activity: "Freediving",
    injury: "major",
    depth: "38",
    species: "White"
  },
  {
    id: 56,
    date: "08/15/1987",
    time: "7:30",
    county: "San Mateo",
    location: "Half Moon Bay, Tunitas Creek",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 57,
    date: "10/26/1987",
    time: "17:00",
    county: "Santa Cruz",
    location: "Davenport Light",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 58,
    date: "04/24/1988",
    time: "Unknown",
    county: "San Luis Obispo",
    location: "Morro Rock",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 59,
    date: "08/11/1988",
    time: "9:00",
    county: "Del Norte",
    location: "Klamath River",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 60,
    date: "01/26/1989",
    time: "10:15",
    county: "Los Angeles",
    location: "Malibu",
    activity: "Kayaking / Canoeing",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 61,
    date: "09/09/1989",
    time: "12:00",
    county: "Island - Farallones",
    location: "Farallon Islands",
    activity: "Hookah Diving",
    injury: "major",
    depth: "25",
    species: "White"
  },
  
  // 1990s
  {
    id: 62,
    date: "01/12/1990",
    time: "Unknown",
    county: "San Mateo",
    location: "Montara",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 63,
    date: "08/28/1990",
    time: "17:00",
    county: "Humboldt",
    location: "Trinidad Head",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 64,
    date: "09/05/1990",
    time: "17:00",
    county: "Humboldt",
    location: "Trinidad State Beach",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 65,
    date: "09/08/1990",
    time: "13:00",
    county: "Sonoma",
    location: "North of Jenner",
    activity: "Freediving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 66,
    date: "11/03/1990",
    time: "15:00",
    county: "Monterey",
    location: "Monastery Beach",
    activity: "Scuba Diving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 67,
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
    id: 68,
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
    id: 69,
    date: "10/09/1991",
    time: "Unknown",
    county: "Marin",
    location: "Point Reyes",
    activity: "Hookah Diving",
    injury: "none",
    depth: "25",
    species: "White"
  },
  {
    id: 70,
    date: "12/04/1991",
    time: "15:00",
    county: "Humboldt",
    location: "Shelter Cove",
    activity: "Hookah Diving",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 71,
    date: "08/18/1992",
    time: "20:15",
    county: "Del Norte",
    location: "Klamath River",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 72,
    date: "10/29/1992",
    time: "11:00",
    county: "Island - San Miguel",
    location: "Castle Rock",
    activity: "Hookah Diving",
    injury: "minor",
    depth: "47",
    species: "White"
  },
  {
    id: 73,
    date: "11/11/1992",
    time: "14:00",
    county: "Island - San Nicolas",
    location: "San Nicolas Island",
    activity: "Scuba Diving",
    injury: "minor",
    depth: "72",
    species: "Unknown"
  },
  {
    id: 74,
    date: "11/14/1992",
    time: "13:00",
    county: "San Mateo",
    location: "Año Nuevo State Reserve",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 75,
    date: "11/29/1992",
    time: "15:30",
    county: "San Diego",
    location: "San Onofre State Beach",
    activity: "Freediving",
    injury: "minor",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 76,
    date: "03/12/1993",
    time: "14:30",
    county: "San Mateo",
    location: "Pedro Point, Pacifica",
    activity: "Freediving",
    injury: "none",
    depth: "15",
    species: "White"
  },
  {
    id: 77,
    date: "08/12/1993",
    time: "14:00",
    county: "Mendocino",
    location: "Fort Bragg - Abalone Point",
    activity: "Freediving",
    injury: "major",
    depth: "5",
    species: "White"
  },
  {
    id: 78,
    date: "10/10/1993",
    time: "14:30",
    county: "Sonoma",
    location: "Jenner, Goat Rock Beach",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 79,
    date: "10/30/1993",
    time: "16:30",
    county: "Humboldt",
    location: "\"Bunkers\", Eureka",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 80,
    date: "12/09/1994",
    time: "9:00",
    county: "Island - San Miguel",
    location: "Harris Point",
    activity: "Hookah Diving",
    injury: "fatal",
    depth: "submerged",
    species: "White"
  },
  {
    id: 81,
    date: "06/24/1995",
    time: "Unknown",
    county: "San Diego",
    location: "La Jolla",
    activity: "Kayaking / Canoeing",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 82,
    date: "06/30/1995",
    time: "17:30",
    county: "Monterey",
    location: "Point Lobos, outer Bluefish Cove",
    activity: "Scuba Diving",
    injury: "major",
    depth: "40",
    species: "White"
  },
  {
    id: 83,
    date: "09/03/1995",
    time: "16:00",
    county: "Humboldt",
    location: "Shelter Cove",
    activity: "Freediving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 84,
    date: "09/28/1995",
    time: "17:30",
    county: "Santa Cruz",
    location: "Davenport Landing",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 85,
    date: "08/13/1996",
    time: "11:15",
    county: "Marin",
    location: "Tomales Point, Bird Rock",
    activity: "Freediving",
    injury: "major",
    depth: "18",
    species: "White"
  },
  {
    id: 86,
    date: "10/03/1996",
    time: "7:30",
    county: "Sonoma",
    location: "Salmon Creek Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 87,
    date: "10/05/1996",
    time: "13:00",
    county: "Marin",
    location: "Dillon Beach",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 88,
    date: "11/29/1996",
    time: "8:30",
    county: "Sonoma",
    location: "Salmon Creek Beach",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 89,
    date: "08/24/1997",
    time: "Unknown",
    county: "Humboldt",
    location: "Moonstone Beach",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 90,
    date: "08/26/1998",
    time: "14:15",
    county: "Marin",
    location: "Stinson Beach",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 91,
    date: "11/15/1999",
    time: "Unknown",
    county: "Santa Cruz",
    location: "Waddell Reef",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  
  // 2000s
  {
    id: 92,
    date: "09/29/2000",
    time: "9:00",
    county: "San Mateo",
    location: "Half Moon Bay, Pillar Point",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 93,
    date: "11/04/2000",
    time: "16:30",
    county: "Humboldt",
    location: "\"Bunkers\", Eureka",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 94,
    date: "05/31/2002",
    time: "14:00",
    county: "Marin",
    location: "Stinson Beach, off Bolinas Lagoon",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 95,
    date: "09/21/2002",
    time: "early am",
    county: "Humboldt",
    location: "Moonstone Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 96,
    date: "11/28/2002",
    time: "9:45",
    county: "Sonoma",
    location: "Salmon Creek Beach",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 97,
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
    id: 98,
    date: "05/28/2004",
    time: "11:00",
    county: "Sonoma",
    location: "Salmon Creek Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 99,
    date: "06/26/2004",
    time: "9:00",
    county: "San Diego",
    location: "San Onofre State Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 100,
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
    id: 101,
    date: "08/20/2004",
    time: "17:30",
    county: "Orange",
    location: "\"204's\", San Clemente",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 102,
    date: "10/01/2004",
    time: "13:45",
    county: "Orange",
    location: "Huntington Beach, Tower 16",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 103,
    date: "10/02/2004",
    time: "15:30",
    county: "San Luis Obispo",
    location: "Pismo Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 104,
    date: "10/10/2004",
    time: "9:30",
    county: "Marin",
    location: "Limantour Beach",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 105,
    date: "11/11/2004",
    time: "13:30",
    county: "Humboldt",
    location: "\"Bunkers\", Eureka",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 106,
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
    id: 107,
    date: "10/19/2005",
    time: "11:00",
    county: "Sonoma",
    location: "Salmon Creek Beach",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 108,
    date: "10/21/2005",
    time: "11:00",
    county: "Del Norte",
    location: "Klamath River Mouth",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 109,
    date: "11/02/2005",
    time: "16:45",
    county: "San Mateo",
    location: "Half Moon Bay, Mavericks",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 110,
    date: "11/02/2005",
    time: "7:15",
    county: "San Francisco",
    location: "Ocean Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 111,
    date: "01/18/2006",
    time: "22:30",
    county: "Santa Cruz",
    location: "Santa Cruz",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 112,
    date: "06/17/2006",
    time: "11:10",
    county: "Monterey",
    location: "Cannery Row, Monterey",
    activity: "Scuba Diving",
    injury: "none",
    depth: "submerged",
    species: "White"
  },
  {
    id: 113,
    date: "12/10/2006",
    time: "12:00",
    county: "Marin",
    location: "Dillon Beach",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 114,
    date: "06/30/2007",
    time: "10:00",
    county: "Los Angeles",
    location: "Will Rogers State Beach",
    activity: "Swimming",
    injury: "minor",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 115,
    date: "07/17/2007",
    time: "11:00",
    county: "Ventura",
    location: "Faria Beach",
    activity: "Swimming",
    injury: "minor",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 116,
    date: "07/21/2007",
    time: "10:15",
    county: "San Mateo",
    location: "Bean Hollow",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 117,
    date: "07/22/2007",
    time: "9:00",
    county: "Los Angeles",
    location: "Malibu",
    activity: "Paddleboarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 118,
    date: "07/28/2007",
    time: "23:00",
    county: "San Diego",
    location: "Imperial Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 119,
    date: "08/28/2007",
    time: "11:00",
    county: "Monterey",
    location: "Marina State Beach",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 120,
    date: "09/27/2007",
    time: "12:00",
    county: "Humboldt",
    location: "Moonstone Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 121,
    date: "09/30/2007",
    time: "11:30",
    county: "Los Angeles",
    location: "Santa Monica",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 122,
    date: "10/07/2007",
    time: "20:30",
    county: "Los Angeles",
    location: "Venice Pier",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "Leopard"
  },
  {
    id: 123,
    date: "03/07/2008",
    time: "7:00",
    county: "Orange",
    location: "Huntington Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 124,
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
    id: 125,
    date: "06/21/2008",
    time: "9:00",
    county: "Island - Catalina",
    location: "West Cove",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 126,
    date: "09/08/2008",
    time: "10:30",
    county: "Santa Barbara",
    location: "Surf Beach, Lompoc",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 127,
    date: "04/06/2009",
    time: "7:00",
    county: "San Diego",
    location: "San Diego",
    activity: "Freediving",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 128,
    date: "08/25/2009",
    time: "16:30",
    county: "San Diego",
    location: "Terramar Beach",
    activity: "Swimming",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 129,
    date: "08/30/2009",
    time: "18:30",
    county: "Orange",
    location: "Huntington Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 130,
    date: "10/24/2009",
    time: "17:30",
    county: "San Diego",
    location: "San Onofre State Beach",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 131,
    date: "11/05/2009",
    time: "17:00",
    county: "Santa Cruz",
    location: "Davenport",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  
  // 2010s
  {
    id: 132,
    date: "07/02/2010",
    time: "15:15",
    county: "San Diego",
    location: "San Onofre State Beach",
    activity: "Paddleboarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 133,
    date: "07/02/2010",
    time: "18:30",
    county: "San Luis Obispo",
    location: "Pismo Beach",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "Leopard"
  },
  {
    id: 134,
    date: "08/02/2010",
    time: "12:40",
    county: "Santa Barbara",
    location: "Near Oil Rig Hondo, Gaviota",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 135,
    date: "08/14/2010",
    time: "10:00",
    county: "San Mateo",
    location: "Pigeon Point",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 136,
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
    id: 137,
    date: "06/06/2011",
    time: "17:00",
    county: "San Diego",
    location: "La Jolla, Children's Pool",
    activity: "Freediving",
    injury: "none",
    depth: "surface",
    species: "Sevengill"
  },
  {
    id: 138,
    date: "06/24/2011",
    time: "13:30",
    county: "San Diego",
    location: "San Onofre State Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 139,
    date: "09/11/2011",
    time: "12:30",
    county: "Humboldt",
    location: "Samoa Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 140,
    date: "10/29/2011",
    time: "7:00",
    county: "Monterey",
    location: "Marina State Beach",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 141,
    date: "11/22/2011",
    time: "11:30",
    county: "San Mateo",
    location: "Pigeon Point",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 142,
    date: "05/06/2012",
    time: "7:30",
    county: "Island - Catalina",
    location: "Catalina Island",
    activity: "Paddleboarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 143,
    date: "05/12/2012",
    time: "13:30",
    county: "San Luis Obispo",
    location: "Cambria, Leffingwell Landing",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 144,
    date: "07/07/2012",
    time: "8:30",
    county: "Santa Cruz",
    location: "Santa Cruz, Pleasure Point",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 145,
    date: "07/31/2012",
    time: "6:45",
    county: "Los Angeles",
    location: "Topanga Beach",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 146,
    date: "10/07/2012",
    time: "18:30",
    county: "Santa Cruz",
    location: "Davenport Landing",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 147,
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
    id: 148,
    date: "10/30/2012",
    time: "12:00",
    county: "Humboldt",
    location: "\"Bunkers\", Humboldt Bay, north jetty",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 149,
    date: "06/25/2013",
    time: "16:00",
    county: "San Mateo",
    location: "Pedro Point, Pacifica",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 150,
    date: "08/17/2013",
    time: "13:00",
    county: "San Mateo",
    location: "Half Moon Bay, Pillar Point",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 151,
    date: "08/31/2013",
    time: "23:00",
    county: "Santa Barbara",
    location: "Butterfly Beach, Santa Barbara",
    activity: "Swimming",
    injury: "minor",
    depth: "surface",
    species: "Salmon"
  },
  {
    id: 152,
    date: "10/06/2013",
    time: "8:30",
    county: "Humboldt",
    location: "\"Bunkers\", North Jetty, Humboldt Bay",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 153,
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
    id: 154,
    date: "09/13/2014",
    time: "18:45",
    county: "Santa Cruz",
    location: "Santa Cruz - Manresa Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 155,
    date: "10/02/2014",
    time: "17:30",
    county: "Santa Barbara",
    location: "Vandenberg AFB",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 156,
    date: "10/03/2014",
    time: "11:00",
    county: "Santa Barbara",
    location: "Vandenberg AFB",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 157,
    date: "10/03/2014",
    time: "14:00",
    county: "Santa Barbara",
    location: "Vandenberg AFB",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 158,
    date: "10/19/2014",
    time: "14:30",
    county: "Santa Barbara",
    location: "Leadbetter Point",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 159,
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
    id: 160,
    date: "07/10/2015",
    time: "8:45",
    county: "Orange",
    location: "Huntington Beach-Lifeguard Tower 17",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 161,
    date: "08/18/2015",
    time: "7:30",
    county: "Santa Barbara",
    location: "Gaviota State Beach",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 162,
    date: "08/29/2015",
    time: "10:15",
    county: "San Luis Obispo",
    location: "Morro Rock, Morro Bay",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 163,
    date: "09/05/2015",
    time: "15:00",
    county: "Ventura",
    location: "Deer Creek, Malibu/Ventura",
    activity: "Kayaking / Canoeing",
    injury: "minor",
    depth: "surface",
    species: "Hammerhead"
  },
  {
    id: 164,
    date: "09/06/2015",
    time: "17:30",
    county: "Los Angeles",
    location: "El Pescador State Beach, Malibu",
    activity: "Paddleboarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 165,
    date: "09/20/2015", 
    time: "11:00",
    county: "Island - Santa Cruz",
    location: "Yellow Banks",
    activity: "Freediving",
    injury: "minor",
    depth: "surface",
    species: "Hammerhead"
  },
  {
    id: 166,
    date: "09/24/2015",
    time: "11:00",
    county: "Santa Barbara",
    location: "Horseshoe Rock, Santa Barbara",
    activity: "Kayaking / Canoeing",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 167,
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
    id: 168,
    date: "09/01/2016",
    time: "9:00",
    county: "Santa Barbara",
    location: "Refugio State Beach",
    activity: "Freediving",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 169,
    date: "09/17/2016",
    time: "afternoon",
    county: "Humboldt",
    location: "\"Bunkers\", South Jetty, Humboldt Bay",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 170,
    date: "03/18/2017",
    time: "16:30",
    county: "Monterey",
    location: "San Carlos Beach, Monterey",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 171,
    date: "04/29/2017",
    time: "17:30",
    county: "San Diego",
    location: "\"Church\", San Onofre State Beach",
    activity: "Swimming",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 172,
    date: "07/11/2017",
    time: "11:00",
    county: "Santa Cruz",
    location: "Santa Cruz, \"Steamer Lane\"",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 173,
    date: "07/20/2017",
    time: "8:00",
    county: "Santa Barbara",
    location: "Goleta Beach",
    activity: "Paddleboarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 174,
    date: "07/20/2017",
    time: "11:15",
    county: "Santa Barbara",
    location: "Stearns Warf, Santa Barbara",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 175,
    date: "08/01/2017",
    time: "10:45",
    county: "San Mateo",
    location: "Bean Hollow",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 176,
    date: "09/28/2017",
    time: "Unknown",
    county: "Island - Farallones",
    location: "Mirounga Bay",
    activity: "Hookah Diving",
    injury: "none",
    depth: "bottom",
    species: "White"
  },
  {
    id: 177,
    date: "11/24/2017",
    time: "13:30",
    county: "Monterey",
    location: "Pebble Beach",
    activity: "Freediving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 178,
    date: "12/30/2017",
    time: "15:00",
    county: "Marin",
    location: "Drake's Estero",
    activity: "Surfing / Boarding",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 179,
    date: "06/25/2018",
    time: "18:00",
    county: "San Diego",
    location: "Oceanside",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "Unknown"
  },
  {
    id: 180,
    date: "08/24/2018",
    time: "20:00",
    county: "Orange",
    location: "Huntington Beach",
    activity: "Swimming",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 181,
    date: "09/29/2018",
    time: "7:00",
    county: "San Diego",
    location: "Beacon's Beach - Encinitas",
    activity: "Freediving",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 182,
    date: "10/23/2018",
    time: "10:00",
    county: "Island - Farallones",
    location: "Farallon Islands",
    activity: "Scuba Diving",
    injury: "major",
    depth: "submerged",
    species: "White"
  },
  {
    id: 183,
    date: "01/08/2019",
    time: "14:00",
    county: "San Luis Obispo",
    location: "Montana de Oro State Park",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 184,
    date: "05/07/2019",
    time: "Unknown",
    county: "Sonoma",
    location: "Salmon Creek Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 185,
    date: "09/01/2019",
    time: "12:00",
    county: "San Diego",
    location: "Solana Beach",
    activity: "Surfing / Boarding",
    injury: "none",
    depth: "surface",
    species: "Thresher"
  },
  {
    id: 186,
    date: "10/05/2019",
    time: "8:00",
    county: "Island - Catalina",
    location: "Ship Rock",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 187,
    date: "12/21/2019",
    time: "15:15",
    county: "Island - Santa Rosa",
    location: "Talcott Shoals",
    activity: "Surfing / Boarding",
    injury: "major",
    depth: "surface",
    species: "White"
  },
  {
    id: 188,
    date: "03/27/2020",
    time: "19:00",
    county: "Santa Cruz",
    location: "Santa Cruz, Pleasure Point",
    activity: "Paddleboarding",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 189,
    date: "05/01/2020",
    time: "14:30",
    county: "Santa Barbara",
    location: "Padaro Lane, Carpenteria",
    activity: "Swimming",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 190,
    date: "05/09/2020",
    time: "13:30",
    county: "Santa Cruz",
    location: "Manresa State Beach",
    activity: "Surfing / Boarding",
    injury: "fatal",
    depth: "surface",
    species: "White"
  },
  {
    id: 191,
    date: "05/25/2020",
    time: "7:30",
    county: "Humboldt",
    location: "Shelter Cove",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 192,
    date: "06/19/2020",
    time: "16:00",
    county: "Island - Santa Cruz",
    location: "San Pedro Point",
    activity: "Scuba Diving",
    injury: "none",
    depth: "35",
    species: "White"
  },
  {
    id: 193,
    date: "08/12/2020",
    time: "17:42",
    county: "Los Angeles",
    location: "Bluff Cove, Palos Verdes",
    activity: "Freediving",
    injury: "minor",
    depth: "surface",
    species: "White"
  },
  {
    id: 194,
    date: "08/28/2020",
    time: "17:00",
    county: "Humboldt",
    location: "Shelter Cove",
    activity: "Kayaking / Canoeing",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 195,
    date: "12/30/2020",
    time: "14:00",
    county: "San Diego",
    location: "Coronado",
    activity: "Swimming",
    injury: "none",
    depth: "surface",
    species: "White"
  },
  {
    id: 196,
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
    id: 197,
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
    id: 198,
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
    id: 199,
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
    id: 200,
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
    id: 201,
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
    id: 202,
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
    id: 203,
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
    id: 204,
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
    id: 205,
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
    id: 206,
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
    id: 207,
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
    id: 208,
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
    id: 209,
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
    id: 210,
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
    id: 211,
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
    id: 212,
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
    id: 213,
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
    id: 214,
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
    id: 215,
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
    id: 216,
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
    id: 217,
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
    id: 218,
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
    id: 219,
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
    id: 220,
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
    id: 221,
    date: "12/31/2024",
    time: "10:30",
    county: "Marin",
    location: "Drake's Beach",
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
