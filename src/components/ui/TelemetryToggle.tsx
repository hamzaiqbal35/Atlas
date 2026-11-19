"use client";

import { useEffect } from "react";
import { useUIStore } from "@/store/useUIStore";
import { Eye, EyeOff } from "lucide-react";

export function TelemetryToggle() {
  const isTelemetryVisible = useUIStore((state) => state.isTelemetryVisible);
  const toggleTelemetry = useUIStore((state) => state.toggleTelemetry);

  // Keyboard shortcut: Press 'V' or 'v' to toggle telemetry cards
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input, textarea, or contentEditable
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      if (e.key === "v" || e.key === "V") {
        e.preventDefault();
        toggleTelemetry();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTelemetry]);

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-auto">
      <button
        onClick={toggleTelemetry}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-medium backdrop-blur-md shadow-xl transition-all duration-300 cursor-pointer ${
          isTelemetryVisible
            ? "bg-background/70 hover:bg-background/90 text-muted-foreground hover:text-foreground border-border/60"
            : "bg-blue-600/80 hover:bg-blue-600 text-white border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] animate-pulse"
        }`}
        title="Toggle telemetry cards to enjoy unobstructed cosmic travel (Shortcut: V)"
        aria-label="Toggle telemetry cards"
      >
        {isTelemetryVisible ? (
          <>
            <EyeOff className="w-3.5 h-3.5" />
            <span>Hide Cards</span>
            <kbd className="hidden sm:inline-block text-[10px] bg-white/10 px-1.5 py-0.2 rounded border border-white/10 font-mono">
              V
            </kbd>
          </>
        ) : (
          <>
            <Eye className="w-3.5 h-3.5" />
            <span>Show Cards</span>
            <kbd className="hidden sm:inline-block text-[10px] bg-white/20 px-1.5 py-0.2 rounded border border-white/20 font-mono">
              V
            </kbd>
          </>
        )}
      </button>
    </div>
  );
}
