const fs = require('fs');
const path = require('path');

const dir = 'src/components/onboarding/steps';
const files = fs.readdirSync(dir)
  .filter(f => f.startsWith('Step') && f.endsWith('.tsx'))
  .map(f => path.join(dir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('WordReveal')) {
    const importStatement = `import { WordReveal } from '@/components/ui/WordReveal';\n`;
    const lines = content.split('\n');
    let importIndex = 0;
    while(lines[importIndex] && lines[importIndex].startsWith('import ')) {
        importIndex++;
    }
    lines.splice(importIndex, 0, importStatement);
    content = lines.join('\n');
  }

  content = content.replace(/<h2 className="([^"]+)">([\s\S]*?)<\/h2>/g, (match, classes, inner) => {
     const plainText = inner.replace(/<[^>]+>/g, ' ').trim();
     return `<WordReveal className="${classes}" text="${plainText}" />`;
  });

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
}
