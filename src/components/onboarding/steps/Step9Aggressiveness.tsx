import { AnswerReveal } from '@/components/ui/AnswerReveal';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { WordReveal } from '@/components/ui/WordReveal';


const options = [
  '10 emails per week', 
  '25 emails per week', 
  '50 emails per week', 
  '100 emails per week'
];

export function Step9Aggressiveness() {
  const { data, updateData, nextStep } = useOnboardingStore();

  const select = (opt: string) => {
    updateData({ aggressiveness: opt });
    nextStep();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <WordReveal className="text-[26px] leading-[1.2] sm:text-3xl md:text-4xl font-bold text-brand-dark mb-6 sm:mb-12 text-center tracking-tight" text="How aggressively should Job Mail Loop reach out?" />
      <AnswerReveal>

      <div className="flex flex-col gap-4 w-full">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => select(opt)}
            className={`p-5 rounded-2xl border text-xl font-medium transition-all text-center ${data.aggressiveness === opt ? 'bg-indigo-100/50 border-gray-900/50 text-brand-dark' : 'bg-white/80 backdrop-blur-md border-indigo-100 hover:border-gray-900/30 text-gray-700'}`}
          >
            {opt}
          </button>
        ))}
      </div>
      </AnswerReveal>
    </div>
  );
}