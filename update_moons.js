const fs = require('fs');
let content = fs.readFileSync('src/data/detailedEncyclopedia.ts', 'utf-8');

const newInterface = `export interface DetailedEncyclopedia {
  id: string;
  unavailabilityReasons?: Record<string, string>;
  sections: {
    overview: SectionContent;
    composition: SectionContent;
    orbit: SectionContent;
    exploration: SectionContent;
    moons?: SectionContent;
  };
  gallery: string[];
}`;

content = content.replace(/export interface DetailedEncyclopedia \{[\s\S]*?gallery: string\[\];\n\}/, newInterface);

const moonData = {
  earth: {
    text: [
      "Earth has one natural satellite, simply called the Moon. It is the fifth largest satellite in the Solar System.",
      "The Moon is in synchronous rotation with Earth, meaning the same side is always facing the planet.",
      "Its gravitational pull is the primary driver of Earth's ocean tides."
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg',
    imageAlt: 'The Moon'
  },
  mars: {
    text: [
      "Mars has two small, irregularly shaped moons, Phobos and Deimos, which are thought to be captured asteroids.",
      "Phobos is the larger inner moon and orbits so close to Mars that it completes an orbit in less than a Martian day.",
      "Deimos is the smaller outer moon, orbiting much further away and taking over 30 hours to complete one revolution."
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg',
    imageAlt: 'Phobos'
  },
  jupiter: {
    text: [
      "Jupiter has at least 95 known moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto.",
      "Ganymede is the largest moon in the Solar System, even larger than the planet Mercury.",
      "Io is the most volcanically active body in the Solar System, while Europa is believed to harbor a massive subsurface ocean beneath its icy crust."
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg',
    imageAlt: 'Io'
  },
  saturn: {
    text: [
      "Saturn has 146 known moons, the most of any planet in the Solar System.",
      "Titan is the largest of Saturn's moons and the second largest in the Solar System. It is the only moon known to have a dense atmosphere and liquid hydrocarbon lakes on its surface.",
      "Enceladus is another notable moon, featuring geysers that shoot water ice into space, hinting at a subsurface ocean."
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Titan_in_true_color.jpg',
    imageAlt: 'Titan'
  },
  uranus: {
    text: [
      "Uranus has 28 known moons, named primarily after characters from the works of William Shakespeare and Alexander Pope.",
      "The five main moons are Miranda, Ariel, Umbriel, Titania, and Oberon.",
      "Miranda is particularly notable for its extremely rugged and bizarre topography, which features massive fault canyons and terraces."
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Miranda_scarp.jpg',
    imageAlt: 'Miranda'
  },
  neptune: {
    text: [
      "Neptune has 16 known moons, with Triton being by far the largest.",
      "Triton is unique among large moons in the Solar System because it has a retrograde orbit, meaning it orbits in the opposite direction to Neptune's rotation. This suggests it is a captured dwarf planet from the Kuiper Belt.",
      "It is one of the coldest objects in the Solar System and features active geysers erupting nitrogen gas."
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Triton-usgs23-with-frame.jpg',
    imageAlt: 'Triton'
  },
  pluto: {
    text: [
      "Pluto has five known moons: Charon, Styx, Nix, Kerberos, and Hydra.",
      "Charon is the largest, being over half the size of Pluto itself. Because of this, Pluto and Charon are often referred to as a binary system.",
      "They are mutually tidally locked, meaning they always present the same face to each other as they orbit a common center of mass outside of Pluto."
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Charon_in_True_Color_-_High-Res.jpg',
    imageAlt: 'Charon'
  }
};

for (const [planet, data] of Object.entries(moonData)) {
  const regexStr = planet + ': \\{[\\s\\S]*?exploration: \\{[\\s\\S]*?\\n\\s*\\}\\n\\s*\\}\\,';
  const regex = new RegExp(regexStr);
  const match = content.match(regex);
  if (match) {
    const text0 = data.text[0].replace(/"/g, '\\"');
    const text1 = data.text[1].replace(/"/g, '\\"');
    const text2 = data.text[2].replace(/"/g, '\\"');
    const replacement = match[0].replace(/(\n\s*)\}\,\s*$/, `,
      moons: {
        text: [
          "${text0}",
          "${text1}",
          "${text2}"
        ],
        imageUrl: "${data.imageUrl}",
        imageAlt: "${data.imageAlt}"
      }$1},`);
    content = content.replace(regex, replacement);
  }
}

fs.writeFileSync('src/data/detailedEncyclopedia.ts', content);
console.log('updated');
