import { getDocumentBySlug, getAllDocuments } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { PlanetModel } from "@/components/mdx/PlanetModel";
import Image from "next/image";

export async function generateStaticParams() {
  const docs = getAllDocuments();
  return docs.map((doc) => ({
    category: doc.category,
    slug: doc.slug,
  }));
}

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

  return (
    <div className="min-h-screen bg-background text-foreground relative z-10 selection:bg-primary/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        <Link 
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Atlas
        </Link>
        
        <header className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            {doc.category}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-glow">
            {doc.frontmatter.title}
          </h1>
          {doc.frontmatter.subtitle && (
            <p className="text-xl text-muted-foreground">
              {doc.frontmatter.subtitle}
            </p>
          )}
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['mass', 'gravity', 'radius', 'temperature'].map((key) => {
            if (!doc.frontmatter[key]) return null;
            return (
              <div key={key} className="bg-secondary/20 border border-border/50 rounded-2xl p-4 backdrop-blur-md">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  {key}
                </div>
                <div className="text-lg font-medium">
                  {doc.frontmatter[key]}
                </div>
              </div>
            );
          })}
        </div>

        {/* MDX Content */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
          <MDXRemote 
            source={doc.content} 
            components={{ 
              PlanetModel,
              img: (props: any) => (
                <span className="relative block w-full aspect-video my-8 rounded-xl overflow-hidden border border-border/50 bg-black/50">
                  <Image 
                    src={props.src} 
                    alt={props.alt || ''} 
                    fill 
                    className="object-contain" 
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                </span>
              )
            }} 
          />
        </article>
      </div>
    </div>
  );
}
