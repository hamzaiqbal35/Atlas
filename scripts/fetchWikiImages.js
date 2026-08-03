const fs = require('fs');
const https = require('https');

const dataFile = 'd:/Atlas/src/data/detailedEncyclopedia.ts';
let content = fs.readFileSync(dataFile, 'utf8');

const bodies = [
  { id: 'sun', wiki: 'Sun' },
  { id: 'mercury', wiki: 'Mercury_(planet)' },
  { id: 'venus', wiki: 'Venus' },
  { id: 'earth', wiki: 'Earth' },
  { id: 'mars', wiki: 'Mars' },
  { id: 'jupiter', wiki: 'Jupiter' },
  { id: 'saturn', wiki: 'Saturn' },
  { id: 'uranus', wiki: 'Uranus' },
  { id: 'neptune', wiki: 'Neptune' },
  { id: 'pluto', wiki: 'Pluto' },
  { id: 'moon', wiki: 'Moon' },
  { id: 'asteroid-belt', wiki: 'Asteroid_belt' }
];

async function getWikiImages(title) {
  return new Promise((resolve) => {
    const url = 'https://en.wikipedia.org/w/api.php?action=query&generator=images&titles=' + title + '&gimlimit=50&prop=imageinfo&iiprop=url&format=json';
    https.get(url, { headers: { 'User-Agent': 'AtlasApp/1.0' } }, (res) => {
      let raw = '';
      res.on('data', d => raw += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(raw);
          const pages = json.query?.pages || {};
          const urls = Object.values(pages)
            .map(p => p.imageinfo?.[0]?.url)
            .filter(url => url && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png')))
            .filter(url => !url.toLowerCase().includes('icon') && !url.toLowerCase().includes('logo') && !url.toLowerCase().includes('symbol'));
          
          // Sort or randomize slightly to get interesting ones first
          resolve(urls.reverse());
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  for (const body of bodies) {
    console.log('Fetching images for ' + body.wiki);
    const images = await getWikiImages(body.wiki);
    if (images.length >= 5) {
      console.log('Found ' + images.length + ' images for ' + body.id);
      
      const bodyRegex = new RegExp(`id:\\s*['"\`]${body.id}['"\`][\\s\\S]*?(?=id:\\s*['"\`]|export const)`, 'g');
      
      content = content.replace(bodyRegex, (match) => {
        let imgIdx = 0;
        let replacedMatch = match.replace(/imageUrl:\s*['"`][^'"`]+['"`]/g, () => {
          const url = images[imgIdx % images.length];
          imgIdx++;
          return `imageUrl: "${url}"`;
        });
        
        replacedMatch = replacedMatch.replace(/gallery:\s*\[([^\]]*)\]/, (gMatch) => {
          const galleryUrls = images.slice(0, 6).map(u => `\n    "${u}"`).join(',');
          return `gallery: [${galleryUrls}\n  ]`;
        });
        
        return replacedMatch;
      });
    } else {
      console.log('Not enough images for ' + body.wiki + ' (found ' + images.length + ')');
    }
  }
  fs.writeFileSync(dataFile, content);
  console.log('Done mapping images!');
}

run();
