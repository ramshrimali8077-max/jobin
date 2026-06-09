const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Text Replacements
    content = content.replace(/text-gray-900/g, 'text-brand-dark');
    content = content.replace(/text-gray-800/g, 'text-brand-dark/90');
    content = content.replace(/text-gray-600/g, 'text-brand-dark/70');
    content = content.replace(/text-gray-500/g, 'text-brand-dark/60');
    content = content.replace(/text-gray-400/g, 'text-brand-dark/40');

    // 2. Background Replacements
    content = content.replace(/bg-\[\#FDFDFD\]/g, 'bg-indigo-50/40');
    content = content.replace(/bg-\[\#EFEFEF\]/g, 'bg-indigo-50/40');
    content = content.replace(/bg-gray-50/g, 'bg-indigo-50/40');
    content = content.replace(/bg-gray-100/g, 'bg-indigo-100/50');
    content = content.replace(/bg-white/g, 'bg-white/80 backdrop-blur-md');

    // 3. Border Replacements
    content = content.replace(/border-gray-200/g, 'border-indigo-100');
    content = content.replace(/border-gray-300/g, 'border-indigo-200');

    // 4. Primary Button Replacements in Onboarding Steps
    // They usually look like: className="w-full bg-gray-900 text-white ... "
    // or bg-gray-900 hover:bg-gray-800
    content = content.replace(/bg-gray-900/g, 'bg-brand-dark');
    content = content.replace(/hover:bg-gray-800/g, 'hover:bg-brand-dark/90');
    content = content.replace(/hover:bg-gray-700/g, 'hover:bg-brand-dark/80');

    // Specifically for Onboarding Steps "Continue" buttons, replace bg-brand-dark with the vibrant gradient
    if (filePath.includes('steps')) {
      content = content.replace(/w-full bg-brand-dark hover:bg-brand-dark\/90 text-white/g, 'w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white shadow-md hover:shadow-lg transition-all');
      content = content.replace(/w-full flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand-dark\/90 text-white/g, 'w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white shadow-md transition-all');
    }

    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log("Color theme applied successfully!");
