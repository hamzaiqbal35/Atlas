const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components', 'canvas');
const components = ['Mars.tsx', 'Mercury.tsx', 'Moon.tsx', 'Neptune.tsx', 'Pluto.tsx', 'Uranus.tsx', 'Venus.tsx'];

for (const file of components) {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add import if missing
  if (!content.includes('import { useRouter } from "next/navigation";')) {
    content = content.replace('import * as THREE from "three";', 'import * as THREE from "three";\nimport { useRouter } from "next/navigation";');
  }
  
  // Add router hook and handlers
  if (!content.includes('const router = useRouter();')) {
    const componentName = file.replace('.tsx', '');
    const searchString = `export function ${componentName}() {`;
    
    // We also need to extract the id from the name
    const id = componentName.toLowerCase();
    
    const handlerCode = `
  const router = useRouter();
  
  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };
`;
    content = content.replace(searchString, searchString + handlerCode);
    
    // Replace <mesh with <mesh onClick...
    content = content.replace(/<mesh ref={meshRef}([^>]*)>/g, `<mesh ref={meshRef}$1 onClick={(e) => { e.stopPropagation(); router.push("/body/${id}"); }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>`);
    
    // Moon.tsx doesn't use meshRef exactly like that sometimes, let's just do a generic replace
    if (file === 'Moon.tsx' && !content.includes('router.push')) {
        content = content.replace(/<mesh position/g, `<mesh onClick={(e) => { e.stopPropagation(); router.push("/body/${id}"); }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow position`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
