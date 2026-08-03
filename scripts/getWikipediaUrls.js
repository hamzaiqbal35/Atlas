import fs from 'fs';
import https from 'https';

const CATEGORIES = [
  { slug: 'the-universe', search: 'Universe' },
  { slug: 'space-time', search: 'Spacetime' },
  { slug: 'fundamental-physics', search: 'Physics' },
  { slug: 'matter', search: 'Matter' },
  { slug: 'elementary-particles', search: 'Elementary_particle' },
  { slug: 'atoms-chemistry', search: 'Chemistry' },
  { slug: 'cosmology', search: 'Physical_cosmology' },
  { slug: 'galaxies', search: 'Galaxy' },
  { slug: 'galaxy-groups', search: 'Galaxy_groups_and_clusters' },
  { slug: 'active-galaxies', search: 'Active_galactic_nucleus' },
  { slug: 'stars', search: 'Star' },
  { slug: 'stellar-evolution', search: 'Stellar_evolution' },
  { slug: 'exoplanets', search: 'Exoplanet' },
  { slug: 'planetary-systems', search: 'Planetary_system' },
  { slug: 'interstellar-medium', search: 'Interstellar_medium' },
  { slug: 'black-holes', search: 'Black_hole' },
  { slug: 'neutron-stars', search: 'Neutron_star' },
  { slug: 'solar-system', search: 'Solar_System' },
  { slug: 'sun', search: 'Sun' },
  { slug: 'terrestrial-planets', search: 'Terrestrial_planet' },
  { slug: 'gas-giants', search: 'Gas_giant' },
  { slug: 'ice-giants', search: 'Ice_giant' },
  { slug: 'dwarf-planets', search: 'Dwarf_planet' },
  { slug: 'moons', search: 'Natural_satellite' },
  { slug: 'asteroids-comets', search: 'Asteroid' },
  { slug: 'space-exploration', search: 'Space_exploration' },
  { slug: 'telescopes', search: 'Telescope' },
  { slug: 'observatories', search: 'Observatory' },
  { slug: 'space-probes', search: 'Space_probe' },
  { slug: 'human-spaceflight', search: 'Human_spaceflight' },
  { slug: 'space-stations', search: 'Space_station' },
  { slug: 'space-agencies', search: 'List_of_government_space_agencies' },
  { slug: 'astronautics', search: 'Astronautics' },
  { slug: 'orbital-mechanics', search: 'Orbital_mechanics' },
  { slug: 'rocket-science', search: 'Rocket' },
  { slug: 'spacecraft', search: 'Spacecraft' },
  { slug: 'satellites', search: 'Satellite' },
  { slug: 'space-industry', search: 'Space_industry' },
  { slug: 'future-technologies', search: 'Space_colonization' },
  { slug: 'unsolved-mysteries', search: 'List_of_unsolved_problems_in_physics' }
];

async function fetchUrls() {
  const imageMap = {};

  for (const cat of CATEGORIES) {
    try {
      const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(cat.search)}&prop=pageimages&format=json&pithumbsize=800`;
      console.log(`Fetching ${cat.slug}...`);
      
      const responseText = await new Promise((resolve, reject) => {
        https.get(apiUrl, {
          headers: { 'User-Agent': 'AtlasApp/1.0 (test@example.com)' }
        }, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(data));
        }).on('error', reject);
      });

      const response = JSON.parse(responseText);
      const pages = response.query?.pages;
      if (pages) {
        const page = Object.values(pages)[0];
        if (page.thumbnail && page.thumbnail.source) {
          imageMap[cat.slug] = page.thumbnail.source;
          console.log(`Found image for ${cat.slug}`);
        } else {
          console.log(`No image found for ${cat.search}`);
          // Fallback generic space image
          imageMap[cat.slug] = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000";
        }
      }
    } catch (e) {
      console.error(`Error with ${cat.slug}:`, e.message);
    }
    // Sleep 1000ms to avoid rate limit
    await new Promise(r => setTimeout(r, 1000));
  }
  
  fs.writeFileSync('wikipedia_images.json', JSON.stringify(imageMap, null, 2));
  console.log('Done! Wrote to wikipedia_images.json');
}

fetchUrls();
