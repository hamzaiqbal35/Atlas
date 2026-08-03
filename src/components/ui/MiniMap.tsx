"use client";

import { useDataStore } from "@/store/useDataStore";
import { useEffect, useRef } from "react";

export function MiniMap() {
  const focusedBody = useDataStore((state) => state.activeNodeId);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focusedBody && scrollRef.current) {
      const activeEl = scrollRef.current.querySelector(`[data-body="${focusedBody}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [focusedBody]);

  return (
    <div ref={scrollRef} className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl p-4 flex flex-col gap-2 pointer-events-auto z-40 overflow-x-auto no-scrollbar md:max-w-none">
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 sticky left-0">
        System Map
      </div>
      
      <div className="flex items-center gap-4 relative h-8 px-2 min-w-max">
        {/* The line connecting planets */}
        <div className="absolute left-4 right-4 top-1/2 h-[1px] bg-border/50 -translate-y-1/2 z-0" />
        
        {/* Sun */}
        <div data-body="sun" className="relative z-10 flex flex-col items-center gap-1">
          <div className={`w-4 h-4 rounded-full border-2 transition-colors duration-500 mt-[-2px] ${focusedBody === 'sun' ? 'bg-yellow-500 border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.5)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'sun' ? 'text-foreground' : 'text-muted-foreground'}`}>Sol</span>
        </div>

        {/* Mercury */}
        <div data-body="mercury" className="relative z-10 flex flex-col items-center gap-1 ml-2">
          <div className={`w-2 h-2 rounded-full border-2 transition-colors duration-500 mt-[2px] ${focusedBody === 'mercury' ? 'bg-stone-400 border-stone-300 shadow-[0_0_10px_rgba(168,162,158,0.5)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'mercury' ? 'text-foreground' : 'text-muted-foreground'}`}>Mercury</span>
        </div>

        {/* Venus */}
        <div data-body="venus" className="relative z-10 flex flex-col items-center gap-1 ml-2">
          <div className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 mt-[1px] ${focusedBody === 'venus' ? 'bg-amber-500 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'venus' ? 'text-foreground' : 'text-muted-foreground'}`}>Venus</span>
        </div>

        {/* Earth */}
        <div data-body="earth" className="relative z-10 flex flex-col items-center gap-1 ml-2">
          <div className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 ${focusedBody === 'earth' ? 'bg-blue-500 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'earth' ? 'text-foreground' : 'text-muted-foreground'}`}>Earth</span>
        </div>

        <div data-body="luna" className="relative z-10 flex flex-col items-center gap-1">
          <div className={`w-2 h-2 rounded-full border-2 transition-colors duration-500 mt-[2px] ${focusedBody === 'luna' ? 'bg-slate-300 border-slate-200 shadow-[0_0_10px_rgba(203,213,225,0.5)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'luna' ? 'text-foreground' : 'text-muted-foreground'}`}>Luna</span>
        </div>

        <div data-body="mars" className="relative z-10 flex flex-col items-center gap-1 ml-2">
          <div className={`w-2.5 h-2.5 rounded-full border-2 transition-colors duration-500 mt-[1px] ${focusedBody === 'mars' ? 'bg-orange-500 border-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'mars' ? 'text-foreground' : 'text-muted-foreground'}`}>Mars</span>
        </div>

        {/* Asteroid Belt */}
        <div data-body="asteroid_belt" className="relative z-10 flex flex-col items-center gap-1 ml-4">
          <div className={`w-3 h-3 rounded-md rotate-45 border-2 transition-colors duration-500 ${focusedBody === 'asteroid_belt' ? 'bg-stone-500 border-stone-400 shadow-[0_0_10px_rgba(120,113,108,0.5)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'asteroid_belt' ? 'text-foreground' : 'text-muted-foreground'}`}>Belt</span>
        </div>

        {/* Jupiter */}
        <div data-body="jupiter" className="relative z-10 flex flex-col items-center gap-1 ml-6">
          <div className={`w-4 h-4 rounded-full border-[3px] transition-colors duration-500 mt-[-2px] ${focusedBody === 'jupiter' ? 'bg-orange-300 border-orange-200 shadow-[0_0_15px_rgba(253,186,116,0.8)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'jupiter' ? 'text-foreground' : 'text-muted-foreground'}`}>Jupiter</span>
        </div>

        {/* Saturn */}
        <div data-body="saturn" className="relative z-10 flex flex-col items-center gap-1 ml-4">
          <div className={`w-4 h-4 rounded-full border-2 transition-colors duration-500 mt-[-2px] ${focusedBody === 'saturn' ? 'bg-yellow-200 border-yellow-100 shadow-[0_0_15px_rgba(254,240,138,0.8)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'saturn' ? 'text-foreground' : 'text-muted-foreground'}`}>Saturn</span>
        </div>

        {/* Uranus */}
        <div data-body="uranus" className="relative z-10 flex flex-col items-center gap-1 ml-4">
          <div className={`w-3.5 h-3.5 rounded-full border-2 transition-colors duration-500 mt-[-1px] ${focusedBody === 'uranus' ? 'bg-cyan-200 border-cyan-100 shadow-[0_0_15px_rgba(165,243,252,0.8)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'uranus' ? 'text-foreground' : 'text-muted-foreground'}`}>Uranus</span>
        </div>

        {/* Neptune */}
        <div data-body="neptune" className="relative z-10 flex flex-col items-center gap-1 ml-4">
          <div className={`w-3.5 h-3.5 rounded-full border-2 transition-colors duration-500 mt-[-1px] ${focusedBody === 'neptune' ? 'bg-blue-600 border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.8)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'neptune' ? 'text-foreground' : 'text-muted-foreground'}`}>Neptune</span>
        </div>

        {/* Pluto */}
        <div data-body="pluto" className="relative z-10 flex flex-col items-center gap-1 ml-4">
          <div className={`w-1.5 h-1.5 rounded-full border-2 transition-colors duration-500 mt-[3px] ${focusedBody === 'pluto' ? 'bg-stone-300 border-stone-200 shadow-[0_0_10px_rgba(214,211,209,0.8)]' : 'bg-background border-muted-foreground'}`} />
          <span className={`text-[10px] ${focusedBody === 'pluto' ? 'text-foreground' : 'text-muted-foreground'}`}>Pluto</span>
        </div>



      </div>
    </div>
  );
}
