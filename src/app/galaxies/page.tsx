import Link from "next/link";
import { Sparkles, ArrowRight, Orbit, Compass, Layers, Globe } from "lucide-react";

const GALAXIES = [
  {
    title: "Milky Way",
    morphology: "Barred Spiral (SBbc)",
    description: "Our galactic home containing 100-400 billion stars, a central supermassive black hole Sagittarius A*, and rich spiral arms.",
    link: "/explore/galaxies/milky-way",
    spec: "Diameter ~ 100,000 Light Years",
    badge: "Home Galaxy",
    gradient: "from-sky-300 via-cyan-400 to-indigo-400",
    glow: "rgba(56, 189, 248, 0.25)",
    border: "border-sky-500/30",
    badgeBg: "bg-sky-500/10 text-sky-300 border-sky-500/30",
  },
  {
    title: "Andromeda Galaxy (M31)",
    morphology: "Major Spiral (SA(s)b)",
    description: "The largest member of our Local Group on a 4-billion-year collision trajectory with the Milky Way, holding over 1 trillion stars.",
    link: "/explore/galaxies/andromeda-galaxy",
    spec: "Distance: 2.537 Million Light Years",
    badge: "Local Group Major",
    gradient: "from-indigo-400 via-purple-400 to-pink-400",
    glow: "rgba(168, 85, 247, 0.25)",
    border: "border-purple-500/30",
    badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  },
  {
    title: "Triangulum Galaxy (M33)",
    morphology: "Spiral Galaxy (SA(s)cd)",
    description: "The third-largest Local Group member, rich in H II stellar nurseries and high-rate star-forming regions like NGC 604.",
    link: "/explore/galaxies/triangulum-galaxy",
    spec: "Distance: 2.73 Million Light Years",
    badge: "Local Group Minor",
    gradient: "from-cyan-400 via-teal-400 to-emerald-400",
    glow: "rgba(6, 182, 212, 0.25)",
    border: "border-cyan-500/30",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  },
  {
    title: "Active Galactic Nuclei (AGN)",
    morphology: "Supermassive Accretion Engine",
    description: "Galaxies powered by relativistic jets from supermassive black holes radiating energetic continuum across the spectrum.",
    link: "/explore/galaxies/active-galaxy",
    spec: "Luminosity > 10⁴⁴ ergs/s",
    badge: "High Energy",
    gradient: "from-amber-400 via-orange-400 to-red-400",
    glow: "rgba(245, 158, 11, 0.25)",
    border: "border-amber-500/30",
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  },
  {
    title: "Starburst Galaxies",
    morphology: "Intense Star Formation",
    description: "Galaxies undergoing an exceptional episode of star formation consuming their interstellar gas reserves at rates of hundreds of solar masses per year.",
    link: "/explore/galaxies/starburst",
    spec: "Star Formation Rate: 100+ M☉/yr",
    badge: "Stellar Nursery",
    gradient: "from-rose-400 via-fuchsia-400 to-purple-400",
    glow: "rgba(244, 63, 94, 0.25)",
    border: "border-rose-500/30",
    badgeBg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
  },
  {
    title: "Ultra-Diffuse Galaxies",
    morphology: "Low Surface Brightness",
    description: "Extremely low-luminosity galaxies as large as the Milky Way but containing only a tiny fraction of its stellar population.",
    link: "/explore/galaxies/ultra-diffuse",
    spec: "Dark Matter Fraction > 98%",
    badge: "Dark Matter Rich",
    gradient: "from-slate-300 via-zinc-400 to-sky-400",
    glow: "rgba(148, 163, 184, 0.25)",
    border: "border-slate-500/30",
    badgeBg: "bg-slate-500/10 text-slate-300 border-slate-500/30",
  },
];

export default function GalaxiesPage() {
  return (
    <div className="min-h-screen bg-[#06060c] text-foreground relative z-10 selection:bg-indigo-500/30 pb-36 overflow-hidden">
      
      {/* ReactBits-style Cosmic Nebula Atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute -top-[12%] left-[10%] w-[900px] h-[650px] rounded-full blur-[150px] opacity-70 mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, transparent 70%)" }}
        />
        <div 
          className="absolute top-[28%] right-[5%] w-[800px] h-[600px] rounded-full blur-[160px] opacity-55 mix-blend-screen"
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
          <span className="text-zinc-300 uppercase tracking-widest font-medium">Galaxies & Extragalactic Astronomy</span>
        </div>

        {/* Hero Header Card */}
        <header className="relative rounded-[2.5rem] p-8 md:p-14 mb-14 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent border border-white/[0.14] shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
                EXTRAGALACTIC OBSERVATORY
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-[11px] font-mono uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                HUBBLE CLASSIFICATION
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-5 bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_25px_rgba(255,255,255,0.25)]">
              Galaxies
            </h1>

            <p className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed max-w-3xl">
              Vast gravitationally bound structures of stars, stellar remnants, interstellar gas, dust, and dark matter that populate the filaments of the cosmic web.
            </p>
          </div>
        </header>

        {/* Galaxies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALAXIES.map((galaxy) => (
            <Link 
              key={galaxy.title}
              href={galaxy.link}
              className="group outline-none block h-full"
            >
              <div className={`h-full relative flex flex-col justify-between rounded-[2rem] p-7 bg-gradient-to-b from-[#151326]/85 via-[#0e0c1a]/95 to-[#070610] border border-white/[0.12] hover:${galaxy.border} shadow-[0_12px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.85)] transition-all duration-500 overflow-hidden backdrop-blur-2xl`}>
                
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-sky-400/70 transition-all duration-500" />
                
                <div 
                  className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: galaxy.glow }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`px-3 py-1 rounded-lg border text-xs font-mono font-medium ${galaxy.badgeBg}`}>
                      {galaxy.badge}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.18] group-hover:scale-110 transition-all duration-300">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-white mb-1.5 transition-colors">
                    {galaxy.title}
                  </h2>

                  <div className="text-xs font-mono text-cyan-300 mb-3">
                    {galaxy.morphology}
                  </div>

                  <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                    {galaxy.description}
                  </p>
                </div>

                <div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Dimensions</div>
                    <div className="text-xs font-bold text-zinc-200 mt-0.5 truncate">{galaxy.spec}</div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                      <span>GALAXY DATA</span>
                    </span>
                    <span className="text-[11px] font-semibold group-hover:text-sky-300 group-hover:translate-x-1 transition-all flex items-center gap-1">
                      EXPLORE <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
