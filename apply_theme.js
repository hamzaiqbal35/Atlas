const fs = require('fs');

let content = fs.readFileSync('src/app/body/[id]/BodyDetailClient.tsx', 'utf-8');

// Add BODY_THEMES outside component
const bodyThemesStr = `
const BODY_THEMES: Record<string, { primary: string, bg1: string, bg2: string }> = {
  sun: { primary: '#f59e0b', bg1: 'rgba(245, 158, 11, 0.15)', bg2: 'rgba(217, 119, 6, 0.05)' },
  mercury: { primary: '#a3a3a3', bg1: 'rgba(163, 163, 163, 0.15)', bg2: 'rgba(115, 115, 115, 0.05)' },
  venus: { primary: '#fcd34d', bg1: 'rgba(252, 211, 77, 0.15)', bg2: 'rgba(217, 119, 6, 0.05)' },
  earth: { primary: '#3b82f6', bg1: 'rgba(59, 130, 246, 0.15)', bg2: 'rgba(29, 78, 216, 0.05)' },
  moon: { primary: '#d4d4d8', bg1: 'rgba(212, 212, 216, 0.15)', bg2: 'rgba(161, 161, 170, 0.05)' },
  mars: { primary: '#ef4444', bg1: 'rgba(239, 68, 68, 0.15)', bg2: 'rgba(185, 28, 28, 0.05)' },
  jupiter: { primary: '#d97706', bg1: 'rgba(217, 119, 6, 0.15)', bg2: 'rgba(180, 83, 9, 0.05)' },
  saturn: { primary: '#fde047', bg1: 'rgba(253, 224, 71, 0.15)', bg2: 'rgba(234, 179, 8, 0.05)' },
  uranus: { primary: '#2dd4bf', bg1: 'rgba(45, 212, 191, 0.15)', bg2: 'rgba(13, 148, 136, 0.05)' },
  neptune: { primary: '#2563eb', bg1: 'rgba(37, 99, 235, 0.15)', bg2: 'rgba(29, 78, 216, 0.05)' },
  pluto: { primary: '#d6d3d1', bg1: 'rgba(214, 211, 209, 0.15)', bg2: 'rgba(168, 162, 158, 0.05)' },
  default: { primary: '#ffffff', bg1: 'rgba(255, 255, 255, 0.1)', bg2: 'rgba(255, 255, 255, 0.05)' },
};

export function BodyDetailClient`;

content = content.replace('export function BodyDetailClient', bodyThemesStr);

// Add theme extraction
const themeExtractionStr = `  const containerRef = useRef<HTMLDivElement>(null);
  const theme = BODY_THEMES[staticData?.id?.toLowerCase() || ''] || BODY_THEMES.default;`;
content = content.replace('  const containerRef = useRef<HTMLDivElement>(null);', themeExtractionStr);

// Add inline style to main container
content = content.replace(
  '    <div className="min-h-screen bg-background text-foreground flex selection:bg-primary/30">',
  '    <div \n      className="min-h-screen bg-background text-foreground flex selection:bg-[var(--theme-primary)]/30"\n      style={{ \'--theme-primary\': theme.primary } as React.CSSProperties}\n    >'
);

// Replace accentColor
content = content.replace('accentColor="#ffffff"', 'accentColor={theme.primary}');

// Replace background
content = content.replace(
  'radial-gradient(circle at 15% 50%, rgba(20, 10, 40, 0.4), transparent 40%),\n            radial-gradient(circle at 85% 30%, rgba(10, 20, 50, 0.3), transparent 50%)',
  'radial-gradient(circle at 15% 50%, ${theme.bg1}, transparent 40%),\n            radial-gradient(circle at 85% 30%, ${theme.bg2}, transparent 50%)'
);

// Replace Tailwind classes
content = content.replace(/text-primary/g, 'text-[var(--theme-primary)]');
content = content.replace(/bg-primary/g, 'bg-[var(--theme-primary)]');
content = content.replace(/border-primary/g, 'border-[var(--theme-primary)]');
content = content.replace(/hover:border-primary/g, 'hover:border-[var(--theme-primary)]');
content = content.replace(/group-hover:text-primary/g, 'group-hover:text-[var(--theme-primary)]');

fs.writeFileSync('src/app/body/[id]/BodyDetailClient.tsx', content);
console.log('done');
