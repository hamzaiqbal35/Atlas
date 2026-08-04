import { Button } from "@/components/ui/button";
import { ScrollManager } from "@/components/ScrollManager";
import { InfoPanel } from "@/components/ui/InfoPanel";
import { MiniMap } from "@/components/ui/MiniMap";
import TiltedCard from "@/components/ui/TiltedCard";
import Folder from "@/components/ui/Folder";
import GalaxyBackground from "@/components/ui/GalaxyBackground";
import { HeroText } from "@/components/ui/HeroText";
export default function Home() {
  return (
    <>
      <ScrollManager />
      <InfoPanel />
      <MiniMap />
      
      <main id="main-scroll-container" className="flex flex-col relative pointer-events-none z-10">
        
        {/* Section 1: Sun */}
        <section id="section-sun" className="h-screen w-full relative flex flex-col p-8 md:p-24 justify-between">
          <HeroText />
        </section>

        {/* Section 2: Mercury */}
        <section id="section-mercury" className="h-screen w-full"></section>

        {/* Section 3: Venus */}
        <section id="section-venus" className="h-screen w-full"></section>

        {/* Section 4: Earth */}
        <section id="section-earth" className="h-screen w-full flex flex-col p-8 md:p-24 justify-between">
          <div className="hidden md:flex justify-end pointer-events-auto mt-auto">
            <div className="bg-background/80 backdrop-blur-md border border-border p-4 rounded-2xl flex flex-col gap-3 shadow-xl max-w-[340px]">
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
                altText="Deep Space Observatory"
                captionText="Earth Orbit telemetry"
                containerHeight="200px"
                containerWidth="100%"
                imageHeight="200px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
              />
              <div>
                <h3 className="font-semibold text-sm">Observatory Data</h3>
                <p className="text-xs text-muted-foreground mt-1">Live telemetry and imagery straight from deep space orbiters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Moon */}
        <section id="section-luna" className="h-screen w-full"></section>

        {/* Section 6: Mars */}
        <section id="section-mars" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
             <TiltedCard
                imageSrc="/perseverance_rover.png"
                altText="Mars Rover"
                captionText="Perseverance Rover"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={15}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
              />
          </div>
        </section>

        {/* Section 7: Asteroid Belt */}
        <section id="section-asteroid_belt" className="h-screen w-full"></section>

        {/* Section 8: Jupiter */}
        <section id="section-jupiter" className="h-screen w-full"></section>

        {/* Section 9: Saturn */}
        <section id="section-saturn" className="h-screen w-full"></section>

        {/* Section 10: Uranus */}
        <section id="section-uranus" className="h-screen w-full"></section>

        {/* Section 11: Neptune */}
        <section id="section-neptune" className="h-screen w-full"></section>

        {/* Section 12: Pluto */}
        <section id="section-pluto" className="h-screen w-full"></section>

      </main>
    </>
  );
}
