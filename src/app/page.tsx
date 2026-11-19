import { ScrollManager } from "@/components/ScrollManager";
import { InfoPanel } from "@/components/ui/InfoPanel";
import { MiniMap } from "@/components/ui/MiniMap";
import { HeroText } from "@/components/ui/HeroText";
import { PlanetTelemetryCard, PlanetTelemetryCardProps } from "@/components/ui/PlanetTelemetryCard";
import { TelemetryToggle } from "@/components/ui/TelemetryToggle";

const PLANET_TELEMETRY: Record<string, PlanetTelemetryCardProps> = {
  sun: {
    id: "sun",
    badge: "Heliophysics Telemetry",
    heading: "Solar Dynamics & Corona Telemetry",
    description: "NASA SDO and Parker Solar Probe live telemetry tracking solar flares, coronal mass ejections, and magnetic reconnection in the solar corona.",
    imageSrc: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800&auto=format&fit=crop",
    altText: "Solar Dynamics Observatory view of solar flares and corona",
    captionText: "SDO Atmospheric Imaging",
    missionLabel: "Mission Authority",
    missionName: "NASA SDO Mission",
    missionLink: "https://science.nasa.gov/mission/sdo/",
  },
  mercury: {
    id: "mercury",
    badge: "Hermean Radar & Surface",
    heading: "Hermean Surface & Caloris Basin",
    description: "MESSENGER and BepiColombo orbital radar mapping Caloris Basin impact structures, global contraction scarps, and exospheric sodium tails.",
    imageSrc: "https://images.unsplash.com/photo-1614724723656-457e78e0b50b?q=80&w=800&auto=format&fit=crop",
    altText: "Hermean cratered surface and Caloris basin impact structure",
    captionText: "MESSENGER Surface Radar",
    missionLabel: "Mission Telemetry",
    missionName: "NASA MESSENGER",
    missionLink: "https://science.nasa.gov/mission/messenger/",
  },
  venus: {
    id: "venus",
    badge: "Atmospheric Radar Topography",
    heading: "Super-Rotational Atmosphere & Radar",
    description: "Magellan synthetic aperture radar penetrating 90-bar supercritical carbon dioxide to chart volcanic shield fields and tectonic tesserae.",
    imageSrc: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop",
    altText: "Venus radar topography and dense sulfuric acid cloud decks",
    captionText: "Magellan SAR Radar",
    missionLabel: "Mission Telemetry",
    missionName: "NASA Magellan Mission",
    missionLink: "https://science.nasa.gov/mission/magellan/",
  },
  earth: {
    id: "earth",
    badge: "Orbital Earth Telemetry",
    heading: "Observatory Data & Telemetry",
    description: "Live orbital telemetry, atmospheric metrics, and cosmic imagery straight from deep space orbiters and ISS remote sensing.",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    altText: "Deep space orbiters and Earth atmospheric observatory telemetry",
    captionText: "Earth Orbit telemetry",
    missionLabel: "Source Authority",
    missionName: "NASA Solar System",
    missionLink: "https://science.nasa.gov/solar-system/",
  },
  luna: {
    id: "luna",
    badge: "Lunar Reconnaissance & Artemis",
    heading: "Lunar Surface & Polar Ice Reserves",
    description: "LRO laser altimetry charting permanently shadowed regions in Shackleton Crater containing volatile sub-surface water ice reservoirs.",
    imageSrc: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=800&auto=format&fit=crop",
    altText: "Lunar Reconnaissance Orbiter high-resolution lunar surface",
    captionText: "LRO Polar Telemetry",
    missionLabel: "Mission Telemetry",
    missionName: "NASA LRO Reconnaissance",
    missionLink: "https://science.nasa.gov/mission/lro/",
  },
  mars: {
    id: "mars",
    badge: "Mars 2020 Astrobiology",
    heading: "Mars Exploration Rover",
    description: "NASA Perseverance rover investigating Jezero Crater geology, ancient habitability, and returning surface telemetry.",
    imageSrc: "/perseverance_rover.webp",
    altText: "NASA Perseverance Mars Exploration Rover surface mission",
    captionText: "Perseverance Rover",
    missionLabel: "Mission Telemetry",
    missionName: "NASA JPL Mars 2020",
    missionLink: "https://mars.nasa.gov/mars2020/",
  },
  asteroid_belt: {
    id: "asteroid_belt",
    badge: "Protoplanetary Archaeology",
    heading: "Protoplanetary Relics & Dawn Mission",
    description: "Dawn spacecraft telemetry detailing differentiated protoplanet Vesta and dwarf planet Ceres' subsurface ocean cryovolcanoes.",
    imageSrc: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop",
    altText: "Dawn spacecraft telemetry of Main Belt asteroids Vesta and Ceres",
    captionText: "Dawn Protoplanet Survey",
    missionLabel: "Mission Telemetry",
    missionName: "NASA Dawn Mission",
    missionLink: "https://science.nasa.gov/mission/dawn/",
  },
  jupiter: {
    id: "jupiter",
    badge: "Jovian Magnetosphere",
    heading: "Juno Jovian Magnetosphere Telemetry",
    description: "Juno polar orbiter probing deep under ammonia cloud decks to map Jupiter's complex dynamo, radiation belts, and Great Red Spot roots.",
    imageSrc: "https://images.unsplash.com/photo-1614314169000-4cf229a1db33?q=80&w=800&auto=format&fit=crop",
    altText: "Juno spacecraft observation of Jupiter Great Red Spot and storms",
    captionText: "Juno Polar Orbit",
    missionLabel: "Mission Telemetry",
    missionName: "NASA Juno Mission",
    missionLink: "https://science.nasa.gov/mission/juno/",
  },
  saturn: {
    id: "saturn",
    badge: "Cassini Ring Dynamics",
    heading: "Cassini Ring Dynamics & Icy Moons",
    description: "Cassini-Huygens telemetry resolving dense water-ice ringlets, Titan's liquid methane hydrologic cycle, and Enceladus cryogeysers.",
    imageSrc: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=800&auto=format&fit=crop",
    altText: "Cassini spacecraft imagery of Saturn rings and icy satellites",
    captionText: "Cassini Ring Survey",
    missionLabel: "Mission Telemetry",
    missionName: "NASA Cassini-Huygens",
    missionLink: "https://science.nasa.gov/mission/cassini/",
  },
  uranus: {
    id: "uranus",
    badge: "Ice Giant Spectroscopy",
    heading: "Retrograde Tilted Ice Giant",
    description: "Voyager 2 telemetry measuring Uranus' unique 97.8° axial tilt, corkscrew magnetotail, and deep icy mantle convective circulation.",
    imageSrc: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?q=80&w=800&auto=format&fit=crop",
    altText: "Voyager 2 observation of Uranus cyan atmosphere and tilt",
    captionText: "Voyager 2 Flyby",
    missionLabel: "Mission Telemetry",
    missionName: "NASA Voyager 2",
    missionLink: "https://science.nasa.gov/mission/voyager/",
  },
  neptune: {
    id: "neptune",
    badge: "Supersonic Atmosphere",
    heading: "Supersonic Winds & Great Dark Spot",
    description: "Voyager 2 and JWST infrared spectroscopy tracking 2,100 km/h retrograde winds and Triton's cryogenic nitrogen plume eruptive vents.",
    imageSrc: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?q=80&w=800&auto=format&fit=crop",
    altText: "Voyager 2 and JWST imaging of Neptune Great Dark Spot",
    captionText: "Voyager 2 Atmosphere",
    missionLabel: "Mission Telemetry",
    missionName: "NASA Voyager 2",
    missionLink: "https://science.nasa.gov/mission/voyager/",
  },
  pluto: {
    id: "pluto",
    badge: "Kuiper Belt Exploration",
    heading: "New Horizons Kuiper Belt Reconnaissance",
    description: "New Horizons flyby data discovering nitrogen ice glaciers in Sputnik Planitia, cryovolcanic water-ice peaks, and Charon's dark tholins.",
    imageSrc: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800&auto=format&fit=crop",
    altText: "New Horizons flyby image of Pluto heart glacier Sputnik Planitia",
    captionText: "New Horizons Flyby",
    missionLabel: "Mission Telemetry",
    missionName: "NASA New Horizons",
    missionLink: "https://science.nasa.gov/mission/new-horizons/",
  },
};

export default function Home() {
  return (
    <>
      <ScrollManager />
      <InfoPanel />
      <MiniMap />
      <TelemetryToggle />
      
      <main id="main-scroll-container" className="flex flex-col relative pointer-events-none z-10">
        
        {/* Section 1: Sun */}
        <section id="section-sun" className="h-screen w-full relative flex flex-col p-8 md:p-24 justify-between">
          <HeroText />
          <div className="hidden md:flex justify-end pointer-events-auto mt-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.sun} />
          </div>
        </section>

        {/* Section 2: Mercury */}
        <section id="section-mercury" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.mercury} />
          </div>
        </section>

        {/* Section 3: Venus */}
        <section id="section-venus" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.venus} />
          </div>
        </section>

        {/* Section 4: Earth */}
        <section id="section-earth" className="h-screen w-full flex flex-col p-8 md:p-24 justify-between">
          <div className="hidden md:flex justify-end pointer-events-auto mt-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.earth} />
          </div>
        </section>

        {/* Section 5: Moon (Luna) */}
        <section id="section-luna" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.luna} />
          </div>
        </section>

        {/* Section 6: Mars */}
        <section id="section-mars" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.mars} />
          </div>
        </section>

        {/* Section 7: Asteroid Belt */}
        <section id="section-asteroid_belt" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.asteroid_belt} />
          </div>
        </section>

        {/* Section 8: Jupiter */}
        <section id="section-jupiter" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.jupiter} />
          </div>
        </section>

        {/* Section 9: Saturn */}
        <section id="section-saturn" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.saturn} />
          </div>
        </section>

        {/* Section 10: Uranus */}
        <section id="section-uranus" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.uranus} />
          </div>
        </section>

        {/* Section 11: Neptune */}
        <section id="section-neptune" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.neptune} />
          </div>
        </section>

        {/* Section 12: Pluto */}
        <section id="section-pluto" className="h-screen w-full flex items-center justify-end p-8 md:p-24 pointer-events-none">
          <div className="hidden md:block pointer-events-auto">
            <PlanetTelemetryCard {...PLANET_TELEMETRY.pluto} />
          </div>
        </section>

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
