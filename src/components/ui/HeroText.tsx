"use client";

import { useDataStore } from "@/store/useDataStore";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";

export function HeroText() {
  const activeNodeId = useDataStore((state) => state.activeNodeId);

  return (
    <AnimatePresence>
      {!activeNodeId && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
          className="pointer-events-auto max-w-2xl mt-16 self-start text-left"
        >
          <h1 className="text-6xl font-bold mb-4 tracking-tight">Atlas</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
            An Interactive Knowledge Experience. Explore the solar system through a premium 3D journey.
          </p>
          <Button variant="outline" className="rounded-full px-8 pointer-events-auto">Initialize Journey</Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
