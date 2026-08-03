"use client";

import { knowledgeGraph } from "@/data/knowledgeGraph";

interface ComparisonChartProps {
  bodyId: string;
}

export function ComparisonChart({ bodyId }: ComparisonChartProps) {
  const body = knowledgeGraph[bodyId];
  if (!body) return null;

  // For planets, compare against Earth by default
  // In the future this can compare against other nodes
  const earth = knowledgeGraph["earth"];

  if (!body.stats || !earth || !earth.stats) return null;

  // Normalize for bar charts (Earth = 100%)
  const massRatio = Math.min((Number(body.stats.mass) / Number(earth.stats.mass)) * 100, 100);
  const gravityRatio = Math.min((Number(body.stats.gravity) / Number(earth.stats.gravity)) * 100, 100);

  return (
    <div className="flex flex-col gap-4 mt-6">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
        Comparison (vs Earth)
      </h4>
      
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xs">
          <span>Mass</span>
          <span>{body.stats.massDisplay || `${body.stats.mass}x`}</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
          <div 
            className="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${massRatio}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xs">
          <span>Gravity</span>
          <span>{body.stats.gravityDisplay || `${body.stats.gravity} m/s²`}</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
          <div 
            className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000 ease-out delay-100"
            style={{ width: `${gravityRatio}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Surface Temp</span>
          <span className="text-sm font-mono">{body.stats.temperature}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Dist. from Sun</span>
          <span className="text-sm font-mono">{body.stats.distanceFromSun}</span>
        </div>
      </div>
    </div>
  );
}
