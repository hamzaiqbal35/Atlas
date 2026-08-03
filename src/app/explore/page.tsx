import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/categories";
import MagicBento, { BentoCardData } from "@/components/ui/MagicBento";
import nasaImages from "@/lib/nasa_images.json";

export default function ExploreHubPage() {
  // Transform our CATEGORIES into BentoCardData
  const bentoCards: BentoCardData[] = CATEGORIES.map((cat, index) => {
    // Extract subcategories for description
    const subDesc = cat.subcategories 
      ? cat.subcategories.slice(0, 4).map(sub => sub.title).join(" • ") + (cat.subcategories.length > 4 ? ` • +${cat.subcategories.length - 4} more` : "")
      : cat.description;

    return {
      title: cat.title,
      description: subDesc || cat.description,
      label: `0${index + 1}`.slice(-2),
      link: `/explore/${cat.slug}`,
      image: (nasaImages as Record<string, string>)[cat.slug] || "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000",
    };
  });

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative z-10 selection:bg-zinc-500/30 flex flex-col overflow-hidden">
      {/* Sleek Minimalist Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep pure background */}
        <div className="absolute inset-0 bg-[#09090b]" />
        
        {/* Extremely subtle, sophisticated central glow (not bright/neon) */}
        <div className="absolute top-[10%] left-[30%] w-[40%] h-[40%] rounded-full bg-zinc-400/5 blur-[120px] mix-blend-screen" />
        
        {/* Subtle dot grid pattern for technical/advanced feel */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]" />
      </div>

      {/* Hero Section */}
      <div className="w-full px-6 pt-32 pb-16 relative z-10 text-center flex flex-col items-center">
        <div className="mb-8">
          <Image 
            src="/atlas_logo_transparent.png" 
            alt="Atlas Logo" 
            width={120} 
            height={120} 
            className="object-contain drop-shadow-2xl opacity-90"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 text-zinc-100">
          The Atlas
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed font-light">
          Navigating {CATEGORIES.length} primary disciplines and hundreds of cosmic sub-domains across the universe.
        </p>
      </div>

      {/* Bento Grid Section */}
      <div className="w-full pb-32 relative z-10 px-4 md:px-8">
        <MagicBento 
          cards={bentoCards}
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={400}
          particleCount={10}
          glowColor="255, 255, 255" // Pure elegant white/silver glow
        />
        
        <div className="mt-16 flex justify-center">
          <Link 
            href="/"
            className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full font-medium transition-all text-zinc-300 hover:text-white shadow-xl hover:shadow-zinc-800/50"
          >
            Return to Solar System
          </Link>
        </div>
      </div>
    </div>
  );
}
