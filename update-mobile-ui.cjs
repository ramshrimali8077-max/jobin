const fs = require('fs');
const path = require('path');

const stepsDir = path.join(__dirname, 'src', 'components', 'onboarding', 'steps');

function updateMobileUI() {
  const files = fs.readdirSync(stepsDir).filter(f => f.startsWith('Step') && f.endsWith('.tsx'));
  
  for (const file of files) {
    const filePath = path.join(stepsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Update WordReveal headings
    content = content.replace(
      /className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"/g,
      'className="text-[26px] leading-[1.2] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-12 text-center tracking-tight"'
    );
    
    content = content.replace(
      /className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"/g,
      'className="text-[26px] leading-[1.2] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center tracking-tight"'
    );

    // 2. Update the buttons to be more mobile-friendly and tactile
    // Standard option buttons (e.g., Step3, Step4)
    content = content.replace(
      /className={`p-6 rounded-2xl border text-xl font-medium transition-all/g,
      'className={`w-full p-4 sm:p-6 rounded-2xl border text-[17px] sm:text-xl font-medium transition-all duration-200 active:scale-[0.98]'
    );
    
    // Update generic p-6 rounded-2xl buttons
    content = content.replace(
      /p-6 rounded-2xl border text-xl font-medium transition-all/g,
      'w-full p-4 sm:p-6 rounded-2xl border text-[17px] sm:text-xl font-medium transition-all duration-200 active:scale-[0.98]'
    );

    // Step 2 specifically has p-6 rounded-xl text-lg
    content = content.replace(
      /p-6 rounded-xl border-2 text-left transition-all/g,
      'p-4 sm:p-6 rounded-xl border-2 text-left transition-all duration-200 active:scale-[0.98]'
    );
    
    // Any remaining p-6 inside standard buttons
    content = content.replace(
      /className={`p-6 /g,
      'className={`p-4 sm:p-6 active:scale-[0.98] '
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated mobile UI in ${file}`);
  }
}

updateMobileUI();
