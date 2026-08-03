import fs from 'fs';
import https from 'https';

async function fetchUrls() {
  const { CATEGORIES } = await import('../src/lib/categories.ts');
  const imageMap = {};

  for (const cat of CATEGORIES) {
    try {
      // Create a better search query out of the title
      let searchQuery = cat.title.replace('&', '').replace(' ', '%20');
      
      const apiUrl = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`;
      console.log(`Fetching ${cat.slug} with query ${searchQuery}...`);
      
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
        let imageUrl = null;
        for (const item of items) {
          if (item.links && item.links.length > 0) {
            imageUrl = item.links[0].href;
            break;
          }
        }
        
        if (imageUrl) {
          imageMap[cat.slug] = imageUrl;
          console.log(`Found image for ${cat.slug}`);
        } else {
          console.log(`No image link found for ${cat.title}`);
        }
      } else {
        console.log(`No items found for ${cat.title}`);
      }
    } catch (e) {
      console.error(`Error with ${cat.slug}:`, e.message);
    }
  }
  
  // Also provide distinct fallback images for the ones NASA misses
  const fallbacks = [
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000",
    "https://images.unsplash.com/photo-1446776811953-b23d5734c106?q=80&w=1000",
    "https://images.unsplash.com/photo-1465101162946-437f855efb65?q=80&w=1000",
    "https://images.unsplash.com/photo-1543722530-d2c3119def22?q=80&w=1000",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000",
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1000",
    "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000",
    "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?q=80&w=1000",
    "https://images.unsplash.com/photo-1445905595283-214c6282114b?q=80&w=1000",
  ];
  let fallbackIndex = 0;

  for (const cat of CATEGORIES) {
    if (!imageMap[cat.slug]) {
       imageMap[cat.slug] = fallbacks[fallbackIndex % fallbacks.length];
       fallbackIndex++;
    }
  }
  
  fs.writeFileSync('./src/lib/nasa_images.json', JSON.stringify(imageMap, null, 2));
  console.log('Done! Wrote to src/lib/nasa_images.json');
}

fetchUrls();
