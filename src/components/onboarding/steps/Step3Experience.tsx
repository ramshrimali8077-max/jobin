import { AnswerReveal } from '@/components/ui/AnswerReveal';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { WordReveal } from '@/components/ui/WordReveal';


const options = ['0–1 Years', '2–4 Years', '5–8 Years', '8+ Years'];

export function Step3Experience() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    updateData({ experience: opt });
    nextStep();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <WordReveal className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center" text="How many years of experience do you have?" />
      <AnswerReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={`p-6 rounded-2xl border text-xl font-medium transition-all ${data.experience === opt ? 'bg-gray-100 border-gray-900/50 text-gray-900' : 'bg-white border-gray-200 hover:border-gray-900/30 text-gray-700'}`}
          >
            {opt}
          </button>
        ))}
      </div>
      </AnswerReveal>
    </div>
  );
}