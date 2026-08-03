"use client";


import { Button } from "./button";
import GooeyNav from "./GooeyNav";

import Image from "next/image";

export function TopNav() {

  const gooeyItems = [
    { label: "Solar System", href: "/" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 py-3 px-6 flex items-center justify-between pointer-events-auto z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center">
        <Image src="/atlas_logo_transparent.png" alt="Atlas Logo" width={160} height={48} className="object-contain h-12 w-auto opacity-100 drop-shadow-md" priority />
      </div>
      
      <div className="hidden sm:block">
        <GooeyNav items={gooeyItems} />
      </div>

      <div className="flex items-center gap-4">
      </div>
    </nav>
  );
}
