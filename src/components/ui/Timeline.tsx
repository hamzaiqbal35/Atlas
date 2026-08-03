"use client";

import { knowledgeGraph } from "@/data/knowledgeGraph";

interface TimelineProps {
  bodyId: string;
}

export function Timeline({ bodyId }: TimelineProps) {
  const body = knowledgeGraph[bodyId];
  if (!body || !body.timeline) return null;

  return (
    <div className="flex flex-col gap-4 mt-6">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
        Key Events
      </h4>
      <div className="flex flex-col gap-3 border-l border-border/50 ml-2 pl-4 relative">
        {body.timeline.map((item, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-primary" />
            <div className="text-xs font-mono text-muted-foreground">{item.year}</div>
            <div className="text-sm">{item.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
