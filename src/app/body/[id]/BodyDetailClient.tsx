"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Thermometer, Weight, Activity, Orbit, Ruler, Info, 
  Sparkles, Compass, Shield, Zap, Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LineSidebar from "@/components/ui/LineSidebar";
import { DetailedEncyclopedia, SectionContent } from "@/data/detailedEncyclopedia";

interface BodyDetailClientProps {
  staticData: any;
  liveData: any;
  encyclopediaData?: DetailedEncyclopedia;
}

const renderSectionContent = (content?: SectionContent, _reverse = false) => {
  if (!content) return null;
  return (
    <div className="max-w-4xl mb-16">
      {content.text.map((paragraph, index) => (
        <p key={index} className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6 font-light">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

const BODY_THEMES: Record<string, {
  primary: string;
  secondary: string;
  gradient: string;
  bg1: string;
  bg2: string;
  accentBorder: string;
  cardGlow: string;
  badgeBg: string;
  badgeText: string;
}> = {
  sun: {
    primary: '#f59e0b',
    secondary: '#ef4444',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    bg1: 'rgba(245, 158, 11, 0.38)',
    bg2: 'rgba(239, 68, 68, 0.28)',
    accentBorder: 'hover:border-amber-400/60',
    cardGlow: 'rgba(245, 158, 11, 0.18)',
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    badgeText: 'text-amber-300',
  },
  mercury: {
    primary: '#38bdf8',
    secondary: '#94a3b8',
    gradient: 'from-sky-300 via-slate-200 to-cyan-400',
    bg1: 'rgba(56, 189, 248, 0.35)',
    bg2: 'rgba(148, 163, 184, 0.22)',
    accentBorder: 'hover:border-sky-400/60',
    cardGlow: 'rgba(56, 189, 248, 0.18)',
    badgeBg: 'bg-sky-500/10 border-sky-500/30',
    badgeText: 'text-sky-300',
  },
  venus: {
    primary: '#fbbf24',
    secondary: '#f97316',
    gradient: 'from-yellow-300 via-amber-400 to-orange-500',
    bg1: 'rgba(251, 191, 36, 0.38)',
    bg2: 'rgba(249, 115, 22, 0.28)',
    accentBorder: 'hover:border-amber-400/60',
    cardGlow: 'rgba(251, 191, 36, 0.18)',
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    badgeText: 'text-amber-300',
  },
  earth: {
    primary: '#38bdf8',
    secondary: '#10b981',
    gradient: 'from-blue-400 via-cyan-400 to-emerald-400',
    bg1: 'rgba(56, 189, 248, 0.40)',
    bg2: 'rgba(16, 185, 129, 0.28)',
    accentBorder: 'hover:border-cyan-400/60',
    cardGlow: 'rgba(56, 189, 248, 0.20)',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/30',
    badgeText: 'text-cyan-300',
  },
  moon: {
    primary: '#818cf8',
    secondary: '#94a3b8',
    gradient: 'from-indigo-300 via-slate-200 to-sky-300',
    bg1: 'rgba(129, 140, 248, 0.35)',
    bg2: 'rgba(148, 163, 184, 0.22)',
    accentBorder: 'hover:border-indigo-400/60',
    cardGlow: 'rgba(129, 140, 248, 0.18)',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30',
    badgeText: 'text-indigo-300',
  },
  mars: {
    primary: '#ef4444',
    secondary: '#f97316',
    gradient: 'from-red-500 via-orange-500 to-rose-600',
    bg1: 'rgba(239, 68, 68, 0.40)',
    bg2: 'rgba(249, 115, 22, 0.28)',
    accentBorder: 'hover:border-red-500/60',
    cardGlow: 'rgba(239, 68, 68, 0.20)',
    badgeBg: 'bg-red-500/10 border-red-500/30',
    badgeText: 'text-red-300',
  },
  jupiter: {
    primary: '#f59e0b',
    secondary: '#ea580c',
    gradient: 'from-amber-400 via-yellow-500 to-orange-600',
    bg1: 'rgba(245, 158, 11, 0.38)',
    bg2: 'rgba(234, 88, 12, 0.28)',
    accentBorder: 'hover:border-amber-400/60',
    cardGlow: 'rgba(245, 158, 11, 0.18)',
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    badgeText: 'text-amber-300',
  },
  saturn: {
    primary: '#eab308',
    secondary: '#ca8a04',
    gradient: 'from-yellow-300 via-amber-400 to-yellow-500',
    bg1: 'rgba(234, 179, 8, 0.38)',
    bg2: 'rgba(202, 138, 4, 0.28)',
    accentBorder: 'hover:border-yellow-400/60',
    cardGlow: 'rgba(234, 179, 8, 0.18)',
    badgeBg: 'bg-yellow-500/10 border-yellow-500/30',
    badgeText: 'text-yellow-300',
  },
  uranus: {
    primary: '#06b6d4',
    secondary: '#2dd4bf',
    gradient: 'from-cyan-400 via-teal-400 to-emerald-400',
    bg1: 'rgba(6, 182, 212, 0.40)',
    bg2: 'rgba(45, 212, 191, 0.28)',
    accentBorder: 'hover:border-teal-400/60',
    cardGlow: 'rgba(6, 182, 212, 0.20)',
    badgeBg: 'bg-teal-500/10 border-teal-500/30',
    badgeText: 'text-teal-300',
  },
  neptune: {
    primary: '#3b82f6',
    secondary: '#6366f1',
    gradient: 'from-blue-500 via-indigo-500 to-sky-400',
    bg1: 'rgba(37, 99, 235, 0.42)',
    bg2: 'rgba(99, 102, 241, 0.30)',
    accentBorder: 'hover:border-blue-500/60',
    cardGlow: 'rgba(37, 99, 235, 0.20)',
    badgeBg: 'bg-blue-500/10 border-blue-500/30',
    badgeText: 'text-blue-300',
  },
  pluto: {
    primary: '#38bdf8',
    secondary: '#c2410c',
    gradient: 'from-sky-400 via-slate-300 to-orange-400',
    bg1: 'rgba(56, 189, 248, 0.35)',
    bg2: 'rgba(194, 65, 12, 0.25)',
    accentBorder: 'hover:border-sky-400/60',
    cardGlow: 'rgba(56, 189, 248, 0.18)',
    badgeBg: 'bg-sky-500/10 border-sky-500/30',
    badgeText: 'text-sky-300',
  },
  default: {
    primary: '#6366f1',
    secondary: '#06b6d4',
    gradient: 'from-indigo-400 via-purple-400 to-cyan-400',
    bg1: 'rgba(99, 102, 241, 0.38)',
    bg2: 'rgba(6, 182, 212, 0.28)',
    accentBorder: 'hover:border-indigo-400/60',
    cardGlow: 'rgba(99, 102, 241, 0.18)',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30',
    badgeText: 'text-indigo-300',
  },
};

export function BodyDetailClient({ staticData, liveData, encyclopediaData }: BodyDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = BODY_THEMES[staticData?.id?.toLowerCase() || ''] || BODY_THEMES.default;

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
      className="min-h-screen bg-[#06060c] text-foreground flex selection:bg-[var(--theme-primary)]/30 overflow-x-hidden"
      style={{ '--theme-primary': theme.primary } as React.CSSProperties}
    >
      
      {/* ReactBits-style Cosmic Nebula Backdrops */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute -top-[15%] left-[20%] w-[900px] h-[650px] rounded-full blur-[150px] opacity-65 mix-blend-screen transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${theme.bg1} 0%, transparent 70%)` }}
        />
        <div 
          className="absolute top-[35%] right-[5%] w-[800px] h-[600px] rounded-full blur-[170px] opacity-50 mix-blend-screen transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${theme.bg2} 0%, transparent 70%)` }}
        />
        <div 
          className="absolute bottom-[-10%] left-[25%] w-[950px] h-[550px] rounded-full blur-[190px] opacity-40 mix-blend-screen"
          style={{ background: `radial-gradient(circle, ${theme.bg1} 0%, transparent 70%)` }}
        />

        {/* Celestial Starfield Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.045] [mask-image:radial-gradient(ellipse_at_center,white_0%,transparent_80%)]"
          style={{ 
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }}
        />
      </div>

      {/* Observatory Left Sidebar Navigation */}
      <div className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 flex-col justify-center border-r border-white/[0.08] bg-black/60 backdrop-blur-2xl z-40">
        <div className="absolute top-28 left-6">
          <Link href="/" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.12] hover:border-white/[0.25] text-zinc-300 hover:text-white transition-all text-xs font-mono group shadow-md">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" /> 
            <span>BACK TO ATLAS</span>
          </Link>
        </div>
        <LineSidebar 
          items={sectionLabels} 
          activeItem={activeSection}
          onItemClick={(idx) => {
            const el = document.getElementById(sectionIds[idx]);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          accentColor={theme.primary}
        />
      </div>

      {/* Main Observatory Content Area */}
      <div 
        ref={containerRef}
        className="flex-1 lg:ml-64 scroll-smooth relative"
      >
        {/* Overview Hero Section */}
        <section id="overview" className="min-h-screen flex flex-col justify-start lg:justify-center px-6 pt-36 pb-20 md:p-24 relative scroll-mt-24">
          
          {/* Mobile Back Nav */}
          <nav className="lg:hidden mb-8 z-50">
            <Link href="/">
              <Button variant="ghost" className="gap-2 -ml-4 bg-white/[0.06] border border-white/[0.1] backdrop-blur-md rounded-full text-zinc-200">
                <ArrowLeft className="w-4 h-4" />
                Back to Atlas
              </Button>
            </Link>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Header Telemetry Pill */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className={`px-3 py-1 rounded-full ${theme.badgeBg} border text-xs font-mono font-semibold uppercase tracking-[0.2em] ${theme.badgeText} backdrop-blur-md`}>
                DEEP SPACE OBSERVATORY
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono uppercase tracking-wider text-zinc-400">
                TELEMETRY ARCHIVE
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
                LE SYSTÈME SOLAIRE FEED
              </span>
            </div>

            {/* Huge Glowing Headline */}
            <h1 className={`text-6xl md:text-9xl font-black tracking-tighter mb-4 capitalize bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent drop-shadow-[0_2px_30px_rgba(255,255,255,0.25)]`}>
              {staticData.name}
            </h1>

            <p className="text-2xl md:text-4xl text-zinc-300 font-light mb-16 tracking-tight max-w-3xl">
              {staticData.tagline}
            </p>

            {/* Overview Text Content in Glass Container */}
            <div className="relative rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.1] shadow-2xl backdrop-blur-xl mb-12">
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
              {renderSectionContent(encyclopediaData?.sections.overview, false)}
            </div>
          </motion.div>
        </section>

        {/* Physical Properties Telemetry Grid */}
        <section id="physical-properties" className="min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 md:px-24 relative scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full relative z-10"
          >
            {/* Unified Glass Container Box matching the rest of the page */}
            <div className="relative rounded-[2.5rem] p-8 md:p-14 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.1] shadow-2xl backdrop-blur-xl">
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              <div className="flex items-center gap-3 mb-10 md:mb-12">
                <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md shadow-lg" style={{ color: theme.primary }}>
                  <Ruler className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Physical Properties</h2>
                  <p className="text-sm font-mono uppercase tracking-widest text-zinc-400 mt-1">Calibrated planetary dimensions & mass metrics</p>
                </div>
              </div>
              
              {liveData ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {liveData.meanRadius ? (
                    <div className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#151426]/80 to-[#0a0914]/95 border border-white/[0.1] ${theme.accentBorder} shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 group overflow-hidden`}>
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                      <div className="text-xs text-cyan-400 mb-3 font-mono font-medium uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" /> Mean Radius
                      </div>
                      <div className="text-2xl 2xl:text-3xl font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                        <span className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                          <span>{liveData.meanRadius.toLocaleString()}</span> 
                          <span className="text-sm text-zinc-400 font-sans font-normal">km</span>
                        </span>
                      </div>
                    </div>
                  ) : null}

                  {liveData.density ? (
                    <div className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#151426]/80 to-[#0a0914]/95 border border-white/[0.1] ${theme.accentBorder} shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 group overflow-hidden`}>
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                      <div className="text-xs text-emerald-400 mb-3 font-mono font-medium uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" /> Bulk Density
                      </div>
                      <div className="text-2xl 2xl:text-3xl font-mono font-bold text-white group-hover:text-emerald-300 transition-colors">
                        <span className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                          <span>{liveData.density}</span> 
                          <span className="text-sm text-zinc-400 font-sans font-normal">g/cm³</span>
                        </span>
                      </div>
                    </div>
                  ) : null}

                  {liveData.mass ? (
                    <div className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#151426]/80 to-[#0a0914]/95 border border-white/[0.1] ${theme.accentBorder} shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 group overflow-hidden`}>
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                      <div className="text-xs text-amber-400 mb-3 font-mono font-medium uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" /> Total Mass
                      </div>
                      <div className="text-xl 2xl:text-2xl font-mono font-bold text-white group-hover:text-amber-300 transition-colors">
                        <span className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                          <span>{liveData.mass.massValue}</span> 
                          <span className="text-xs text-zinc-400 font-sans font-normal">× 10^{liveData.mass.massExponent} kg</span>
                        </span>
                      </div>
                    </div>
                  ) : null}

                  {liveData.gravity ? (
                    <div className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#151426]/80 to-[#0a0914]/95 border border-white/[0.1] ${theme.accentBorder} shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 group overflow-hidden`}>
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
                      <div className="text-xs text-purple-400 mb-3 font-mono font-medium uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" /> Surface Gravity
                      </div>
                      <div className="text-2xl 2xl:text-3xl font-mono font-bold text-white group-hover:text-purple-300 transition-colors">
                        <span className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                          <span>{liveData.gravity}</span> 
                          <span className="text-sm text-zinc-400 font-sans font-normal">m/s²</span>
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl flex items-start gap-4">
                  <Info className="w-8 h-8 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Telemetry Data Inapplicable</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed font-light">
                      {encyclopediaData?.unavailabilityReasons?.telemetry || "Live telemetry metrics such as solid surface gravity or uniform density are not applicable for this celestial body due to its physical nature."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        {/* Orbital Mechanics */}
        <section id="orbital-data" className="min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 md:px-24 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12 md:mb-16">
              <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md shadow-lg" style={{ color: theme.primary }}>
                <Orbit className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Orbital Mechanics</h2>
                <p className="text-sm font-mono uppercase tracking-widest text-zinc-400 mt-1">Keplerian orbital parameters & trajectory analysis</p>
              </div>
            </div>
            
            <div className="relative rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.1] shadow-2xl backdrop-blur-xl mb-12">
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
              {renderSectionContent(encyclopediaData?.sections.orbit, true)}
            </div>

            {liveData && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {liveData.semimajorAxis ? (
                  <div className={`relative rounded-3xl p-8 bg-gradient-to-b from-[#151426]/80 to-[#0a0914]/95 border border-white/[0.1] hover:border-cyan-400/50 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 group overflow-hidden`}>
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                    <div className="text-xs text-cyan-400 mb-3 font-mono font-medium uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" /> Semi-Major Axis
                    </div>
                    <div className="text-2xl 2xl:text-3xl font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span>{liveData.semimajorAxis.toLocaleString()}</span> 
                        <span className="text-sm text-zinc-400 font-sans font-normal">km</span>
                      </span>
                    </div>
                  </div>
                ) : null}

                {liveData.perihelion ? (
                  <div className={`relative rounded-3xl p-8 bg-gradient-to-b from-[#151426]/80 to-[#0a0914]/95 border border-white/[0.1] hover:border-amber-400/50 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 group overflow-hidden`}>
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                    <div className="text-xs text-amber-400 mb-3 font-mono font-medium uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" /> Perihelion
                    </div>
                    <div className="text-2xl 2xl:text-3xl font-mono font-bold text-white group-hover:text-amber-300 transition-colors">
                      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span>{liveData.perihelion.toLocaleString()}</span> 
                        <span className="text-sm text-zinc-400 font-sans font-normal">km</span>
                      </span>
                    </div>
                  </div>
                ) : null}

                {liveData.aphelion ? (
                  <div className={`relative rounded-3xl p-8 bg-gradient-to-b from-[#151426]/80 to-[#0a0914]/95 border border-white/[0.1] hover:border-indigo-400/50 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 group overflow-hidden`}>
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
                    <div className="text-xs text-indigo-400 mb-3 font-mono font-medium uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_#818cf8]" /> Aphelion
                    </div>
                    <div className="text-2xl 2xl:text-3xl font-mono font-bold text-white group-hover:text-indigo-300 transition-colors">
                      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span>{liveData.aphelion.toLocaleString()}</span> 
                        <span className="text-sm text-zinc-400 font-sans font-normal">km</span>
                      </span>
                    </div>
                  </div>
                ) : null}

                {liveData.axialTilt !== null && liveData.axialTilt !== undefined && liveData.axialTilt !== 0 ? (
                  <div className={`relative rounded-3xl p-8 bg-gradient-to-b from-[#151426]/80 to-[#0a0914]/95 border border-white/[0.1] hover:border-emerald-400/50 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 group overflow-hidden`}>
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                    <div className="text-xs text-emerald-400 mb-3 font-mono font-medium uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" /> Axial Tilt
                    </div>
                    <div className="text-2xl 2xl:text-3xl font-mono font-bold text-white group-hover:text-emerald-300 transition-colors">
                      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span>{liveData.axialTilt}</span>
                        <span className="text-sm text-zinc-400 font-sans font-normal">°</span>
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </motion.div>
        </section>

        {/* Composition & Atmosphere */}
        <section id="composition" className="min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 md:px-24 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3 mb-12 md:mb-16">
              <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md shadow-lg" style={{ color: theme.primary }}>
                <Thermometer className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Composition & Atmosphere</h2>
                <p className="text-sm font-mono uppercase tracking-widest text-zinc-400 mt-1">Chemical abundance & thermodynamic metrics</p>
              </div>
            </div>
            
            <div className="relative rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.1] shadow-2xl backdrop-blur-xl mb-12">
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
              {renderSectionContent(encyclopediaData?.sections.composition, false)}
            </div>

            {liveData && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl">
                <div className="relative rounded-3xl p-8 bg-gradient-to-b from-[#151426]/80 to-[#0a0914]/95 border border-white/[0.1] hover:border-amber-400/50 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 flex items-center justify-between overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                  <div>
                    <div className="text-xs text-amber-400 mb-2 font-mono font-medium uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" /> Average Temperature
                    </div>
                    <div className="text-3xl font-mono font-bold text-white group-hover:text-amber-300 transition-colors">
                      {liveData.avgTemp ? `${liveData.avgTemp - 273.15 > 0 ? '+' : ''}${(liveData.avgTemp - 273.15).toFixed(1)}°C` : "N/A"}
                    </div>
                  </div>
                  <div className={`p-4 rounded-2xl ${liveData.avgTemp && liveData.avgTemp - 273.15 > 0 ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]'}`}>
                    <Thermometer className="w-7 h-7" />
                  </div>
                </div>

                <div className="relative rounded-3xl p-8 bg-gradient-to-b from-[#151426]/80 to-[#0a0914]/95 border border-white/[0.1] hover:border-purple-400/50 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 flex items-center justify-between overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
                  <div>
                    <div className="text-xs text-purple-400 mb-2 font-mono font-medium uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" /> Known Natural Moons
                    </div>
                    <div className="text-3xl font-mono font-bold text-white group-hover:text-purple-300 transition-colors">
                      {liveData.moons ? liveData.moons.length : 0}
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-purple-500/15 text-purple-400 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <Orbit className="w-7 h-7" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </section>

        {/* Exploration History */}
        <section id="exploration" className="min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 md:px-24 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12 md:mb-16">
              <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md shadow-lg" style={{ color: theme.primary }}>
                <Activity className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Exploration History</h2>
                <p className="text-sm font-mono uppercase tracking-widest text-zinc-400 mt-1">Human spaceflight missions & robotic flybys</p>
              </div>
            </div>
            
            <div className="relative rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.1] shadow-2xl backdrop-blur-xl mb-12">
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
              {renderSectionContent(encyclopediaData?.sections.exploration, true)}
            </div>

            {liveData?.discoveredBy && (
              <div className="inline-flex items-center gap-3 p-4 px-8 rounded-full bg-white/[0.06] border border-white/[0.12] backdrop-blur-md shadow-lg text-zinc-200 font-mono text-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Discovered by <strong className="text-white">{liveData.discoveredBy}</strong> on {liveData.discoveryDate}</span>
              </div>
            )}
          </motion.div>
        </section>

        {/* Moons Section if applicable */}
        {encyclopediaData?.sections?.moons && (
          <section id="moons" className="min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 md:px-24 scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-12 md:mb-16">
                <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md shadow-lg" style={{ color: theme.primary }}>
                  <Orbit className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Natural Satellites</h2>
                  <p className="text-sm font-mono uppercase tracking-widest text-zinc-400 mt-1">Gravitationally locked moons & orbital debris</p>
                </div>
              </div>

              <div className="relative rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.1] shadow-2xl backdrop-blur-xl">
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
                {renderSectionContent(encyclopediaData.sections.moons, false)}
              </div>
            </motion.div>
          </section>
        )}

      </div>
    </div>
  );
}
