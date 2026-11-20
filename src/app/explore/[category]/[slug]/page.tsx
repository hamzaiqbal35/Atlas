import { getDocumentBySlug, getAllDocuments } from "@/lib/mdx";
import { getCategoryBySlug } from "@/lib/categories";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import Link from "next/link";
import { 
  ChevronLeft, ChevronRight, Orbit, ArrowRight
} from "lucide-react";
import { DynamicPlanetModel as PlanetModel } from "@/components/mdx/DynamicPlanetModel";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/animations";
import { ResearchPapers } from "@/components/ResearchPapers";
import { Suspense } from "react";
import PeriodicTable from "@/components/ui/PeriodicTable";
import { getCosmicTheme } from "@/lib/cosmicTheme";

export async function generateStaticParams() {
  const docs = getAllDocuments();
  return docs.map((doc) => ({
    category: doc.category,
    slug: doc.slug,
  }));
}

const CELESTIAL_BODIES = new Set([
  'sun', 'mercury', 'venus', 'earth', 'moon', 'luna', 
  'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'
]);

export default async function ExplorePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const doc = getDocumentBySlug(resolvedParams.category, resolvedParams.slug);

  if (!doc) {
    notFound();
  }

  const categoryMeta = getCategoryBySlug(doc.category) || { 
    color: 'from-blue-500 to-indigo-600', 
    title: doc.category, 
    description: '', 
    slug: doc.category 
  };

  const theme = getCosmicTheme(doc.category, resolvedParams.slug);

  // Retrieve sibling docs in the same category for next/prev navigation
  const allDocs = getAllDocuments();
  const categoryDocs = allDocs.filter(
    (d) => d.category.toLowerCase() === resolvedParams.category.toLowerCase()
  );
  const currentIndex = categoryDocs.findIndex(
    (d) => d.slug.toLowerCase() === resolvedParams.slug.toLowerCase()
  );
  const prevDoc = currentIndex > 0 ? categoryDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex !== -1 && currentIndex < categoryDocs.length - 1 ? categoryDocs[currentIndex + 1] : null;

  // Extract key telemetry metrics from frontmatter
  const ignoredKeys = new Set(['title', 'subtitle', 'category', 'description', 'hide_hero', 'color']);
  const specs: { label: string; value: string }[] = [];
  if (doc.frontmatter) {
    for (const [key, val] of Object.entries(doc.frontmatter)) {
      if (!ignoredKeys.has(key) && val && typeof val === 'string' && val !== 'N/A' && val !== 'Unknown') {
        specs.push({
          label: key.replace(/_/g, ' '),
          value: val,
        });
        if (specs.length >= 4) break;
      }
    }
  }

  const isCelestialBody = CELESTIAL_BODIES.has(resolvedParams.slug.toLowerCase());
  const bodyModelName = resolvedParams.slug.toLowerCase() === 'luna' ? 'moon' : resolvedParams.slug.toLowerCase();

  return (
    <div className="min-h-screen bg-[#06060c] text-foreground relative z-10 selection:bg-indigo-500/30 pb-36 overflow-hidden">
      
      {/* ReactBits-style Multi-Layer Cosmic Nebula Atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Primary Celestial Flare */}
        <div 
          className="absolute -top-[12%] left-[15%] w-[850px] h-[600px] rounded-full blur-[150px] opacity-65 mix-blend-screen transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${theme.glow1} 0%, transparent 70%)` }}
        />
        {/* Secondary Deep Cosmic Cloud */}
        <div 
          className="absolute top-[30%] right-[10%] w-[800px] h-[550px] rounded-full blur-[160px] opacity-50 mix-blend-screen transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${theme.glow2} 0%, transparent 70%)` }}
        />
        {/* Ambient Starlight Fog */}
        {theme.glow3 && (
          <div 
            className="absolute bottom-[-10%] left-[25%] w-[900px] h-[500px] rounded-full blur-[180px] opacity-40 mix-blend-screen"
            style={{ background: `radial-gradient(circle, ${theme.glow3} 0%, transparent 70%)` }}
          />
        )}

        {/* Technical Celestial Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.045] [mask-image:radial-gradient(ellipse_at_center,white_0%,transparent_80%)]"
          style={{ 
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      {/* Main Content with comfortable top padding avoiding nav overlap */}
      <div className="max-w-4xl mx-auto px-6 pt-36 md:pt-40 relative z-10">
        
        {/* Top Breadcrumb Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-3 text-xs font-mono">
            <Link 
              href={`/explore/${doc.category.toLowerCase()}`}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/[0.3] text-zinc-300 hover:text-white transition-all shadow-md backdrop-blur-md group"
            >
              <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-zinc-400 group-hover:text-white" />
              <span>BACK TO {categoryMeta.title.toUpperCase()}</span>
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400 font-semibold tracking-wider uppercase">{categoryMeta.title}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-200 truncate">{doc.frontmatter.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full ${theme.badgeBg} border text-xs font-mono ${theme.badgeText} backdrop-blur-md shadow-sm`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>DEEP SPACE ARCHIVE</span>
            </div>
          </div>
        </div>
        
        <FadeInStaggerContainer>
          
          {/* Hero Header Card (without world logo icon) */}
          <FadeInStaggerItem>
            <header className="relative rounded-[2.5rem] p-8 md:p-14 mb-10 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent border border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-2xl overflow-hidden">
              {/* Luminous Top Edge Highlight */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              
              <div className="relative z-10">
                {/* Telemetry Header Badges */}
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <span className={`px-3.5 py-1 rounded-full ${theme.badgeBg} border text-[11px] font-mono font-semibold uppercase tracking-[0.2em] ${theme.badgeText} backdrop-blur-md`}>
                    SECTOR: {categoryMeta.title}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[11px] font-mono uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                    CLASSIFICATION: {doc.frontmatter.title}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-medium flex items-center gap-1.5 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    VERIFIED STANDARD
                  </span>
                </div>

                {/* Main Topic Title with Gradient */}
                <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent drop-shadow-[0_2px_25px_rgba(255,255,255,0.25)]`}>
                  {doc.frontmatter.title}
                </h1>

                {/* Subtitle */}
                {doc.frontmatter.subtitle && (
                  <p className="text-lg md:text-2xl text-zinc-200 font-light leading-relaxed max-w-3xl">
                    {doc.frontmatter.subtitle}
                  </p>
                )}
              </div>
            </header>
          </FadeInStaggerItem>

          {/* Bento-box Stats Grid with Vibrant Telemetry Badges */}
          {specs.length > 0 && (
            <FadeInStaggerItem>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-14">
                {specs.map((spec, idx) => {
                  const borderClass = theme.metricBorders[idx % theme.metricBorders.length];
                  const textClass = theme.metricTexts[idx % theme.metricTexts.length];
                  return (
                    <div 
                      key={spec.label}
                      className={`relative rounded-2xl p-5 bg-gradient-to-b from-[#151326]/85 to-[#0a0914]/95 border ${borderClass} shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden backdrop-blur-xl group`}
                    >
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="flex items-center justify-between text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
                        <span className="truncate">{spec.label}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] opacity-70 group-hover:opacity-100 shrink-0 ml-1" />
                      </div>
                      <div className={`text-base md:text-lg font-bold tracking-tight ${textClass} truncate`}>
                        {spec.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInStaggerItem>
          )}

          {/* Interactive 3D Model Viewport for Celestial Bodies */}
          {isCelestialBody && (
            <FadeInStaggerItem>
              <div className="mb-14 rounded-3xl p-6 bg-gradient-to-b from-[#131124]/90 to-[#080710]/95 border border-white/[0.12] shadow-2xl backdrop-blur-2xl relative overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                    <Orbit className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                    <span>3D Interactive Planetary Simulation</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1]">
                    WebGL 3D Render
                  </span>
                </div>
                <div className="h-80 md:h-96 w-full relative rounded-2xl overflow-hidden bg-black/40 border border-white/[0.08]">
                  <PlanetModel body={bodyModelName} />
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                  <span>Interactive 3D view: Click and drag to rotate</span>
                  <Link 
                    href={`/body/${bodyModelName}`} 
                    className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 font-semibold"
                  >
                    Access Observatory Telemetry &rarr;
                  </Link>
                </div>
              </div>
            </FadeInStaggerItem>
          )}

          {/* Premium Scientific MDX Content */}
          <FadeInStaggerItem>
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:tracking-tight prose-headings:font-bold prose-h2:border-b prose-h2:border-white/[0.08] prose-h2:pb-3 prose-h2:mt-12 prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:font-light prose-strong:text-white prose-strong:font-semibold prose-code:text-cyan-300 prose-code:bg-white/[0.06] prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-blockquote:border-l-cyan-400 prose-blockquote:bg-white/[0.02] prose-blockquote:p-4 prose-blockquote:rounded-r-2xl prose-blockquote:text-zinc-300">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
              <MDXRemote 
                source={doc.content} 
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                  }
                }}
                components={{ 
                  PlanetModel: () => null,
                  PeriodicTable: () => <PeriodicTable />,
                  img: () => null
                }} 
              />
            </article>
            
            {/* Live Peer-Reviewed Research via arXiv */}
            <Suspense fallback={<div className="mt-20 pt-16 border-t border-white/[0.05] animate-pulse h-40 bg-white/[0.02] rounded-2xl"></div>}>
              <ResearchPapers query={doc.frontmatter.title} />
            </Suspense>

            {/* Sibling Topic Navigation Footer */}
            <div className="mt-20 pt-10 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevDoc ? (
                <Link 
                  href={`/explore/${doc.category}/${prevDoc.slug}`}
                  className="group p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.1] hover:border-white/[0.25] transition-all backdrop-blur-xl flex flex-col justify-between"
                >
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-white mb-2">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    <span>PREVIOUS TOPIC</span>
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {prevDoc.frontmatter.title || prevDoc.slug}
                  </div>
                </Link>
              ) : <div />}

              {nextDoc && (
                <Link 
                  href={`/explore/${doc.category}/${nextDoc.slug}`}
                  className="group p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.1] hover:border-white/[0.25] transition-all backdrop-blur-xl flex flex-col justify-between items-end text-right md:col-start-2"
                >
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-white mb-2">
                    <span>NEXT TOPIC</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {nextDoc.frontmatter.title || nextDoc.slug}
                  </div>
                </Link>
              )}
            </div>

            {/* Return to Category Directory Button */}
            <div className="mt-12 flex justify-center">
              <Link 
                href={`/explore/${doc.category.toLowerCase()}`}
                className="px-8 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-white/[0.3] text-zinc-300 hover:text-white text-xs font-mono uppercase tracking-widest transition-all shadow-xl backdrop-blur-md flex items-center gap-2 group"
              >
                <span>RETURN TO {categoryMeta.title.toUpperCase()} DIRECTORY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </FadeInStaggerItem>

        </FadeInStaggerContainer>

      </div>
    </div>
  );
}
