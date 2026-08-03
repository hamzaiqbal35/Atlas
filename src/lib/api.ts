// src/lib/api.ts

export interface SolarSystemBody {
  id: string;
  name: string;
  englishName: string;
  isPlanet: boolean;
  moons: { moon: string; rel: string }[] | null;
  semimajorAxis: number;
  perihelion: number;
  aphelion: number;
  eccentricity: number;
  inclination: number;
  mass: { massValue: number; massExponent: number } | null;
  vol: { volValue: number; volExponent: number } | null;
  density: number;
  gravity: number;
  escape: number;
  meanRadius: number;
  equaRadius: number;
  polarRadius: number;
  sideralOrbit: number;
  sideralRotation: number;
  discoveredBy: string;
  discoveryDate: string;
  alternativeName: string;
  axialTilt: number;
  avgTemp: number; // In Kelvin
}

const BASE_URL = "https://api.le-systeme-solaire.net/rest";
import { fallbackBodies } from "./fallbackData";

export async function getCelestialBody(id: string): Promise<SolarSystemBody | null> {
  const normalizedId = id.toLowerCase();
  const getFallback = () => {
    return fallbackBodies[normalizedId] 
      || Object.values(fallbackBodies).find(b => b.id.toLowerCase() === normalizedId || b.englishName.toLowerCase() === normalizedId) 
      || null;
  };

  if (!process.env.NEXT_PUBLIC_SOLAR_API_KEY) {
    console.log(`No NEXT_PUBLIC_SOLAR_API_KEY found, using local fallback data for ${id}`);
    return getFallback();
  }

  try {
    const res = await fetch(`${BASE_URL}/bodies/${normalizedId}`, { 
      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SOLAR_API_KEY}`
      }
    });
    
    if (!res.ok) {
      if (res.status === 404) return getFallback();
      throw new Error(`Failed to fetch celestial body: ${res.status} ${res.statusText}`);
    }
    
    return await res.json();
  } catch (error) {
    console.error("Error fetching celestial body:", error);
    return getFallback();
  }
}
