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

    // Category match
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

    // If any required word from the query does NOT match, reject
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

  // Lock body scroll and capture Escape while search is open
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

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
      data-lenis-prevent="true"
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-start justify-center pt-[12vh] px-4 animate-in fade-in duration-150"
      onClick={() => setOpen(false)}
      onWheel={(e) => e.stopPropagation()}
    >
      <div 
        data-lenis-prevent="true"
        className="w-full max-w-2xl bg-[#0e0e11]/95 border border-white/[0.08] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden backdrop-blur-xl relative"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        <Command 
          label="Search Documentation" 
          shouldFilter={false}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              setOpen(false);
            }
          }}
        >
          {/* Search Header Input */}
          <div className="flex items-center border-b border-white/[0.08] px-4 py-3.5 bg-transparent">
            <Search className="w-4 h-4 text-zinc-400 mr-3 shrink-0" />
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  e.preventDefault();
                  setOpen(false);
                }
              }}
              placeholder="Search documentation, topics, and phenomena..." 
              className="w-full bg-transparent text-sm md:text-base outline-none text-zinc-100 placeholder:text-zinc-500 font-sans"
              autoFocus
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery("")}
                className="p-1 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.06] transition-colors mr-2 shrink-0 cursor-pointer"
                title="Clear query"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <button 
              type="button"
              onClick={() => setOpen(false)} 
              className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors shrink-0 cursor-pointer"
              title="Close (ESC)"
            >
              ESC
            </button>
          </div>
          
          {/* Results List */}
          <Command.List 
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className="max-h-[50vh] overflow-y-auto overscroll-contain p-2 cosmic-search-scrollbar divide-y divide-white/[0.03]"
          >
            {rankedDocs.length === 0 ? (
              <div className="py-14 text-center px-4">
                <Sparkles className="w-5 h-5 text-zinc-600 mx-auto mb-2.5" />
                <p className="text-zinc-300 text-sm font-medium">No results found for &quot;{searchQuery}&quot;</p>
                <p className="text-xs text-zinc-500 mt-1">Try searching for Stars, Planets, Galaxies, or Space-Time</p>
              </div>
            ) : (
              groupedDocs.map(([category, items]) => (
                <Command.Group 
                  key={category} 
                  heading={
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 font-medium tracking-wider uppercase px-2.5 py-2">
                      <span>{category.replace(/-/g, " ")}</span>
                      <span className="text-[10px] text-zinc-600 font-normal">{items.length}</span>
                    </div>
                  }
                  className="mb-1"
                >
                  {items.map((doc) => (
                    <Command.Item
                      key={`${doc.category}-${doc.slug}`}
                      value={`${doc.title}-${doc.slug}`}
                      onSelect={() => {
                        setOpen(false);
                        router.push(`/explore/${doc.category}/${doc.slug}`);
                      }}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer bg-transparent hover:bg-white/[0.04] aria-selected:bg-white/[0.07] transition-colors text-zinc-200 group mb-0.5"
                    >
                      <div className="flex-1 min-w-0 pr-3">
                        <div className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                          {doc.title}
                        </div>
                        {doc.subtitle && (
                          <p className="text-xs text-zinc-500 group-hover:text-zinc-400 line-clamp-1 mt-0.5 font-normal transition-colors">
                            {doc.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-md">
                          {doc.category.replace(/-/g, " ")}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>
              ))
            )}
          </Command.List>

          {/* Clean Footer Status Bar */}
          <div className="px-4 py-2.5 border-t border-white/[0.06] bg-[#09090b]/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400">↓</kbd>
                <span className="text-[10px] text-zinc-500 ml-0.5">navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400">↵</kbd>
                <span className="text-[10px] text-zinc-500 ml-0.5">select</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400">ESC</kbd>
                <span className="text-[10px] text-zinc-500 ml-0.5">close</span>
              </span>
            </div>
            <div className="text-zinc-500 text-[10px]">
              {rankedDocs.length} {rankedDocs.length === 1 ? "result" : "results"}
            </div>
          </div>
        </Command>
      </div>
    </div>
  );
}
