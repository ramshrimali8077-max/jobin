const fs = require('fs');
const path = require('path');

const dir = 'src/components/onboarding';
const stepsDir = path.join(dir, 'steps');

fs.mkdirSync(stepsDir, { recursive: true });

const createComponent = (name, content) => {
  fs.writeFileSync(path.join(stepsDir, name + '.tsx'), content);
};

// 1. Welcome
createComponent('Step1Welcome', `import { useOnboardingStore } from '@/store/useOnboardingStore';
import { UploadCloud, Linkedin } from 'lucide-react';

export function Step1Welcome() {
  const { data, updateData, nextStep } = useOnboardingStore();

  return (
    <div className="flex flex-col items-center text-center w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Welcome to Job Mail Loop.</h2>
      <p className="text-xl text-white/70 mb-12">I'm here to automate your job search and help you land more interviews.<br/>Let's start with your background.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl mb-12">
        <button 
          onClick={() => updateData({ resumeUploaded: !data.resumeUploaded })}
          className={\`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all \${data.resumeUploaded ? 'bg-purple-600/20 border-purple-500' : 'bg-white/5 border-white/10 hover:border-white/30'}\`}
        >
          <UploadCloud className="w-10 h-10 mb-4 text-purple-400" />
          <span className="text-lg font-medium text-white">{data.resumeUploaded ? 'Resume Uploaded ✓' : 'Upload Resume'}</span>
        </button>
        <button 
          onClick={() => updateData({ linkedinConnected: !data.linkedinConnected })}
          className={\`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all \${data.linkedinConnected ? 'bg-blue-600/20 border-blue-500' : 'bg-white/5 border-white/10 hover:border-white/30'}\`}
        >
          <Linkedin className="w-10 h-10 mb-4 text-blue-400" />
          <span className="text-lg font-medium text-white">{data.linkedinConnected ? 'LinkedIn Connected ✓' : 'Connect LinkedIn'}</span>
        </button>
      </div>

      <button 
        onClick={nextStep}
        className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-medium transition-all"
      >
        Next Step
      </button>
    </div>
  );
}`);

// 2. Role
createComponent('Step2Role', `import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useState } from 'react';

const examples = ['Software Engineer', 'Frontend Engineer', 'Backend Engineer', 'Full Stack Engineer', 'Data Scientist', 'AI Engineer', 'Product Manager'];

export function Step2Role() {
  const { data, updateData, nextStep } = useOnboardingStore();
  const [val, setVal] = useState(data.role);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (val.trim()) {
      updateData({ role: val });
      nextStep();
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Tell me about yourself.</h2>
      <p className="text-xl text-white/70 mb-10 text-center">What role are you targeting?</p>

      <form onSubmit={handleSubmit} className="w-full mb-8">
        <input 
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="e.g. Frontend Engineer"
          className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-center placeholder:text-white/30"
          autoFocus
        />
      </form>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {examples.map(ex => (
          <button
            key={ex}
            onClick={() => { setVal(ex); updateData({ role: ex }); nextStep(); }}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all text-sm"
          >
            {ex}
          </button>
        ))}
      </div>

      <button 
        onClick={() => handleSubmit()}
        disabled={!val.trim()}
        className="px-8 py-4 bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white rounded-full font-medium transition-all"
      >
        Next Step
      </button>
    </div>
  );
}`);

// 3. Experience
createComponent('Step3Experience', `import { useOnboardingStore } from '@/store/useOnboardingStore';

const options = ['0–1 Years', '2–4 Years', '5–8 Years', '8+ Years'];

export function Step3Experience() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    updateData({ experience: opt });
    nextStep();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How many years of experience do you have?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={\`p-6 rounded-2xl border text-xl font-medium transition-all \${data.experience === opt ? 'bg-purple-600/20 border-purple-500 text-white' : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'}\`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}`);

// 4. Location
createComponent('Step4Location', `import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useState } from 'react';

export function Step4Location() {
  const { data, updateData, nextStep } = useOnboardingStore();
  const [city, setCity] = useState(data.locationCity);
  const [country, setCountry] = useState(data.locationCountry);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (city.trim() && country.trim()) {
      updateData({ locationCity: city, locationCountry: country });
      nextStep();
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Where are you located?</h2>

      <form onSubmit={handleSubmit} className="w-full space-y-4 mb-10">
        <input 
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/30"
          autoFocus
        />
        <input 
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/30"
        />
      </form>

      <button 
        onClick={() => handleSubmit()}
        disabled={!city.trim() || !country.trim()}
        className="px-8 py-4 bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white rounded-full font-medium transition-all"
      >
        Next Step
      </button>
    </div>
  );
}`);

// 5. Target Work Locations
createComponent('Step5TargetLocations', `import { useOnboardingStore } from '@/store/useOnboardingStore';

const options = ['Remote', 'United States', 'Canada', 'Europe', 'United Kingdom', 'India', 'Anywhere'];

export function Step5TargetLocations() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    let arr = [...data.targetLocations];
    if (opt === 'Anywhere') {
      arr = ['Anywhere'];
    } else {
      arr = arr.filter(x => x !== 'Anywhere');
      if (arr.includes(opt)) {
        arr = arr.filter(x => x !== opt);
      } else {
        arr.push(opt);
      }
    }
    updateData({ targetLocations: arr });
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Where would you like to work?</h2>

      <div className="flex flex-wrap justify-center gap-4 w-full mb-10">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={\`px-6 py-4 rounded-2xl border text-lg font-medium transition-all \${data.targetLocations.includes(opt) ? 'bg-purple-600/20 border-purple-500 text-white' : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'}\`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button 
        onClick={nextStep}
        disabled={data.targetLocations.length === 0}
        className="px-8 py-4 bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white rounded-full font-medium transition-all"
      >
        Next Step
      </button>
    </div>
  );
}`);

// 6. Opportunities
createComponent('Step6Interests', `import { useOnboardingStore } from '@/store/useOnboardingStore';

const options = ['Startups', 'Growth Companies', 'Enterprise', 'FAANG', 'Remote First', 'Consulting'];

export function Step6Interests() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    let arr = [...data.companyTypes];
    if (arr.includes(opt)) {
      arr = arr.filter(x => x !== opt);
    } else {
      arr.push(opt);
    }
    updateData({ companyTypes: arr });
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">What type of opportunities interest you?</h2>

      <div className="grid grid-cols-2 gap-4 w-full mb-10">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={\`p-5 rounded-2xl border text-lg font-medium transition-all \${data.companyTypes.includes(opt) ? 'bg-purple-600/20 border-purple-500 text-white' : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'}\`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button 
        onClick={nextStep}
        disabled={data.companyTypes.length === 0}
        className="px-8 py-4 bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white rounded-full font-medium transition-all"
      >
        Next Step
      </button>
    </div>
  );
}`);

// 7. Sponsorship
createComponent('Step7Sponsorship', `import { useOnboardingStore } from '@/store/useOnboardingStore';

const options = ['Yes', 'No', 'Maybe'];

export function Step7Sponsorship() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    updateData({ sponsorship: opt });
    nextStep();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Do you need sponsorship?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={\`p-6 rounded-2xl border text-xl font-medium transition-all \${data.sponsorship === opt ? 'bg-purple-600/20 border-purple-500 text-white' : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'}\`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}`);

// 8. Work Environment
createComponent('Step8WorkEnvironment', `import { useOnboardingStore } from '@/store/useOnboardingStore';

const options = ['Remote', 'Hybrid', 'Onsite', 'Flexible'];

export function Step8WorkEnvironment() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    updateData({ workEnvironment: opt });
    nextStep();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What kind of work environment do you prefer?</h2>

      <div className="grid grid-cols-2 gap-4 w-full">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={\`p-6 rounded-2xl border text-xl font-medium transition-all \${data.workEnvironment === opt ? 'bg-purple-600/20 border-purple-500 text-white' : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'}\`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}`);

// 9. Aggressiveness
createComponent('Step9Aggressiveness', `import { useOnboardingStore } from '@/store/useOnboardingStore';

const options = [
  '10 emails per week', 
  '25 emails per week', 
  '50 emails per week', 
  '100 emails per week'
];

export function Step9Aggressiveness() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    updateData({ aggressiveness: opt });
    nextStep();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How aggressively should Job Mail Loop reach out?</h2>

      <div className="flex flex-col gap-4 w-full">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={\`p-5 rounded-2xl border text-xl font-medium transition-all text-center \${data.aggressiveness === opt ? 'bg-purple-600/20 border-purple-500 text-white' : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'}\`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}`);

// 10. Targets
createComponent('Step10Targets', `import { useOnboardingStore } from '@/store/useOnboardingStore';

const options = ['Recruiters', 'Hiring Managers', 'Founders', 'Engineering Managers', 'HR Teams', 'All'];

export function Step10Targets() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    let arr = [...data.contactTargets];
    if (opt === 'All') {
      arr = ['All'];
    } else {
      arr = arr.filter(x => x !== 'All');
      if (arr.includes(opt)) {
        arr = arr.filter(x => x !== opt);
      } else {
        arr.push(opt);
      }
    }
    updateData({ contactTargets: arr });
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Who should Auto Agent contact?</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mb-10">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={\`p-5 rounded-2xl border text-lg font-medium transition-all \${data.contactTargets.includes(opt) ? 'bg-purple-600/20 border-purple-500 text-white' : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'}\`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button 
        onClick={nextStep}
        disabled={data.contactTargets.length === 0}
        className="px-8 py-4 bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white rounded-full font-medium transition-all"
      >
        Next Step
      </button>
    </div>
  );
}`);

// 11. Review
createComponent('Step11Review', `import { useOnboardingStore } from '@/store/useOnboardingStore';
import { Check } from 'lucide-react';

export function Step11Review() {
  const { data, nextStep } = useOnboardingStore();

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Review Profile</h2>

      <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5 mb-10">
        <div className="flex items-center justify-between">
          <span className="text-white/60">Resume</span>
          <span className="text-white font-medium flex items-center gap-2">{data.resumeUploaded ? <><Check size={16} className="text-green-400"/> Uploaded</> : 'Not uploaded'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/60">LinkedIn</span>
          <span className="text-white font-medium flex items-center gap-2">{data.linkedinConnected ? <><Check size={16} className="text-green-400"/> Connected</> : 'Not connected'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/60">Role</span>
          <span className="text-white font-medium flex items-center gap-2"><Check size={16} className="text-green-400"/> {data.role}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/60">Experience</span>
          <span className="text-white font-medium flex items-center gap-2"><Check size={16} className="text-green-400"/> {data.experience}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/60">Locations</span>
          <span className="text-white font-medium flex items-center gap-2"><Check size={16} className="text-green-400"/> {data.targetLocations.length} selected</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/60">Preferences</span>
          <span className="text-white font-medium flex items-center gap-2"><Check size={16} className="text-green-400"/> {data.workEnvironment}</span>
        </div>
      </div>

      <button 
        onClick={nextStep}
        className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
      >
        Build My Job Search Engine
      </button>
    </div>
  );
}`);

// 12. Processing
createComponent('Step12Processing', `import { useEffect, useState } from 'react';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  "Reading Resume",
  "Extracting Skills",
  "Building Candidate Profile",
  "Understanding Career Goals",
  "Generating Outreach Strategy",
  "Creating Personalized Templates",
  "Configuring Auto Agent",
  "Configuring Outreach Hub",
  "Configuring Reply Scanner",
  "Preparing Resume Manager",
  "Building Dashboard",
  "Finalizing Workspace"
];

export function Step12Processing() {
  const { nextStep } = useOnboardingStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalTime = 5000;
    const intervalTime = totalTime / steps.length;
    
    const textInterval = setInterval(() => {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }, intervalTime);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2; // reaches 100% in 50 steps (100ms * 50 = 5000ms)
      });
    }, 100);

    const timeout = setTimeout(() => {
      nextStep();
    }, totalTime + 500);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [nextStep]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh]">
      <div className="relative mb-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-40 h-40 rounded-full border-4 border-white/5 border-t-purple-500 border-r-blue-500"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-4xl font-light text-white">{progress}%</span>
        </div>
      </div>

      <div className="h-10 relative w-full overflow-hidden text-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentStep}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 flex items-center justify-center gap-3 text-xl text-white/80"
          >
            <Check className="text-green-400" /> {steps[currentStep]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}`);

// 13. Auth
createComponent('Step13Auth', `import { useAuth } from '@/context/AuthContext';
import { useOnboardingStore } from '@/store/useOnboardingStore';

export function Step13Auth() {
  const { loginWithGoogle } = useAuth();
  const { closeOnboarding } = useOnboardingStore();

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      // On success, redirect to dashboard
      window.location.href = 'https://app.jobmailloop.com/dashboard';
    } catch (e) {
      console.error(e);
      // Wait, just in case auth fails, do not block entirely
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] text-center">
      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Your workspace is ready.</h2>
      <p className="text-xl text-white/60 mb-12">Connect Google to continue.</p>
      
      <button 
        onClick={handleLogin}
        className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-100 transition shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      >
        <img src="https://www.google.com/favicon.ico" alt="Google" width="20" height="20" />
        Continue with Google
      </button>
    </div>
  );
}`);
