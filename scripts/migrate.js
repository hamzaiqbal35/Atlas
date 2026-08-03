const fs = require('fs');
const path = require('path');

// Manually defining the data from detailedEncyclopedia.ts since we just want to run a quick script
const data = {
  sun: {
    title: "Sun",
    subtitle: "The Heart of Our System",
    mass: "1.989 × 10^30 kg",
    gravity: "274 m/s²",
    radius: "696,340 km",
    temperature: "5,778 K"
  },
  mercury: {
    title: "Mercury",
    subtitle: "The Swift Planet",
    mass: "3.3011 × 10^23 kg",
    gravity: "3.7 m/s²",
    radius: "2,439.7 km",
    temperature: "430°C / -180°C"
  },
  venus: {
    title: "Venus",
    subtitle: "The Morning Star",
    mass: "4.8675 × 10^24 kg",
    gravity: "8.87 m/s²",
    radius: "6,051.8 km",
    temperature: "475°C"
  },
  earth: {
    title: "Earth",
    subtitle: "The Pale Blue Dot",
    mass: "5.972 × 10^24 kg",
    gravity: "9.8 m/s²",
    radius: "6,371 km",
    temperature: "288 K"
  },
  luna: {
    title: "Luna",
    subtitle: "Earth's Moon",
    mass: "7.342 × 10^22 kg",
    gravity: "1.62 m/s²",
    radius: "1,737.4 km",
    temperature: "120°C / -130°C"
  },
  mars: {
    title: "Mars",
    subtitle: "The Red Planet",
    mass: "6.4171 × 10^23 kg",
    gravity: "3.71 m/s²",
    radius: "3,389.5 km",
    temperature: "210 K"
  },
  jupiter: {
    title: "Jupiter",
    subtitle: "The Gas Giant",
    mass: "1.898 × 10^27 kg",
    gravity: "24.79 m/s²",
    radius: "69,911 km",
    temperature: "165 K"
  },
  saturn: {
    title: "Saturn",
    subtitle: "The Ringed Planet",
    mass: "5.683 × 10^26 kg",
    gravity: "10.44 m/s²",
    radius: "58,232 km",
    temperature: "134 K"
  },
  uranus: {
    title: "Uranus",
    subtitle: "The Ice Giant",
    mass: "8.681 × 10^25 kg",
    gravity: "8.69 m/s²",
    radius: "25,362 km",
    temperature: "76 K"
  },
  neptune: {
    title: "Neptune",
    subtitle: "The Blue Giant",
    mass: "1.024 × 10^26 kg",
    gravity: "11.15 m/s²",
    radius: "24,622 km",
    temperature: "72 K"
  },
  pluto: {
    title: "Pluto",
    subtitle: "The Dwarf Planet",
    mass: "1.303 × 10^22 kg",
    gravity: "0.62 m/s²",
    radius: "1,188 km",
    temperature: "44 K"
  }
};

const rawTs = fs.readFileSync(path.join(__dirname, '../src/data/detailedEncyclopedia.ts'), 'utf8');

for (const key of Object.keys(data)) {
  const info = data[key];
  
  let mdx = `---
title: "${info.title}"
subtitle: "${info.subtitle}"
category: "Planets"
mass: "${info.mass}"
gravity: "${info.gravity}"
radius: "${info.radius}"
temperature: "${info.temperature}"
---

<PlanetModel body="${key}" />

`;
  
  // Extract text from the raw TS file for this key
  const regex = new RegExp(`${key}:\\s*{[\\s\\S]*?id:\\s*"${key}"[\\s\\S]*?sections:\\s*{([\\s\\S]*?)gallery:`, 'm');
  const match = rawTs.match(regex);
  if (match) {
    const sectionsText = match[1];
    
    // Extract overview
    const overviewMatch = sectionsText.match(/overview:\s*{[\s\S]*?text:\s*\[([\s\S]*?)\]/);
    if (overviewMatch) {
      mdx += `## Overview\n\n`;
      const textArray = eval(`[${overviewMatch[1]}]`);
      textArray.forEach(p => mdx += `${p}\n\n`);
    }

    // Extract composition
    const compMatch = sectionsText.match(/composition:\s*{[\s\S]*?text:\s*\[([\s\S]*?)\]/);
    if (compMatch) {
      mdx += `## Composition\n\n`;
      const textArray = eval(`[${compMatch[1]}]`);
      textArray.forEach(p => mdx += `${p}\n\n`);
    }

    // Extract orbit
    const orbitMatch = sectionsText.match(/orbit:\s*{[\s\S]*?text:\s*\[([\s\S]*?)\]/);
    if (orbitMatch) {
      mdx += `## Orbit\n\n`;
      const textArray = eval(`[${orbitMatch[1]}]`);
      textArray.forEach(p => mdx += `${p}\n\n`);
    }

    // Extract exploration
    const expMatch = sectionsText.match(/exploration:\s*{[\s\S]*?text:\s*\[([\s\S]*?)\]/);
    if (expMatch) {
      mdx += `## Exploration\n\n`;
      const textArray = eval(`[${expMatch[1]}]`);
      textArray.forEach(p => mdx += `${p}\n\n`);
    }
  }

  fs.writeFileSync(path.join(__dirname, `../content/planets/${key}.mdx`), mdx);
  console.log(`Wrote ${key}.mdx`);
}
