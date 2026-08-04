"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Thermometer, Weight, Activity, Orbit, Ruler, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import LineSidebar from "@/components/ui/LineSidebar";
import { DetailedEncyclopedia, SectionContent } from "@/data/detailedEncyclopedia";

interface BodyDetailClientProps {
  staticData: any;
  liveData: any;
  encyclopediaData?: DetailedEncyclopedia;
}

const renderSectionContent = (content?: SectionContent, reverse = false) => {
  if (!content) return null;
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
        {content.text.map((paragraph, index) => (
          <p key={index} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-light">
            {paragraph}
          </p>
        ))}
      </div>
      {content.imageUrl && (
        <motion.div 
          className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src={content.imageUrl} 
            alt={content.imageAlt || "Space Image"} 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[20000ms] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      )}
    </div>
  );
};


const BODY_THEMES: Record<string, { primary: string, bg1: string, bg2: string }> = {
  sun: { primary: '#f59e0b', bg1: 'rgba(245, 158, 11, 0.15)', bg2: 'rgba(217, 119, 6, 0.05)' },
  mercury: { primary: '#a3a3a3', bg1: 'rgba(163, 163, 163, 0.15)', bg2: 'rgba(115, 115, 115, 0.05)' },
  venus: { primary: '#fcd34d', bg1: 'rgba(252, 211, 77, 0.15)', bg2: 'rgba(217, 119, 6, 0.05)' },
  earth: { primary: '#3b82f6', bg1: 'rgba(59, 130, 246, 0.15)', bg2: 'rgba(29, 78, 216, 0.05)' },
  moon: { primary: '#d4d4d8', bg1: 'rgba(212, 212, 216, 0.15)', bg2: 'rgba(161, 161, 170, 0.05)' },
  mars: { primary: '#ef4444', bg1: 'rgba(239, 68, 68, 0.15)', bg2: 'rgba(185, 28, 28, 0.05)' },
  jupiter: { primary: '#d97706', bg1: 'rgba(217, 119, 6, 0.15)', bg2: 'rgba(180, 83, 9, 0.05)' },
  saturn: { primary: '#fde047', bg1: 'rgba(253, 224, 71, 0.15)', bg2: 'rgba(234, 179, 8, 0.05)' },
  uranus: { primary: '#2dd4bf', bg1: 'rgba(45, 212, 191, 0.15)', bg2: 'rgba(13, 148, 136, 0.05)' },
  neptune: { primary: '#2563eb', bg1: 'rgba(37, 99, 235, 0.15)', bg2: 'rgba(29, 78, 216, 0.05)' },
  pluto: { primary: '#d6d3d1', bg1: 'rgba(214, 211, 209, 0.15)', bg2: 'rgba(168, 162, 158, 0.05)' },
  default: { primary: '#ffffff', bg1: 'rgba(255, 255, 255, 0.1)', bg2: 'rgba(255, 255, 255, 0.05)' },
};

export function BodyDetailClient({ staticData, liveData, encyclopediaData }: BodyDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = BODY_THEMES[staticData?.id?.toLowerCase() || ''] || BODY_THEMES.default;

  const scrollToSection = (index: number, label: string) => {
    const id = label.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeSection, setActiveSection] = useState(0);

  const { sectionIds, sectionLabels } = useMemo(() => {
    const ids = ['overview', 'physical-properties', 'orbital-data', 'composition', 'exploration'];
    const labels = ["Overview", "Physical Properties", "Orbital Data", "Composition", "Exploration"];
    
    if (encyclopediaData?.sections?.moons) {
      ids.push('moons');
      labels.push('Moons');
    }
    return { sectionIds: ids, sectionLabels: labels };
  }, [encyclopediaData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionIds.indexOf(entry.target.id);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div 
      className="min-h-screen bg-background text-foreground flex selection:bg-[var(--theme-primary)]/30"
      style={{ '--theme-primary': theme.primary } as React.CSSProperties}
    >
      
      {/* Sidebar Navigation */}
      <div className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 flex-col justify-center border-r border-border/10 bg-background/80 backdrop-blur-xl z-40">
        <div className="absolute top-28 left-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Atlas
          </Link>
        </div>
        <LineSidebar 
          items={sectionLabels} 
          activeItem={activeSection}
          onItemClick={(idx) => {
            document.getElementById(sectionIds[idx])?.scrollIntoView({ behavior: 'smooth' });
          }}
          accentColor={theme.primary}
        />
      </div>

      {/* Main Content Area */}
      <div 
        ref={containerRef}
        className="flex-1 lg:ml-64 scroll-smooth relative"
      >
        {/* Lightweight CSS Space Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none" style={{
          backgroundColor: '#0a0a10',
          backgroundImage: `
            radial-gradient(circle at 15% 50%, ${theme.bg1}, transparent 40%),
            radial-gradient(circle at 85% 30%, ${theme.bg2}, transparent 50%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `
        }} />

        {/* Mobile Nav */}
        <nav className="lg:hidden p-6 absolute top-0 left-0 z-50">
          <Link href="/">
            <Button variant="ghost" className="gap-2 -ml-4 bg-background/50 backdrop-blur-md">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </nav>

        {/* Hero / Overview Section */}
        <section id="overview" className="min-h-screen flex flex-col justify-center px-6 py-16 md:p-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-4 capitalize bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/20">
              {staticData.name}
            </h1>
            <p className="text-2xl md:text-4xl text-[var(--theme-primary)] font-medium mb-16 tracking-tight opacity-80">
              {staticData.tagline}
            </p>
            {renderSectionContent(encyclopediaData?.sections.overview, false)}
          </motion.div>
        </section>

        {/* Live Dashboard / Physical Properties */}
        <section id="physical-properties" className="py-16 md:py-32 px-6 md:px-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 flex items-center gap-4 tracking-tight">
              <Ruler className="w-10 h-10 text-[var(--theme-primary)]" /> Physical Properties
            </h2>
            
            {liveData ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card/30 border border-border/30 rounded-3xl p-8 backdrop-blur-md hover:bg-card/50 transition-all hover:border-[var(--theme-primary)]/50 group flex flex-col justify-center">
                  <div className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wider">Mean Radius</div>
                  <div className="text-3xl 2xl:text-4xl font-mono group-hover:text-[var(--theme-primary)] transition-colors">
                    {liveData.meanRadius ? <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1"><span>{liveData.meanRadius.toLocaleString()}</span> <span className="text-xl text-muted-foreground font-sans whitespace-nowrap">km</span></span> : "N/A"}
                  </div>
                </div>
                <div className="bg-card/30 border border-border/30 rounded-3xl p-8 backdrop-blur-md hover:bg-card/50 transition-all hover:border-[var(--theme-primary)]/50 group flex flex-col justify-center">
                  <div className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wider">Density</div>
                  <div className="text-3xl 2xl:text-4xl font-mono group-hover:text-[var(--theme-primary)] transition-colors">
                    {liveData.density ? <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1"><span>{liveData.density}</span> <span className="text-xl text-muted-foreground font-sans whitespace-nowrap">g/cm³</span></span> : "N/A"}
                  </div>
                </div>
                <div className="bg-card/30 border border-border/30 rounded-3xl p-8 backdrop-blur-md hover:bg-card/50 transition-all hover:border-[var(--theme-primary)]/50 group flex flex-col justify-center">
                  <div className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wider">Mass</div>
                  <div className="text-3xl 2xl:text-4xl font-mono group-hover:text-[var(--theme-primary)] transition-colors">
                    {liveData.mass ? <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1"><span>{liveData.mass.massValue}</span> <span className="text-lg 2xl:text-xl text-muted-foreground font-sans whitespace-nowrap">× 10^{liveData.mass.massExponent} kg</span></span> : "N/A"}
                  </div>
                </div>
                <div className="bg-card/30 border border-border/30 rounded-3xl p-8 backdrop-blur-md hover:bg-card/50 transition-all hover:border-[var(--theme-primary)]/50 group flex flex-col justify-center">
                  <div className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wider">Gravity</div>
                  <div className="text-3xl 2xl:text-4xl font-mono group-hover:text-[var(--theme-primary)] transition-colors">
                    {liveData.gravity ? <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1"><span>{liveData.gravity}</span> <span className="text-xl text-muted-foreground font-sans whitespace-nowrap">m/s²</span></span> : "N/A"}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[var(--theme-primary)]/10 border border-[var(--theme-primary)]/20 rounded-3xl p-8 flex items-start gap-4">
                <Info className="w-8 h-8 text-[var(--theme-primary)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Telemetry Data Inapplicable</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {encyclopediaData?.unavailabilityReasons?.telemetry || "Live telemetry metrics such as solid surface gravity or uniform density are not applicable for this celestial body due to its physical nature."}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </section>

        {/* Orbital Data */}
        <section id="orbital-data" className="py-16 md:py-32 px-6 md:px-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 flex items-center gap-4 tracking-tight">
              <Orbit className="w-10 h-10 text-[var(--theme-primary)]" /> Orbital Mechanics
            </h2>
            
            {renderSectionContent(encyclopediaData?.sections.orbit, true)}

            {liveData && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <div className="bg-card/20 border border-border/30 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between items-start hover:bg-card/40 transition-colors">
                  <div className="text-sm text-muted-foreground mb-2">Semi-Major Axis</div>
                  <div className="text-2xl font-mono">
                    {liveData.semimajorAxis ? <span className="flex items-baseline gap-2">{liveData.semimajorAxis.toLocaleString()} <span className="text-sm text-muted-foreground font-sans">km</span></span> : "N/A"}
                  </div>
                </div>
                <div className="bg-card/20 border border-border/30 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between items-start hover:bg-card/40 transition-colors">
                  <div className="text-sm text-muted-foreground mb-2">Perihelion</div>
                  <div className="text-2xl font-mono">
                    {liveData.perihelion ? <span className="flex items-baseline gap-2">{liveData.perihelion.toLocaleString()} <span className="text-sm text-muted-foreground font-sans">km</span></span> : "N/A"}
                  </div>
                </div>
                <div className="bg-card/20 border border-border/30 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between items-start hover:bg-card/40 transition-colors">
                  <div className="text-sm text-muted-foreground mb-2">Aphelion</div>
                  <div className="text-2xl font-mono">
                    {liveData.aphelion ? <span className="flex items-baseline gap-2">{liveData.aphelion.toLocaleString()} <span className="text-sm text-muted-foreground font-sans">km</span></span> : "N/A"}
                  </div>
                </div>
                <div className="bg-card/20 border border-border/30 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between items-start hover:bg-card/40 transition-colors">
                  <div className="text-sm text-muted-foreground mb-2">Axial Tilt</div>
                  <div className="text-2xl font-mono">
                    {liveData.axialTilt !== null ? <span className="flex items-baseline gap-2">{liveData.axialTilt}°</span> : "N/A"}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </section>

        {/* Composition */}
        <section id="composition" className="py-16 md:py-32 px-6 md:px-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 flex items-center gap-4 tracking-tight">
              <Thermometer className="w-10 h-10 text-[var(--theme-primary)]" /> Composition & Atmosphere
            </h2>
            
            {renderSectionContent(encyclopediaData?.sections.composition, false)}

            {liveData && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl">
                 <div className="bg-card/30 border border-border/40 rounded-2xl p-6 backdrop-blur-sm flex justify-between items-center">
                  <div className="text-lg font-medium text-muted-foreground">Avg Temperature</div>
                  <div className="text-3xl font-mono">{liveData.avgTemp ? `${liveData.avgTemp - 273.15 > 0 ? '+' : ''}${(liveData.avgTemp - 273.15).toFixed(1)}°C` : "N/A"}</div>
                </div>
                <div className="bg-card/30 border border-border/40 rounded-2xl p-6 backdrop-blur-sm flex justify-between items-center">
                  <div className="text-lg font-medium text-muted-foreground">Known Moons</div>
                  <div className="text-3xl font-mono text-[var(--theme-primary)]">{liveData.moons ? liveData.moons.length : 0}</div>
                </div>
              </div>
            )}
          </motion.div>
        </section>

        {/* Exploration */}
        <section id="exploration" className="py-16 md:py-32 px-6 md:px-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 flex items-center gap-4 tracking-tight">
              <Activity className="w-10 h-10 text-[var(--theme-primary)]" /> Exploration History
            </h2>
            
            {renderSectionContent(encyclopediaData?.sections.exploration, true)}

            {liveData?.discoveredBy && (
              <div className="inline-block bg-[var(--theme-primary)]/10 border border-[var(--theme-primary)]/30 rounded-full px-8 py-4 text-lg font-medium text-[var(--theme-primary)] mt-8 backdrop-blur-md">
                Discovered by {liveData.discoveredBy} on {liveData.discoveryDate}
              </div>
            )}
          </motion.div>
        </section>

        {encyclopediaData?.sections?.moons && (
          <section id="moons" className="py-16 md:py-32 px-6 md:px-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 flex items-center gap-4 tracking-tight">
                <Orbit className="w-10 h-10 text-[var(--theme-primary)]" /> Natural Satellites
              </h2>
              {renderSectionContent(encyclopediaData.sections.moons, false)}
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
}
