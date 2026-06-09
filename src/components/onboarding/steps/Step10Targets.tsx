import { AnswerReveal } from '@/components/ui/AnswerReveal';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { WordReveal } from '@/components/ui/WordReveal';


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
      <WordReveal className="text-3xl md:text-4xl font-bold text-brand-dark mb-10 text-center" text="Who should Auto Agent contact?" />
      <AnswerReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mb-10">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={`p-5 rounded-2xl border text-lg font-medium transition-all ${data.contactTargets.includes(opt) ? 'bg-indigo-100/50 border-gray-900/50 text-brand-dark' : 'bg-white/80 backdrop-blur-md border-indigo-100 hover:border-gray-900/30 text-gray-700'}`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button 
        onClick={nextStep}
        disabled={data.contactTargets.length === 0}
        className="px-8 py-4 bg-white/80 backdrop-blur-md text-black hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white/80 backdrop-blur-md rounded-full font-medium transition-all"
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