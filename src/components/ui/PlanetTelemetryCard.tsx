"use client";

import { useUIStore } from "@/store/useUIStore";
import TiltedCard from "./TiltedCard";
import { motion, AnimatePresence } from "framer-motion";
import { EyeOff, ExternalLink } from "lucide-react";

export interface PlanetTelemetryCardProps {
  id: string;
  badge?: string;
  heading: string;
  description: string;
  imageSrc: string;
  altText: string;
  captionText: string;
  missionLabel?: string;
  missionName: string;
  missionLink: string;
}

export function PlanetTelemetryCard({
  id,
  badge = "Telemetry & Science",
  heading,
  description,
  imageSrc,
  altText,
  captionText,
  missionLabel = "Mission Authority",
  missionName,
  missionLink,
}: PlanetTelemetryCardProps) {
  const isTelemetryVisible = useUIStore((state) => state.isTelemetryVisible);
  const toggleTelemetry = useUIStore((state) => state.toggleTelemetry);

  return (
    <AnimatePresence>
      {isTelemetryVisible && (
        <motion.div
          key={`telemetry-${id}`}
          initial={{ opacity: 0, x: 25, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 25, scale: 0.96, transition: { duration: 0.25 } }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="bg-background/80 backdrop-blur-md border border-border p-4 rounded-2xl flex flex-col gap-3 shadow-2xl max-w-[340px] w-full pointer-events-auto select-none"
        >
          {/* Card Top Utility Bar */}
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="font-semibold text-blue-400/90">{badge}</span>
            <button
              onClick={toggleTelemetry}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground hover:bg-white/10 px-1.5 py-0.5 rounded transition-all cursor-pointer"
              title="Hide card to enjoy unobstructed view (Shortcut: V)"
              aria-label="Hide telemetry card"
            >
              <EyeOff className="w-3 h-3" />
              <span className="normal-case text-[11px]">Hide</span>
            </button>
          </div>

          {/* Interactive 3D Tilted Card Visual */}
          <TiltedCard
            imageSrc={imageSrc}
            altText={altText}
            captionText={captionText}
            containerHeight="190px"
            containerWidth="100%"
            imageHeight="190px"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
          />

          {/* Card Content & Scientific Heading */}
          <div>
            <h2 className="font-semibold text-sm leading-snug">{heading}</h2>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              {description}
            </p>

            {/* Outbound Authoritative Link */}
            <div className="mt-2.5 pt-2 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{missionLabel}:</span>
              <a
                href={missionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors font-medium inline-flex items-center gap-1"
              >
                {missionName}
                <ExternalLink className="w-2.5 h-2.5 opacity-70" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
