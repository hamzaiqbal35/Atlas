import fs from 'fs';
import https from 'https';

const CATEGORIES = [
  { slug: 'the-universe', search: 'Universe' },
  { slug: 'space-time', search: 'Spacetime' },
  { slug: 'fundamental-physics', search: 'Physics' },
  { slug: 'matter', search: 'Matter' },
  { slug: 'elementary-particles', search: 'Particles' },
  { slug: 'atoms-chemistry', search: 'Chemistry' },
  { slug: 'cosmology', search: 'Cosmology' },
  { slug: 'galaxies', search: 'Galaxy' },
  { slug: 'galaxy-groups', search: 'Galaxy cluster' },
  { slug: 'active-galaxies', search: 'Active galaxy' },
  { slug: 'stars', search: 'Stars' },
  { slug: 'stellar-evolution', search: 'Stellar evolution' },
  { slug: 'exoplanets', search: 'Exoplanet' },
  { slug: 'planetary-systems', search: 'Planetary system' },
  { slug: 'interstellar-medium', search: 'Interstellar' },
  { slug: 'black-holes', search: 'Black hole' },
  { slug: 'neutron-stars', search: 'Neutron star' },
  { slug: 'solar-system', search: 'Solar System' },
  { slug: 'sun', search: 'Sun' },
  { slug: 'terrestrial-planets', search: 'Mars' },
  { slug: 'gas-giants', search: 'Jupiter' },
  { slug: 'ice-giants', search: 'Neptune' },
  { slug: 'dwarf-planets', search: 'Pluto' },
  { slug: 'moons', search: 'Moon' },
  { slug: 'asteroids-comets', search: 'Asteroid' },
  { slug: 'space-exploration', search: 'Space exploration' },
  { slug: 'telescopes', search: 'Telescope' },
  { slug: 'observatories', search: 'Observatory' },
  { slug: 'space-probes', search: 'Probe' },
  { slug: 'human-spaceflight', search: 'Astronaut' },
  { slug: 'space-stations', search: 'Space station' },
  { slug: 'space-agencies', search: 'NASA' },
  { slug: 'astronautics', search: 'Astronautics' },
  { slug: 'orbital-mechanics', search: 'Orbit' },
  { slug: 'rocket-science', search: 'Rocket' },
  { slug: 'spacecraft', search: 'Spacecraft' },
  { slug: 'satellites', search: 'Satellite' },
  { slug: 'space-industry', search: 'Space industry' },
  { slug: 'future-technologies', search: 'Future space' },
  { slug: 'unsolved-mysteries', search: 'Mystery space' }
];

async function fetchUrls() {
  const imageMap = {};

  for (const cat of CATEGORIES) {
    try {
      const apiUrl = `https://images-api.nasa.gov/search?q=${encodeURIComponent(cat.search)}&media_type=image`;
      console.log(`Fetching ${cat.slug}...`);
      
      const responseText = await new Promise((resolve, reject) => {
        https.get(apiUrl, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(data));
        }).on('error', reject);
      });

      const response = JSON.parse(responseText);
      const items = response.collection?.items;
      if (items && items.length > 0) {
        // Find an item with a valid href
        let imageUrl = null;
        for (const item of items) {
          if (item.links && item.links.length > 0) {
            imageUrl = item.links[0].href;
            // Prefer smaller sizes if possible, but the default href is usually a thumb
            break;
          }
        }
        
        if (imageUrl) {
          imageMap[cat.slug] = imageUrl;
          console.log(`Found image for ${cat.slug}`);
        } else {
          console.log(`No image link found for ${cat.search}`);
          imageMap[cat.slug] = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000";
        }
      } else {
        console.log(`No items found for ${cat.search}`);
        imageMap[cat.slug] = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000";
      }
    } catch (e) {
      console.error(`Error with ${cat.slug}:`, e.message);
      imageMap[cat.slug] = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000";
    }
  }
  
  fs.writeFileSync('nasa_images.json', JSON.stringify(imageMap, null, 2));
  console.log('Done! Wrote to nasa_images.json');
}

fetchUrls();
