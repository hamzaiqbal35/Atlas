"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ChevronLeft, ArrowUpRight, Search, 
  Compass, X, Layers, ArrowRight
} from "lucide-react";
import { getCosmicTheme } from "@/lib/cosmicTheme";

export interface SerializedDoc {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  specs: { label: string; value: string }[];
}

interface CategoryIndexClientProps {
  categorySlug: string;
  categoryTitle: string;
  categoryDescription: string;
  categoryColor: string;
  categoryIconName: string;
  categoryIndex: number;
  totalCategories: number;
  subcategories: { slug: string; title: string }[];
  docs: SerializedDoc[];
}

export default function CategoryIndexClient({
  categorySlug,
  categoryTitle,
  categoryDescription,
  categoryIndex,
  totalCategories,
  subcategories,
  docs,
}: CategoryIndexClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");

  const theme = getCosmicTheme(categorySlug);

  const filteredDocs = useMemo(() => {
    return docs.filter((doc) => {
      const matchesSearch = 
        !searchQuery.trim() ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specs.some(s => 
          s.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.value.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesSubcategory = 
        selectedSubcategory === "all" ||
        doc.slug === selectedSubcategory ||
        doc.title.toLowerCase() === selectedSubcategory.toLowerCase();

      return matchesSearch && matchesSubcategory;
    });
  }, [docs, searchQuery, selectedSubcategory]);

  const domainIndexFormatted = String(categoryIndex + 1).padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#06060c] text-foreground relative z-10 selection:bg-indigo-500/30 pb-36 overflow-hidden">
      
      {/* ReactBits-style Cosmic Aurora & Nebula Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Primary Deep Space Nebula Glow */}
        <div 
          className="absolute -top-[12%] left-[10%] w-[900px] h-[650px] rounded-full blur-[150px] opacity-70 mix-blend-screen transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${theme.glow1} 0%, transparent 70%)` }}
        />
        {/* Secondary Cosmic Cloud Glow */}
        <div 
          className="absolute top-[25%] right-[5%] w-[800px] h-[600px] rounded-full blur-[160px] opacity-55 mix-blend-screen transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${theme.glow2} 0%, transparent 70%)` }}
        />
        {/* Third Ambient Atmosphere Glow */}
        {theme.glow3 && (
          <div 
            className="absolute bottom-[-10%] left-[25%] w-[950px] h-[550px] rounded-full blur-[180px] opacity-45 mix-blend-screen"
            style={{ background: `radial-gradient(circle, ${theme.glow3} 0%, transparent 70%)` }}
          />
        )}

        {/* Technical Celestial Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,white_0%,transparent_80%)]"
          style={{ 
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      {/* Main Content with comfortable top padding avoiding nav overlap */}
      <div className="max-w-6xl mx-auto px-6 pt-36 md:pt-40 relative z-10">
        
        {/* Top Breadcrumb Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-3 text-xs font-mono">
            <Link 
              href="/explore"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/[0.3] text-zinc-300 hover:text-white transition-all shadow-lg backdrop-blur-md group"
            >
              <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-zinc-400 group-hover:text-white" />
              <span>THE ATLAS DIRECTORY</span>
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400 font-semibold tracking-wider">DOMAIN {domainIndexFormatted}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-200 uppercase tracking-widest font-medium">{categoryTitle}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full ${theme.badgeBg} border text-xs font-mono ${theme.badgeText} backdrop-blur-md shadow-sm`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>{docs.length} ARCHIVES CATALOGED</span>
            </div>
            <div className="hidden sm:inline-flex px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 backdrop-blur-md">
              SECTOR {domainIndexFormatted} OF {totalCategories}
            </div>
          </div>
        </div>

        {/* Hero Header Banner without world logo icon */}
        <header className="relative rounded-[2.5rem] p-8 md:p-14 mb-14 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent border border-white/[0.14] shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden">
          {/* Luminous Top Edge Highlight */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
          
          <div className="relative z-10 max-w-4xl">
            
            {/* Header Telemetry Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className={`px-3.5 py-1.5 rounded-full ${theme.badgeBg} border text-[11px] font-mono font-semibold uppercase tracking-[0.2em] ${theme.badgeText} shadow-sm backdrop-blur-md`}>
                TAXONOMY SECTOR {domainIndexFormatted}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-[11px] font-mono uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                SCIENTIFIC ARCHIVE
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-medium flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                VERIFIED STANDARD
              </span>
            </div>

            {/* Vibrant Title */}
            <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-5 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent drop-shadow-[0_2px_25px_rgba(255,255,255,0.25)]`}>
              {categoryTitle}
            </h1>

            {/* Rich Scientific Description */}
            <p className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed max-w-3xl">
              {categoryDescription}
            </p>

            {/* Sub-Domains Quick Tags */}
            {subcategories && subcategories.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-white/[0.08]">
                <span className="text-xs font-mono uppercase text-zinc-400 mr-1 flex items-center gap-1.5 font-medium">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" /> Key Disciplines:
                </span>
                {subcategories.slice(0, 7).map((sub) => (
                  <span 
                    key={sub.slug}
                    className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.1] hover:border-white/[0.25] text-xs font-mono text-zinc-200 hover:text-white transition-colors"
                  >
                    {sub.title}
                  </span>
                ))}
                {subcategories.length > 7 && (
                  <span className="text-xs font-mono text-zinc-400 px-2 py-1">
                    +{subcategories.length - 7} more
                  </span>
                )}
              </div>
            )}

          </div>
        </header>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          
          {/* Live Search Input with Colorful Focus Glow */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search topics in ${categoryTitle}...`}
              className="w-full bg-[#0d0d16]/90 border border-white/[0.12] focus:border-cyan-400/60 focus:shadow-[0_0_25px_rgba(6,182,212,0.25)] rounded-2xl pl-11 pr-10 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-all shadow-inner backdrop-blur-md"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Results Counter */}
          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
            <span className="text-xs font-mono text-zinc-300 bg-white/[0.05] border border-white/[0.1] px-4 py-2 rounded-xl backdrop-blur-md">
              Showing <span className="text-white font-bold">{filteredDocs.length}</span> of {docs.length} topics
            </span>
          </div>

        </div>

        {/* Subcategories Filter Chips */}
        {subcategories && subcategories.length > 0 && docs.length > 4 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-4 hide-scrollbar">
            <button
              onClick={() => setSelectedSubcategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                selectedSubcategory === "all"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  : "bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              All Topics ({docs.length})
            </button>
            {subcategories.map((sub) => {
              const count = docs.filter(d => d.slug === sub.slug || d.title.toLowerCase() === sub.title.toLowerCase()).length;
              if (count === 0) return null;
              const isSelected = selectedSubcategory === sub.slug;
              return (
                <button
                  key={sub.slug}
                  onClick={() => setSelectedSubcategory(isSelected ? "all" : sub.slug)}
                  className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                      : "bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {sub.title}
                </button>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {filteredDocs.length === 0 ? (
          <div className="rounded-[2.5rem] p-16 text-center bg-white/[0.02] border border-white/[0.08] shadow-2xl my-8 backdrop-blur-xl">
            <Compass className="w-12 h-12 text-zinc-600 mx-auto mb-4 animate-spin-slow" />
            <h3 className="text-2xl font-bold text-white mb-2">No Matching Archives</h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
              {searchQuery 
                ? `No topic files match the query "${searchQuery}". Try searching for another phenomenon or resetting your filter.`
                : "No documentation archives are registered under this filter."}
            </p>
            {(searchQuery || selectedSubcategory !== "all") && (
              <button 
                onClick={() => { setSearchQuery(""); setSelectedSubcategory("all"); }}
                className="px-6 py-2.5 rounded-full bg-white/[0.1] hover:bg-white/[0.2] border border-white/[0.2] text-white text-xs font-mono uppercase tracking-wider transition-all shadow-md"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          /* Cards Grid: ReactBits-style glowing space cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc, idx) => {
              const cardIndex = String(idx + 1).padStart(2, '0');

              return (
                <Link 
                  key={doc.slug}
                  href={`/explore/${doc.category}/${doc.slug}`}
                  className="group outline-none block h-full"
                >
                  <div className={`h-full relative flex flex-col justify-between rounded-[2rem] p-7 bg-gradient-to-b from-[#151326]/85 via-[#0e0c1a]/95 to-[#070610] border border-white/[0.12] ${theme.accentBorder} shadow-[0_12px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.85)] transition-all duration-500 overflow-hidden backdrop-blur-2xl`}>
                    
                    {/* Top Specular Edge Highlight */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-cyan-400/70 transition-all duration-500" />
                    
                    {/* Subtle Radial Glow on Hover */}
                    <div 
                      className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: theme.cardGlow }}
                    />

                    <div>
                      {/* Card Header Row */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.12] text-xs font-mono text-zinc-300 group-hover:text-white transition-colors">
                          SEC-{cardIndex}
                        </div>

                        <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.18] group-hover:border-white/[0.35] group-hover:scale-110 transition-all duration-300 shadow-sm">
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-white mb-2.5 transition-colors">
                        {doc.title}
                      </h3>

                      {/* Card Subtitle */}
                      <p className="text-sm text-zinc-300 font-light leading-relaxed line-clamp-2 min-h-[40px]">
                        {doc.subtitle || "Comprehensive astrophysical analysis and observational telemetry."}
                      </p>

                      {/* Frontmatter Key Spec Pills with Vibrant Colors */}
                      {doc.specs && doc.specs.length > 0 && (
                        <div className="grid grid-cols-2 gap-2.5 my-5 pt-4 border-t border-white/[0.08]">
                          {doc.specs.slice(0, 2).map((s, sIdx) => {
                            const specBorder = theme.metricBorders[sIdx % theme.metricBorders.length];
                            const specText = theme.metricTexts[sIdx % theme.metricTexts.length];

                            return (
                              <div 
                                key={sIdx}
                                className={`border ${specBorder} bg-white/[0.03] rounded-xl p-3 backdrop-blur-md group-hover:scale-[1.02] transition-transform`}
                              >
                                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 truncate font-medium">
                                  {s.label}
                                </div>
                                <div className={`text-xs font-bold ${specText} truncate mt-1`}>
                                  {s.value}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Card Footer Bar */}
                    <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                        <span>ARCHIVE DATA</span>
                      </span>
                      <span className="text-[11px] font-semibold group-hover:text-cyan-300 group-hover:translate-x-1 transition-all flex items-center gap-1">
                        EXPLORE <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>

                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
