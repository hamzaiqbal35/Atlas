const fs = require('fs');
const path = require('path');

const targetFile = 'd:\\Atlas\\src\\data\\detailedEncyclopedia.ts';

const appendData = `
  luna: {
    id: "luna",
    sections: {
      overview: {
        text: [
          "The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System and the largest and most massive relative to its parent planet.",
          "Its surface is a dusty, heavily cratered landscape lacking any significant atmosphere, liquid water, or magnetic field. The dark regions, called maria, are vast, solidified pools of ancient basaltic lava.",
          "The Moon's gravitational pull on Earth is the primary cause of Earth's ocean tides and it also slightly lengthens the day by slowing Earth's rotation over geological time."
        ],
        imageUrl: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "The surface of the Moon"
      },
      composition: {
        text: [
          "The Moon is a differentiated body, possessing a geochemically distinct crust, mantle, and core. The lunar surface is covered by a layer of fine, abrasive dust and rocky debris called regolith.",
          "Its core is relatively small, taking up only about 20% of the Moon's radius. The core is believed to consist of a solid, iron-rich inner core and a fluid outer core.",
          "Chemical analysis of lunar rocks brought back by the Apollo missions reveals that the Moon and Earth share strikingly similar isotopic signatures, strongly supporting the Giant Impact Hypothesis—that the Moon formed from the debris of a collision between Earth and a Mars-sized body."
        ],
        imageUrl: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Lunar regolith close-up"
      },
      orbit: {
        text: [
          "The Moon is in synchronous rotation with Earth, meaning it takes the same amount of time to rotate on its axis as it does to orbit Earth. As a result, the same side—the near side—is always facing Earth.",
          "It orbits at an average distance of 384,400 km. Its orbit is elliptical, meaning it sometimes appears slightly larger (a 'supermoon') or smaller in the sky.",
          "Due to tidal interactions with Earth's oceans, the Moon is slowly drifting away from Earth at a rate of approximately 3.8 centimeters per year."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Lunar orbit visualization"
      },
      exploration: {
        text: [
          "The Moon is the only celestial body beyond Earth that humans have visited. The Soviet Union's Luna 2 was the first human-made object to reach its surface in 1959.",
          "NASA's Apollo program achieved the historic first crewed landing in 1969 with Apollo 11. Over the course of six Apollo missions, twelve astronauts walked on the lunar surface and returned over 380 kg of lunar rock and soil to Earth.",
          "Today, a new era of lunar exploration has begun, with multiple nations and private companies launching robotic landers and planning the Artemis program, which aims to establish a sustainable human presence on the Moon by the end of the decade."
        ],
        imageUrl: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Apollo astronaut on the Moon"
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  mars: {
    id: "mars",
    sections: {
      overview: {
        text: [
          "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Often referred to as the 'Red Planet', its distinct color is due to the widespread presence of iron oxide (rust) on its surface.",
          "Mars is a terrestrial planet with a thin atmosphere. Its surface features are reminiscent of both the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.",
          "It is home to Olympus Mons, the largest volcano and highest known mountain on any planet in the Solar System, and Valles Marineris, one of the largest canyons."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Mars global view"
      },
      composition: {
        text: [
          "Mars is primarily composed of silicon, oxygen, iron, and magnesium, forming a silicate rock and metal crust over a dense core. The surface is heavily covered in basaltic dust.",
          "Its atmosphere is extremely thin, consisting of 95% carbon dioxide, 3% nitrogen, and 1.6% argon. The atmospheric pressure is less than 1% of Earth's, providing little protection from solar radiation.",
          "Despite being a desert planet today, extensive geological evidence—including dried riverbeds and ancient lake basins—indicates that Mars once possessed abundant liquid water on its surface billions of years ago."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Martian terrain"
      },
      orbit: {
        text: [
          "Mars has a relatively eccentric orbit. Its distance from the Sun varies significantly, which strongly affects its climate. A Martian year equals 687 Earth days.",
          "Its axial tilt is 25.19 degrees, which is very similar to Earth's axial tilt. As a result, Mars experiences seasons just like Earth, though they last nearly twice as long.",
          "Mars is accompanied by two small, irregularly shaped moons: Phobos and Deimos. These are widely believed to be captured asteroids from the nearby asteroid belt."
        ],
        imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Phobos and Deimos"
      },
      exploration: {
        text: [
          "Mars is the most intensively explored planet after Earth. The Mariner 4 spacecraft performed the first successful flyby in 1965, revealing a cratered, dead world and dashing hopes of finding advanced civilizations.",
          "NASA's Viking landers in 1976 provided the first detailed images of the surface and conducted early experiments searching for microbial life. Today, Mars is populated by a fleet of robotic explorers, including the Curiosity and Perseverance rovers.",
          "These rovers are actively drilling into ancient lakebeds to search for biosignatures of ancient microbial life, paving the way for future human exploration missions."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Mars rover operating on the surface"
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  jupiter: {
    id: "jupiter",
    sections: {
      overview: {
        text: [
          "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a massive gas giant, with a mass more than two and a half times that of all the other planets in the Solar System combined.",
          "Its iconic, turbulent atmosphere is banded with beautiful clouds of ammonia and water, driven by extremely fast jet streams. The planet lacks a well-defined solid surface.",
          "Jupiter's most famous feature is the Great Red Spot, a colossal, centuries-old anticyclonic storm that is larger than the entire Earth."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Jupiter and the Great Red Spot"
      },
      composition: {
        text: [
          "Jupiter is primarily composed of hydrogen (about 75% by mass) and helium (about 24%), closely resembling the composition of the Sun itself. It is essentially a failed star that never accreted enough mass to ignite nuclear fusion.",
          "Deep within Jupiter, extreme pressures and temperatures compress hydrogen gas into a state known as metallic hydrogen, an exotic, electrically conductive fluid that generates Jupiter's immensely powerful magnetic field.",
          "Jupiter's magnetic field is the strongest of any planet in the solar system—14 times stronger than Earth's. It creates intense radiation belts that trap highly energetic particles, posing a severe hazard to spacecraft."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Jupiter atmospheric bands"
      },
      orbit: {
        text: [
          "Jupiter orbits the Sun at an average distance of 778 million kilometers, completing one orbit every 11.86 Earth years.",
          "Despite its massive size, Jupiter has the shortest day in the solar system. It rotates incredibly fast, completing a single rotation on its axis in less than 10 hours. This rapid spin causes the planet to bulge noticeably at its equator.",
          "Jupiter has a vast retinue of 95 known moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto, discovered by Galileo Galilei in 1610."
        ],
        imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Jupiter and its moons"
      },
      exploration: {
        text: [
          "Pioneer 10 was the first spacecraft to visit Jupiter in 1973, surviving its intense radiation belts. Voyager 1 and 2 followed in 1979, providing the first detailed images of its moons and discovering Jupiter's faint ring system.",
          "The Galileo mission orbited the planet from 1995 to 2003, dropping a probe directly into Jupiter's atmosphere to measure its composition and weather.",
          "Currently, NASA's Juno spacecraft is orbiting Jupiter in highly elliptical polar orbits, peering deep beneath the cloud tops to map its gravitational and magnetic fields and study its deep interior structure."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Juno spacecraft"
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  saturn: {
    id: "saturn",
    sections: {
      overview: {
        text: [
          "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant known universally for its stunning, complex system of icy rings.",
          "The planet itself has a pale yellow hue due to ammonia crystals in its upper atmosphere. Like Jupiter, it lacks a solid surface and is wracked by fierce storms and high-speed winds.",
          "Saturn has an average radius about nine and a half times that of Earth, and while it is 95 times more massive, its extremely low density means it would float in water if a large enough ocean existed."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Saturn and its rings"
      },
      composition: {
        text: [
          "Saturn's interior is likely composed of a rocky core surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and a gaseous outer layer.",
          "The most famous feature, the rings, are composed almost entirely of water ice particles, ranging in size from microscopic dust grains to boulders the size of mountains. They are incredibly thin, spanning hundreds of thousands of kilometers across but only about 10 meters thick.",
          "Saturn's atmosphere is known for a unique, persistent hexagonal wave pattern encircling its north pole. This massive, six-sided storm is a fluid dynamics phenomenon unique in the Solar System."
        ],
        imageUrl: "https://images.unsplash.com/photo-1647416399126-7bcbc8699df9?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Close up of Saturn's rings"
      },
      orbit: {
        text: [
          "Saturn orbits the Sun at an average distance of 1.4 billion kilometers, completing one orbit every 29.4 Earth years.",
          "It rotates very quickly, completing a day in just 10.7 hours. Its axial tilt is 26.7 degrees, meaning Saturn experiences seasons like Earth, though each season lasts for over seven years.",
          "Saturn boasts a massive system of 146 known moons. The largest, Titan, is the second-largest moon in the Solar System and the only moon known to possess a dense atmosphere and stable bodies of surface liquid (hydrocarbon lakes)."
        ],
        imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Saturn's orbit"
      },
      exploration: {
        text: [
          "Pioneer 11 performed the first flyby of Saturn in 1979, followed closely by the Voyager 1 and 2 spacecraft in 1980 and 1981, which provided unprecedented details of the ring system and discovered several new moons.",
          "The flagship Cassini-Huygens mission, a joint NASA/ESA/ASI endeavor, spent 13 years orbiting Saturn from 2004 to 2017.",
          "Cassini revolutionized our understanding of the Saturnian system, dropping the Huygens probe onto Titan's surface and discovering jets of water erupting from the icy moon Enceladus, revealing a potentially habitable subsurface ocean."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Cassini spacecraft"
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1647416399126-7bcbc8699df9?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  uranus: {
    id: "uranus",
    sections: {
      overview: {
        text: [
          "Uranus is the seventh planet from the Sun and the first planet discovered using a telescope. It is classified as an 'ice giant', distinguishing it from the gas giants Jupiter and Saturn.",
          "It has a pale, featureless cyan hue due to the presence of methane in its upper atmosphere, which absorbs red light.",
          "Uranus is uniquely tilted on its side; its axis of rotation is nearly parallel to its orbital plane, causing it to roll around the Sun like a barrel."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Uranus"
      },
      composition: {
        text: [
          "Uranus is primarily composed of various 'ices'—water, ammonia, and methane—wrapped around a small rocky core. The mantle of ice is not ice in the conventional sense, but rather a hot, dense fluid.",
          "Unlike Jupiter and Saturn, Uranus radiates very little heat back into space. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of -224°C (-371°F).",
          "It possesses a complex planetary magnetic field that is strongly skewed from its geometric center and tilted relative to its axis of rotation."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Atmosphere of Uranus"
      },
      orbit: {
        text: [
          "Uranus orbits the Sun once every 84 Earth years at an average distance of about 3 billion kilometers.",
          "Due to its extreme axial tilt of 97.77 degrees, Uranus experiences extreme seasons. For a quarter of its orbit (21 Earth years), one pole is in continuous sunlight while the other plunges into a long, dark winter.",
          "Uranus has 28 known moons, named after characters from the works of William Shakespeare and Alexander Pope, and a faint system of narrow, dark rings."
        ],
        imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Uranus ring system"
      },
      exploration: {
        text: [
          "Uranus was discovered by William Herschel in 1781. It has only been visited by a single spacecraft in human history.",
          "NASA's Voyager 2 spacecraft flew by Uranus on January 24, 1986. During its brief encounter, it discovered 10 new moons, studied the planet's cold atmosphere, and examined its ring system.",
          "Since Voyager 2, our knowledge of Uranus has relied entirely on Earth-based observatories and the Hubble Space Telescope. Future flagship missions to Uranus are currently a top priority for planetary scientists."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Voyager 2 probe"
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  neptune: {
    id: "neptune",
    sections: {
      overview: {
        text: [
          "Neptune is the eighth and farthest-known planet from the Sun in the Solar System. It is an ice giant, slightly smaller but denser than its twin, Uranus.",
          "Unlike the featureless Uranus, Neptune's atmosphere is active and dynamic, displaying visible weather patterns, high-altitude clouds, and massive storms.",
          "Neptune's deep blue color is more vivid than that of Uranus, suggesting the presence of an unknown atmospheric component that contributes to the rich hue."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Neptune"
      },
      composition: {
        text: [
          "Like Uranus, Neptune's interior consists of a small rocky core enveloped by a thick, slushy mantle of water, ammonia, and methane ices. It is classified as an ice giant.",
          "The atmosphere is primarily hydrogen and helium. Neptune experiences the strongest winds of any planet in the Solar System, with recorded speeds reaching an astonishing 2,100 km/h (1,300 mph).",
          "During the Voyager 2 flyby, a massive storm known as the Great Dark Spot was observed, similar in size to Earth. However, later observations by Hubble showed that this spot had disappeared, highlighting the planet's violent, ever-changing weather."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Neptune's storms"
      },
      orbit: {
        text: [
          "Neptune orbits the Sun at a massive average distance of 4.5 billion kilometers (30 AU), completing one revolution every 164.8 Earth years.",
          "It is the only planet in the Solar System found by mathematical prediction rather than empirical observation. French astronomer Urbain Le Verrier predicted its existence to account for unexpected perturbations in the orbit of Uranus.",
          "Neptune has 16 known moons. Its largest moon, Triton, is unique because it orbits in a retrograde direction (opposite to Neptune's rotation), suggesting it is a captured dwarf planet from the Kuiper Belt."
        ],
        imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Neptune's orbit"
      },
      exploration: {
        text: [
          "Due to its immense distance, Neptune has been visited by only one spacecraft: Voyager 2, which flew past the planet on August 25, 1989.",
          "Voyager 2 provided the first close-up images of Neptune, confirming the existence of its magnetic field, discovering the Great Dark Spot, and observing active geysers erupting nitrogen gas on the frigid surface of Triton.",
          "No future missions are currently en route to Neptune, making the Voyager 2 data the primary source of close-range information we have on the ice giant."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Voyager 2 encounter"
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  pluto: {
    id: "pluto",
    sections: {
      overview: {
        text: [
          "Pluto is a dwarf planet in the Kuiper belt, a ring of icy bodies beyond the orbit of Neptune. Once considered the ninth planet, it was reclassified in 2006 by the IAU.",
          "It is a frigid world, so far from the Sun that daylight on Pluto resembles a moonlit night on Earth.",
          "Despite its small size, Pluto is remarkably geologically diverse, featuring vast plains of nitrogen ice, towering mountains of water ice, and a thin, hazy atmosphere."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Pluto"
      },
      composition: {
        text: [
          "Pluto is made primarily of ice and rock. It is relatively small—about one-sixth the mass of Earth's Moon and one-third its volume.",
          "Its surface is highly varied, with significant color and albedo differences. The most prominent feature is Sputnik Planitia, a bright, heart-shaped basin filled with convecting nitrogen ice.",
          "Beneath the icy crust, scientists strongly suspect Pluto harbors a subsurface ocean of liquid water, kept from freezing by heat generated from radioactive decay in its rocky core."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Pluto surface features"
      },
      orbit: {
        text: [
          "Pluto has a highly eccentric and inclined orbit. During its 248-year journey around the Sun, its distance ranges from 30 to 49 astronomical units (AU).",
          "Because of its eccentric orbit, Pluto periodically comes closer to the Sun than Neptune. The last time this occurred was from 1979 to 1999.",
          "Pluto and its largest moon, Charon, are often considered a binary system because the barycenter of their orbits does not lie within either body. They are tidally locked to each other, always presenting the same face to one another."
        ],
        imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Pluto and Charon orbit"
      },
      exploration: {
        text: [
          "Discovered in 1930 by Clyde Tombaugh, Pluto remained a blurry point of light for decades until the arrival of the New Horizons spacecraft.",
          "New Horizons performed a historic flyby of Pluto on July 14, 2015, becoming the first and only spacecraft to explore the Pluto system.",
          "The data beamed back over the following year completely reshaped our understanding of the outer solar system, revealing Pluto as an active, complex world rather than a dead ice ball."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "New Horizons probe"
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  asteroid_belt: {
    id: "asteroid_belt",
    unavailabilityReasons: {
      telemetry: "The Asteroid Belt is a region of space, not a single celestial body. Therefore, it lacks a single unified mass, radius, or temperature."
    },
    sections: {
      overview: {
        text: [
          "The asteroid belt is a torus-shaped region in the Solar System, located roughly between the orbits of the planets Jupiter and Mars.",
          "It contains millions of solid, irregularly shaped bodies, of many sizes but much smaller than planets, called asteroids or minor planets.",
          "Contrary to popular depictions in science fiction, the asteroid belt is mostly empty space. The average distance between known asteroids is hundreds of thousands of kilometers."
        ],
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Asteroid belt region"
      },
      composition: {
        text: [
          "The asteroid belt is composed mostly of asteroids, ranging in size from the dwarf planet Ceres (about 950 km across) to small rocky and metallic fragments.",
          "These bodies are remnants from the early Solar System that never accreted into a planet, primarily due to the strong gravitational perturbations from Jupiter.",
          "Asteroids are generally classified into three main types based on their composition: C-type (carbonaceous), S-type (silicate), and M-type (metallic)."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Asteroid composition"
      },
      orbit: {
        text: [
          "Asteroids in the main belt have slightly elliptical orbits, revolving around the Sun in the same direction as the planets.",
          "Their orbital periods range from about 3 to 6 Earth years. The distribution of asteroids is not uniform; there are regions called Kirkwood gaps where very few asteroids exist, cleared out by orbital resonances with Jupiter.",
          "Occasionally, gravitational interactions or collisions can eject asteroids from the main belt, sending them into the inner solar system as near-Earth objects."
        ],
        imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Asteroid belt orbits"
      },
      exploration: {
        text: [
          "Numerous spacecraft have crossed the asteroid belt on their way to the outer planets, including Pioneers 10 and 11, and the Voyager probes.",
          "Several missions have specifically targeted asteroids. The Dawn spacecraft extensively explored the two largest bodies in the belt, Vesta and Ceres, providing unprecedented details about their geology and composition.",
          "Sample return missions, like Japan's Hayabusa2 and NASA's OSIRIS-REx, have successfully brought asteroid material back to Earth for rigorous laboratory analysis, offering clues to the origins of the Solar System."
        ],
        imageUrl: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&fit=crop&q=80&w=2000",
        imageAlt: "Asteroid probe"
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
    ]
  }
};
`;

let currentContent = fs.readFileSync(targetFile, 'utf8');
currentContent = currentContent.replace(/};\s*$/, '');
currentContent += appendData;
fs.writeFileSync(targetFile, currentContent);
console.log('Appended remaining planets successfully.');
