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
    <div ref={containerRef} className="h-[100dvh] w-full bg-background text-white flex flex-col font-sans overflow-hidden relative group">
      {/* NOISE TEXTURE */}
      <div className="absolute inset-0 z-0 noise-bg mix-blend-overlay pointer-events-none opacity-30"></div>
      
      {/* COLORFUL MOUSE-TRACKING GLOW */}
      <div 
        ref={glowRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen"
        style={{
          background: `radial-gradient(
            800px circle at var(--x, 50%) var(--y, 50%),
            rgba(59, 130, 246, 0.15) 0%,
            rgba(139, 92, 246, 0.1) 25%,
            transparent 70%
          )`
        }}
      />

      {/* Segmented Progress Bar Top Center */}
      {step <= totalSteps && (
        <div className="absolute top-0 left-0 w-full h-1 z-50 flex gap-1 px-1 pt-1">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                initial={{ width: 0 }}
                animate={{ width: i < step ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Header (Fixed) */}
      <header className="relative z-10 w-full px-6 py-4 flex items-center justify-between shrink-0 glass-panel border-x-0 border-t-0 rounded-none shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <Link to="/" className="flex items-center gap-3 font-semibold text-[15px] text-white hover:opacity-80 transition-opacity group/logo">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover/logo:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all">
            <span className="text-white text-[10px] font-bold tracking-tight">JM</span>
          </div>
          <span className="hidden sm:inline tracking-tight">Job Mail Loop</span>
        </Link>
        
        {step <= totalSteps && (
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[13px] font-medium px-4 py-2 rounded-full transition-all duration-300"
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
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className={`w-full py-8 transition-all duration-700 relative ${!isActive ? 'opacity-30 pointer-events-none scale-[0.98] blur-[2px]' : 'glass-panel p-6 sm:p-10 spotlight-border mt-4'}`}
              >
                {isActive && <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent rounded-3xl pointer-events-none" />}
                <div className="relative z-10">
                  <Component />
                </div>
                
                {/* Previous Button inside active step */}
                {isActive && index > 0 && index < totalSteps && (
                  <div className="mt-12 flex justify-center relative z-10">
                    <button 
                      onClick={prevStep}
                      className="flex items-center gap-2 text-[14px] text-gray-400 hover:text-white transition-colors font-medium pointer-events-auto"
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
