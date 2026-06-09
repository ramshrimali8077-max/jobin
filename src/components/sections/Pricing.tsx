import { useState } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();

  return (
    <section id="pricing" className="relative z-10 pt-16 sm:pt-20 lg:pt-32 pb-20 sm:pb-24 lg:pb-32 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center">
        
        {/* BADGE ROW */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 self-start md:self-center">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#2B83E4] to-[#7B46D1] text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shadow-md">
            5
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-[#7B46D1]/20 bg-white/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-brand-dark">
            Pricing plans
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-brand-dark font-medium tracking-[-0.03em] leading-[1.08] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] mb-4 text-left md:text-center self-start md:self-center">
          Simple, transparent pricing <br className="hidden sm:block" /><span className="sm:hidden"> </span>
          built for job seekers.
        </h2>
        
        <p className="text-[16px] text-brand-dark/70 mb-10 sm:mb-12 text-left md:text-center self-start md:self-center max-w-xl">
          Choose the plan that matches your search speed. No hidden fees.
        </p>

        {/* TOGGLE */}
        <div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-full p-1.5 flex items-center mb-12 sm:mb-16 self-start md:self-center shadow-sm">
          <button 
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${!isAnnual ? 'bg-white shadow-md text-brand-dark' : 'text-brand-dark/60 hover:text-brand-dark'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300 flex items-center gap-2 ${isAnnual ? 'bg-white shadow-md text-brand-dark' : 'text-brand-dark/60 hover:text-brand-dark'}`}
          >
            Annual
            <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 transition-colors ${isAnnual ? 'bg-gradient-to-r from-[#2B83E4] to-[#7B46D1] text-white' : 'bg-brand-dark/10 text-brand-dark/60'}`}>
              Save 20%
            </span>
          </button>
        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full max-w-5xl mx-auto">
          
          {/* STARTER */}
          <div className="group rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/50 p-7 sm:p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500 overflow-hidden relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-[13px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple tracking-widest uppercase mb-3">Starter</div>
            <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-brand-dark leading-none mb-4">$0 <span className="text-[16px] font-medium text-brand-dark/40">/ mo</span></div>
            <p className="text-[14px] text-brand-dark/60 mb-8 min-h-[42px]">Get started and test the product with no commitment.</p>
            
            <div className="flex flex-col gap-3 mb-10 flex-1">
              {["50 AI email drafts", "Gmail integration", "Basic tracking", "3 templates"].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-[#2B83E4] font-bold" />
                  </div>
                  <span className="text-[14px] text-brand-dark font-medium">{f}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/onboarding')}
              className="group/btn w-full bg-white/80 backdrop-blur-md border border-indigo-100 text-brand-dark hover:bg-white text-[13px] sm:text-[14px] font-semibold rounded-full px-5 py-3.5 flex items-center justify-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="overflow-hidden h-[20px] flex flex-col justify-start text-center relative w-full">
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-translate-y-[20px] leading-[20px]">Get started free</span>
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-translate-y-[20px] leading-[20px] text-[#7B46D1]">Get started free</span>
              </div>
            </button>
          </div>

          {/* PRO */}
          <div className="relative rounded-[32px] p-[1px] -mt-2 mb-2 sm:mt-0 sm:mb-0 transform md:-translate-y-4 shadow-[0_20px_40px_-15px_rgba(123,70,209,0.4)] hover:-translate-y-6 transition-all duration-500 group">
            {/* Animated Glow Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2B83E4] via-[#7B46D1] to-[#D949A6] rounded-[32px] opacity-100 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2B83E4] via-[#7B46D1] to-[#D949A6] rounded-[32px] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            
            <div className="rounded-[31px] bg-brand-dark text-white p-7 sm:p-8 flex flex-col relative h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2B83E4]/20 to-[#7B46D1]/20 rounded-full blur-3xl" />
              
              <div className="flex items-center justify-between mb-3 relative z-10">
                <div className="text-[13px] font-bold text-[#D949A6] tracking-widest uppercase">Pro</div>
                <div className="bg-gradient-to-r from-[#2B83E4] to-[#7B46D1] text-white text-[11px] font-bold rounded-full px-3 py-1 shadow-md">Most Popular</div>
              </div>
              <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-none mb-4 relative z-10">${isAnnual ? '15' : '19'} <span className="text-[16px] font-medium text-white/40">/ mo</span></div>
              <p className="text-[14px] text-white/60 mb-8 min-h-[42px] relative z-10">For active job seekers sending 5–20 applications per week.</p>
              
              <div className="flex flex-col gap-3 mb-10 flex-1 relative z-10">
                {["Unlimited drafts", "Priority Gmail sending", "Real-time open tracking", "All 40+ templates", "Campaign analytics"].map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#7B46D1]/30 flex items-center justify-center shrink-0 border border-[#7B46D1]/50">
                      <Check size={12} className="text-[#D949A6] font-bold" />
                    </div>
                    <span className="text-[14px] text-white/90 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate('/onboarding')}
                className="group/btn w-full bg-white text-brand-dark text-[13px] sm:text-[14px] font-bold rounded-full px-5 py-3.5 flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl relative z-10"
              >
                <div className="overflow-hidden h-[20px] flex flex-col justify-start text-center relative w-full">
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-translate-y-[20px] leading-[20px]">Start free trial</span>
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-translate-y-[20px] leading-[20px] text-[#7B46D1]">Start free trial</span>
                </div>
              </button>
            </div>
          </div>

          {/* TEAM */}
          <div className="group rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/50 p-7 sm:p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500 overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-pink/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-[13px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink tracking-widest uppercase mb-3">Team</div>
            <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-brand-dark leading-none mb-4">${isAnnual ? '39' : '49'} <span className="text-[16px] font-medium text-brand-dark/40">/ mo</span></div>
            <p className="text-[14px] text-brand-dark/60 mb-8 min-h-[42px]">For outplacement firms or teams managing multiple job seekers.</p>
            
            <div className="flex flex-col gap-3 mb-10 flex-1">
              {["Everything in Pro", "5 user seats", "Shared template library", "Admin dashboard", "Priority support"].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-[#D949A6] font-bold" />
                  </div>
                  <span className="text-[14px] text-brand-dark font-medium">{f}</span>
                </div>
              ))}
            </div>

            <button 
              className="group/btn w-full bg-white/80 backdrop-blur-md border border-indigo-100 text-brand-dark hover:bg-white text-[13px] sm:text-[14px] font-semibold rounded-full px-5 py-3.5 flex items-center justify-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="overflow-hidden h-[20px] flex flex-col justify-start text-center relative w-full">
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-translate-y-[20px] leading-[20px]">Contact us</span>
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-translate-y-[20px] leading-[20px] text-[#D949A6]">Contact us</span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
