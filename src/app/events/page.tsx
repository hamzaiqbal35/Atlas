import Link from "next/link";
import { Orbit, ArrowRight } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen p-8 md:p-24 pb-32">
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 flex items-center gap-4">
          <Orbit className="w-12 h-12 text-primary" />
          Cosmic Events
        </h1>
        <p className="text-2xl text-muted-foreground font-medium mb-6 max-w-3xl">
          Witness the most powerful phenomena in the universe, from star birth to black holes.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/events/black-hole">
          <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md p-8 hover:bg-card/50 transition-all duration-500 cursor-pointer">
            <h2 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">Black Holes</h2>
            <p className="text-muted-foreground mb-8">Regions of spacetime where gravity is so strong that nothing, not even light, can escape.</p>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>

        <Link href="/events/supernova">
          <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md p-8 hover:bg-card/50 transition-all duration-500 cursor-pointer">
            <h2 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">Supernovae</h2>
            <p className="text-muted-foreground mb-8">Powerful and luminous stellar explosions that occur at the end of a star's life cycle.</p>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
