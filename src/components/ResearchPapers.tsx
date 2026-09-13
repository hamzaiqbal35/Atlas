"use client";

import { useEffect, useState } from "react";
import { FileText, ExternalLink, Calendar, Users, FlaskConical, Loader2 } from "lucide-react";
import Link from "next/link";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/animations";
import { ArxivPaper } from "@/lib/arxiv";

export function ResearchPapers({ query }: { query: string }) {
  const [papers, setPapers] = useState<ArxivPaper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchPapers() {
      try {
        const res = await fetch(`/api/arxiv?q=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (isMounted) {
          setPapers(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to load papers:", error);
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPapers();
    return () => { isMounted = false; };
  }, [query]);

  if (loading) {
    return (
      <section className="mt-20 pt-16 border-t border-white/[0.05]">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <FlaskConical className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Latest Research</h2>
            <p className="text-sm text-muted-foreground mt-1">Live peer-reviewed papers via arXiv</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500/50" />
        </div>
      </section>
    );
  }

  if (!papers || papers.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 pt-16 border-t border-white/[0.05]">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
          <FlaskConical className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Latest Research</h2>
          <p className="text-sm text-muted-foreground mt-1">Live peer-reviewed papers via arXiv</p>
        </div>
      </div>

      <FadeInStaggerContainer className="grid grid-cols-1 gap-4">
        {papers.map((paper) => (
          <FadeInStaggerItem key={paper.id}>
            <Link 
              href={paper.pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/[0.05] hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-colors duration-500" />
              
              <div className="flex justify-between items-start gap-4 relative z-10">
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-semibold text-white/90 group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                    {paper.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {paper.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-white/40 pt-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(paper.published).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span className="line-clamp-1 max-w-[200px]">
                        {paper.authors.slice(0, 3).join(", ")}
                        {paper.authors.length > 3 ? ` +${paper.authors.length - 3} more` : ""}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-2 rounded-full bg-white/[0.03] group-hover:bg-blue-500/10 text-white/30 group-hover:text-blue-400 transition-colors shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </FadeInStaggerItem>
        ))}
      </FadeInStaggerContainer>
    </section>
  );
}
