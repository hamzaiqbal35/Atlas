const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components', 'canvas');
const components = [
  'Mars.tsx', 'Mercury.tsx', 'Moon.tsx', 'Neptune.tsx', 
  'Pluto.tsx', 'Uranus.tsx', 'Venus.tsx', 'Earth.tsx', 
  'Sun.tsx', 'Jupiter.tsx', 'Saturn.tsx'
];

for (const file of components) {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove useRouter import
  content = content.replace(/import { useRouter } from "next\/navigation";/g, '');
  
  // Remove router instance
  content = content.replace(/const router = useRouter\(\);/g, '');
  
  // Replace router.push with window.location.href
  content = content.replace(/router\.push\((.*?)\)/g, 'window.location.href = $1');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed routing in ${file}`);
}
