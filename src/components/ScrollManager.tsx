"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCameraStore } from "@/store/useCameraStore";
import { useDataStore } from "@/store/useDataStore";

gsap.registerPlugin(ScrollTrigger);

export function ScrollManager() {
  const setCameraPosition = useCameraStore((state) => state.setCameraPosition);
  const setCameraTarget = useCameraStore((state) => state.setCameraTarget);
    const setActiveNode = useDataStore((state) => state.setActiveNode);

    useEffect(() => {
      // A proxy object to hold values that GSAP will tween
      // Initial state: Sun (Dramatic high angle)
    const proxy = {
      x: -15, y: 12, z: 30,
      tx: 0, ty: 0, tz: 0
    };

    setCameraPosition([proxy.x, proxy.y, proxy.z]);
    setCameraTarget([proxy.tx, proxy.ty, proxy.tz]);
    setActiveNode("sun");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main-scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smooth scrubbing
      },
      onUpdate: function () {
        setCameraPosition([proxy.x, proxy.y, proxy.z]);
        setCameraTarget([proxy.tx, proxy.ty, proxy.tz]);
        
        const progress = this.progress();
        const p = progress * 11;
        
        if (p < 0.5) setActiveNode("sun");
        else if (p < 1.5) setActiveNode("mercury");
        else if (p < 2.5) setActiveNode("venus");
        else if (p < 3.5) setActiveNode("earth");
        else if (p < 4.5) setActiveNode("luna");
        else if (p < 5.5) setActiveNode("mars");
        else if (p < 6.5) setActiveNode("asteroid_belt");
        else if (p < 7.5) setActiveNode("jupiter");
        else if (p < 8.5) setActiveNode("saturn");
        else if (p < 9.5) setActiveNode("uranus");
        else if (p < 10.5) setActiveNode("neptune");
        else setActiveNode("pluto");
      }
    });

    const ease = "power2.inOut";

    // 1. Move to Mercury (Dive down below ecliptic)
    tl.to(proxy, { x: 32, y: -2, z: 3, tx: 30, ty: 0, tz: 0, duration: 1, ease });

    // 2. Move to Venus (Swoop up and around to the back)
    tl.to(proxy, { x: 55, y: 5, z: -8, tx: 60, ty: 0, tz: 0, duration: 1, ease });
    
    // 3. Move to Earth (Swing to front, medium height)
    tl.to(proxy, { x: 90, y: 2, z: 12, tx: 90, ty: 0, tz: 0, duration: 1, ease });
    
    // 4. Move to Moon (Tight close-up from below)
    tl.to(proxy, { x: 96, y: -1.5, z: 3, tx: 96, ty: 0, tz: 0, duration: 1, ease });

    // 5. Move to Mars (Above and from the left)
    tl.to(proxy, { x: 115, y: 4, z: 8, tx: 120, ty: 0, tz: 0, duration: 1, ease });
    
    // 6. Move to Asteroid Belt (High sweeping view)
    tl.to(proxy, { x: 150, y: 18, z: 25, tx: 150, ty: 0, tz: 0, duration: 1, ease });

    // 7. Move to Jupiter (Drop low to emphasize size)
    tl.to(proxy, { x: 180, y: -8, z: 22, tx: 190, ty: 0, tz: 0, duration: 1, ease });

    // 8. Move to Saturn (Fly slightly past and look back at rings)
    tl.to(proxy, { x: 236, y: 8, z: 16, tx: 230, ty: 0, tz: 0, duration: 1, ease });

    // 9. Move to Uranus (Go to the dark side, below)
    tl.to(proxy, { x: 270, y: -5, z: -15, tx: 270, ty: 0, tz: 0, duration: 1, ease });

    // 10. Move to Neptune (Back to front, slightly elevated)
    tl.to(proxy, { x: 305, y: 6, z: 14, tx: 310, ty: 0, tz: 0, duration: 1, ease });

    // 11. Move to Pluto (Intimate close-up, slightly behind)
    tl.to(proxy, { x: 343, y: 1, z: 4, tx: 340, ty: 0, tz: 0, duration: 1, ease });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [setCameraPosition, setCameraTarget, setActiveNode]);

  return null;
}
