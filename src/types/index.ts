
export interface SharkIncident {
  id: number;
  date: string;
  time: string;
  county: string;
  location: string;
  activity: string;
  injury: "none" | "minor" | "major" | "fatal";
  depth: string;
  species: string;
  lat?: number;
  lng?: number;
}

export interface FilterState {
  years: [number, number];
  counties: string[];
  injuries: string[];
  species: string[];
  activities: string[];
}
