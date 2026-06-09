import { AnswerReveal } from '@/components/ui/AnswerReveal';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useState } from 'react';
import { WordReveal } from '@/components/ui/WordReveal';


const examples = ['Software Engineer', 'Frontend Engineer', 'Backend Engineer', 'Full Stack Engineer', 'Data Scientist', 'AI Engineer', 'Product Manager'];

export function Step2Role() {
  const { data, updateData, nextStep } = useOnboardingStore();
  const [val, setVal] = useState(data.role);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (val.trim()) {
      updateData({ role: val });
      nextStep();
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <WordReveal className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center" text="Tell me about yourself." />
      <p className="text-xl text-gray-900/70 mb-10 text-center">What role are you targeting?</p>
      <AnswerReveal>

      <form onSubmit={handleSubmit} className="w-full mb-8">
        <input 
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="e.g. Frontend Engineer"
          className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-xl text-gray-900 focus:outline-none focus:border-gray-900/50 focus:ring-1 focus:ring-purple-500 transition-all text-center placeholder:text-gray-900/30"
          autoFocus
        />
      </form>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {examples.map(ex => (
          <button
            key={ex}
            onClick={() => { setVal(ex); updateData({ role: ex }); nextStep(); }}
            className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-900/70 hover:bg-gray-100 hover:text-gray-900 transition-all text-sm"
          >
            {ex}
          </button>
        ))}
      </div>

      <button 
        onClick={() => handleSubmit()}
        disabled={!val.trim()}
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