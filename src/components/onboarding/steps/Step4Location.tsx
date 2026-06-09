import { AnswerReveal } from '@/components/ui/AnswerReveal';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useState } from 'react';
import { WordReveal } from '@/components/ui/WordReveal';


export function Step4Location() {
  const { data, updateData, nextStep } = useOnboardingStore();
  const [city, setCity] = useState(data.locationCity);
  const [country, setCountry] = useState(data.locationCountry);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (city.trim() && country.trim()) {
      updateData({ locationCity: city, locationCountry: country });
      nextStep();
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <WordReveal className="text-3xl md:text-4xl font-bold text-white mb-10 text-center" text="Where are you located?" />
      <AnswerReveal>

      <form onSubmit={handleSubmit} className="w-full space-y-4 mb-10">
        <input 
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-xl text-white focus:outline-none focus:border-gray-900/50 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/30"
          autoFocus
        />
        <input 
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-xl text-white focus:outline-none focus:border-gray-900/50 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/30"
        />
      </form>

      <button 
        onClick={() => handleSubmit()}
        disabled={!city.trim() || !country.trim()}
        className="px-8 py-4 bg-white text-primary hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white rounded-full font-medium transition-all"
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