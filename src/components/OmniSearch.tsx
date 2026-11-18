"use client";

import { useEffect, useState, useMemo } from "react";
import { Command } from "cmdk";
import { Search, Sparkles, X, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import "./OmniSearch.css";

interface SearchDoc {
  slug: string;
  category: string;
  title: string;
  subtitle?: string;
}

function scoreDocument(doc: SearchDoc, query: string): number {
  const q = query.toLowerCase().trim();
  if (!q) return 1;

  const title = (doc.title || "").toLowerCase();
  const subtitle = (doc.subtitle || "").toLowerCase();
  const category = (doc.category || "").toLowerCase();
  const categoryClean = category.replace(/-/g, " ");
  const slug = (doc.slug || "").toLowerCase();
  const slugClean = slug.replace(/-/g, " ");

  const words = q.split(/\s+/).filter(Boolean);

  let totalScore = 0;
  for (const word of words) {
    let wordMatched = false;
    let wordScore = 0;

    // Exact title match gets highest priority
    if (title === word) {
      wordScore = Math.max(wordScore, 120);
      wordMatched = true;
    } else if (title.startsWith(word + " ") || title.startsWith(word)) {
      wordScore = Math.max(wordScore, 90);
      wordMatched = true;
    } else if (title.includes(" " + word + " ") || title.endsWith(" " + word) || title.includes(word)) {
      wordScore = Math.max(wordScore, 75);
      wordMatched = true;
    }

    // Slug match
    if (slug === word || slugClean === word) {
      wordScore = Math.max(wordScore, 70);
      wordMatched = true;
    } else if (slugClean.startsWith(word) || slug.startsWith(word)) {
      wordScore = Math.max(wordScore, 60);
      wordMatched = true;
    } else if (slugClean.includes(word) || slug.includes(word)) {
      wordScore = Math.max(wordScore, 50);
      wordMatched = true;
    }

    // Category match (e.g. searching "stars" matches all stellar docs!)
    if (category === word || categoryClean === word) {
      wordScore = Math.max(wordScore, 65);
      wordMatched = true;
    } else if (categoryClean.startsWith(word) || categoryClean.includes(word)) {
      wordScore = Math.max(wordScore, 45);
      wordMatched = true;
    }

    // Subtitle whole-word or phrase match
    const subtitleWords = subtitle.split(/[\s,.;:!?()]+/).filter(Boolean);
    if (subtitleWords.includes(word)) {
      wordScore = Math.max(wordScore, 35);
      wordMatched = true;
    } else if (subtitle.includes(word)) {
      wordScore = Math.max(wordScore, 20);
      wordMatched = true;
    }

    // If any required word from the query does NOT match title, slug, category, or subtitle, REJECT!
    if (!wordMatched) {
      return 0;
    }

    totalScore += wordScore;
  }

  return totalScore;
}

export function OmniSearch() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchIndex, setSearchIndex] = useState<SearchDoc[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch search index on mount
    fetch("/api/search")
      .then((res) => res.json())
      .then((data) => setSearchIndex(data))
      .catch(console.error);

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) setSearchQuery("");
          return !prev;
        });
      }
    };

    const handleCustomOpen = () => {
      setSearchQuery("");
      setOpen(true);
    };

    window.addEventListener("open-omnisearch", handleCustomOpen);
    document.addEventListener("keydown", down);
    return () => {
      window.removeEventListener("open-omnisearch", handleCustomOpen);
      document.removeEventListener("keydown", down);
    };
  }, []);

  // Filter and rank documents using strict relevance scoring
  const rankedDocs = useMemo(() => {
    if (!searchQuery.trim()) {
      return searchIndex;
    }

    return searchIndex
      .map((doc) => ({
        doc,
        score: scoreDocument(doc, searchQuery),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.doc);
  }, [searchIndex, searchQuery]);

  // Group ranked docs by category, keeping the category with the highest ranked items at the top
  const groupedDocs = useMemo(() => {
    const map = new Map<string, SearchDoc[]>();
    rankedDocs.forEach((doc) => {
      const cat = doc.category || "General";
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(doc);
    });
    return Array.from(map.entries());
  }, [rankedDocs]);

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-start justify-center pt-[15vh] px-4 animate-in fade-in duration-200"
      onClick={() => setOpen(false)}
    >
      <div 
        className="w-full max-w-2xl bg-gradient-to-b from-[#151326]/95 via-[#0e0c1a]/98 to-[#070610] border border-white/[0.14] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden backdrop-blur-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Luminous Top Edge Highlight */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <Command 
          label="Global Cosmic Search" 
          shouldFilter={false} // Precise scientific matching handled via scoreDocument
        >
          {/* Search Header Bar */}
          <div className="flex items-center border-b border-white/[0.08] px-5 py-4">
            <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cosmic archives (Planets, Stars, Galaxies, Relativity)..." 
              className="w-full bg-transparent text-base outline-none text-zinc-100 placeholder:text-zinc-500 font-sans"
              autoFocus
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="p-1 text-zinc-400 hover:text-white transition-colors mr-2 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button 
              onClick={() => setOpen(false)} 
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-zinc-400 hover:text-white transition-colors shrink-0"
            >
              <span>ESC</span>
            </button>
          </div>
          
          {/* Results List */}
          <Command.List className="max-h-[55vh] overflow-y-auto p-3 scrollbar-thin divide-y divide-white/[0.04]">
            {rankedDocs.length === 0 ? (
              <div className="py-14 text-center">
                <Sparkles className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                <p className="text-zinc-300 font-medium">No cosmic phenomena found for &quot;{searchQuery}&quot;</p>
                <p className="text-xs text-zinc-500 mt-1">Try searching for Stars, Planets, Galaxies, or Space-Time</p>
              </div>
            ) : (
              groupedDocs.map(([category, items]) => (
                <Command.Group 
                  key={category} 
                  heading={category.replace(/-/g, " ").toUpperCase()} 
                  className="text-[11px] font-mono text-cyan-400/80 font-semibold px-2 py-3 tracking-[0.2em]"
                >
                  {items.map((doc) => (
                    <Command.Item
                      key={`${doc.category}-${doc.slug}`}
                      value={`${doc.title}-${doc.slug}`}
                      onSelect={() => {
                        setOpen(false);
                        router.push(`/explore/${doc.category}/${doc.slug}`);
                      }}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer hover:bg-white/[0.06] aria-selected:bg-cyan-500/15 aria-selected:border aria-selected:border-cyan-500/30 transition-all text-zinc-100 group mb-1"
                    >
                      <div className="flex-1 min-w-0 pr-3">
                        <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                          {doc.title}
                        </div>
                        {doc.subtitle && (
                          <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5 font-light">
                            {doc.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md">
                          {doc.category}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-300 transition-colors" />
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>
              ))
            )}
          </Command.List>

          {/* Footer Info */}
          <div className="px-5 py-3 border-t border-white/[0.08] bg-black/40 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Navigation: Use ↑ ↓ keys to navigate, Enter to select</span>
            <span className="hidden sm:inline">Shortcut: Ctrl+K / ⌘K</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
