import { motion } from 'framer-motion';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { Step1Welcome } from './steps/Step1Welcome';
import { Step2Role } from './steps/Step2Role';
import { Step3Experience } from './steps/Step3Experience';
import { Step4Location } from './steps/Step4Location';
import { Step5TargetLocations } from './steps/Step5TargetLocations';
import { Step6Interests } from './steps/Step6Interests';
import { Step7Sponsorship } from './steps/Step7Sponsorship';
import { Step8WorkEnvironment } from './steps/Step8WorkEnvironment';
import { Step9Aggressiveness } from './steps/Step9Aggressiveness';
import { Step10Targets } from './steps/Step10Targets';
import { Step11Review } from './steps/Step11Review';
import { Step12Processing } from './steps/Step12Processing';
import { Step13Auth } from './steps/Step13Auth';
import { ChevronLeft } from 'lucide-react';

const stepsList = [
  Step1Welcome, Step2Role, Step3Experience, Step4Location, Step5TargetLocations,
  Step6Interests, Step7Sponsorship, Step8WorkEnvironment, Step9Aggressiveness, Step10Targets,
  Step11Review, Step12Processing, Step13Auth
];

export function OnboardingWizard() {
  const { step, prevStep } = useOnboardingStore();
  const navigate = useNavigate();
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const totalSteps = 11; // 12 is processing, 13 is auth

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !glowRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      glowRef.current.style.setProperty('--x', `${x}px`);
      glowRef.current.style.setProperty('--y', `${y}px`);
    };

    const el = containerRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Auto-scroll whenever a new step is revealed
  useEffect(() => {
    if (bottomRef.current) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 100);
    }
  }, [step]);

  return (
    <div ref={containerRef} className="h-[100dvh] w-full bg-indigo-50/40 text-brand-dark flex flex-col font-sans overflow-hidden relative group">
      {/* STATIC FALLBACK GRADIENT */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] mix-blend-multiply bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-200 via-[#FDFDFD] to-[#FDFDFD]" />
      
      {/* COLORFUL MOUSE-TRACKING GLOW */}
      <div 
        ref={glowRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply"
        style={{
          background: `radial-gradient(
            1200px circle at var(--x, 50%) var(--y, 50%),
            rgba(124, 58, 237, 0.15) 0%,
            rgba(229, 72, 168, 0.12) 25%,
            rgba(37, 99, 235, 0.10) 50%,
            transparent 90%
          )`
        }}
      />

      {/* Segmented Progress Bar Top Center */}
      {step <= totalSteps && (
        <div className="absolute top-0 left-0 w-full h-1 z-50 flex gap-1 px-1 pt-1">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-indigo-100/50 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#2B83E4] to-[#D949A6]"
                initial={{ width: 0 }}
                animate={{ width: i < step ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Header (Fixed) */}
      <header className="relative z-10 w-full px-6 py-4 flex items-center justify-between shrink-0 bg-indigo-50/40/90 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-3 font-semibold text-[15px] text-brand-dark hover:opacity-80 transition-opacity">
          <img src="/logo-icon.png" alt="Logo" className="h-8 w-auto object-contain mix-blend-multiply shrink-0" />
          <span className="hidden sm:inline bg-gradient-to-r from-[#2B83E4] via-[#7B46D1] to-[#D949A6] text-transparent bg-clip-text font-bold">Job Mail Loop</span>
        </Link>
        
        {step <= totalSteps && (
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-gradient-to-r from-[#2B83E4] to-[#7B46D1] hover:from-[#3B93F4] hover:to-[#8B56E1] shadow-sm hover:shadow-md text-white text-[13px] font-medium px-4 py-2 rounded-lg transition-all duration-300"
            >
              Skip Setup
            </button>
          </div>
        )}
      </header>

      {/* Content Area (Scrollable) */}
      <div className="relative z-10 flex-1 overflow-y-auto px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="w-full max-w-[700px] mx-auto flex flex-col gap-6 sm:gap-8 pt-6 sm:pt-8">
          {stepsList.slice(0, step).map((Component, index) => {
            const isActive = index + 1 === step;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: isActive ? [0.98, 1.02, 1] : 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`w-full py-8 transition-all duration-700 ${!isActive ? 'opacity-50 pointer-events-none scale-[0.98]' : ''}`}
              >
                <Component />
                
                {/* Previous Button inside active step */}
                {isActive && index > 0 && index < totalSteps && (
                  <div className="mt-12 flex justify-center">
                    <button 
                      onClick={prevStep}
                      className="flex items-center gap-2 text-[14px] text-brand-dark/40 hover:text-brand-dark transition-colors font-medium pointer-events-auto"
                    >
                      <ChevronLeft size={18} />
                      Go Back
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
          <div ref={bottomRef} className="h-8 shrink-0" />
        </div>
      </div>
    </div>
  );
}
