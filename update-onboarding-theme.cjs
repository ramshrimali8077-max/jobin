const fs = require('fs');
const path = require('path');

const stepsDir = path.join(__dirname, 'src', 'components', 'onboarding', 'steps');

function updateTheme() {
  const files = fs.readdirSync(stepsDir).filter(f => f.startsWith('Step') && f.endsWith('.tsx'));
  
  for (const file of files) {
    const filePath = path.join(stepsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Text colors
    content = content.replace(/text-gray-900/g, 'text-white');
    content = content.replace(/text-gray-700/g, 'text-gray-300');
    content = content.replace(/text-gray-500/g, 'text-gray-400');
    content = content.replace(/text-black/g, 'text-primary');

    // Backgrounds and borders for selection buttons
    content = content.replace(/bg-white border-gray-200/g, 'glass-button');
    content = content.replace(/bg-gray-100 border-white\/50/g, 'bg-white/10 border-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.3)]');
    
    // We already replaced text-gray-900 to text-white, so we need to fix the specific border replacements
    content = content.replace(/border-white\/30/g, 'border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]');
    content = content.replace(/border-white\/50/g, 'border-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.3)]');
    content = content.replace(/bg-gray-100/g, 'bg-white/10');

    // Update primary action buttons (Continue Setup, Next Step)
    // Previously we set them to bg-gray-900 text-white. Now they became bg-white text-white. We need to fix that.
    content = content.replace(/bg-white text-white hover:bg-gray-800/g, 'bg-white text-primary hover:bg-gray-200');
    
    // Step 1 specific
    content = content.replace(/bg-white border-white\/20/g, 'glass-button');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated theme in ${file}`);
  }
}

updateTheme();
