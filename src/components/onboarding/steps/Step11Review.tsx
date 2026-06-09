import { AnswerReveal } from '@/components/ui/AnswerReveal';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { Check } from 'lucide-react';
import { WordReveal } from '@/components/ui/WordReveal';


export function Step11Review() {
  const { data, nextStep } = useOnboardingStore();

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto">
      <WordReveal className="text-[26px] leading-[1.2] sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center tracking-tight" text="Review Profile" />
      <AnswerReveal>

      <div className="w-full bg-white border border-gray-200 rounded-3xl p-8 space-y-5 mb-10">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Resume</span>
          <span className="text-white font-medium flex items-center gap-2">{data.resumeUploaded ? <><Check size={16} className="text-green-400"/> Uploaded</> : 'Not uploaded'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">LinkedIn</span>
          <span className="text-white font-medium flex items-center gap-2">{data.linkedinConnected ? <><Check size={16} className="text-green-400"/> Connected</> : 'Not connected'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Role</span>
          <span className="text-white font-medium flex items-center gap-2"><Check size={16} className="text-green-400"/> {data.role}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Experience</span>
          <span className="text-white font-medium flex items-center gap-2"><Check size={16} className="text-green-400"/> {data.experience}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Locations</span>
          <span className="text-white font-medium flex items-center gap-2"><Check size={16} className="text-green-400"/> {data.targetLocations.length} selected</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Preferences</span>
          <span className="text-white font-medium flex items-center gap-2"><Check size={16} className="text-green-400"/> {data.workEnvironment}</span>
        </div>
      </div>

      <button 
        onClick={nextStep}
        className="w-full py-4 bg-white text-primary hover:bg-gray-200 rounded-full font-medium text-lg transition-all"
      >
        Build My Job Search Engine
      </button>
      </AnswerReveal>
    </div>
  );
}