import fs from 'fs';
import path from 'path';
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

const dir = path.join(process.cwd(), 'public', 'images', 'explore');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: { 'User-Agent': 'AtlasApp/1.0 (test@example.com)' }
    };
    https.get(url, options, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, options, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function fetchImages() {
  for (const cat of CATEGORIES) {
    try {
      const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cat.search)}`;
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

      let response;
      try {
        response = JSON.parse(responseText);
      } catch (e) {
        console.error(`Invalid JSON for ${cat.slug}: ${responseText}`);
        await new Promise(r => setTimeout(r, 2000));
        continue;
      }

      if (response && response.thumbnail && response.thumbnail.source) {
        const imageUrl = response.thumbnail.source.replace(/\d+px-/, '800px-');
        const dest = path.join(dir, `${cat.slug}.jpg`);
        // Only download if it doesn't exist
        if (!fs.existsSync(dest)) {
          await downloadImage(imageUrl, dest);
          console.log(`Saved ${cat.slug}.jpg`);
        } else {
          console.log(`Already exists ${cat.slug}.jpg`);
        }
      } else {
        console.log(`No image found for ${cat.search}`);
      }
    } catch (e) {
      console.error(`Error with ${cat.slug}:`, e.message);
    }
    // Respect API rate limit
    await new Promise(r => setTimeout(r, 500));
  }
  console.log('Done!');
}

fetchImages();
