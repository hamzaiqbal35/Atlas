import { getAllDocuments } from "@/lib/mdx";
import { getCategoryBySlug, CATEGORIES } from "@/lib/categories";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { ChevronLeft, FileText, Compass } from "lucide-react";
import { FadeInStaggerContainer, FadeInStaggerItem, ScaleHoverCard } from "@/components/animations";

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryIndexPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const categoryMeta = getCategoryBySlug(resolvedParams.category);

  if (!categoryMeta) {
    notFound();
  }

  // Get all documents and filter by category
  const allDocs = getAllDocuments();
  const categoryDocs = allDocs.filter(
    (doc) => doc.category.toLowerCase() === resolvedParams.category.toLowerCase()
  );

  const Icon = categoryMeta.icon;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground relative z-10 selection:bg-primary/30 pb-32">
      {/* Premium ambient glow at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-[0.15] pointer-events-none">
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${categoryMeta.color} via-background to-transparent`} />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        <Link 
          href="/explore"
          className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mb-16 uppercase tracking-widest"
        >
          <ChevronLeft className="w-3 h-3 mr-1" />
          Directory
        </Link>
        
        <FadeInStaggerContainer>
          <FadeInStaggerItem>
            <header className="mb-20 flex flex-col md:flex-row items-start md:items-center gap-8 border-b border-white/[0.05] pb-12">
              <div className="relative group">
                <div className={`absolute -inset-4 bg-gradient-to-r ${categoryMeta.color} rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-60 transition duration-1000`}></div>
                <div className={`w-28 h-28 relative shrink-0 rounded-[2rem] flex items-center justify-center bg-gradient-to-br from-background to-[#111] border border-white/[0.15] shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden`}>
                  <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${categoryMeta.color}`} />
                  <Icon className="w-12 h-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white">
                  {categoryMeta.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl leading-relaxed">
                  {categoryMeta.description}
                </p>
              </div>
            </header>
          </FadeInStaggerItem>

          <FadeInStaggerItem>
            {categoryDocs.length === 0 ? (
              <div className="bg-[#111] border border-white/[0.05] rounded-[2rem] p-16 text-center shadow-lg">
                <Compass className="w-12 h-12 text-muted-foreground mx-auto mb-6 opacity-40" />
                <h3 className="text-2xl font-bold mb-3 text-white">Uncharted Territory</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We haven't added any data logs to this sector of the universe yet. Check back later as we expand the Atlas!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryDocs.map((doc) => {
                  const textureMap: Record<string, string> = {
                    luna: "moon_texture.png",
                    saturn: "saturn_texture.jpg",
                  };
                  const textureName = textureMap[doc.slug.toLowerCase()] || `${doc.slug}_texture.png`;
                  const texturePath = path.join(process.cwd(), 'public', textureName);
                  const hasImage = fs.existsSync(texturePath);

                  return (
                    <Link 
                      key={doc.slug} 
                      href={`/explore/${doc.category}/${doc.slug}`}
                      className="group outline-none"
                    >
                      <ScaleHoverCard className={`h-full relative overflow-hidden bg-gradient-to-b from-[#151515] to-[#0A0A0A] border border-white/[0.08] rounded-3xl p-6 md:p-8 shadow-lg hover:border-white/[0.2] transition-all duration-500 flex flex-col justify-between group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
                        {/* Vibrant hover gradient based on category */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${categoryMeta.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`} />
                        
                        <div>
                          {hasImage ? (
                            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden mb-8 relative border border-white/[0.05] shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-700">
                              <Image 
                                src={`/${textureName}`} 
                                alt={doc.frontmatter.title} 
                                fill 
                                className="object-cover animate-[spin_60s_linear_infinite]" 
                              />
                              <div className="absolute inset-0 rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.8),inset_5px_5px_10px_rgba(255,255,255,0.1)] pointer-events-none"></div>
                            </div>
                          ) : (
                            <div className={`w-12 h-12 rounded-2xl bg-[#222] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:border-white/[0.3] group-hover:bg-[#333] transition-colors duration-500 relative overflow-hidden`}>
                              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${categoryMeta.color} transition-opacity duration-500`} />
                              <FileText className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-500 relative z-10" />
                            </div>
                          )}

                          <h3 className={`text-2xl font-bold tracking-tight mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300 ${hasImage ? 'text-center' : ''}`}>
                            {doc.frontmatter.title}
                          </h3>
                          <p className={`text-sm text-muted-foreground leading-relaxed line-clamp-3 ${hasImage ? 'text-center mx-auto' : ''}`}>
                            {doc.frontmatter.subtitle}
                          </p>
                        </div>
                        
                        <div className={`mt-8 flex items-center text-xs font-semibold tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-300 ${hasImage ? 'justify-center' : ''}`}>
                          <span>Access Data</span>
                          <ChevronLeft className="w-3 h-3 ml-2 rotate-180 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                        </div>
                      </ScaleHoverCard>
                    </Link>
                  );
                })}
              </div>
            )}
          </FadeInStaggerItem>
        </FadeInStaggerContainer>
      </div>
    </div>
  );
}
