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
      <WordReveal className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center" text="Do you need sponsorship?" />
      <AnswerReveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={`p-6 rounded-2xl border text-xl font-medium transition-all ${data.sponsorship === opt ? 'bg-gray-100 border-gray-900/50 text-gray-900' : 'bg-white border-gray-200 hover:border-gray-900/30 text-gray-700'}`}
          >
            {opt}
          </button>
        ))}
      </div>
      </AnswerReveal>
    </div>
  );
}