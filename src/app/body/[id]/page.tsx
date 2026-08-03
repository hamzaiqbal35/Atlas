import { getCelestialBody } from "@/lib/api";
import { knowledgeGraph } from "@/data/knowledgeGraph";
import { detailedEncyclopedia } from "@/data/detailedEncyclopedia";
import { notFound } from "next/navigation";
import { BodyDetailClient } from "./BodyDetailClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BodyPage({ params }: PageProps) {
  const { id } = await params;
  
  // 1. Fetch static encyclopedia data (Fast)
  const staticData = knowledgeGraph[id];
  
  if (!staticData) {
    notFound();
  }

  const encyclopediaData = detailedEncyclopedia[id];

  // Fetch live data from API
  // Le Systeme Solaire uses 'terre' for Earth, 'lune' for Moon, but English names usually work too.
  // If id is "earth", we map it to "terre" or just let the API handle it.
  const apiId = id === "earth" ? "terre" : id === "moon" ? "lune" : id === "sun" ? "soleil" : id;
  const liveData = await getCelestialBody(apiId);

  return (
    <BodyDetailClient 
      staticData={staticData} 
      liveData={liveData} 
      encyclopediaData={encyclopediaData} 
    />
  );
}
