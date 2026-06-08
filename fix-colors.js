import fs from 'fs';
import path from 'path';

const stepsDir = path.join(process.cwd(), 'src/components/onboarding/steps');

const replacements = [
  { regex: /bg-purple-600\/20/g, replacement: 'bg-white/10' },
  { regex: /border-purple-500/g, replacement: 'border-white/50' },
  { regex: /text-purple-400/g, replacement: 'text-white' },
  { regex: /bg-blue-600\/20/g, replacement: 'bg-white/10' },
  { regex: /border-blue-500/g, replacement: 'border-white/50' },
  { regex: /text-blue-400/g, replacement: 'text-white' },
  { regex: /text-blue-500/g, replacement: 'text-white' },
  { regex: /bg-purple-600/g, replacement: 'bg-white text-black' }, // For buttons
  { regex: /text-purple-500/g, replacement: 'text-white' },
  { regex: /text-purple-600/g, replacement: 'text-white' },
  { regex: /bg-purple-500/g, replacement: 'bg-white text-black' },
  // specific to buttons:
  { regex: /bg-blue-600/g, replacement: 'bg-white text-black' },
  { regex: /border-purple-600/g, replacement: 'border-white/50' },
  { regex: /border-blue-600/g, replacement: 'border-white/50' },
  // If there's a white text and white bg conflict it might be an issue, but we'll see
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let original = content;
      
      // We also need to fix bg-white text-black text-white clash
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDirectory(stepsDir);
console.log('Done.');
