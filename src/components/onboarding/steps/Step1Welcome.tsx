import { useOnboardingStore } from '@/store/useOnboardingStore';
import { UploadCloud, Briefcase } from 'lucide-react';
import { WordReveal } from '@/components/ui/WordReveal';


export function Step1Welcome() {
  const { data, updateData, nextStep } = useOnboardingStore();

  return (
    <div className="flex flex-col items-center text-center w-full">
      <WordReveal className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" text="Welcome to Job Mail Loop." />
      <p className="text-xl text-gray-900/70 mb-12">I'm here to automate your job search and help you land more interviews.<br/>Let's start with your background.</p>
      
      <AnswerReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl mb-12">
        <button 
          onClick={() => updateData({ resumeUploaded: !data.resumeUploaded })}
          className={`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all ${data.resumeUploaded ? 'bg-gray-100 border-gray-900/50' : 'bg-white border-gray-200 hover:border-gray-900/30'}`}
        >
          <UploadCloud className="w-10 h-10 mb-4 text-gray-900" />
          <span className="text-lg font-medium text-gray-900">{data.resumeUploaded ? 'Resume Uploaded ✓' : 'Upload Resume'}</span>
        </button>
        <button 
          onClick={() => updateData({ linkedinConnected: !data.linkedinConnected })}
          className={`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all ${data.linkedinConnected ? 'bg-gray-100 border-gray-900/50' : 'bg-white border-gray-200 hover:border-gray-900/30'}`}
        >
          <Briefcase className="w-10 h-10 mb-4 text-gray-900" />
          <span className="text-lg font-medium text-gray-900">{data.linkedinConnected ? 'LinkedIn Connected ✓' : 'Connect LinkedIn'}</span>
        </button>
      </div>

      <button 
        onClick={nextStep}
        className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-medium transition-all"
      >
        <div className="overflow-hidden h-[24px] flex flex-col justify-start">
          <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Next Step</span>
          <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Next Step</span>
        </div>
      </button>
      </AnswerReveal>
    </div>
  );
}