import { AnswerReveal } from '@/components/ui/AnswerReveal';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { WordReveal } from '@/components/ui/WordReveal';


const options = ['Yes', 'No', 'Maybe'];

export function Step7Sponsorship() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    updateData({ sponsorship: opt });
    nextStep();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <WordReveal className="text-[26px] leading-[1.2] sm:text-3xl md:text-4xl font-bold text-brand-dark mb-6 sm:mb-12 text-center tracking-tight" text="Do you need sponsorship?" />
      <AnswerReveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={`w-full p-4 sm:p-6 rounded-2xl border text-[17px] sm:text-xl font-medium transition-all duration-200 active:scale-[0.98] ${data.sponsorship === opt ? 'bg-indigo-100/50 border-gray-900/50 text-brand-dark' : 'bg-white/80 backdrop-blur-md border-indigo-100 hover:border-gray-900/30 text-gray-700'}`}
          >
            {opt}
          </button>
        ))}
      </div>
      </AnswerReveal>
    </div>
  );
}