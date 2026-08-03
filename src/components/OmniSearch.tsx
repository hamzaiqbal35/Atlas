"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import "./OmniSearch.css"; // We'll create some basic styles

export function OmniSearch() {
  const [open, setOpen] = useState(false);
  const [searchIndex, setSearchIndex] = useState<any[]>([]);
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
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] flex items-start justify-center pt-[20vh] p-4">
      <div className="w-full max-w-2xl bg-secondary/80 border border-border/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
        <Command label="Global Command Menu" shouldFilter={true}>
          <div className="flex items-center border-b border-border/50 px-4">
            <Search className="w-5 h-5 text-muted-foreground mr-3" />
            <Command.Input 
              placeholder="Search the cosmos... (Planets, Physics, Galaxies)" 
              className="w-full bg-transparent py-5 text-lg outline-none text-foreground placeholder:text-muted-foreground"
              autoFocus
            />
            <button onClick={() => setOpen(false)} className="text-xs text-muted-foreground hover:text-foreground">ESC</button>
          </div>
          
          <Command.List className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin">
            <Command.Empty className="py-12 text-center text-muted-foreground">No cosmic entities found.</Command.Empty>
            
            <Command.Group heading="Planets & Moons" className="text-xs text-muted-foreground font-semibold px-2 py-3">
              {searchIndex.filter(d => d.category.toLowerCase() === 'planets').map((doc) => (
                <Command.Item
                  key={doc.slug}
                  value={doc.title}
                  onSelect={() => {
                    setOpen(false);
                    router.push(`/explore/${doc.category}/${doc.slug}`);
                  }}
                  className="flex flex-col px-4 py-3 rounded-xl cursor-pointer aria-selected:bg-primary/20 aria-selected:text-primary transition-colors text-foreground"
                >
                  <span className="text-base font-bold">{doc.title}</span>
                  <span className="text-sm opacity-70">{doc.subtitle}</span>
                </Command.Item>
              ))}
            </Command.Group>
            
            {/* We can add more dynamic groups here as we scaffold Physics, Galaxies, etc. */}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
