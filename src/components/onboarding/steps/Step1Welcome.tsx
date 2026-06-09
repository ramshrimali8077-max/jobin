import { useOnboardingStore } from '@/store/useOnboardingStore';
import { UploadCloud, Briefcase } from 'lucide-react';
import { WordReveal } from '@/components/ui/WordReveal';
import { AnswerReveal } from '@/components/ui/AnswerReveal';


export function Step1Welcome() {
  const { data, updateData, nextStep } = useOnboardingStore();

  return (
    <div className="flex flex-col items-center text-center w-full">
      <WordReveal className="text-[26px] leading-[1.2] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight" text="Welcome to Job Mail Loop." />
      <p className="text-[17px] sm:text-xl text-gray-900/70 mb-8 sm:mb-12 px-2">I'm here to automate your job search and help you land more interviews.<br className="hidden sm:block"/>Let's start with your background.</p>
      
      <AnswerReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl mb-8 sm:mb-12">
        <button 
          onClick={() => updateData({ resumeUploaded: !data.resumeUploaded })}
          className={`flex flex-col items-center justify-center p-5 sm:p-8 rounded-2xl border transition-all duration-200 active:scale-[0.98] ${data.resumeUploaded ? 'bg-gray-100 border-gray-900/50' : 'bg-white border-gray-200 hover:border-gray-900/30'}`}
        >
          <UploadCloud className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-gray-900" />
          <span className="text-[16px] sm:text-lg font-medium text-gray-900">{data.resumeUploaded ? 'Resume Uploaded ✓' : 'Upload Resume'}</span>
        </button>
        <button 
          onClick={() => updateData({ linkedinConnected: !data.linkedinConnected })}
          className={`flex flex-col items-center justify-center p-5 sm:p-8 rounded-2xl border transition-all duration-200 active:scale-[0.98] ${data.linkedinConnected ? 'bg-gray-100 border-gray-900/50' : 'bg-white border-gray-200 hover:border-gray-900/30'}`}
        >
          <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-gray-900" />
          <span className="text-[16px] sm:text-lg font-medium text-gray-900">{data.linkedinConnected ? 'LinkedIn Connected ✓' : 'Connect LinkedIn'}</span>
        </button>
      </div>

      <button 
        onClick={nextStep}
        className="group px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white hover:bg-gray-800 rounded-full font-medium transition-all duration-200 active:scale-95 shadow-md flex items-center gap-2"
      >
        <div className="overflow-hidden h-[24px] flex flex-col justify-start">
          <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Continue Setup</span>
          <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Continue Setup</span>
        </div>
      </button>
      </AnswerReveal>
    </div>
  );
}