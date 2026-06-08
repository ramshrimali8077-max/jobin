import { AnswerReveal } from '@/components/ui/AnswerReveal';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { WordReveal } from '@/components/ui/WordReveal';


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
      <WordReveal className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center" text="Where would you like to work?" />
      <AnswerReveal>

      <div className="flex flex-wrap justify-center gap-4 w-full mb-10">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={`px-6 py-4 rounded-2xl border text-lg font-medium transition-all ${data.targetLocations.includes(opt) ? 'bg-gray-100 border-gray-900/50 text-gray-900' : 'bg-white border-gray-200 hover:border-gray-900/30 text-gray-700'}`}
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
      <div className="overflow-hidden h-[24px] flex flex-col justify-start">
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Next Step</span>
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Next Step</span>
      </div>
    </button>
      </AnswerReveal>
    </div>
  );
}