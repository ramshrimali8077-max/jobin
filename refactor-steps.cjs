const fs = require('fs');
const path = require('path');
const dir = 'src/components/onboarding/steps';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
  ['className="w-full bg-white text-black py-4 rounded-xl font-medium hover:bg-gray-200 transition"', 'className="group w-full bg-gray-900 text-white text-[15px] font-medium rounded-full py-4 flex items-center justify-center transition-colors duration-300"'],
  ['className="w-full bg-white text-black py-4 rounded-xl font-medium hover:bg-gray-200 transition disabled:opacity-50"', 'className="group w-full bg-gray-900 text-white text-[15px] font-medium rounded-full py-4 flex items-center justify-center transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"'],
  
  // Text elements
  ['text-3xl font-bold mb-4', 'text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[-0.03em] mb-4 text-gray-900'],
  ['text-2xl font-bold mb-4', 'text-[clamp(1.5rem,4vw,2rem)] font-medium tracking-[-0.03em] mb-4 text-gray-900'],
  ['text-white/60 text-lg mb-8', 'text-gray-500 text-[16px] mb-8'],
  ['text-white/60 mb-8', 'text-gray-500 mb-8'],
  ['text-white/60', 'text-gray-500'],
  ['text-white/40', 'text-gray-400'],
  ['text-white/80', 'text-gray-700'],
  ['text-white', 'text-gray-900'],
  
  // Backgrounds and borders
  ['bg-white/5', 'bg-white'],
  ['bg-white/10', 'bg-gray-100'],
  ['border-white/10', 'border-gray-200'],
  ['hover:bg-white/10', 'hover:bg-gray-50'],
  ['border-white', 'border-gray-900'],
  
  // Fix specific text that shouldn't be gray-900
  ['bg-gray-900 text-gray-900', 'bg-gray-900 text-white'],
  
  // Secondary buttons
  ['border border-gray-200 py-3 rounded-xl hover:bg-gray-100 transition', 'border border-gray-300 py-3 rounded-full text-[14px] font-medium hover:bg-gray-50 transition-colors text-gray-900'],

  // Option cards
  ['p-4 rounded-xl border transition-all text-left ', 'p-5 rounded-2xl border transition-all text-left '],
  ['p-4 rounded-xl border ', 'p-5 rounded-2xl border '],

  // Progress UI (Step 12 Processing)
  ['bg-black', 'bg-[#FDFDFD]'],
  ['placeholder-white/30', 'placeholder-gray-400'],
  ['focus:border-white', 'focus:border-gray-900']
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  replacements.forEach(([find, repl]) => {
    // Escape string for regex
    const regex = new RegExp(find.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&'), 'g');
    content = content.replace(regex, repl);
  });
  
  // Manual fix for Continue buttons text to add the text-roll effect
  content = content.replace(
    />\s*Continue\s*<\/button>/g,
    `>
      <div className="overflow-hidden h-[24px] flex flex-col justify-start">
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Continue</span>
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Continue</span>
      </div>
    </button>`
  );

  content = content.replace(
    />\s*Get Started\s*<\/button>/g,
    `>
      <div className="overflow-hidden h-[24px] flex flex-col justify-start">
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Get Started</span>
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Get Started</span>
      </div>
    </button>`
  );
  
  content = content.replace(
    />\s*Next Step\s*<\/button>/g,
    `>
      <div className="overflow-hidden h-[24px] flex flex-col justify-start">
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Next Step</span>
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Next Step</span>
      </div>
    </button>`
  );

  fs.writeFileSync(filePath, content);
});

console.log('Successfully refactored all 13 step files');
