import { 
  Globe, Orbit, Atom, Microscope, Telescope, Waves, Cpu, Network,
  Rocket, Zap, Star, Activity, Hexagon, Snowflake, Flame, Shield, 
  Target, Sparkles, Variable, Thermometer, Wind, Infinity, 
  CircleDot, Fingerprint, Radar, Eclipse, Component, Combine, Aperture
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SubCategory {
  slug: string;
  title: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  subcategories?: SubCategory[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'the-universe',
    title: 'The Universe',
    description: 'Explore The Universe.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'observable-universe', title: 'Observable Universe' },
      { slug: 'entire-universe', title: 'Entire Universe' },
      { slug: 'cosmic-web', title: 'Cosmic Web' },
      { slug: 'large-scale-structure', title: 'Large Scale Structure' },
      { slug: 'cosmic-horizon', title: 'Cosmic Horizon' },
      { slug: 'inflationary-universe', title: 'Inflationary Universe' },
      { slug: 'expansion-of-universe', title: 'Expansion of Universe' },
      { slug: 'dark-universe', title: 'Dark Universe' },
    ]
  },
  {
    slug: 'space-time',
    title: 'Space-Time',
    description: 'Explore Space-Time.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'space', title: 'Space' },
      { slug: 'time', title: 'Time' },
      { slug: 'space-time', title: 'Space-Time' },
      { slug: 'curvature', title: 'Curvature' },
      { slug: 'minkowski-space', title: 'Minkowski Space' },
      { slug: 'four-dimensional-space-time', title: 'Four-Dimensional Space-Time' },
      { slug: 'relativity', title: 'Relativity' },
    ]
  },
  {
    slug: 'fundamental-physics',
    title: 'Fundamental Physics',
    description: 'Explore Fundamental Physics.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'gravity', title: 'Gravity' },
      { slug: 'electromagnetism', title: 'Electromagnetism' },
      { slug: 'strong-nuclear-force', title: 'Strong Nuclear Force' },
      { slug: 'weak-nuclear-force', title: 'Weak Nuclear Force' },
      { slug: 'quantum-physics', title: 'Quantum Physics' },
      { slug: 'general-relativity', title: 'General Relativity' },
      { slug: 'special-relativity', title: 'Special Relativity' },
      { slug: 'string-theory', title: 'String Theory' },
      { slug: 'loop-quantum-gravity', title: 'Loop Quantum Gravity' },
    ]
  },
  {
    slug: 'matter',
    title: 'Matter',
    description: 'Explore Matter.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'normal-matter', title: 'Normal Matter' },
      { slug: 'dark-matter', title: 'Dark Matter' },
      { slug: 'dark-energy', title: 'Dark Energy' },
      { slug: 'antimatter', title: 'Antimatter' },
      { slug: 'exotic-matter', title: 'Exotic Matter' },
      { slug: 'degenerate-matter', title: 'Degenerate Matter' },
      { slug: 'quark-matter', title: 'Quark Matter' },
      { slug: 'neutron-matter', title: 'Neutron Matter' },
    ]
  },
  {
    slug: 'elementary-particles',
    title: 'Elementary Particles',
    description: 'Explore Elementary Particles.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'quarks', title: 'Quarks' },
      { slug: 'leptons', title: 'Leptons' },
      { slug: 'bosons', title: 'Bosons' },
      { slug: 'higgs-boson', title: 'Higgs Boson' },
      { slug: 'photon', title: 'Photon' },
      { slug: 'neutrino', title: 'Neutrino' },
      { slug: 'muon', title: 'Muon' },
      { slug: 'electron', title: 'Electron' },
      { slug: 'proton', title: 'Proton' },
      { slug: 'neutron', title: 'Neutron' },
      { slug: 'gluon', title: 'Gluon' },
    ]
  },
  {
    slug: 'atoms-chemistry',
    title: 'Atoms & Chemistry',
    description: 'Explore Atoms & Chemistry.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'hydrogen', title: 'Hydrogen' },
      { slug: 'helium', title: 'Helium' },
      { slug: 'lithium', title: 'Lithium' },
      { slug: 'all-118-elements', title: 'All 118 elements' },
      { slug: 'molecules', title: 'Molecules' },
      { slug: 'interstellar-chemistry', title: 'Interstellar Chemistry' },
      { slug: 'organic-molecules', title: 'Organic Molecules' },
    ]
  },
  {
    slug: 'cosmology',
    title: 'Cosmology',
    description: 'Explore Cosmology.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'big-bang', title: 'Big Bang' },
      { slug: 'inflation', title: 'Inflation' },
      { slug: 'recombination', title: 'Recombination' },
      { slug: 'dark-ages', title: 'Dark Ages' },
      { slug: 'first-stars', title: 'First Stars' },
      { slug: 'galaxy-formation', title: 'Galaxy Formation' },
      { slug: 'heat-death', title: 'Heat Death' },
      { slug: 'big-crunch', title: 'Big Crunch' },
      { slug: 'big-rip', title: 'Big Rip' },
      { slug: 'big-bounce', title: 'Big Bounce' },
      { slug: 'false-vacuum', title: 'False Vacuum' },
      { slug: 'vacuum-decay', title: 'Vacuum Decay' },
    ]
  },
  {
    slug: 'galaxies',
    title: 'Galaxies',
    description: 'Explore Galaxies.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'milky-way', title: 'Milky Way' },
      { slug: 'andromeda-galaxy', title: 'Andromeda Galaxy' },
      { slug: 'triangulum-galaxy', title: 'Triangulum Galaxy' },
      { slug: 'elliptical', title: 'Elliptical' },
      { slug: 'spiral', title: 'Spiral' },
      { slug: 'barred-spiral', title: 'Barred Spiral' },
      { slug: 'lenticular', title: 'Lenticular' },
      { slug: 'irregular', title: 'Irregular' },
      { slug: 'dwarf', title: 'Dwarf' },
      { slug: 'ultra-diffuse', title: 'Ultra Diffuse' },
      { slug: 'starburst', title: 'Starburst' },
      { slug: 'radio-galaxy', title: 'Radio Galaxy' },
      { slug: 'active-galaxy', title: 'Active Galaxy' },
    ]
  },
  {
    slug: 'galaxy-structures',
    title: 'Galaxy Structures',
    description: 'Explore Galaxy Structures.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'galactic-core', title: 'Galactic Core' },
      { slug: 'bulge', title: 'Bulge' },
      { slug: 'halo', title: 'Halo' },
      { slug: 'disk', title: 'Disk' },
      { slug: 'bar', title: 'Bar' },
      { slug: 'spiral-arm', title: 'Spiral Arm' },
      { slug: 'dark-matter-halo', title: 'Dark Matter Halo' },
    ]
  },
  {
    slug: 'galaxy-groups',
    title: 'Galaxy Groups',
    description: 'Explore Galaxy Groups.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'local-group', title: 'Local Group' },
      { slug: 'galaxy-clusters', title: 'Galaxy Clusters' },
      { slug: 'superclusters', title: 'Superclusters' },
      { slug: 'filaments', title: 'Filaments' },
      { slug: 'voids', title: 'Voids' },
    ]
  },
  {
    slug: 'stars',
    title: 'Stars',
    description: 'Explore Stars.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'protostar', title: 'Protostar' },
      { slug: 'main-sequence', title: 'Main Sequence' },
      { slug: 'red-giant', title: 'Red Giant' },
      { slug: 'blue-giant', title: 'Blue Giant' },
      { slug: 'supergiant', title: 'Supergiant' },
      { slug: 'hypergiant', title: 'Hypergiant' },
      { slug: 'wolf-rayet', title: 'Wolf-Rayet' },
      { slug: 'population-i', title: 'Population I' },
      { slug: 'population-ii', title: 'Population II' },
      { slug: 'population-iii', title: 'Population III' },
      { slug: 'white-dwarf', title: 'White Dwarf' },
      { slug: 'neutron-star', title: 'Neutron Star' },
      { slug: 'magnetar', title: 'Magnetar' },
      { slug: 'pulsar', title: 'Pulsar' },
      { slug: 'brown-dwarf', title: 'Brown Dwarf' },
      { slug: 'black-dwarf', title: 'Black Dwarf' },
    ]
  },
  {
    slug: 'stellar-evolution',
    title: 'Stellar Evolution',
    description: 'Explore Stellar Evolution.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'nebula', title: 'Nebula' },
      { slug: 'protostar', title: 'Protostar' },
      { slug: 't-tauri', title: 'T Tauri' },
      { slug: 'main-sequence', title: 'Main Sequence' },
      { slug: 'red-giant', title: 'Red Giant' },
      { slug: 'planetary-nebula', title: 'Planetary Nebula' },
      { slug: 'white-dwarf', title: 'White Dwarf' },
      { slug: 'supernova', title: 'Supernova' },
      { slug: 'neutron-star', title: 'Neutron Star' },
      { slug: 'black-hole', title: 'Black Hole' },
    ]
  },
  {
    slug: 'stellar-objects',
    title: 'Stellar Objects',
    description: 'Explore Stellar Objects.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'binary-star', title: 'Binary Star' },
      { slug: 'triple-star', title: 'Triple Star' },
      { slug: 'variable-star', title: 'Variable Star' },
      { slug: 'runaway-star', title: 'Runaway Star' },
      { slug: 'flare-star', title: 'Flare Star' },
      { slug: 'carbon-star', title: 'Carbon Star' },
      { slug: 'be-star', title: 'Be Star' },
      { slug: 'cepheid', title: 'Cepheid' },
      { slug: 'rr-lyrae', title: 'RR Lyrae' },
    ]
  },
  {
    slug: 'stellar-remnants',
    title: 'Stellar Remnants',
    description: 'Explore Stellar Remnants.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'white-dwarf', title: 'White Dwarf' },
      { slug: 'black-dwarf', title: 'Black Dwarf' },
      { slug: 'neutron-star', title: 'Neutron Star' },
      { slug: 'pulsar', title: 'Pulsar' },
      { slug: 'magnetar', title: 'Magnetar' },
      { slug: 'black-hole', title: 'Black Hole' },
    ]
  },
  {
    slug: 'black-holes',
    title: 'Black Holes',
    description: 'Explore Black Holes.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'stellar-mass', title: 'Stellar Mass' },
      { slug: 'intermediate', title: 'Intermediate' },
      { slug: 'supermassive', title: 'Supermassive' },
      { slug: 'primordial', title: 'Primordial' },
      { slug: 'rotating', title: 'Rotating' },
      { slug: 'charged', title: 'Charged' },
      { slug: 'binary', title: 'Binary' },
      { slug: 'evaporating', title: 'Evaporating' },
    ]
  },
  {
    slug: 'planets',
    title: 'Planets',
    description: 'Explore Planets.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'terrestrial', title: 'Terrestrial' },
      { slug: 'gas-giant', title: 'Gas Giant' },
      { slug: 'ice-giant', title: 'Ice Giant' },
      { slug: 'ocean-planet', title: 'Ocean Planet' },
      { slug: 'lava-planet', title: 'Lava Planet' },
      { slug: 'carbon-planet', title: 'Carbon Planet' },
      { slug: 'iron-planet', title: 'Iron Planet' },
      { slug: 'super-earth', title: 'Super Earth' },
      { slug: 'mini-neptune', title: 'Mini Neptune' },
      { slug: 'rogue-planet', title: 'Rogue Planet' },
      { slug: 'chthonian-planet', title: 'Chthonian Planet' },
    ]
  },
  {
    slug: 'dwarf-planets',
    title: 'Dwarf Planets',
    description: 'Explore Dwarf Planets.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'pluto', title: 'Pluto' },
      { slug: 'ceres', title: 'Ceres' },
      { slug: 'eris', title: 'Eris' },
      { slug: 'haumea', title: 'Haumea' },
      { slug: 'makemake', title: 'Makemake' },
    ]
  },
  {
    slug: 'natural-satellites',
    title: 'Natural Satellites',
    description: 'Explore Natural Satellites.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'moon', title: 'Moon' },
      { slug: 'captured-moon', title: 'Captured Moon' },
      { slug: 'shepherd-moon', title: 'Shepherd Moon' },
      { slug: 'irregular-moon', title: 'Irregular Moon' },
      { slug: 'major-moon', title: 'Major Moon' },
      { slug: 'minor-moon', title: 'Minor Moon' },
      { slug: 'ring-moon', title: 'Ring Moon' },
    ]
  },
  {
    slug: 'small-solar-system-bodies',
    title: 'Small Solar System Bodies',
    description: 'Explore Small Solar System Bodies.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'asteroid', title: 'Asteroid' },
      { slug: 'near-earth-asteroid', title: 'Near Earth Asteroid' },
      { slug: 'trojan', title: 'Trojan' },
      { slug: 'centaur', title: 'Centaur' },
      { slug: 'damocloid', title: 'Damocloid' },
      { slug: 'meteoroid', title: 'Meteoroid' },
      { slug: 'meteor', title: 'Meteor' },
      { slug: 'meteorite', title: 'Meteorite' },
      { slug: 'comet', title: 'Comet' },
      { slug: 'active-asteroid', title: 'Active Asteroid' },
      { slug: 'interstellar-object', title: 'Interstellar Object' },
      { slug: 'kuiper-belt-object', title: 'Kuiper Belt Object' },
      { slug: 'trans-neptunian-object', title: 'Trans-Neptunian Object' },
      { slug: 'oort-cloud-object', title: 'Oort Cloud Object' },
    ]
  },
  {
    slug: 'rings',
    title: 'Rings',
    description: 'Explore Rings.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'planetary-rings', title: 'Planetary Rings' },
      { slug: 'dust-rings', title: 'Dust Rings' },
      { slug: 'ring-arcs', title: 'Ring Arcs' },
      { slug: 'ring-gaps', title: 'Ring Gaps' },
      { slug: 'shepherd-rings', title: 'Shepherd Rings' },
    ]
  },
  {
    slug: 'nebulae',
    title: 'Nebulae',
    description: 'Explore Nebulae.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'emission', title: 'Emission' },
      { slug: 'reflection', title: 'Reflection' },
      { slug: 'dark', title: 'Dark' },
      { slug: 'planetary', title: 'Planetary' },
      { slug: 'supernova-remnant', title: 'Supernova Remnant' },
      { slug: 'protoplanetary', title: 'Protoplanetary' },
      { slug: 'molecular-cloud', title: 'Molecular Cloud' },
      { slug: 'h-ii-region', title: 'H II Region' },
    ]
  },
  {
    slug: 'interstellar-medium',
    title: 'Interstellar Medium',
    description: 'Explore Interstellar Medium.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'dust', title: 'Dust' },
      { slug: 'gas', title: 'Gas' },
      { slug: 'molecular-clouds', title: 'Molecular Clouds' },
      { slug: 'neutral-hydrogen', title: 'Neutral Hydrogen' },
      { slug: 'ionized-hydrogen', title: 'Ionized Hydrogen' },
      { slug: 'cosmic-dust', title: 'Cosmic Dust' },
    ]
  },
  {
    slug: 'intergalactic-medium',
    title: 'Intergalactic Medium',
    description: 'Explore Intergalactic Medium.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'warm-hot-intergalactic-medium', title: 'Warm-Hot Intergalactic Medium' },
      { slug: 'intracluster-medium', title: 'Intracluster Medium' },
      { slug: 'cosmic-plasma', title: 'Cosmic Plasma' },
    ]
  },
  {
    slug: 'high-energy-objects',
    title: 'High-Energy Objects',
    description: 'Explore High-Energy Objects.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'quasar', title: 'Quasar' },
      { slug: 'blazar', title: 'Blazar' },
      { slug: 'magnetar', title: 'Magnetar' },
      { slug: 'pulsar', title: 'Pulsar' },
      { slug: 'microquasar', title: 'Microquasar' },
      { slug: 'x-ray-binary', title: 'X-ray Binary' },
      { slug: 'gamma-ray-source', title: 'Gamma Ray Source' },
    ]
  },
  {
    slug: 'radiation',
    title: 'Radiation',
    description: 'Explore Radiation.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'visible', title: 'Visible' },
      { slug: 'infrared', title: 'Infrared' },
      { slug: 'ultraviolet', title: 'Ultraviolet' },
      { slug: 'radio', title: 'Radio' },
      { slug: 'microwave', title: 'Microwave' },
      { slug: 'gamma-rays', title: 'Gamma Rays' },
      { slug: 'x-rays', title: 'X-rays' },
      { slug: 'cosmic-rays', title: 'Cosmic Rays' },
      { slug: 'neutrinos', title: 'Neutrinos' },
      { slug: 'gravitational-waves', title: 'Gravitational Waves' },
    ]
  },
  {
    slug: 'space-phenomena',
    title: 'Space Phenomena',
    description: 'Explore Space Phenomena.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'aurora', title: 'Aurora' },
      { slug: 'solar-wind', title: 'Solar Wind' },
      { slug: 'solar-flare', title: 'Solar Flare' },
      { slug: 'coronal-mass-ejection', title: 'Coronal Mass Ejection' },
      { slug: 'coronal-hole', title: 'Coronal Hole' },
      { slug: 'sunspot', title: 'Sunspot' },
      { slug: 'prominence', title: 'Prominence' },
      { slug: 'magnetic-reconnection', title: 'Magnetic Reconnection' },
      { slug: 'heliosphere', title: 'Heliosphere' },
      { slug: 'bow-shock', title: 'Bow Shock' },
      { slug: 'termination-shock', title: 'Termination Shock' },
      { slug: 'heliopause', title: 'Heliopause' },
      { slug: 'interstellar-shockwave', title: 'Interstellar Shockwave' },
    ]
  },
  {
    slug: 'catastrophic-events',
    title: 'Catastrophic Events',
    description: 'Explore Catastrophic Events.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'supernova', title: 'Supernova' },
      { slug: 'hypernova', title: 'Hypernova' },
      { slug: 'nova', title: 'Nova' },
      { slug: 'kilonova', title: 'Kilonova' },
      { slug: 'gamma-ray-burst', title: 'Gamma Ray Burst' },
      { slug: 'black-hole-merger', title: 'Black Hole Merger' },
      { slug: 'neutron-star-collision', title: 'Neutron Star Collision' },
      { slug: 'white-dwarf-merger', title: 'White Dwarf Merger' },
      { slug: 'planetary-collision', title: 'Planetary Collision' },
      { slug: 'tidal-disruption-event', title: 'Tidal Disruption Event' },
      { slug: 'vacuum-decay', title: 'Vacuum Decay' },
    ]
  },
  {
    slug: 'orbital-mechanics',
    title: 'Orbital Mechanics',
    description: 'Explore Orbital Mechanics.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'orbit', title: 'Orbit' },
      { slug: 'escape-velocity', title: 'Escape Velocity' },
      { slug: 'lagrange-points', title: 'Lagrange Points' },
      { slug: 'hill-sphere', title: 'Hill Sphere' },
      { slug: 'sphere-of-influence', title: 'Sphere of Influence' },
      { slug: 'perihelion', title: 'Perihelion' },
      { slug: 'aphelion', title: 'Aphelion' },
      { slug: 'perigee', title: 'Perigee' },
      { slug: 'apogee', title: 'Apogee' },
      { slug: 'eccentricity', title: 'Eccentricity' },
      { slug: 'inclination', title: 'Inclination' },
      { slug: 'orbital-resonance', title: 'Orbital Resonance' },
      { slug: 'retrograde-orbit', title: 'Retrograde Orbit' },
    ]
  },
  {
    slug: 'space-weather',
    title: 'Space Weather',
    description: 'Explore Space Weather.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'solar-storm', title: 'Solar Storm' },
      { slug: 'geomagnetic-storm', title: 'Geomagnetic Storm' },
      { slug: 'radiation-storm', title: 'Radiation Storm' },
      { slug: 'magnetosphere', title: 'Magnetosphere' },
      { slug: 'van-allen-belts', title: 'Van Allen Belts' },
      { slug: 'space-plasma', title: 'Space Plasma' },
    ]
  },
  {
    slug: 'cosmic-structures',
    title: 'Cosmic Structures',
    description: 'Explore Cosmic Structures.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'cosmic-web', title: 'Cosmic Web' },
      { slug: 'filament', title: 'Filament' },
      { slug: 'void', title: 'Void' },
      { slug: 'wall', title: 'Wall' },
      { slug: 'cluster', title: 'Cluster' },
      { slug: 'supercluster', title: 'Supercluster' },
      { slug: 'great-attractor', title: 'Great Attractor' },
      { slug: 'dark-flow', title: 'Dark Flow' },
    ]
  },
  {
    slug: 'constellations',
    title: 'Constellations',
    description: 'Explore Constellations.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'all-88-iau-constellations', title: 'All 88 IAU constellations' },
    ]
  },
  {
    slug: 'astronomical-coordinate-systems',
    title: 'Astronomical Coordinate Systems',
    description: 'Explore Astronomical Coordinate Systems.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'equatorial', title: 'Equatorial' },
      { slug: 'galactic', title: 'Galactic' },
      { slug: 'ecliptic', title: 'Ecliptic' },
      { slug: 'horizontal', title: 'Horizontal' },
      { slug: 'icrs', title: 'ICRS' },
    ]
  },
  {
    slug: 'time-systems',
    title: 'Time Systems',
    description: 'Explore Time Systems.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'utc', title: 'UTC' },
      { slug: 'tai', title: 'TAI' },
      { slug: 'julian-date', title: 'Julian Date' },
      { slug: 'sidereal-time', title: 'Sidereal Time' },
      { slug: 'solar-time', title: 'Solar Time' },
      { slug: 'ephemeris-time', title: 'Ephemeris Time' },
    ]
  },
  {
    slug: 'human-spaceflight',
    title: 'Human Spaceflight',
    description: 'Explore Human Spaceflight.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'astronaut', title: 'Astronaut' },
      { slug: 'cosmonaut', title: 'Cosmonaut' },
      { slug: 'taikonaut', title: 'Taikonaut' },
      { slug: 'space-station', title: 'Space Station' },
      { slug: 'spacecraft', title: 'Spacecraft' },
      { slug: 'probe', title: 'Probe' },
      { slug: 'satellite', title: 'Satellite' },
      { slug: 'rover', title: 'Rover' },
      { slug: 'lander', title: 'Lander' },
      { slug: 'orbiter', title: 'Orbiter' },
      { slug: 'space-telescope', title: 'Space Telescope' },
      { slug: 'launch-vehicle', title: 'Launch Vehicle' },
      { slug: 'space-elevator-concept', title: 'Space Elevator (concept)' },
    ]
  },
  {
    slug: 'astronomy',
    title: 'Astronomy',
    description: 'Explore Astronomy.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'optical', title: 'Optical' },
      { slug: 'radio', title: 'Radio' },
      { slug: 'infrared', title: 'Infrared' },
      { slug: 'ultraviolet', title: 'Ultraviolet' },
      { slug: 'gamma-ray', title: 'Gamma-ray' },
      { slug: 'x-ray', title: 'X-ray' },
      { slug: 'gravitational-wave', title: 'Gravitational Wave' },
      { slug: 'neutrino-astronomy', title: 'Neutrino Astronomy' },
      { slug: 'planetary-science', title: 'Planetary Science' },
      { slug: 'heliophysics', title: 'Heliophysics' },
      { slug: 'astrobiology', title: 'Astrobiology' },
      { slug: 'astrophysics', title: 'Astrophysics' },
      { slug: 'cosmology', title: 'Cosmology' },
    ]
  },
  {
    slug: 'the-solar-system',
    title: 'The Solar System',
    description: 'Explore The Solar System.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'the-sun', title: 'The Sun' },
      { slug: '8-planets', title: '8 planets' },
      { slug: '5-recognized-dwarf-planets', title: '5 recognized dwarf planets' },
      { slug: 'all-major-moons', title: 'All major moons' },
      { slug: 'asteroid-belt', title: 'Asteroid Belt' },
      { slug: 'kuiper-belt', title: 'Kuiper Belt' },
      { slug: 'scattered-disc', title: 'Scattered Disc' },
      { slug: 'oort-cloud', title: 'Oort Cloud' },
      { slug: 'heliosphere', title: 'Heliosphere' },
    ]
  },
  {
    slug: 'exoplanets',
    title: 'Exoplanets',
    description: 'Explore Exoplanets.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'hot-jupiter', title: 'Hot Jupiter' },
      { slug: 'warm-jupiter', title: 'Warm Jupiter' },
      { slug: 'cold-jupiter', title: 'Cold Jupiter' },
      { slug: 'super-earth', title: 'Super Earth' },
      { slug: 'mini-neptune', title: 'Mini Neptune' },
      { slug: 'hycean-planet', title: 'Hycean Planet' },
      { slug: 'ocean-planet', title: 'Ocean Planet' },
      { slug: 'lava-planet', title: 'Lava Planet' },
      { slug: 'circumbinary-planet', title: 'Circumbinary Planet' },
      { slug: 'rogue-planet', title: 'Rogue Planet' },
    ]
  },
  {
    slug: 'life-in-the-universe',
    title: 'Life in the Universe',
    description: 'Explore Life in the Universe.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'habitable-zone', title: 'Habitable Zone' },
      { slug: 'extremophiles', title: 'Extremophiles' },
      { slug: 'biosignatures', title: 'Biosignatures' },
      { slug: 'technosignatures', title: 'Technosignatures' },
      { slug: 'drake-equation', title: 'Drake Equation' },
      { slug: 'fermi-paradox', title: 'Fermi Paradox' },
      { slug: 'great-filter', title: 'Great Filter' },
      { slug: 'seti', title: 'SETI' },
      { slug: 'astrobiology', title: 'Astrobiology' },
    ]
  },
  {
    slug: 'space-missions',
    title: 'Space Missions',
    description: 'Explore Space Missions.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'crewed-missions', title: 'Crewed missions' },
      { slug: 'lunar-missions', title: 'Lunar missions' },
      { slug: 'mars-missions', title: 'Mars missions' },
      { slug: 'venus-missions', title: 'Venus missions' },
      { slug: 'mercury-missions', title: 'Mercury missions' },
      { slug: 'outer-planet-missions', title: 'Outer planet missions' },
      { slug: 'asteroid-missions', title: 'Asteroid missions' },
      { slug: 'comet-missions', title: 'Comet missions' },
      { slug: 'solar-missions', title: 'Solar missions' },
      { slug: 'space-telescopes', title: 'Space telescopes' },
      { slug: 'deep-space-probes', title: 'Deep-space probes' },
    ]
  },
  {
    slug: 'space-technology',
    title: 'Space Technology',
    description: 'Explore Space Technology.',
    icon: Globe, // Default
    color: 'from-blue-500 to-indigo-400',
    subcategories: [
      { slug: 'chemical-rocket', title: 'Chemical Rocket' },
      { slug: 'ion-engine', title: 'Ion Engine' },
      { slug: 'hall-thruster', title: 'Hall Thruster' },
      { slug: 'nuclear-thermal-rocket', title: 'Nuclear Thermal Rocket' },
      { slug: 'nuclear-electric-propulsion', title: 'Nuclear Electric Propulsion' },
      { slug: 'solar-sail', title: 'Solar Sail' },
      { slug: 'fusion-drive-concept', title: 'Fusion Drive (concept)' },
      { slug: 'antimatter-drive-concept', title: 'Antimatter Drive (concept)' },
      { slug: 'warp-drive-theoretical', title: 'Warp Drive (theoretical)' },
      { slug: 'space-habitat', title: 'Space Habitat' },
      { slug: 'terraforming', title: 'Terraforming' },
    ]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug.toLowerCase());
}
