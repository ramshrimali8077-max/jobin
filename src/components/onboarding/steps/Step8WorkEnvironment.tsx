import { AnswerReveal } from '@/components/ui/AnswerReveal';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { WordReveal } from '@/components/ui/WordReveal';


const options = ['Remote', 'Hybrid', 'Onsite', 'Flexible'];

export function Step8WorkEnvironment() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    updateData({ workEnvironment: opt });
    nextStep();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <WordReveal className="text-[26px] leading-[1.2] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-12 text-center tracking-tight" text="What kind of work environment do you prefer?" />
      <AnswerReveal>

      <div className="grid grid-cols-2 gap-4 w-full">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={`w-full p-4 sm:p-6 rounded-2xl border text-[17px] sm:text-xl font-medium transition-all duration-200 active:scale-[0.98] ${data.workEnvironment === opt ? 'bg-gray-100 border-gray-900/50 text-gray-900' : 'bg-white border-gray-200 hover:border-gray-900/30 text-gray-700'}`}
          >
            {opt}
          </button>
        ))}
      </div>
      </AnswerReveal>
    </div>
  );
}