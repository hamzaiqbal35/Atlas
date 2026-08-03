import { getAllDocuments } from "@/lib/mdx";
import { getCategoryBySlug, CATEGORIES } from "@/lib/categories";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, FileText, Compass } from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground relative z-10 selection:bg-primary/30 pb-24">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${categoryMeta.color.replace('from-', 'from-').replace('to-', 'to-')} via-background to-background opacity-20`} />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        <Link 
          href="/explore"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Directory
        </Link>
        
        <header className="mb-16 flex items-start gap-6">
          <div className={`w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center bg-gradient-to-br ${categoryMeta.color}`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3 text-glow">
              {categoryMeta.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {categoryMeta.description}
            </p>
          </div>
        </header>

        {categoryDocs.length === 0 ? (
          <div className="bg-secondary/20 border border-border/50 rounded-3xl p-12 text-center backdrop-blur-md">
            <Compass className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold mb-2">Uncharted Territory</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We haven't added any data logs to this sector of the universe yet. Check back later as we expand the Atlas!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryDocs.map((doc) => (
              <Link 
                key={doc.slug} 
                href={`/explore/${doc.category}/${doc.slug}`}
                className="group bg-secondary/20 border border-border/50 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-secondary/40 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-background border border-border/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-primary transition-colors">
                    {doc.frontmatter.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {doc.frontmatter.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
