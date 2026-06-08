const fs = require('fs');
const path = require('path');

const dir = 'src/components/onboarding/steps';
for (let i = 1; i <= 11; i++) {
  const files = fs.readdirSync(dir).filter(f => f.startsWith(`Step${i}`) && !f.includes('Step12') && !f.includes('Step13'));
  if (files.length === 0) continue;
  
  const file = path.join(dir, files[0]);
  let content = fs.readFileSync(file, 'utf8');

  if (!content.includes('AnswerReveal')) {
    content = `import { AnswerReveal } from '@/components/ui/AnswerReveal';\n` + content;
  }

  const lines = content.split('\n');
  let startWrapIndex = -1;
  for (let j = 0; j < lines.length; j++) {
     if (lines[j].includes('<WordReveal')) {
         let k = j + 1;
         while(lines[k] && lines[k].trim() === '') k++;
         if (lines[k] && lines[k].includes('<p')) {
            startWrapIndex = k + 1;
         } else {
            startWrapIndex = j + 1;
         }
         break;
     }
  }

  let endWrapIndex = -1;
  for (let j = lines.length - 1; j >= 0; j--) {
     if (lines[j].includes('</div>')) {
         endWrapIndex = j;
         break;
     }
  }

  if (startWrapIndex !== -1 && endWrapIndex !== -1 && !content.includes('<AnswerReveal>')) {
     lines.splice(endWrapIndex, 0, '      </AnswerReveal>');
     lines.splice(startWrapIndex, 0, '      <AnswerReveal>');
     fs.writeFileSync(file, lines.join('\n'));
     console.log('Wrapped answers in ' + file);
  }
}
