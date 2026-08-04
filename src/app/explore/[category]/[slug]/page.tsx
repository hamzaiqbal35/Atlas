import { getDocumentBySlug, getAllDocuments } from "@/lib/mdx";
import { getCategoryBySlug } from "@/lib/categories";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ChevronLeft, Globe } from "lucide-react";
import { DynamicPlanetModel as PlanetModel } from "@/components/mdx/DynamicPlanetModel";
import Image from "next/image";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/animations";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const docs = getAllDocuments();
  return docs.map((doc) => ({
    category: doc.category,
    slug: doc.slug,
  }));
}

const BODY_COLORS: Record<string, string> = {
  sun: 'from-orange-500 to-amber-600',
  mercury: 'from-neutral-400 to-stone-500',
  venus: 'from-yellow-400 to-amber-500',
  earth: 'from-blue-500 to-indigo-500',
  moon: 'from-slate-300 to-gray-500',
  mars: 'from-red-500 to-rose-600',
  jupiter: 'from-orange-400 to-amber-700',
  saturn: 'from-yellow-300 to-yellow-600',
  uranus: 'from-cyan-300 to-teal-500',
  neptune: 'from-blue-600 to-indigo-700',
  pluto: 'from-stone-400 to-stone-600',
};

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

  const categoryMeta = getCategoryBySlug(doc.category) || { color: 'from-blue-500 to-indigo-400', icon: Globe, title: doc.category, description: '', slug: doc.category };
  const themeColor = BODY_COLORS[resolvedParams.slug.toLowerCase()] || categoryMeta.color;
  const Icon = categoryMeta.icon || Globe;

  const textureMap: Record<string, string> = {
    luna: "moon_texture.png",
    saturn: "saturn_texture.jpg",
  };
  const textureName = textureMap[resolvedParams.slug.toLowerCase()] || `${resolvedParams.slug}_texture.png`;
  const texturePath = path.join(process.cwd(), 'public', textureName);
  const has3DModel = fs.existsSync(texturePath);

  const heroImageName = `${resolvedParams.slug}_image.png`;
  const heroImagePath = path.join(process.cwd(), 'public', heroImageName);
  const hasHeroImage = fs.existsSync(heroImagePath);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground relative z-10 selection:bg-white/20 pb-32">
      {/* Ambient Radial Background Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${themeColor} via-background to-transparent`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <Link 
          href={`/explore/${doc.category.toLowerCase()}`}
          className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mb-12 uppercase tracking-widest"
        >
          <ChevronLeft className="w-3 h-3 mr-1" />
          Back to {doc.category}
        </Link>
        
        <FadeInStaggerContainer className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Sticky 3D Model Display, 2D Hero Image, or Icon */}
          <FadeInStaggerItem className="w-full lg:w-5/12 flex-shrink-0 lg:sticky lg:top-24">
            <div className="relative group w-full aspect-square md:aspect-[4/3] lg:aspect-square">
              {/* Premium Glow effect behind the model container */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${themeColor} rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-60 transition duration-1000 pointer-events-none`}></div>
              
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-background to-[#111] border border-white/[0.15] shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center p-2 z-10">
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${themeColor}`} />
                {has3DModel ? (
                  <PlanetModel body={resolvedParams.slug} className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] relative z-10" />
                ) : hasHeroImage ? (
                  <Image src={`/${heroImageName}`} alt={doc.frontmatter.title} fill className="object-cover relative z-10 opacity-90 transition duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                ) : (
                  <Icon className="w-32 h-32 text-white relative z-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] opacity-80" />
                )}
              </div>
            </div>
          </FadeInStaggerItem>

          {/* Right Column: Scrollable Content */}
          <div className="w-full lg:w-7/12 pt-4">
            <FadeInStaggerItem>
              <header className="mb-14">
                <div className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-white/50 mb-4 flex items-center gap-3">
                  <span className={`w-8 h-[1px] bg-gradient-to-r ${themeColor}`}></span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">{doc.category}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 leading-tight">
                  {doc.frontmatter.title}
                </h1>
                {doc.frontmatter.subtitle && (
                  <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                    {doc.frontmatter.subtitle}
                  </p>
                )}
              </header>
            </FadeInStaggerItem>

            <FadeInStaggerItem>
              {/* Bento-box Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
                {['mass', 'gravity', 'radius', 'temperature'].map((key) => {
                  if (!doc.frontmatter[key]) return null;
                  return (
                    <div key={key} className="bg-gradient-to-b from-[#151515] to-[#0A0A0A] border border-white/[0.08] rounded-2xl p-5 shadow-lg hover:border-white/[0.25] transition-colors duration-300 group relative overflow-hidden">
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${themeColor} transition-opacity duration-300`} />
                      <div className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2 group-hover:text-white transition-colors relative z-10">
                        {key}
                      </div>
                      <div className="text-lg md:text-xl font-semibold tracking-tight text-white relative z-10">
                        {doc.frontmatter[key]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInStaggerItem>

            <FadeInStaggerItem>
              {/* Premium Styled MDX Content */}
              <article className="prose prose-invert prose-lg max-w-none">
                <MDXRemote 
                  source={doc.content} 
                  components={{ 
                    // We render null here because we manually mounted it in the left column!
                    PlanetModel: () => null,
                    img: (props: any) => (
                      <span className="relative block w-full aspect-video my-12 rounded-[2rem] overflow-hidden border border-white/[0.1] bg-[#111] shadow-2xl group">
                        <Image 
                          src={props.src} 
                          alt={props.alt || ''} 
                          fill 
                          className="object-contain group-hover:scale-105 transition-transform duration-1000" 
                          sizes="(max-width: 800px) 100vw, 800px"
                        />
                      </span>
                    )
                  }} 
                />
              </article>
            </FadeInStaggerItem>
          </div>

        </FadeInStaggerContainer>
      </div>
    </div>
  );
}
