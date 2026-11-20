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

  const navigateTo = (bodyId: string) => {
    const el = document.getElementById(`section-${bodyId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={scrollRef} className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl p-4 flex flex-col gap-2 pointer-events-auto z-40 overflow-x-auto no-scrollbar md:max-w-none">
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 sticky left-0">
        System Map
      </div>
      
      <div className="flex items-center gap-4 relative h-8 px-2 min-w-max">
        {/* The line connecting planets */}
        <div className="absolute left-4 right-4 top-1/2 h-[1px] bg-border/50 -translate-y-1/2 z-0" />
        
        {/* Sun */}
        <button 
          type="button"
          onClick={() => navigateTo('sun')}
          title="Navigate to Sol (Sun)"
          data-body="sun" 
          className="relative z-10 flex flex-col items-center gap-1 cursor-pointer group focus:outline-none"
        >
          <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 mt-[-2px] group-hover:scale-125 ${focusedBody === 'sun' ? 'bg-yellow-500 border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.5)]' : 'bg-background border-muted-foreground group-hover:border-yellow-400'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'sun' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Sol</span>
        </button>

        {/* Mercury */}
        <button 
          type="button"
          onClick={() => navigateTo('mercury')}
          title="Navigate to Mercury"
          data-body="mercury" 
          className="relative z-10 flex flex-col items-center gap-1 ml-2 cursor-pointer group focus:outline-none"
        >
          <div className={`w-2 h-2 rounded-full border-2 transition-all duration-200 mt-[2px] group-hover:scale-125 ${focusedBody === 'mercury' ? 'bg-stone-400 border-stone-300 shadow-[0_0_10px_rgba(168,162,158,0.5)]' : 'bg-background border-muted-foreground group-hover:border-stone-300'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'mercury' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Mercury</span>
        </button>

        {/* Venus */}
        <button 
          type="button"
          onClick={() => navigateTo('venus')}
          title="Navigate to Venus"
          data-body="venus" 
          className="relative z-10 flex flex-col items-center gap-1 ml-2 cursor-pointer group focus:outline-none"
        >
          <div className={`w-3 h-3 rounded-full border-2 transition-all duration-200 mt-[1px] group-hover:scale-125 ${focusedBody === 'venus' ? 'bg-amber-500 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-background border-muted-foreground group-hover:border-amber-400'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'venus' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Venus</span>
        </button>

        {/* Earth */}
        <button 
          type="button"
          onClick={() => navigateTo('earth')}
          title="Navigate to Earth"
          data-body="earth" 
          className="relative z-10 flex flex-col items-center gap-1 ml-2 cursor-pointer group focus:outline-none"
        >
          <div className={`w-3 h-3 rounded-full border-2 transition-all duration-200 group-hover:scale-125 ${focusedBody === 'earth' ? 'bg-blue-500 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-background border-muted-foreground group-hover:border-blue-400'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'earth' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Earth</span>
        </button>

        {/* Luna */}
        <button 
          type="button"
          onClick={() => navigateTo('luna')}
          title="Navigate to Luna (Moon)"
          data-body="luna" 
          className="relative z-10 flex flex-col items-center gap-1 cursor-pointer group focus:outline-none"
        >
          <div className={`w-2 h-2 rounded-full border-2 transition-all duration-200 mt-[2px] group-hover:scale-125 ${focusedBody === 'luna' ? 'bg-slate-300 border-slate-200 shadow-[0_0_10px_rgba(203,213,225,0.5)]' : 'bg-background border-muted-foreground group-hover:border-slate-200'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'luna' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Luna</span>
        </button>

        {/* Mars */}
        <button 
          type="button"
          onClick={() => navigateTo('mars')}
          title="Navigate to Mars"
          data-body="mars" 
          className="relative z-10 flex flex-col items-center gap-1 ml-2 cursor-pointer group focus:outline-none"
        >
          <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-200 mt-[1px] group-hover:scale-125 ${focusedBody === 'mars' ? 'bg-orange-500 border-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-background border-muted-foreground group-hover:border-orange-400'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'mars' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Mars</span>
        </button>

        {/* Asteroid Belt */}
        <button 
          type="button"
          onClick={() => navigateTo('asteroid_belt')}
          title="Navigate to Asteroid Belt"
          data-body="asteroid_belt" 
          className="relative z-10 flex flex-col items-center gap-1 ml-4 cursor-pointer group focus:outline-none"
        >
          <div className={`w-3 h-3 rounded-md rotate-45 border-2 transition-all duration-200 group-hover:scale-125 ${focusedBody === 'asteroid_belt' ? 'bg-stone-500 border-stone-400 shadow-[0_0_10px_rgba(120,113,108,0.5)]' : 'bg-background border-muted-foreground group-hover:border-stone-400'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'asteroid_belt' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Belt</span>
        </button>

        {/* Jupiter */}
        <button 
          type="button"
          onClick={() => navigateTo('jupiter')}
          title="Navigate to Jupiter"
          data-body="jupiter" 
          className="relative z-10 flex flex-col items-center gap-1 ml-6 cursor-pointer group focus:outline-none"
        >
          <div className={`w-4 h-4 rounded-full border-[3px] transition-all duration-200 mt-[-2px] group-hover:scale-125 ${focusedBody === 'jupiter' ? 'bg-orange-300 border-orange-200 shadow-[0_0_15px_rgba(253,186,116,0.8)]' : 'bg-background border-muted-foreground group-hover:border-orange-200'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'jupiter' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Jupiter</span>
        </button>

        {/* Saturn */}
        <button 
          type="button"
          onClick={() => navigateTo('saturn')}
          title="Navigate to Saturn"
          data-body="saturn" 
          className="relative z-10 flex flex-col items-center gap-1 ml-4 cursor-pointer group focus:outline-none"
        >
          <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 mt-[-2px] group-hover:scale-125 ${focusedBody === 'saturn' ? 'bg-yellow-200 border-yellow-100 shadow-[0_0_15px_rgba(254,240,138,0.8)]' : 'bg-background border-muted-foreground group-hover:border-yellow-100'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'saturn' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Saturn</span>
        </button>

        {/* Uranus */}
        <button 
          type="button"
          onClick={() => navigateTo('uranus')}
          title="Navigate to Uranus"
          data-body="uranus" 
          className="relative z-10 flex flex-col items-center gap-1 ml-4 cursor-pointer group focus:outline-none"
        >
          <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 mt-[-1px] group-hover:scale-125 ${focusedBody === 'uranus' ? 'bg-cyan-200 border-cyan-100 shadow-[0_0_15px_rgba(165,243,252,0.8)]' : 'bg-background border-muted-foreground group-hover:border-cyan-100'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'uranus' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Uranus</span>
        </button>

        {/* Neptune */}
        <button 
          type="button"
          onClick={() => navigateTo('neptune')}
          title="Navigate to Neptune"
          data-body="neptune" 
          className="relative z-10 flex flex-col items-center gap-1 ml-4 cursor-pointer group focus:outline-none"
        >
          <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 mt-[-1px] group-hover:scale-125 ${focusedBody === 'neptune' ? 'bg-blue-600 border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.8)]' : 'bg-background border-muted-foreground group-hover:border-blue-400'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'neptune' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Neptune</span>
        </button>

        {/* Pluto */}
        <button 
          type="button"
          onClick={() => navigateTo('pluto')}
          title="Navigate to Pluto"
          data-body="pluto" 
          className="relative z-10 flex flex-col items-center gap-1 ml-4 cursor-pointer group focus:outline-none"
        >
          <div className={`w-1.5 h-1.5 rounded-full border-2 transition-all duration-200 mt-[3px] group-hover:scale-125 ${focusedBody === 'pluto' ? 'bg-stone-300 border-stone-200 shadow-[0_0_10px_rgba(214,211,209,0.8)]' : 'bg-background border-muted-foreground group-hover:border-stone-200'}`} />
          <span className={`text-[10px] transition-colors ${focusedBody === 'pluto' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>Pluto</span>
        </button>



      </div>
    </div>
  );
}
