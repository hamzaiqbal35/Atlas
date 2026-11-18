import Link from "next/link";
import { Orbit, ArrowRight, Sparkles, Zap, Flame, Radio, Activity } from "lucide-react";

const COSMIC_EVENTS = [
  {
    title: "The Big Bang",
    category: "Cosmology",
    description: "The primordial singularity that birthed spacetime, cosmic inflation, and all energy in the observable universe.",
    link: "/explore/cosmology/big-bang",
    spec: "T = 0 • 13.8 Billion Years Ago",
    badge: "Genesis Event",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    glow: "rgba(245, 158, 11, 0.25)",
    border: "border-amber-500/30",
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    icon: Flame,
  },
  {
    title: "Cosmic Microwave Background",
    category: "Cosmology",
    description: "The relic radiation decoupled 380,000 years after the Big Bang, revealing primordial temperature fluctuations.",
    link: "/explore/cosmology/cosmic-microwave-background",
    spec: "2.725 Kelvin Thermal Glow",
    badge: "Recombination",
    gradient: "from-cyan-400 via-sky-400 to-blue-500",
    glow: "rgba(6, 182, 212, 0.25)",
    border: "border-cyan-500/30",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    icon: Radio,
  },
  {
    title: "Supergiant Stellar Collapse",
    category: "Stars",
    description: "The catastrophic core-collapse supernova of massive stars triggering neutron star and black hole formation.",
    link: "/explore/stars/supergiant",
    spec: "Core Density > 10¹⁴ g/cm³",
    badge: "Stellar Death",
    gradient: "from-rose-400 via-pink-500 to-purple-500",
    glow: "rgba(244, 63, 94, 0.25)",
    border: "border-rose-500/30",
    badgeBg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    icon: Zap,
  },
  {
    title: "Neutron Stars & Magnetars",
    category: "Stars",
    description: "Ultra-dense remnants possessing the strongest magnetic fields in the cosmos and millisecond rotational periods.",
    link: "/explore/stars/neutron-star",
    spec: "Magnetic Field ~ 10¹⁵ Gauss",
    badge: "Extreme Relics",
    gradient: "from-violet-400 via-purple-400 to-indigo-500",
    glow: "rgba(168, 85, 247, 0.25)",
    border: "border-purple-500/30",
    badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    icon: Orbit,
  },
  {
    title: "Dark Energy Accelerated Expansion",
    category: "Matter",
    description: "The repulsive cosmic force driving exponential spatial expansion across cosmological superclusters.",
    link: "/explore/matter/dark-energy",
    spec: "Ω_Λ ≈ 0.68 Cosmic Energy",
    badge: "Cosmic Acceleration",
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
    glow: "rgba(16, 185, 129, 0.25)",
    border: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    icon: Sparkles,
  },
  {
    title: "Vacuum Decay & Ultimate Fate",
    category: "Cosmology",
    description: "Metastability of the Higgs vacuum and theoretical cosmological endgame scenarios across infinite time.",
    link: "/explore/cosmology/vacuum-decay",
    spec: "Metastable Higgs State",
    badge: "Terminal Horizon",
    gradient: "from-indigo-400 via-blue-400 to-cyan-400",
    glow: "rgba(99, 102, 241, 0.25)",
    border: "border-indigo-500/30",
    badgeBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    icon: Activity,
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#06060c] text-foreground relative z-10 selection:bg-indigo-500/30 pb-36 overflow-hidden">
      
      {/* ReactBits-style Cosmic Nebula Atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute -top-[12%] left-[15%] w-[850px] h-[600px] rounded-full blur-[150px] opacity-65 mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(234, 179, 8, 0.4) 0%, transparent 70%)" }}
        />
        <div 
          className="absolute top-[30%] right-[10%] w-[800px] h-[550px] rounded-full blur-[160px] opacity-50 mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)" }}
        />
        <div 
          className="absolute inset-0 opacity-[0.045] [mask-image:radial-gradient(ellipse_at_center,white_0%,transparent_80%)]"
          style={{ 
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-36 md:pt-40 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-3 text-xs font-mono mb-10 border-b border-white/[0.08] pb-6">
          <Link 
            href="/explore"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-all backdrop-blur-md"
          >
            <span>THE ATLAS DIRECTORY</span>
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-300 uppercase tracking-widest font-medium">Cosmic Phenomena & Events</span>
        </div>

        {/* Hero Header Card */}
        <header className="relative rounded-[2.5rem] p-8 md:p-14 mb-14 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent border border-white/[0.14] shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md">
                HIGH ENERGY ASTROPHYSICS
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-[11px] font-mono uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                CHRONICLE OF PHENOMENA
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-5 bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_2px_25px_rgba(255,255,255,0.25)]">
              Cosmic Events
            </h1>

            <p className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed max-w-3xl">
              From the primordial Big Bang singularity to relativistic supernovae and dark energy acceleration, explore the cataclysmic phenomena that govern the evolution of spacetime.
            </p>
          </div>
        </header>

        {/* Events Grid: ReactBits Glowing Space Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COSMIC_EVENTS.map((event, idx) => {
            const IconComponent = event.icon;
            const indexStr = String(idx + 1).padStart(2, '0');

            return (
              <Link 
                key={event.title}
                href={event.link}
                className="group outline-none block h-full"
              >
                <div className={`h-full relative flex flex-col justify-between rounded-[2rem] p-7 bg-gradient-to-b from-[#151326]/85 via-[#0e0c1a]/95 to-[#070610] border border-white/[0.12] hover:${event.border} shadow-[0_12px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.85)] transition-all duration-500 overflow-hidden backdrop-blur-2xl`}>
                  
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-amber-400/70 transition-all duration-500" />
                  
                  <div 
                    className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: event.glow }}
                  />

                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`px-3 py-1 rounded-lg border text-xs font-mono font-medium ${event.badgeBg}`}>
                        {event.badge}
                      </span>

                      <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.18] group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-white mb-2.5 transition-colors">
                      {event.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>

                  <div>
                    {/* Metric pill */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Parameter</div>
                      <div className="text-xs font-bold text-zinc-200 mt-0.5 truncate">{event.spec}</div>
                    </div>

                    {/* Footer Row */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                        <span>EVENT ARCHIVE</span>
                      </span>
                      <span className="text-[11px] font-semibold group-hover:text-amber-300 group-hover:translate-x-1 transition-all flex items-center gap-1">
                        EXPLORE <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
