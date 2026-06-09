import { useEffect, useState } from 'react';
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
      <div className="flex flex-col items-center mb-12">
        <div className="relative w-32 h-32 flex items-center justify-center mb-6">
          <motion.img
            src="/logo-icon.png"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 object-contain z-10 drop-shadow-md mix-blend-multiply"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-indigo-100 border-t-gray-900 shadow-sm"
          />
        </div>
        <span className="text-3xl font-light text-brand-dark">{progress}%</span>
      </div>

      <div className="h-10 relative w-full overflow-hidden text-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentStep}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 flex items-center justify-center gap-3 text-xl text-gray-700"
          >
            <Check className="text-green-400" /> {steps[currentStep]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}