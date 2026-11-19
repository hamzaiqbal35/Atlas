import { ScrollManager } from "@/components/ScrollManager";
import { InfoPanel } from "@/components/ui/InfoPanel";
import { MiniMap } from "@/components/ui/MiniMap";
import TiltedCard from "@/components/ui/TiltedCard";
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
                imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                altText="Deep space orbiters and Earth atmospheric observatory telemetry"
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
                <h2 className="font-semibold text-sm">Observatory Data &amp; Telemetry</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Live orbital telemetry, atmospheric metrics, and cosmic imagery straight from deep space orbiters.
                </p>
                <div className="mt-2.5 pt-2 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Source Authority:</span>
                  <a
                    href="https://science.nasa.gov/solar-system/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    NASA Solar System
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Moon */}
        <section id="section-luna" className="h-screen w-full"></section>

        {/* Section 6: Mars */}
        <section id="section-mars" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <div className="bg-background/80 backdrop-blur-md border border-border p-4 rounded-2xl flex flex-col gap-3 shadow-xl max-w-[340px]">
              <TiltedCard
                imageSrc="/perseverance_rover.webp"
                altText="NASA Perseverance Mars Exploration Rover surface mission"
                captionText="Perseverance Rover"
                containerHeight="220px"
                containerWidth="100%"
                imageHeight="220px"
                imageWidth="100%"
                rotateAmplitude={15}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
              />
              <div>
                <h2 className="font-semibold text-sm">Mars Exploration Rover</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  NASA Perseverance rover investigating Jezero Crater geology, ancient habitability, and returning surface telemetry.
                </p>
                <div className="mt-2.5 pt-2 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Mission Telemetry:</span>
                  <a
                    href="https://mars.nasa.gov/mars2020/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    NASA JPL Mars 2020
                  </a>
                </div>
              </div>
            </div>
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

        {/* GEO & Accessibility: Semantic Crawlable Knowledge Kernel */}
        <section className="sr-only" aria-label="Atlas Celestial Guide and Solar System Index">
          <h2>Solar System Mechanics &amp; Planetary Overview</h2>
          <p>
            Atlas provides real-time 3D visualization and astrophysics telemetry for the Solar System, rendering planetary orbits, gravitational physics, and planetary science.
          </p>
          
          <h3>Planetary Properties &amp; Comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Celestial Body</th>
                <th>Classification</th>
                <th>Distance from Sun</th>
                <th>Orbital Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sun</td>
                <td>Yellow Dwarf (G2V)</td>
                <td>0 AU</td>
                <td>230M years (Galactic)</td>
              </tr>
              <tr>
                <td>Mercury</td>
                <td>Terrestrial Planet</td>
                <td>0.39 AU</td>
                <td>88 days</td>
              </tr>
              <tr>
                <td>Venus</td>
                <td>Terrestrial Planet</td>
                <td>0.72 AU</td>
                <td>225 days</td>
              </tr>
              <tr>
                <td>Earth</td>
                <td>Terrestrial Planet</td>
                <td>1.00 AU</td>
                <td>365.25 days</td>
              </tr>
              <tr>
                <td>Mars</td>
                <td>Terrestrial Planet</td>
                <td>1.52 AU</td>
                <td>687 days</td>
              </tr>
              <tr>
                <td>Jupiter</td>
                <td>Gas Giant</td>
                <td>5.20 AU</td>
                <td>11.86 years</td>
              </tr>
              <tr>
                <td>Saturn</td>
                <td>Gas Giant</td>
                <td>9.58 AU</td>
                <td>29.45 years</td>
              </tr>
              <tr>
                <td>Uranus</td>
                <td>Ice Giant</td>
                <td>19.22 AU</td>
                <td>84 years</td>
              </tr>
              <tr>
                <td>Neptune</td>
                <td>Ice Giant</td>
                <td>30.05 AU</td>
                <td>164.8 years</td>
              </tr>
              <tr>
                <td>Pluto</td>
                <td>Dwarf Planet</td>
                <td>39.48 AU</td>
                <td>248 years</td>
              </tr>
            </tbody>
          </table>

          <h3>Astrophysics Research Citations</h3>
          <ul>
            <li>
              <a href="https://science.nasa.gov/solar-system/" target="_blank" rel="noopener noreferrer">
                NASA Planetary Science Division
              </a>
            </li>
            <li>
              <a href="https://www.esa.int/Science_Exploration/Space_Science" target="_blank" rel="noopener noreferrer">
                ESA Space Science Directorate
              </a>
            </li>
            <li>
              <a href="https://ssd.jpl.nasa.gov/horizons/" target="_blank" rel="noopener noreferrer">
                NASA JPL Horizons Ephemeris System
              </a>
            </li>
          </ul>
        </section>

      </main>
    </>
  );
}
