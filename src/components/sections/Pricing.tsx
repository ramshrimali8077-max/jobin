import { useState } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();

  return (
    <section id="pricing" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-20 sm:pb-24 lg:pb-32 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center">
        
        {/* BADGE ROW */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 self-start md:self-center">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            5
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Pricing plans
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-gray-900 font-medium tracking-[-0.03em] leading-[1.08] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] mb-4 text-left md:text-center self-start md:self-center">
          Simple, transparent pricing <br className="hidden sm:block" /><span className="sm:hidden"> </span>
          built for job seekers.
        </h2>
        
        <p className="text-[16px] text-gray-500 mb-10 sm:mb-12 text-left md:text-center self-start md:self-center max-w-xl">
          Choose the plan that matches your search speed. No hidden fees.
        </p>

        {/* TOGGLE */}
        <div className="bg-[#F5F5F5] rounded-full p-1 flex items-center mb-12 sm:mb-16 self-start md:self-center">
          <button 
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-1.5 rounded-full text-[14px] font-medium transition-all duration-300 ${!isAnnual ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-1.5 rounded-full text-[14px] font-medium transition-all duration-300 flex items-center gap-2 ${isAnnual ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Annual
            <span className={`text-[10px] rounded px-1.5 py-0.5 transition-colors ${isAnnual ? 'bg-white text-gray-900' : 'bg-gray-200 text-gray-700'}`}>
              Save 20%
            </span>
          </button>
        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full">
          
          {/* STARTER */}
          <div className="rounded-2xl bg-[#F5F5F5] p-7 sm:p-8 flex flex-col">
            <div className="text-[12px] font-semibold text-gray-400 tracking-widest uppercase mb-3">Starter</div>
            <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 leading-none mb-4">$0 <span className="text-[16px] font-medium text-gray-400">/ mo</span></div>
            <p className="text-[14px] text-gray-500 mb-8 min-h-[42px]">Get started and test the product with no commitment.</p>
            
            <div className="flex flex-col gap-2.5 mb-10 flex-1">
              {["50 AI email drafts", "Gmail integration", "Basic tracking", "3 templates"].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <Check size={16} className="text-gray-900" />
                  <span className="text-[14px] text-gray-900">{f}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/onboarding')}
              className="group w-full bg-gray-900 text-white text-[13px] sm:text-[14px] font-medium rounded-full px-5 py-3 flex items-center justify-center gap-3 transition-colors duration-300"
            >
              <div className="overflow-hidden h-[20px] flex flex-col justify-start text-center relative w-full">
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] leading-[20px]">Get started free</span>
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] leading-[20px]">Get started free</span>
              </div>
            </button>
          </div>

          {/* PRO */}
          <div className="rounded-2xl bg-gray-900 text-white p-7 sm:p-8 flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.12)] relative -mt-2 mb-2 sm:mt-0 sm:mb-0 transform md:-translate-y-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[12px] font-semibold text-gray-400 tracking-widest uppercase">Pro</div>
              <div className="bg-white text-gray-900 text-[10px] font-semibold rounded px-2 py-0.5">Most Popular</div>
            </div>
            <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-none mb-4">${isAnnual ? '15' : '19'} <span className="text-[16px] font-medium text-gray-400">/ mo</span></div>
            <p className="text-[14px] text-gray-400 mb-8 min-h-[42px]">For active job seekers sending 5–20 applications per week.</p>
            
            <div className="flex flex-col gap-2.5 mb-10 flex-1">
              {["Unlimited drafts", "Priority Gmail sending", "Real-time open tracking", "All 40+ templates", "Campaign analytics"].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <Check size={16} className="text-white" />
                  <span className="text-[14px] text-gray-300">{f}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/onboarding')}
              className="group w-full bg-white text-gray-900 text-[13px] sm:text-[14px] font-medium rounded-full px-5 py-3 flex items-center justify-center gap-3 transition-colors duration-300"
            >
              <div className="overflow-hidden h-[20px] flex flex-col justify-start text-center relative w-full">
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] leading-[20px]">Start free trial</span>
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] leading-[20px]">Start free trial</span>
              </div>
            </button>
          </div>

          {/* TEAM */}
          <div className="rounded-2xl bg-[#F5F5F5] p-7 sm:p-8 flex flex-col">
            <div className="text-[12px] font-semibold text-gray-400 tracking-widest uppercase mb-3">Team</div>
            <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 leading-none mb-4">${isAnnual ? '39' : '49'} <span className="text-[16px] font-medium text-gray-400">/ mo</span></div>
            <p className="text-[14px] text-gray-500 mb-8 min-h-[42px]">For outplacement firms or teams managing multiple job seekers.</p>
            
            <div className="flex flex-col gap-2.5 mb-10 flex-1">
              {["Everything in Pro", "5 user seats", "Shared template library", "Admin dashboard", "Priority support"].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <Check size={16} className="text-gray-900" />
                  <span className="text-[14px] text-gray-900">{f}</span>
                </div>
              ))}
            </div>

            <button 
              className="group w-full bg-gray-900 text-white text-[13px] sm:text-[14px] font-medium rounded-full px-5 py-3 flex items-center justify-center gap-3 transition-colors duration-300"
            >
              <div className="overflow-hidden h-[20px] flex flex-col justify-start text-center relative w-full">
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] leading-[20px]">Contact us</span>
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] leading-[20px]">Contact us</span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
