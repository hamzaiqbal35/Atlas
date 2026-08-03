import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function GalaxiesPage() {
  return (
    <div className="min-h-screen p-8 md:p-24 pb-32">
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 flex items-center gap-4">
          <Sparkles className="w-12 h-12 text-primary" />
          Galaxies
        </h1>
        <p className="text-2xl text-muted-foreground font-medium mb-6 max-w-3xl">
          Explore the vast collections of stars, gas, and dust that make up the universe.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for Milky Way */}
        <Link href="/galaxies/milky-way">
          <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md p-8 hover:bg-card/50 transition-all duration-500 cursor-pointer">
            <h2 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">Milky Way</h2>
            <p className="text-muted-foreground mb-8">Our home galaxy, a barred spiral containing hundreds of billions of stars.</p>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
        
        {/* Placeholder for Andromeda */}
        <Link href="/galaxies/andromeda">
          <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md p-8 hover:bg-card/50 transition-all duration-500 cursor-pointer">
            <h2 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">Andromeda</h2>
            <p className="text-muted-foreground mb-8">Our closest large galactic neighbor, on a collision course with the Milky Way.</p>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
