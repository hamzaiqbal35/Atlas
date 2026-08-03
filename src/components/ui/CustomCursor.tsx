"use client";

import Ribbons from "@/components/ui/Ribbons";

const CURSOR_COLORS = ["#ffffff"];

export function CustomCursor() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999]">
      <Ribbons
        baseThickness={45}
        colors={CURSOR_COLORS}
        baseSpring={0.06}
        baseFriction={0.85}
        speedMultiplier={0.6}
        maxAge={600}
        enableFade={true}
        enableShaderEffect={true}
      />
    </div>
  );
}

