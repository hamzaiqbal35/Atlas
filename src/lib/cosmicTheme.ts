export interface CosmicTheme {
  primary: string;
  secondary: string;
  gradient: string;
  glow1: string;
  glow2: string;
  glow3?: string;
  accentBorder: string;
  cardGlow: string;
  badgeBg: string;
  badgeText: string;
  metricBorders: [string, string, string, string];
  metricTexts: [string, string, string, string];
}

export const CATEGORY_THEMES: Record<string, CosmicTheme> = {
  'the-universe': {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    gradient: 'from-blue-400 via-indigo-400 to-purple-400',
    glow1: 'rgba(59, 130, 246, 0.45)', // Blue
    glow2: 'rgba(139, 92, 246, 0.35)', // Purple
    glow3: 'rgba(6, 182, 212, 0.25)',  // Cyan
    accentBorder: 'hover:border-blue-400/60',
    cardGlow: 'rgba(59, 130, 246, 0.25)',
    badgeBg: 'bg-blue-500/10 border-blue-500/30',
    badgeText: 'text-blue-300',
    metricBorders: ['border-blue-500/30', 'border-indigo-500/30', 'border-cyan-500/30', 'border-purple-500/30'],
    metricTexts: ['text-blue-300', 'text-indigo-300', 'text-cyan-300', 'text-purple-300'],
  },
  'space-time': {
    primary: '#a855f7',
    secondary: '#ec4899',
    gradient: 'from-purple-400 via-fuchsia-400 to-pink-400',
    glow1: 'rgba(168, 85, 247, 0.45)', // Purple
    glow2: 'rgba(236, 72, 153, 0.35)', // Pink
    glow3: 'rgba(99, 102, 241, 0.25)',  // Indigo
    accentBorder: 'hover:border-purple-400/60',
    cardGlow: 'rgba(168, 85, 247, 0.25)',
    badgeBg: 'bg-purple-500/10 border-purple-500/30',
    badgeText: 'text-purple-300',
    metricBorders: ['border-purple-500/30', 'border-fuchsia-500/30', 'border-pink-500/30', 'border-indigo-500/30'],
    metricTexts: ['text-purple-300', 'text-fuchsia-300', 'text-pink-300', 'text-indigo-300'],
  },
  'fundamental-physics': {
    primary: '#06b6d4',
    secondary: '#3b82f6',
    gradient: 'from-cyan-400 via-sky-400 to-blue-500',
    glow1: 'rgba(6, 182, 212, 0.45)', // Cyan
    glow2: 'rgba(59, 130, 246, 0.35)', // Blue
    glow3: 'rgba(16, 185, 129, 0.25)', // Emerald
    accentBorder: 'hover:border-cyan-400/60',
    cardGlow: 'rgba(6, 182, 212, 0.25)',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/30',
    badgeText: 'text-cyan-300',
    metricBorders: ['border-cyan-500/30', 'border-sky-500/30', 'border-blue-500/30', 'border-teal-500/30'],
    metricTexts: ['text-cyan-300', 'text-sky-300', 'text-blue-300', 'text-teal-300'],
  },
  'matter': {
    primary: '#10b981',
    secondary: '#06b6d4',
    gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
    glow1: 'rgba(16, 185, 129, 0.45)', // Emerald
    glow2: 'rgba(6, 182, 212, 0.35)',  // Cyan
    glow3: 'rgba(59, 130, 246, 0.25)', // Blue
    accentBorder: 'hover:border-emerald-400/60',
    cardGlow: 'rgba(16, 185, 129, 0.25)',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
    badgeText: 'text-emerald-300',
    metricBorders: ['border-emerald-500/30', 'border-teal-500/30', 'border-cyan-500/30', 'border-sky-500/30'],
    metricTexts: ['text-emerald-300', 'text-teal-300', 'text-cyan-300', 'text-sky-300'],
  },
  'elementary-particles': {
    primary: '#f43f5e',
    secondary: '#a855f7',
    gradient: 'from-rose-400 via-pink-400 to-purple-500',
    glow1: 'rgba(244, 63, 94, 0.45)',  // Rose
    glow2: 'rgba(168, 85, 247, 0.35)', // Purple
    glow3: 'rgba(249, 115, 22, 0.25)', // Orange
    accentBorder: 'hover:border-rose-400/60',
    cardGlow: 'rgba(244, 63, 94, 0.25)',
    badgeBg: 'bg-rose-500/10 border-rose-500/30',
    badgeText: 'text-rose-300',
    metricBorders: ['border-rose-500/30', 'border-purple-500/30', 'border-pink-500/30', 'border-orange-500/30'],
    metricTexts: ['text-rose-300', 'text-purple-300', 'text-pink-300', 'text-orange-300'],
  },
  'atoms-chemistry': {
    primary: '#f59e0b',
    secondary: '#ea580c',
    gradient: 'from-amber-400 via-orange-500 to-yellow-500',
    glow1: 'rgba(245, 158, 11, 0.45)', // Amber
    glow2: 'rgba(234, 88, 12, 0.35)',  // Orange
    glow3: 'rgba(239, 68, 68, 0.25)',  // Red
    accentBorder: 'hover:border-amber-400/60',
    cardGlow: 'rgba(245, 158, 11, 0.25)',
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    badgeText: 'text-amber-300',
    metricBorders: ['border-amber-500/30', 'border-orange-500/30', 'border-yellow-500/30', 'border-rose-500/30'],
    metricTexts: ['text-amber-300', 'text-orange-300', 'text-yellow-300', 'text-rose-300'],
  },
  'cosmology': {
    primary: '#6366f1',
    secondary: '#ec4899',
    gradient: 'from-indigo-400 via-purple-400 to-pink-500',
    glow1: 'rgba(99, 102, 241, 0.45)', // Indigo
    glow2: 'rgba(236, 72, 153, 0.35)', // Pink
    glow3: 'rgba(59, 130, 246, 0.25)', // Blue
    accentBorder: 'hover:border-indigo-400/60',
    cardGlow: 'rgba(99, 102, 241, 0.25)',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30',
    badgeText: 'text-indigo-300',
    metricBorders: ['border-indigo-500/30', 'border-purple-500/30', 'border-pink-500/30', 'border-blue-500/30'],
    metricTexts: ['text-indigo-300', 'text-purple-300', 'text-pink-300', 'text-blue-300'],
  },
  'galaxies': {
    primary: '#38bdf8',
    secondary: '#c084fc',
    gradient: 'from-sky-400 via-indigo-400 to-purple-400',
    glow1: 'rgba(56, 189, 248, 0.45)', // Sky
    glow2: 'rgba(192, 132, 252, 0.35)', // Purple
    glow3: 'rgba(14, 165, 233, 0.25)',  // Cyan
    accentBorder: 'hover:border-sky-400/60',
    cardGlow: 'rgba(56, 189, 248, 0.25)',
    badgeBg: 'bg-sky-500/10 border-sky-500/30',
    badgeText: 'text-sky-300',
    metricBorders: ['border-sky-500/30', 'border-purple-500/30', 'border-cyan-500/30', 'border-indigo-500/30'],
    metricTexts: ['text-sky-300', 'text-purple-300', 'text-cyan-300', 'text-indigo-300'],
  },
  'galaxy-structures': {
    primary: '#0ea5e9',
    secondary: '#8b5cf6',
    gradient: 'from-cyan-400 via-sky-400 to-indigo-500',
    glow1: 'rgba(14, 165, 233, 0.45)',
    glow2: 'rgba(139, 92, 246, 0.35)',
    glow3: 'rgba(59, 130, 246, 0.25)',
    accentBorder: 'hover:border-cyan-400/60',
    cardGlow: 'rgba(14, 165, 233, 0.25)',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/30',
    badgeText: 'text-cyan-300',
    metricBorders: ['border-cyan-500/30', 'border-sky-500/30', 'border-indigo-500/30', 'border-blue-500/30'],
    metricTexts: ['text-cyan-300', 'text-sky-300', 'text-indigo-300', 'text-blue-300'],
  },
  'galaxy-groups': {
    primary: '#818cf8',
    secondary: '#38bdf8',
    gradient: 'from-indigo-400 via-blue-400 to-sky-400',
    glow1: 'rgba(129, 140, 248, 0.45)',
    glow2: 'rgba(56, 189, 248, 0.35)',
    glow3: 'rgba(99, 102, 241, 0.25)',
    accentBorder: 'hover:border-indigo-400/60',
    cardGlow: 'rgba(129, 140, 248, 0.25)',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30',
    badgeText: 'text-indigo-300',
    metricBorders: ['border-indigo-500/30', 'border-sky-500/30', 'border-blue-500/30', 'border-violet-500/30'],
    metricTexts: ['text-indigo-300', 'text-sky-300', 'text-blue-300', 'text-violet-300'],
  },
  'stars': {
    primary: '#eab308',
    secondary: '#ef4444',
    gradient: 'from-yellow-400 via-amber-400 to-red-500',
    glow1: 'rgba(234, 179, 8, 0.45)',  // Yellow
    glow2: 'rgba(239, 68, 68, 0.35)',  // Red
    glow3: 'rgba(249, 115, 22, 0.25)', // Orange
    accentBorder: 'hover:border-yellow-400/60',
    cardGlow: 'rgba(234, 179, 8, 0.25)',
    badgeBg: 'bg-yellow-500/10 border-yellow-500/30',
    badgeText: 'text-yellow-300',
    metricBorders: ['border-yellow-500/30', 'border-amber-500/30', 'border-red-500/30', 'border-orange-500/30'],
    metricTexts: ['text-yellow-300', 'text-amber-300', 'text-red-300', 'text-orange-300'],
  },
  'solar-system': {
    primary: '#f97316',
    secondary: '#38bdf8',
    gradient: 'from-amber-400 via-orange-400 to-sky-400',
    glow1: 'rgba(249, 115, 22, 0.45)',
    glow2: 'rgba(56, 189, 248, 0.35)',
    glow3: 'rgba(234, 179, 8, 0.25)',
    accentBorder: 'hover:border-orange-400/60',
    cardGlow: 'rgba(249, 115, 22, 0.25)',
    badgeBg: 'bg-orange-500/10 border-orange-500/30',
    badgeText: 'text-orange-300',
    metricBorders: ['border-orange-500/30', 'border-amber-500/30', 'border-sky-500/30', 'border-yellow-500/30'],
    metricTexts: ['text-orange-300', 'text-amber-300', 'text-sky-300', 'text-yellow-300'],
  },
  'planets': {
    primary: '#06b6d4',
    secondary: '#10b981',
    gradient: 'from-cyan-400 via-sky-400 to-emerald-400',
    glow1: 'rgba(6, 182, 212, 0.45)',
    glow2: 'rgba(16, 185, 129, 0.35)',
    glow3: 'rgba(59, 130, 246, 0.25)',
    accentBorder: 'hover:border-cyan-400/60',
    cardGlow: 'rgba(6, 182, 212, 0.25)',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/30',
    badgeText: 'text-cyan-300',
    metricBorders: ['border-cyan-500/30', 'border-emerald-500/30', 'border-sky-500/30', 'border-teal-500/30'],
    metricTexts: ['text-cyan-300', 'text-emerald-300', 'text-sky-300', 'text-teal-300'],
  },
  'dwarf-planets': {
    primary: '#a1a1aa',
    secondary: '#38bdf8',
    gradient: 'from-zinc-300 via-sky-300 to-indigo-400',
    glow1: 'rgba(56, 189, 248, 0.40)',
    glow2: 'rgba(161, 161, 170, 0.30)',
    glow3: 'rgba(99, 102, 241, 0.20)',
    accentBorder: 'hover:border-sky-400/60',
    cardGlow: 'rgba(56, 189, 248, 0.20)',
    badgeBg: 'bg-sky-500/10 border-sky-500/30',
    badgeText: 'text-sky-300',
    metricBorders: ['border-sky-500/30', 'border-zinc-500/30', 'border-indigo-500/30', 'border-blue-500/30'],
    metricTexts: ['text-sky-300', 'text-zinc-300', 'text-indigo-300', 'text-blue-300'],
  },
  'moons': {
    primary: '#cbd5e1',
    secondary: '#818cf8',
    gradient: 'from-slate-200 via-indigo-300 to-sky-300',
    glow1: 'rgba(129, 140, 248, 0.42)',
    glow2: 'rgba(203, 213, 225, 0.30)',
    glow3: 'rgba(56, 189, 248, 0.25)',
    accentBorder: 'hover:border-indigo-400/60',
    cardGlow: 'rgba(129, 140, 248, 0.22)',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30',
    badgeText: 'text-indigo-300',
    metricBorders: ['border-indigo-500/30', 'border-slate-500/30', 'border-sky-500/30', 'border-violet-500/30'],
    metricTexts: ['text-indigo-300', 'text-slate-300', 'text-sky-300', 'text-violet-300'],
  },
  'small-bodies': {
    primary: '#f97316',
    secondary: '#eab308',
    gradient: 'from-orange-400 via-amber-400 to-yellow-400',
    glow1: 'rgba(249, 115, 22, 0.42)',
    glow2: 'rgba(234, 179, 8, 0.32)',
    glow3: 'rgba(239, 68, 68, 0.22)',
    accentBorder: 'hover:border-orange-400/60',
    cardGlow: 'rgba(249, 115, 22, 0.22)',
    badgeBg: 'bg-orange-500/10 border-orange-500/30',
    badgeText: 'text-orange-300',
    metricBorders: ['border-orange-500/30', 'border-amber-500/30', 'border-yellow-500/30', 'border-red-500/30'],
    metricTexts: ['text-orange-300', 'text-amber-300', 'text-yellow-300', 'text-red-300'],
  },
  'black-holes': {
    primary: '#ef4444',
    secondary: '#f97316',
    gradient: 'from-rose-500 via-red-500 to-orange-500',
    glow1: 'rgba(239, 68, 68, 0.50)',
    glow2: 'rgba(249, 115, 22, 0.35)',
    glow3: 'rgba(168, 85, 247, 0.25)',
    accentBorder: 'hover:border-red-500/60',
    cardGlow: 'rgba(239, 68, 68, 0.25)',
    badgeBg: 'bg-red-500/10 border-red-500/30',
    badgeText: 'text-red-300',
    metricBorders: ['border-red-500/30', 'border-orange-500/30', 'border-rose-500/30', 'border-purple-500/30'],
    metricTexts: ['text-red-300', 'text-orange-300', 'text-rose-300', 'text-purple-300'],
  },
  default: {
    primary: '#6366f1',
    secondary: '#06b6d4',
    gradient: 'from-indigo-400 via-blue-400 to-cyan-400',
    glow1: 'rgba(99, 102, 241, 0.45)', // Indigo
    glow2: 'rgba(6, 182, 212, 0.35)',  // Cyan
    glow3: 'rgba(168, 85, 247, 0.25)', // Purple
    accentBorder: 'hover:border-indigo-400/60',
    cardGlow: 'rgba(99, 102, 241, 0.25)',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30',
    badgeText: 'text-indigo-300',
    metricBorders: ['border-cyan-500/30', 'border-indigo-500/30', 'border-purple-500/30', 'border-sky-500/30'],
    metricTexts: ['text-cyan-300', 'text-indigo-300', 'text-purple-300', 'text-sky-300'],
  }
};

export const CELESTIAL_BODY_THEMES: Record<string, CosmicTheme> = {
  sun: {
    primary: '#f59e0b',
    secondary: '#ef4444',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    glow1: 'rgba(245, 158, 11, 0.50)',
    glow2: 'rgba(239, 68, 68, 0.35)',
    glow3: 'rgba(234, 179, 8, 0.25)',
    accentBorder: 'hover:border-amber-400/60',
    cardGlow: 'rgba(245, 158, 11, 0.25)',
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    badgeText: 'text-amber-300',
    metricBorders: ['border-amber-500/30', 'border-orange-500/30', 'border-red-500/30', 'border-yellow-500/30'],
    metricTexts: ['text-amber-300', 'text-orange-300', 'text-red-300', 'text-yellow-300'],
  },
  mercury: {
    primary: '#38bdf8',
    secondary: '#94a3b8',
    gradient: 'from-sky-300 via-slate-200 to-cyan-400',
    glow1: 'rgba(56, 189, 248, 0.45)',
    glow2: 'rgba(148, 163, 184, 0.30)',
    glow3: 'rgba(99, 102, 241, 0.20)',
    accentBorder: 'hover:border-sky-400/60',
    cardGlow: 'rgba(56, 189, 248, 0.25)',
    badgeBg: 'bg-sky-500/10 border-sky-500/30',
    badgeText: 'text-sky-300',
    metricBorders: ['border-sky-500/30', 'border-slate-500/30', 'border-cyan-500/30', 'border-indigo-500/30'],
    metricTexts: ['text-sky-300', 'text-slate-300', 'text-cyan-300', 'text-indigo-300'],
  },
  venus: {
    primary: '#fbbf24',
    secondary: '#f97316',
    gradient: 'from-yellow-300 via-amber-400 to-orange-500',
    glow1: 'rgba(251, 191, 36, 0.48)',
    glow2: 'rgba(249, 115, 22, 0.35)',
    glow3: 'rgba(234, 88, 12, 0.25)',
    accentBorder: 'hover:border-amber-400/60',
    cardGlow: 'rgba(251, 191, 36, 0.25)',
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    badgeText: 'text-amber-300',
    metricBorders: ['border-amber-500/30', 'border-yellow-500/30', 'border-orange-500/30', 'border-rose-500/30'],
    metricTexts: ['text-amber-300', 'text-yellow-300', 'text-orange-300', 'text-rose-300'],
  },
  earth: {
    primary: '#38bdf8',
    secondary: '#10b981',
    gradient: 'from-blue-400 via-cyan-400 to-emerald-400',
    glow1: 'rgba(56, 189, 248, 0.50)',
    glow2: 'rgba(16, 185, 129, 0.35)',
    glow3: 'rgba(59, 130, 246, 0.25)',
    accentBorder: 'hover:border-cyan-400/60',
    cardGlow: 'rgba(56, 189, 248, 0.25)',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/30',
    badgeText: 'text-cyan-300',
    metricBorders: ['border-cyan-500/30', 'border-emerald-500/30', 'border-blue-500/30', 'border-teal-500/30'],
    metricTexts: ['text-cyan-300', 'text-emerald-300', 'text-blue-300', 'text-teal-300'],
  },
  moon: {
    primary: '#818cf8',
    secondary: '#94a3b8',
    gradient: 'from-indigo-300 via-slate-200 to-sky-300',
    glow1: 'rgba(129, 140, 248, 0.45)',
    glow2: 'rgba(148, 163, 184, 0.30)',
    glow3: 'rgba(56, 189, 248, 0.20)',
    accentBorder: 'hover:border-indigo-400/60',
    cardGlow: 'rgba(129, 140, 248, 0.22)',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30',
    badgeText: 'text-indigo-300',
    metricBorders: ['border-indigo-500/30', 'border-slate-500/30', 'border-sky-500/30', 'border-violet-500/30'],
    metricTexts: ['text-indigo-300', 'text-slate-300', 'text-sky-300', 'text-violet-300'],
  },
  mars: {
    primary: '#ef4444',
    secondary: '#f97316',
    gradient: 'from-red-500 via-orange-500 to-rose-600',
    glow1: 'rgba(239, 68, 68, 0.50)',
    glow2: 'rgba(249, 115, 22, 0.35)',
    glow3: 'rgba(225, 29, 72, 0.25)',
    accentBorder: 'hover:border-red-500/60',
    cardGlow: 'rgba(239, 68, 68, 0.25)',
    badgeBg: 'bg-red-500/10 border-red-500/30',
    badgeText: 'text-red-300',
    metricBorders: ['border-red-500/30', 'border-orange-500/30', 'border-rose-500/30', 'border-amber-500/30'],
    metricTexts: ['text-red-300', 'text-orange-300', 'text-rose-300', 'text-amber-300'],
  },
  jupiter: {
    primary: '#f59e0b',
    secondary: '#ea580c',
    gradient: 'from-amber-400 via-yellow-500 to-orange-600',
    glow1: 'rgba(245, 158, 11, 0.48)',
    glow2: 'rgba(234, 88, 12, 0.35)',
    glow3: 'rgba(249, 115, 22, 0.25)',
    accentBorder: 'hover:border-amber-400/60',
    cardGlow: 'rgba(245, 158, 11, 0.25)',
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    badgeText: 'text-amber-300',
    metricBorders: ['border-amber-500/30', 'border-orange-500/30', 'border-yellow-500/30', 'border-red-500/30'],
    metricTexts: ['text-amber-300', 'text-orange-300', 'text-yellow-300', 'text-red-300'],
  },
  saturn: {
    primary: '#eab308',
    secondary: '#ca8a04',
    gradient: 'from-yellow-300 via-amber-400 to-yellow-500',
    glow1: 'rgba(234, 179, 8, 0.48)',
    glow2: 'rgba(202, 138, 4, 0.35)',
    glow3: 'rgba(245, 158, 11, 0.25)',
    accentBorder: 'hover:border-yellow-400/60',
    cardGlow: 'rgba(234, 179, 8, 0.25)',
    badgeBg: 'bg-yellow-500/10 border-yellow-500/30',
    badgeText: 'text-yellow-300',
    metricBorders: ['border-yellow-500/30', 'border-amber-500/30', 'border-orange-500/30', 'border-yellow-600/30'],
    metricTexts: ['text-yellow-300', 'text-amber-300', 'text-orange-300', 'text-yellow-400'],
  },
  uranus: {
    primary: '#06b6d4',
    secondary: '#2dd4bf',
    gradient: 'from-cyan-400 via-teal-400 to-emerald-400',
    glow1: 'rgba(6, 182, 212, 0.50)',
    glow2: 'rgba(45, 212, 191, 0.35)',
    glow3: 'rgba(56, 189, 248, 0.25)',
    accentBorder: 'hover:border-teal-400/60',
    cardGlow: 'rgba(6, 182, 212, 0.25)',
    badgeBg: 'bg-teal-500/10 border-teal-500/30',
    badgeText: 'text-teal-300',
    metricBorders: ['border-teal-500/30', 'border-cyan-500/30', 'border-emerald-500/30', 'border-sky-500/30'],
    metricTexts: ['text-teal-300', 'text-cyan-300', 'text-emerald-300', 'text-sky-300'],
  },
  neptune: {
    primary: '#3b82f6',
    secondary: '#6366f1',
    gradient: 'from-blue-500 via-indigo-500 to-sky-400',
    glow1: 'rgba(37, 99, 235, 0.52)',
    glow2: 'rgba(99, 102, 241, 0.38)',
    glow3: 'rgba(14, 165, 233, 0.25)',
    accentBorder: 'hover:border-blue-500/60',
    cardGlow: 'rgba(37, 99, 235, 0.25)',
    badgeBg: 'bg-blue-500/10 border-blue-500/30',
    badgeText: 'text-blue-300',
    metricBorders: ['border-blue-500/30', 'border-indigo-500/30', 'border-sky-500/30', 'border-cyan-500/30'],
    metricTexts: ['text-blue-300', 'text-indigo-300', 'text-sky-300', 'text-cyan-300'],
  },
  pluto: {
    primary: '#38bdf8',
    secondary: '#c2410c',
    gradient: 'from-sky-400 via-slate-300 to-orange-400',
    glow1: 'rgba(56, 189, 248, 0.45)',
    glow2: 'rgba(194, 65, 12, 0.32)',
    glow3: 'rgba(148, 163, 184, 0.22)',
    accentBorder: 'hover:border-sky-400/60',
    cardGlow: 'rgba(56, 189, 248, 0.25)',
    badgeBg: 'bg-sky-500/10 border-sky-500/30',
    badgeText: 'text-sky-300',
    metricBorders: ['border-sky-500/30', 'border-orange-500/30', 'border-slate-500/30', 'border-indigo-500/30'],
    metricTexts: ['text-sky-300', 'text-orange-300', 'text-slate-300', 'text-indigo-300'],
  }
};

export function getCosmicTheme(categorySlug?: string, slug?: string): CosmicTheme {
  if (slug && CELESTIAL_BODY_THEMES[slug.toLowerCase()]) {
    return CELESTIAL_BODY_THEMES[slug.toLowerCase()];
  }
  if (categorySlug && CATEGORY_THEMES[categorySlug.toLowerCase()]) {
    return CATEGORY_THEMES[categorySlug.toLowerCase()];
  }
  return CATEGORY_THEMES.default;
}
