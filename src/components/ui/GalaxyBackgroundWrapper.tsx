"use client";

import { useDataStore } from "@/store/useDataStore";
import GalaxyBackground from "./GalaxyBackground";
import { motion, AnimatePresence } from "framer-motion";

export function GalaxyBackgroundWrapper() {
  const focusedBody = useDataStore((state) => state.activeNodeId);
  const isMilkyWay = focusedBody === "milky_way";

  return (
    <AnimatePresence>
      {isMilkyWay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[5] pointer-events-auto"
        >
          <GalaxyBackground
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
