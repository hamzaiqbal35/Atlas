export type EntityCategory = 
  | 'The Universe' | 'Space-Time' | 'Fundamental Physics' | 'Matter' 
  | 'Elementary Particles' | 'Atoms & Chemistry' | 'Cosmology' 
  | 'Galaxies' | 'Galaxy Structures' | 'Galaxy Groups' | 'Stars' 
  | 'Stellar Evolution' | 'Stellar Objects' | 'Stellar Remnants' 
  | 'Black Holes' | 'Planets' | 'Dwarf Planets' | 'Natural Satellites' 
  | 'Small Solar System Bodies' | 'Rings' | 'Nebulae' | 'Interstellar Medium' 
  | 'Intergalactic Medium' | 'High-Energy Objects' | 'Radiation' 
  | 'Space Phenomena' | 'Catastrophic Events' | 'Orbital Mechanics' 
  | 'Space Weather' | 'Cosmic Structures' | 'Constellations' 
  | 'Astronomical Coordinate Systems' | 'Time Systems' | 'Human Spaceflight' 
  | 'Astronomy' | 'The Solar System' | 'Exoplanets' | 'Life in the Universe' 
  | 'Space Missions' | 'Space Technology';

export interface GraphNode {
  id: string;
  name: string;
  category: EntityCategory;
  tagline: string;
  description: string;
  relatedIds: string[]; // Edges to other nodes in the graph
  
  // Optional specific data
  stats?: Record<string, string | number>;
  timeline?: { year: string; event: string }[];
  
  // If the node represents a 3D physical object we can fly to in the Canvas
  hasPhysicalLocation?: boolean;
}

export const knowledgeGraph: Record<string, GraphNode> = {
  // --- Physical Bodies (Migrated from celestialBodies) ---
  earth: {
    id: "earth",
    name: "Earth",
    category: "Planets",
    tagline: "The Pale Blue Dot",
    description: "Our home planet is the only place we know of so far that's inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
    relatedIds: ["sun", "luna", "gravity", "habitable_zone"],
    hasPhysicalLocation: true,
    stats: { mass: 1, gravity: 9.8, temperature: "15°C", distanceFromSun: "149.6M km" },
    timeline: [
      { year: "4.5B YA", event: "Formation of Earth" },
      { year: "3.7B YA", event: "First evidence of life" },
      { year: "1957", event: "Sputnik 1 launched" },
    ],
  },
  luna: {
    id: "luna",
    name: "Luna",
    category: "Natural Satellites",
    tagline: "Our Celestial Companion",
    description: "The Moon is Earth's only natural satellite. Its gravitational influence produces the ocean tides and slightly lengthens the day.",
    relatedIds: ["earth", "orbital_mechanics", "apollo_missions"],
    hasPhysicalLocation: true,
    stats: { mass: 0.0123, gravity: 1.62, temperature: "-53°C" },
    timeline: [
      { year: "4.5B YA", event: "Giant impact hypothesis formation" },
      { year: "1969", event: "Apollo 11 manned landing" },
    ],
  },
  sun: {
    id: "sun",
    name: "Sol",
    category: "Stars",
    tagline: "The Heart of Our System",
    description: "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together.",
    relatedIds: ["earth", "gravity", "solar_flare"],
    hasPhysicalLocation: true,
    stats: { mass: 333000, gravity: 274, temperature: "5,500°C" },
    timeline: [
      { year: "4.6B YA", event: "Sun formed from solar nebula" },
    ],
  },
  mercury: {
    id: "mercury",
    name: "Mercury",
    category: "Planets",
    tagline: "The Swift Planet",
    description: "The smallest planet in our solar system and closest to the Sun. It has a solid, cratered surface.",
    relatedIds: ["sun", "orbital_mechanics"],
    hasPhysicalLocation: true,
    stats: { mass: 0.055, gravity: 3.7, temperature: "167°C", distanceFromSun: "57.9M km" },
  },
  venus: {
    id: "venus",
    name: "Venus",
    category: "Planets",
    tagline: "Earth's Evil Twin",
    description: "A terrestrial planet sometimes called Earth's sister planet because of similar size, but with a toxic atmosphere.",
    relatedIds: ["earth", "greenhouse_effect"],
    hasPhysicalLocation: true,
    stats: { mass: 0.815, gravity: 8.87, temperature: "464°C", distanceFromSun: "108.2M km" },
  },
  mars: {
    id: "mars",
    name: "Mars",
    category: "Planets",
    tagline: "The Red Planet",
    description: "Mars is a dusty, cold, desert world with a very thin atmosphere.",
    relatedIds: ["earth", "mars_missions", "terraforming"],
    hasPhysicalLocation: true,
    stats: { mass: 0.107, gravity: 3.71, temperature: "-65°C", distanceFromSun: "227.9M km" },
  },
  jupiter: {
    id: "jupiter",
    name: "Jupiter",
    category: "Planets",
    tagline: "The Gas Giant",
    description: "The largest planet in the Solar System. It is a gas giant with a mass more than 2.5 times that of all the other planets combined.",
    relatedIds: ["sun", "gas_giant", "asteroid_belt"],
    hasPhysicalLocation: true,
    stats: { mass: 317.8, gravity: 24.79, temperature: "-110°C", distanceFromSun: "778.5M km" },
  },
  saturn: {
    id: "saturn",
    name: "Saturn",
    category: "Planets",
    tagline: "The Ringed Jewel",
    description: "Saturn is the sixth planet from the Sun, known for its extensive ring system.",
    relatedIds: ["sun", "gas_giant", "planetary_rings"],
    hasPhysicalLocation: true,
    stats: { mass: 95.16, gravity: 10.44, temperature: "-140°C", distanceFromSun: "1.43B km" },
  },
  uranus: {
    id: "uranus",
    name: "Uranus",
    category: "Planets",
    tagline: "The Ice Giant",
    description: "Uranus is the seventh planet from the Sun, rotating on its side.",
    relatedIds: ["sun", "ice_giant"],
    hasPhysicalLocation: true,
    stats: { mass: 14.54, gravity: 8.69, temperature: "-195°C", distanceFromSun: "2.87B km" },
  },
  neptune: {
    id: "neptune",
    name: "Neptune",
    category: "Planets",
    tagline: "The Windy Planet",
    description: "Neptune is the eighth and farthest-known Solar planet from the Sun. It is the densest giant planet.",
    relatedIds: ["sun", "ice_giant", "kuiper_belt"],
    hasPhysicalLocation: true,
    stats: { mass: 17.15, gravity: 11.15, temperature: "-200°C", distanceFromSun: "4.5B km" },
  },
  pluto: {
    id: "pluto",
    name: "Pluto",
    category: "Dwarf Planets",
    tagline: "The Dwarf Planet",
    description: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune.",
    relatedIds: ["sun", "kuiper_belt", "new_horizons"],
    hasPhysicalLocation: true,
    stats: { mass: 0.002, gravity: 0.62, temperature: "-225°C", distanceFromSun: "5.9B km" },
  },
  asteroid_belt: {
    id: "asteroid_belt",
    name: "Asteroid Belt",
    category: "Small Solar System Bodies",
    tagline: "The Cosmic Rubble",
    description: "A torus-shaped region in the Solar System, located roughly between the orbits of Jupiter and Mars.",
    relatedIds: ["mars", "jupiter", "asteroids"],
    hasPhysicalLocation: true,
  },
  voyager: {
    id: "voyager",
    name: "Voyager 1",
    category: "Space Missions",
    tagline: "The Distant Envoy",
    description: "A space probe launched by NASA on September 5, 1977. It is the most distant human-made object from Earth.",
    relatedIds: ["earth", "jupiter", "saturn", "interstellar_medium"],
    hasPhysicalLocation: true,
  },
  milky_way: {
    id: "milky_way",
    name: "Milky Way",
    category: "Galaxies",
    tagline: "Our Galactic Home",
    description: "The galaxy that includes our Solar System. It is a barred spiral galaxy.",
    relatedIds: ["sun", "blackhole", "local_group"],
    hasPhysicalLocation: true,
  },
  blackhole: {
    id: "blackhole",
    name: "Sagittarius A*",
    category: "Black Holes",
    tagline: "The Galactic Center",
    description: "A supermassive black hole at the Galactic Center of the Milky Way.",
    relatedIds: ["milky_way", "general_relativity", "spacetime", "gravity"],
    hasPhysicalLocation: true,
  },

  // --- Abstract Concepts (The Knowledge Graph extensions) ---
  gravity: {
    id: "gravity",
    name: "Gravity",
    category: "Fundamental Physics",
    tagline: "The Universal Attraction",
    description: "A fundamental interaction which causes mutual attraction between all things that have mass or energy.",
    relatedIds: ["spacetime", "general_relativity", "blackhole", "orbital_mechanics"],
    hasPhysicalLocation: false,
  },
  spacetime: {
    id: "spacetime",
    name: "Space-Time",
    category: "Space-Time",
    tagline: "The Fabric of the Universe",
    description: "A mathematical model that combines the three dimensions of space and one dimension of time into a single four-dimensional manifold.",
    relatedIds: ["general_relativity", "gravity", "blackhole"],
    hasPhysicalLocation: false,
  },
  general_relativity: {
    id: "general_relativity",
    name: "General Relativity",
    category: "Fundamental Physics",
    tagline: "Einstein's Masterpiece",
    description: "The geometric theory of gravitation published by Albert Einstein in 1915 and the current description of gravitation in modern physics.",
    relatedIds: ["gravity", "spacetime"],
    hasPhysicalLocation: false,
  },
  orbital_mechanics: {
    id: "orbital_mechanics",
    name: "Orbital Mechanics",
    category: "Orbital Mechanics",
    tagline: "Astrodynamics",
    description: "The application of ballistics and celestial mechanics to the practical problems concerning the motion of rockets and other spacecraft.",
    relatedIds: ["gravity", "earth", "luna", "voyager"],
    hasPhysicalLocation: false,
  },
  gas_giant: {
    id: "gas_giant",
    name: "Gas Giant",
    category: "Planets",
    tagline: "Massive Gaseous Worlds",
    description: "A giant planet composed mainly of hydrogen and helium.",
    relatedIds: ["jupiter", "saturn", "exoplanets"],
    hasPhysicalLocation: false,
  },
  planetary_rings: {
    id: "planetary_rings",
    name: "Planetary Rings",
    category: "Rings",
    tagline: "Orbital Disks of Dust",
    description: "A ring or disk of orbiting material composed of macroscopic material such as dust and moonlets.",
    relatedIds: ["saturn", "orbital_mechanics"],
    hasPhysicalLocation: false,
  },
  habitable_zone: {
    id: "habitable_zone",
    name: "Habitable Zone",
    category: "Life in the Universe",
    tagline: "The Goldilocks Zone",
    description: "The range of orbits around a star within which a planetary surface can support liquid water given sufficient atmospheric pressure.",
    relatedIds: ["earth", "exoplanets"],
    hasPhysicalLocation: false,
  }
};
