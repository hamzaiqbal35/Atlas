export interface SectionContent {
  text: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface DetailedEncyclopedia {
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
}

export const detailedEncyclopedia: Record<string, DetailedEncyclopedia> = {
  sun: {
    id: "sun",
    unavailabilityReasons: {
      telemetry: "The Sun is a sphere of plasma and lacks a solid surface. Traditional planetary metrics like surface gravity, density, or physical dimensions are not analogous. Its volume and density fluctuate dramatically from the immensely dense core to the diffuse corona."
    },
    sections: {
      overview: {
        text: [
          "The Sun is a G-type main-sequence star (G2V) situated at the center of the Solar System. It is an almost perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light, ultraviolet light, and infrared radiation. It is by far the most important source of energy for life on Earth.",
          "With a diameter of about 1.39 million kilometers (864,000 miles), or 109 times that of Earth, its mass is about 330,000 times that of Earth, comprising about 99.86% of the total mass of the Solar System.",
          "The Sun formed approximately 4.6 billion years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the center, whereas the rest flattened into an orbiting disk that became the Solar System."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
        imageAlt: "Solar flare erupting from the Sun's surface"
      },
      composition: {
        text: [
          "Roughly three-quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.",
          "The Sun's core is a nuclear fusion reactor. Every second, it fuses about 600 million tons of hydrogen into helium, converting 4 million tons of matter into pure energy. This energy, which can take between 10,000 and 170,000 years to escape the core, is the source of the Sun's light and heat.",
          "Surrounding the core is the radiative zone, where thermal radiation is the primary means of energy transfer. Above this lies the convective zone, where massive convection currents of plasma transport heat outwards to the photosphere—the visible surface of the Sun."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/The_life_cycle_of_a_Sun-like_star_%28annotated%29.jpg",
        imageAlt: "Detailed view of the solar surface"
      },
      orbit: {
        text: [
          "The Sun orbits the Galactic Center of the Milky Way at a distance of approximately 24,000 to 28,000 light-years. It completes one revolution every 225 to 250 million years, a period known as a cosmic year or galactic year.",
          "Its orbital speed is approximately 220 km/s. At this speed, it takes the Solar System about 1,400 years to travel a distance of 1 light-year, or 8 days to travel 1 AU (the distance from the Earth to the Sun).",
          "The Sun resides in the Orion Arm, a minor spiral arm of the Milky Way galaxy. It is currently moving through the Local Interstellar Cloud within the Local Bubble, a cavity in the interstellar medium."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/236084main_MilkyWay-full-annotated.jpg/1280px-236084main_MilkyWay-full-annotated.jpg",
        imageAlt: "An artist's conception of the spiral structure of the Milky Way galaxy, showing the Sun's location"
      },
      exploration: {
        text: [
          "Solar observation has been a fundamental human endeavor since antiquity. Early astronomers mapped sunspots and solar cycles using rudimentary telescopes, eventually realizing the Sun's magnetic activity.",
          "Modern space-based solar observatories have revolutionized our understanding. The Solar and Heliospheric Observatory (SOHO), launched in 1995, and the Solar Dynamics Observatory (SDO), launched in 2010, provide continuous, high-definition monitoring of the Sun's atmosphere and magnetic fields.",
          "The Parker Solar Probe, launched in 2018, is currently making history. It has flown into the low solar corona, enduring unprecedented heat and radiation to study the origins of the solar wind and the mystery of coronal heating."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/83/The_Sun_in_white_light.jpg",
        imageAlt: "Solar dynamics observation"
      }
    },
    gallery: [
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/The_violent_youth_of_solar_proxies.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/The_life_cycle_of_a_Sun-like_star_%28annotated%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/28/The_Ulysses_spacecraft_undergoes_testing_at_the_vacuum_spin-balancing_facility_in_ESTEC.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/83/The_Sun_in_white_light.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png",
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Sun_in_fog_in_Lysekil.jpg"
  ]
  },
  mercury: {
    id: "mercury",
    sections: {
      overview: {
        text: [
          "Mercury is the smallest planet in the Solar System and the closest to the Sun. It is only slightly larger than Earth's Moon, possessing a heavily cratered surface that suggests it has been geologically inactive for billions of years.",
          "Due to its proximity to the Sun, Mercury experiences the most extreme temperature fluctuations in the Solar System, ranging from 430°C (800°F) during the day to -180°C (-290°F) at night.",
          "Despite these extreme temperatures, radar observations indicate that water ice may exist deep within permanently shadowed craters at the planet's poles."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
        imageAlt: "Surface of Mercury"
      },
      composition: {
        text: [
          "Mercury is a terrestrial planet, consisting of approximately 70% metallic and 30% silicate material. It is the second-densest planet in the Solar System after Earth, a fact attributed to its massive iron core.",
          "The core of Mercury is extraordinarily large, occupying about 42% of the planet's volume (compared to Earth's 17%). Recent research suggests that the core has a liquid outer layer.",
          "Above the core lies a solid silicate mantle and a crust. The crust is thin, likely 35 kilometers thick, and is heavily cratered. Mercury's high density implies that the planet was subjected to a massive impact early in its history, which stripped away much of its original crust and mantle."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Transit_Of_Mercury%2C_May_9th%2C_2016.png",
        imageAlt: "Mercury's rugged terrain"
      },
      orbit: {
        text: [
          "Mercury orbits the Sun in a highly eccentric, egg-shaped path. Its distance from the Sun ranges from 46 million kilometers at perihelion to 70 million kilometers at aphelion.",
          "It takes 88 Earth days for Mercury to complete one orbit. However, it rotates very slowly on its axis, completing one rotation every 59 Earth days.",
          "Mercury is tidally locked in a 3:2 spin-orbit resonance. This means it rotates exactly three times on its axis for every two orbits around the Sun. As a result, a single solar day (a full day-night cycle) on Mercury lasts 176 Earth days."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/The_Mighty_Caloris_%28PIA19213%29.png",
        imageAlt: "Orbital path visualization"
      },
      exploration: {
        text: [
          "Mercury is notoriously difficult to explore due to its proximity to the Sun, which requires spacecraft to decelerate significantly to enter orbit.",
          "NASA's Mariner 10 was the first spacecraft to visit Mercury, flying by in 1974 and 1975, mapping about 45% of the surface.",
          "NASA's MESSENGER spacecraft became the first to orbit Mercury, arriving in 2011 and mapping the entire planet before deliberately crashing into its surface in 2015. The ESA/JAXA joint mission, BepiColombo, is currently en route and will arrive in 2025."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6c/MESSENGER_-_spacecraft_at_mercury_-_atmercury_lg.jpg",
        imageAlt: "MESSENGER spacecraft at Mercury"
      }
    },
    gallery: [
    "https://upload.wikimedia.org/wikipedia/commons/9/92/Unmasking_the_Secrets_of_Mercury.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Transit_Of_Mercury%2C_May_9th%2C_2016.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/dd/The_Mighty_Caloris_%28PIA19213%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/1d/Terrestrial_planet_size_comp_2024.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Solar_system.jpg"
  ]
  },
  venus: {
    id: "venus",
    sections: {
      overview: {
        text: [
          "Venus is the second planet from the Sun and is often considered Earth's 'sister planet' due to their similar size, mass, proximity to the Sun, and bulk composition.",
          "However, it is radically different in other aspects. It possesses a dense, toxic atmosphere filled with carbon dioxide, covered by thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect.",
          "It is the hottest planet in our solar system, with surface temperatures reaching a scorching 475°C (900°F)—hot enough to melt lead. The surface is a hellish landscape of volcanic plains and deformed mountains."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
        imageAlt: "Venusian atmosphere"
      },
      composition: {
        text: [
          "Venus has a rocky mantle and a metallic iron core, similar to Earth. However, unlike Earth, Venus does not possess an internally generated magnetic field, likely due to its extremely slow rotation and lack of internal convection.",
          "The atmosphere is 96.5% carbon dioxide, with 3.5% nitrogen and traces of other gases. The atmospheric mass is 93 times that of Earth's atmosphere, and the pressure at the planet's surface is about 92 times that at Earth's surface—equivalent to the pressure at a depth of nearly 1 kilometer under Earth's oceans.",
          "The surface of Venus is characterized by intense volcanism. Over 80% of the surface is covered by smooth, volcanic plains. Radar mapping has revealed thousands of volcanoes, some of which may still be active today."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Venus_Tablet_of_Ammisaduqa.jpg",
        imageAlt: "Surface mapping of Venus"
      },
      orbit: {
        text: [
          "Venus orbits the Sun at an average distance of 108 million kilometers, completing an orbit every 224.7 Earth days. Its orbit is the most circular of any planet in the Solar System, with an eccentricity of less than 0.01.",
          "Venus has an unusual rotation. It rotates in a retrograde direction, meaning it spins on its axis from east to west, opposite to most other planets.",
          "Furthermore, Venus has the slowest rotation of any planet, taking 243 Earth days to complete a single spin. This means a Venusian day is actually longer than its year."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Venus_Drawing.jpg",
        imageAlt: "Venus in the night sky"
      },
      exploration: {
        text: [
          "Venus was the first planet explored by spacecraft. NASA's Mariner 2 flew by in 1962, confirming its extremely hot surface.",
          "The Soviet Union's Venera program was remarkably successful in exploring Venus. Venera 7, in 1970, became the first spacecraft to successfully land on another planet and transmit data back to Earth, surviving the crushing pressure and intense heat for 23 minutes.",
          "NASA's Magellan orbiter later mapped 98% of the surface using synthetic aperture radar. Currently, multiple space agencies, including NASA and the ESA, are planning new missions to study Venus's atmosphere and surface to understand how it diverged so wildly from Earth."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Venus_2_Approach_Image.jpg",
        imageAlt: "Space probe illustration"
      }
    },
    gallery: [
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Venus_Tablet_of_Ammisaduqa.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Venus_Drawing.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Venus_2_Approach_Image.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/54/Venus_-_December_23_2016.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/b0/VenusLanderTopo.png"
  ]
  },
  earth: {
    id: "earth",
    sections: {
      overview: {
        text: [
          "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a 'water world', the only planet in the Solar System sustaining liquid surface water.",
          "Earth is a dynamic planet with a complex climate system, active geology driven by plate tectonics, and a protective magnetic field. Its atmosphere shields the surface from harmful solar radiation and meteors.",
          "Formed approximately 4.54 billion years ago, life appeared in its oceans relatively early in its history. Today, the biosphere significantly influences the planet's atmosphere and surface processes."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
        imageAlt: "Earth viewed from space"
      },
      composition: {
        text: [
          "Earth's interior is divided into layers: a solid iron-nickel inner core, a liquid outer core that generates the planet's magnetic field, a thick, viscous mantle, and a thin, solid outer crust.",
          "The crust is fragmented into massive tectonic plates that float on the semi-fluid mantle beneath them. Interactions at plate boundaries create earthquakes, volcanoes, and massive mountain ranges.",
          "Earth's atmosphere is composed primarily of nitrogen (78%) and oxygen (21%), with trace amounts of argon, carbon dioxide, and water vapor. This composition is uniquely maintained by the continuous biological activity of the planet's ecosystems."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Earth_cutaway.png",
        imageAlt: "Earth's internal structure"
      },
      orbit: {
        text: [
          "Earth orbits the Sun at an average distance of 149.6 million kilometers (1 Astronomical Unit, or AU), completing one revolution every 365.25 days. The extra quarter of a day is accounted for by adding a leap day every four years.",
          "The planet rotates on its axis once every 24 hours. Its axis of rotation is tilted by 23.4 degrees relative to its orbital plane. This axial tilt is responsible for the seasonal variations across the planet.",
          "Earth is accompanied by a single natural satellite, the Moon, which stabilizes Earth's axial tilt over millions of years, leading to a relatively stable climate."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Earth-Moon.PNG",
        imageAlt: "Earth and moon to scale"
      },
      exploration: {
        text: [
          "Earth is, by far, the most intensively studied planet. A vast fleet of satellites constantly monitor its atmosphere, oceans, glaciers, and solid surface, providing critical data on weather, climate change, and geological activity.",
          "The International Space Station (ISS) has orbited Earth since 1998, serving as a microgravity laboratory and demonstrating sustained human presence in space.",
          "Observation programs like the Landsat satellites have provided a continuous record of Earth's surface for over 50 years, documenting human impacts and natural processes over time."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/The_station_pictured_from_the_SpaceX_Crew_Dragon_5.jpg",
        imageAlt: "International Space Station"
      },
      moons: {
        text: [
          "Earth has one natural satellite, simply called the Moon. It is the fifth largest satellite in the Solar System.",
          "The Moon is in synchronous rotation with Earth, meaning the same side is always facing the planet.",
          "Its gravitational pull is the primary driver of Earth's ocean tides."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
        imageAlt: "The Moon"
      }
    },
    gallery: [
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Terra.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Solar_system.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Solar_System_Template_2.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/aa/Red_Giant_Earth_warm.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/Ocean_world_Earth.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/NASA-EarlyEarth-PaleOrangeDot-20190802.jpg"
  ]
  },
  luna: {
    id: "luna",
    sections: {
      overview: {
        text: [
          "The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System and the largest and most massive relative to its parent planet.",
          "Its surface is a dusty, heavily cratered landscape lacking any significant atmosphere, liquid water, or magnetic field. The dark regions, called maria, are vast, solidified pools of ancient basaltic lava.",
          "The Moon's gravitational pull on Earth is the primary cause of Earth's ocean tides and it also slightly lengthens the day by slowing Earth's rotation over geological time."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
        imageAlt: "The surface of the Moon"
      },
      composition: {
        text: [
          "The Moon is a differentiated body, possessing a geochemically distinct crust, mantle, and core. The lunar surface is covered by a layer of fine, abrasive dust and rocky debris called regolith.",
          "Its core is relatively small, taking up only about 20% of the Moon's radius. The core is believed to consist of a solid, iron-rich inner core and a fluid outer core.",
          "Chemical analysis of lunar rocks brought back by the Apollo missions reveals that the Moon and Earth share strikingly similar isotopic signatures, strongly supporting the Giant Impact Hypothesis—that the Moon formed from the debris of a collision between Earth and a Mars-sized body."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Apollo_11_bootprint.jpg",
        imageAlt: "Lunar regolith close-up"
      },
      orbit: {
        text: [
          "The Moon is in synchronous rotation with Earth, meaning it takes the same amount of time to rotate on its axis as it does to orbit Earth. As a result, the same side—the near side—is always facing Earth.",
          "It orbits at an average distance of 384,400 km. Its orbit is elliptical, meaning it sometimes appears slightly larger (a 'supermoon') or smaller in the sky.",
          "Due to tidal interactions with Earth's oceans, the Moon is slowly drifting away from Earth at a rate of approximately 3.8 centimeters per year."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Earth-Moon.PNG",
        imageAlt: "Earth and Moon to scale"
      },
      exploration: {
        text: [
          "The Moon is the only celestial body beyond Earth that humans have visited. The Soviet Union's Luna 2 was the first human-made object to reach its surface in 1959.",
          "NASA's Apollo program achieved the historic first crewed landing in 1969 with Apollo 11. Over the course of six Apollo missions, twelve astronauts walked on the lunar surface and returned over 380 kg of lunar rock and soil to Earth.",
          "Today, a new era of lunar exploration has begun, with multiple nations and private companies launching robotic landers and planning the Artemis program, which aims to establish a sustainable human presence on the Moon by the end of the decade."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/A_Man_on_the_Moon%2C_AS11-40-5903_%28cropped%29.jpg",
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        imageAlt: "Mars global view"
      },
      composition: {
        text: [
          "Mars is primarily composed of silicon, oxygen, iron, and magnesium, forming a silicate rock and metal crust over a dense core. The surface is heavily covered in basaltic dust.",
          "Its atmosphere is extremely thin, consisting of 95% carbon dioxide, 3% nitrogen, and 1.6% argon. The atmospheric pressure is less than 1% of Earth's, providing little protection from solar radiation.",
          "Despite being a desert planet today, extensive geological evidence—including dried riverbeds and ancient lake basins—indicates that Mars once possessed abundant liquid water on its surface billions of years ago."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Mars_surface_map.png",
        imageAlt: "Martian surface map"
      },
      orbit: {
        text: [
          "Mars has a relatively eccentric orbit. Its distance from the Sun varies significantly, which strongly affects its climate. A Martian year equals 687 Earth days.",
          "Its axial tilt is 25.19 degrees, which is very similar to Earth's axial tilt. As a result, Mars experiences seasons just like Earth, though they last nearly twice as long.",
          "Mars is accompanied by two small, irregularly shaped moons: Phobos and Deimos. These are widely believed to be captured asteroids from the nearby asteroid belt."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Phoenix_landing_%28PIA09943_cropped%29.jpg",
        imageAlt: "Phobos and Deimos"
      },
      exploration: {
        text: [
          "Mars is the most intensively explored planet after Earth. The Mariner 4 spacecraft performed the first successful flyby in 1965, revealing a cratered, dead world and dashing hopes of finding advanced civilizations.",
          "NASA's Viking landers in 1976 provided the first detailed images of the surface and conducted early experiments searching for microbial life. Today, Mars is populated by a fleet of robotic explorers, including the Curiosity and Perseverance rovers.",
          "These rovers are actively drilling into ancient lakebeds to search for biosignatures of ancient microbial life, paving the way for future human exploration missions."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Perspective_view_of_Korolev_crater.jpg",
        imageAlt: "Mars rover operating on the surface"
      },
      moons: {
        text: [
          "Mars has two small, irregularly shaped moons, Phobos and Deimos, which are thought to be captured asteroids.",
          "Phobos is the larger inner moon and orbits so close to Mars that it completes an orbit in less than a Martian day.",
          "Deimos is the smaller outer moon, orbiting much further away and taking over 30 hours to complete one revolution."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg",
        imageAlt: "Phobos"
      }
    },
    gallery: [
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Solar_system.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Solar_System_Template_2.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/4d/Phoenix_landing_%28PIA09943_cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/75/Perspective_view_of_Korolev_crater.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/16/PIA26046-Mars-BuriedIceMaps-20231026.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/PIA23513-Mars-DustTower-20101130.jpg"
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
        imageAlt: "Jupiter and the Great Red Spot"
      },
      composition: {
        text: [
          "Jupiter is primarily composed of hydrogen (about 75% by mass) and helium (about 24%), closely resembling the composition of the Sun itself. It is essentially a failed star that never accreted enough mass to ignite nuclear fusion.",
          "Deep within Jupiter, extreme pressures and temperatures compress hydrogen gas into a state known as metallic hydrogen, an exotic, electrically conductive fluid that generates Jupiter's immensely powerful magnetic field.",
          "Jupiter's magnetic field is the strongest of any planet in the solar system—14 times stronger than Earth's. It creates intense radiation belts that trap highly energetic particles, posing a severe hazard to spacecraft."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/PIA21775.jpg",
        imageAlt: "Jupiter atmospheric bands"
      },
      orbit: {
        text: [
          "Jupiter orbits the Sun at an average distance of 778 million kilometers, completing one orbit every 11.86 Earth years.",
          "Despite its massive size, Jupiter has the shortest day in the solar system. It rotates incredibly fast, completing a single rotation on its axis in less than 10 hours. This rapid spin causes the planet to bulge noticeably at its equator.",
          "Jupiter has a vast retinue of 95 known moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto, discovered by Galileo Galilei in 1610."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Jupiter_Family_of_Moons_by_Juno.png",
        imageAlt: "Jupiter and its moons"
      },
      exploration: {
        text: [
          "Pioneer 10 was the first spacecraft to visit Jupiter in 1973, surviving its intense radiation belts. Voyager 1 and 2 followed in 1979, providing the first detailed images of its moons and discovering Jupiter's faint ring system.",
          "The Galileo mission orbited the planet from 1995 to 2003, dropping a probe directly into Jupiter's atmosphere to measure its composition and weather.",
          "Currently, NASA's Juno spacecraft is orbiting Jupiter in highly elliptical polar orbits, peering deep beneath the cloud tops to map its gravitational and magnetic fields and study its deep interior structure."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Juno_spacecraft_model_1.png",
        imageAlt: "Juno spacecraft"
      },
      moons: {
        text: [
          "Jupiter has at least 95 known moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto.",
          "Ganymede is the largest moon in the Solar System, even larger than the planet Mercury.",
          "Io is the most volcanically active body in the Solar System, while Europa is believed to harbor a massive subsurface ocean beneath its icy crust."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg",
        imageAlt: "Io"
      }
    },
    gallery: [
    "https://upload.wikimedia.org/wikipedia/commons/4/4d/Wall_painting_-_Zeus_and_Eros_-_Herculaneum_%28ins_or_II_basilica-augusteum%29_-_Napoli_MAN_9553.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Solar_system.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Solar_System_Template_2.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/PIA21775.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Medicean_Stars.png"
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
        imageAlt: "Saturn and its rings"
      },
      composition: {
        text: [
          "Saturn's interior is likely composed of a rocky core surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and a gaseous outer layer.",
          "The most famous feature, the rings, are composed almost entirely of water ice particles, ranging in size from microscopic dust grains to boulders the size of mountains. They are incredibly thin, spanning hundreds of thousands of kilometers across but only about 10 meters thick.",
          "Saturn's atmosphere is known for a unique, persistent hexagonal wave pattern encircling its north pole. This massive, six-sided storm is a fluid dynamics phenomenon unique in the Solar System."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Saturn_global_view_from_Cassini%2C_rings_open_Better_Colour.png",
        imageAlt: "Saturn's rings and hexagonal storm"
      },
      orbit: {
        text: [
          "Saturn orbits the Sun at an average distance of 1.4 billion kilometers, completing one orbit every 29.4 Earth years.",
          "It rotates very quickly, completing a day in just 10.7 hours. Its axial tilt is 26.7 degrees, meaning Saturn experiences seasons like Earth, though each season lasts for over seven years.",
          "Saturn boasts a massive system of 146 known moons. The largest, Titan, is the second-largest moon in the Solar System and the only moon known to possess a dense atmosphere and stable bodies of surface liquid (hydrocarbon lakes)."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Saturn_-_July_24_2013_%2848594309686%29.jpg",
        imageAlt: "Saturn's orbit"
      },
      exploration: {
        text: [
          "Pioneer 11 performed the first flyby of Saturn in 1979, followed closely by the Voyager 1 and 2 spacecraft in 1980 and 1981, which provided unprecedented details of the ring system and discovered several new moons.",
          "The flagship Cassini-Huygens mission, a joint NASA/ESA/ASI endeavor, spent 13 years orbiting Saturn from 2004 to 2017.",
          "Cassini revolutionized our understanding of the Saturnian system, dropping the Huygens probe onto Titan's surface and discovering jets of water erupting from the icy moon Enceladus, revealing a potentially habitable subsurface ocean."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Saturn_in_natural_colors_%28captured_by_the_Hubble_Space_Telescope%29.jpg",
        imageAlt: "Cassini spacecraft"
      },
      moons: {
        text: [
          "Saturn has 146 known moons, the most of any planet in the Solar System.",
          "Titan is the largest of Saturn's moons and the second largest in the Solar System. It is the only moon known to have a dense atmosphere and liquid hydrocarbon lakes on its surface.",
          "Enceladus is another notable moon, featuring geysers that shoot water ice into space, hinting at a subsurface ocean."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Titan_in_true_color.jpg",
        imageAlt: "Titan"
      }
    },
    gallery: [
    "https://upload.wikimedia.org/wikipedia/commons/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Solar_system.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Solar_System_Template_2.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/d4/Saturn_in_natural_colors_%28captured_by_the_Hubble_Space_Telescope%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Saturn_global_view_from_Cassini%2C_rings_open_Better_Colour.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Saturn_compared_to_Earth_and_the_Moon.png"
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
        imageAlt: "Uranus"
      },
      composition: {
        text: [
          "Uranus is primarily composed of various 'ices'—water, ammonia, and methane—wrapped around a small rocky core. The mantle of ice is not ice in the conventional sense, but rather a hot, dense fluid.",
          "Unlike Jupiter and Saturn, Uranus radiates very little heat back into space. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of -224°C (-371°F).",
          "It possesses a complex planetary magnetic field that is strongly skewed from its geometric center and tilted relative to its axis of rotation."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Uranus_seen_from_Saturn_by_Cassini.jpg",
        imageAlt: "Atmosphere of Uranus"
      },
      orbit: {
        text: [
          "Uranus orbits the Sun once every 84 Earth years at an average distance of about 3 billion kilometers.",
          "Due to its extreme axial tilt of 97.77 degrees, Uranus experiences extreme seasons. For a quarter of its orbit (21 Earth years), one pole is in continuous sunlight while the other plunges into a long, dark winter.",
          "Uranus has 28 known moons, named after characters from the works of William Shakespeare and Alexander Pope, and a faint system of narrow, dark rings."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/Uranus_right_ascension.png",
        imageAlt: "Uranus ring system"
      },
      exploration: {
        text: [
          "Uranus was discovered by William Herschel in 1781. It has only been visited by a single spacecraft in human history.",
          "NASA's Voyager 2 spacecraft flew by Uranus on January 24, 1986. During its brief encounter, it discovered 10 new moons, studied the planet's cold atmosphere, and examined its ring system.",
          "Since Voyager 2, our knowledge of Uranus has relied entirely on Earth-based observatories and the Hubble Space Telescope. Future flagship missions to Uranus are currently a top priority for planetary scientists."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Uranus_clouds.jpg",
        imageAlt: "Voyager 2 probe"
      },
      moons: {
        text: [
          "Uranus has 28 known moons, named primarily after characters from the works of William Shakespeare and Alexander Pope.",
          "The five main moons are Miranda, Ariel, Umbriel, Titania, and Oberon.",
          "Miranda is particularly notable for its extremely rugged and bizarre topography, which features massive fault canyons and terraces."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Miranda_scarp.jpg",
        imageAlt: "Miranda"
      }
    },
    gallery: [
    "https://upload.wikimedia.org/wikipedia/commons/3/36/William_Herschel01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Uranus_seen_from_Saturn_by_Cassini.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Uranus_right_ascension.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Uranus_clouds.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/69/Uranus_Voyager2_color_calibrated.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Uranus_Dark_spot.jpg"
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
        imageAlt: "Neptune"
      },
      composition: {
        text: [
          "Like Uranus, Neptune's interior consists of a small rocky core enveloped by a thick, slushy mantle of water, ammonia, and methane ices. It is classified as an ice giant.",
          "The atmosphere is primarily hydrogen and helium. Neptune experiences the strongest winds of any planet in the Solar System, with recorded speeds reaching an astonishing 2,100 km/h (1,300 mph).",
          "During the Voyager 2 flyby, a massive storm known as the Great Dark Spot was observed, similar in size to Earth. However, later observations by Hubble showed that this spot had disappeared, highlighting the planet's violent, ever-changing weather."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/Neptune%27s_Great_Dark_Spot_colorcorrected.jpg",
        imageAlt: "Neptune's Great Dark Spot"
      },
      orbit: {
        text: [
          "Neptune orbits the Sun at a massive average distance of 4.5 billion kilometers (30 AU), completing one revolution every 164.8 Earth years.",
          "It is the only planet in the Solar System found by mathematical prediction rather than empirical observation. French astronomer Urbain Le Verrier predicted its existence to account for unexpected perturbations in the orbit of Uranus.",
          "Neptune has 16 known moons. Its largest moon, Triton, is unique because it orbits in a retrograde direction (opposite to Neptune's rotation), suggesting it is a captured dwarf planet from the Kuiper Belt."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Triton-usgs23-with-frame.jpg",
        imageAlt: "Neptune's moon Triton"
      },
      exploration: {
        text: [
          "Due to its immense distance, Neptune has been visited by only one spacecraft: Voyager 2, which flew past the planet on August 25, 1989.",
          "Voyager 2 provided the first close-up images of Neptune, confirming the existence of its magnetic field, discovering the Great Dark Spot, and observing active geysers erupting nitrogen gas on the frigid surface of Triton.",
          "No future missions are currently en route to Neptune, making the Voyager 2 data the primary source of close-range information we have on the ice giant."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Neptune_Voyager2_color_calibrated.png",
        imageAlt: "Voyager 2 encounter"
      },
      moons: {
        text: [
          "Neptune has 16 known moons, with Triton being by far the largest.",
          "Triton is unique among large moons in the Solar System because it has a retrograde orbit, meaning it orbits in the opposite direction to Neptune's rotation. This suggests it is a captured dwarf planet from the Kuiper Belt.",
          "It is one of the coldest objects in the Solar System and features active geysers erupting nitrogen gas."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Triton-usgs23-with-frame.jpg",
        imageAlt: "Triton"
      }
    },
    gallery: [
    "https://upload.wikimedia.org/wikipedia/commons/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Solar_system.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Solar_System_Template_2.png",
    "https://upload.wikimedia.org/wikipedia/commons/9/94/New_Webb_Images_Capture_Rare_View_of_Neptune%E2%80%99s_Rings_%28Labeled%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/fe/New_Webb_Image_Captures_Clearest_View_of_Neptune%E2%80%99s_Rings_in_Decades.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/85/Neptunlauf_September_Oktober2022.png"
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg",
        imageAlt: "Pluto"
      },
      composition: {
        text: [
          "Pluto is made primarily of ice and rock. It is relatively small—about one-sixth the mass of Earth's Moon and one-third its volume.",
          "Its surface is highly varied, with significant color and albedo differences. The most prominent feature is Sputnik Planitia, a bright, heart-shaped basin filled with convecting nitrogen ice.",
          "Beneath the icy crust, scientists strongly suspect Pluto harbors a subsurface ocean of liquid water, kept from freezing by heat generated from radioactive decay in its rocky core."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Pluto%E2%80%99s_Heart_-_Like_a_Cosmic_Lava_Lamp.jpg",
        imageAlt: "Pluto's Sputnik Planitia"
      },
      orbit: {
        text: [
          "Pluto has a highly eccentric and inclined orbit. During its 248-year journey around the Sun, its distance ranges from 30 to 49 astronomical units (AU).",
          "Because of its eccentric orbit, Pluto periodically comes closer to the Sun than Neptune. The last time this occurred was from 1979 to 1999.",
          "Pluto and its largest moon, Charon, are often considered a binary system because the barycenter of their orbits does not lie within either body. They are tidally locked to each other, always presenting the same face to one another."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Charon_in_True_Color_-_High-Res.jpg",
        imageAlt: "Pluto's moon Charon"
      },
      exploration: {
        text: [
          "Discovered in 1930 by Clyde Tombaugh, Pluto remained a blurry point of light for decades until the arrival of the New Horizons spacecraft.",
          "New Horizons performed a historic flyby of Pluto on July 14, 2015, becoming the first and only spacecraft to explore the Pluto system.",
          "The data beamed back over the following year completely reshaped our understanding of the outer solar system, revealing Pluto as an active, complex world rather than a dead ice ball."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/32/15-011a-NewHorizons-PlutoFlyby-ArtistConcept-14July2015-20150115.jpg",
        imageAlt: "New Horizons probe"
      },
      moons: {
        text: [
          "Pluto has five known moons: Charon, Styx, Nix, Kerberos, and Hydra.",
          "Charon is the largest, being over half the size of Pluto itself. Because of this, Pluto and Charon are often referred to as a binary system.",
          "They are mutually tidally locked, meaning they always present the same face to each other as they orbit a common center of mass outside of Pluto."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Charon_in_True_Color_-_High-Res.jpg",
        imageAlt: "Charon"
      }
    },
    gallery: [
    "https://upload.wikimedia.org/wikipedia/commons/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Solar_system.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Solar_System_Template_2.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/23/Pluto%E2%80%99s_Heart_-_Like_a_Cosmic_Lava_Lamp.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Pluto_in_True_Color_-_High-Res.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg"
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Artists_conception_of_an_asteroid_belt_around_Zeta_Leporis_%28geminiann07001c%29.jpg",
        imageAlt: "Artist's conception of an asteroid belt"
      },
      composition: {
        text: [
          "The asteroid belt is composed mostly of asteroids, ranging in size from the dwarf planet Ceres (about 950 km across) to small rocky and metallic fragments.",
          "These bodies are remnants from the early Solar System that never accreted into a planet, primarily due to the strong gravitational perturbations from Jupiter.",
          "Asteroids are generally classified into three main types based on their composition: C-type (carbonaceous), S-type (silicate), and M-type (metallic)."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Vesta_in_natural_color_%28cropped%29.jpg",
        imageAlt: "Asteroid Vesta"
      },
      orbit: {
        text: [
          "Asteroids in the main belt have slightly elliptical orbits, revolving around the Sun in the same direction as the planets.",
          "Their orbital periods range from about 3 to 6 Earth years. The distribution of asteroids is not uniform; there are regions called Kirkwood gaps where very few asteroids exist, cleared out by orbital resonances with Jupiter.",
          "Occasionally, gravitational interactions or collisions can eject asteroids from the main belt, sending them into the inner solar system as near-Earth objects."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/InnerSolarSystem-en.png",
        imageAlt: "Asteroid belt orbit map"
      },
      exploration: {
        text: [
          "Numerous spacecraft have crossed the asteroid belt on their way to the outer planets, including Pioneers 10 and 11, and the Voyager probes.",
          "Several missions have specifically targeted asteroids. The Dawn spacecraft extensively explored the two largest bodies in the belt, Vesta and Ceres, providing unprecedented details about their geology and composition.",
          "Sample return missions, like Japan's Hayabusa2 and NASA's OSIRIS-REx, have successfully brought asteroid material back to Earth for rigorous laboratory analysis, offering clues to the origins of the Solar System."
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/OSIRIS-REx_spacecraft_model.png",
        imageAlt: "OSIRIS-REx spacecraft"
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
    ]
  }
};
