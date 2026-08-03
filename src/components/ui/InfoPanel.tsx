"use client";

import { useDataStore } from "@/store/useDataStore";
import { knowledgeGraph } from "@/data/knowledgeGraph";
import { ComparisonChart } from "./ComparisonChart";
import { Timeline } from "./Timeline";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "./TiltCard";
import Link from "next/link";
import { Button } from "./button";
import { fallbackBodies } from "@/lib/fallbackData";

export function InfoPanel() {
  const activeNodeId = useDataStore((state) => state.activeNodeId);
  const activeNode = activeNodeId ? knowledgeGraph[activeNodeId] : null;
  const setActiveNode = useDataStore((state) => state.setActiveNode);

  const celestialBodyId = activeNodeId === 'luna' ? 'moon' : activeNodeId;
  const celestialData = celestialBodyId ? fallbackBodies[celestialBodyId] : null;

  return (
    <AnimatePresence mode="wait">
      {activeNode && (
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20, 
            mass: 1 
          }}
          className="fixed left-8 top-28 bottom-36 w-80 z-50 pointer-events-auto perspective-[1000px]"
        >
          <TiltCard data-lenis-prevent="true" className="w-full h-full bg-background/60 backdrop-blur-xl border border-border/50 rounded-3xl p-6 shadow-2xl flex flex-col overflow-y-auto hide-scrollbar">
            <div className="flex-1">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {activeNode.category}
              </div>
              <h2 className="text-4xl font-bold tracking-tight">{activeNode.name}</h2>
              <p className="text-primary font-medium mt-1">{activeNode.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                {activeNode.description}
              </p>

              {celestialData && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Mass (kg)</div>
                    <div className="font-mono text-sm">{celestialData.mass ? `${celestialData.mass.massValue} × 10^${celestialData.mass.massExponent}` : 'N/A'}</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Gravity (m/s²)</div>
                    <div className="font-mono text-sm">{celestialData.gravity || 'N/A'}</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Radius (km)</div>
                    <div className="font-mono text-sm">{celestialData.meanRadius ? celestialData.meanRadius.toLocaleString() : 'N/A'}</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Avg Temp (K)</div>
                    <div className="font-mono text-sm">{celestialData.avgTemp || 'N/A'}</div>
                  </div>
                </div>
              )}

              {activeNode.relatedIds && activeNode.relatedIds.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related Concepts</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeNode.relatedIds.map(id => (
                      <button
                        key={id}
                        onClick={() => setActiveNode(id)}
                        className="px-3 py-1.5 bg-secondary/50 hover:bg-secondary text-secondary-foreground text-xs rounded-full transition-colors"
                      >
                        {id.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Only show comparison if it's a physical planet with mass (legacy support for the existing chart) */}
              {activeNode.stats?.mass && (
                <ComparisonChart bodyId={activeNode.id} />
              )}
              
              {activeNode.timeline && (
                <Timeline bodyId={activeNode.id} />
              )}

              <div className="mt-8 pt-4 border-t border-border/50">
                <Link href={`/body/${activeNode.id}`} className="w-full">
                  <Button className="w-full rounded-full" variant="secondary">
                    Access Observatory Data
                  </Button>
                </Link>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
