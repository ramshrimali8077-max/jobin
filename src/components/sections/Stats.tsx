import { BarChart3, Mail, Target, ArrowUpRight } from 'lucide-react';

export function Stats() {
  return (
    <section className="relative z-10 pb-16 sm:pb-24 pt-8 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* DASHBOARD MOCKUP */}
        <div className="relative mb-24 lg:mb-32">
          {/* Decorative glows */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
          
          <div className="relative rounded-2xl sm:rounded-[32px] bg-white/40 backdrop-blur-2xl border border-white/60 p-2 sm:p-4 shadow-[0_20px_60px_-15px_rgba(43,131,228,0.15)] mx-auto">
            {/* Window controls */}
            <div className="flex items-center gap-2 px-4 pb-4 pt-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <div className="text-[12px] font-medium text-brand-dark/40 ml-4 flex-1 text-center pr-10">
                Job Mail Loop — Dashboard
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="bg-white rounded-[20px] p-6 sm:p-8 border border-indigo-50 shadow-inner">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Stat 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/50">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-brand-dark/50 mb-1">Emails Sent</div>
                    <div className="text-[28px] font-bold text-brand-dark leading-none">247</div>
                    <div className="text-[12px] font-medium text-emerald-500 mt-2 flex items-center gap-1">
                      <ArrowUpRight size={12} /> 12% vs last week
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100/50">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-brand-dark/50 mb-1">Total Opens</div>
                    <div className="text-[28px] font-bold text-brand-dark leading-none">1,842</div>
                    <div className="text-[12px] font-medium text-emerald-500 mt-2 flex items-center gap-1">
                      <ArrowUpRight size={12} /> 24% vs last week
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100/50">
                    <Target size={20} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-brand-dark/50 mb-1">Replies</div>
                    <div className="text-[28px] font-bold text-brand-dark leading-none">34</div>
                    <div className="text-[12px] font-medium text-emerald-500 mt-2 flex items-center gap-1">
                      <ArrowUpRight size={12} /> 8% vs last week
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* TRUSTED BY / STATS */}
        <div className="text-center">
          <h3 className="text-[14px] sm:text-[16px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2B83E4] to-[#7B46D1] uppercase tracking-widest mb-4">
            Trusted by top talent
          </h3>
          <h2 className="text-brand-dark font-medium tracking-[-0.03em] leading-[1.1] text-[clamp(1.5rem,4vw,2.5rem)] mb-12">
            Stop applying into the void. <br className="hidden sm:block" />
            Start getting replies.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-[1000px] mx-auto">
            <div>
              <div className="text-[32px] sm:text-[40px] font-bold text-brand-dark mb-1">0+</div>
              <div className="text-[14px] font-medium text-brand-dark/60">Emails Delivered</div>
            </div>
            <div>
              <div className="text-[32px] sm:text-[40px] font-bold text-brand-dark mb-1">0%</div>
              <div className="text-[14px] font-medium text-brand-dark/60">Avg Open Rate</div>
            </div>
            <div>
              <div className="text-[32px] sm:text-[40px] font-bold text-brand-dark mb-1">0+</div>
              <div className="text-[14px] font-medium text-brand-dark/60">Active Users</div>
            </div>
            <div>
              <div className="text-[32px] sm:text-[40px] font-bold text-brand-dark mb-1">0 <span className="text-[24px]">min</span></div>
              <div className="text-[14px] font-medium text-brand-dark/60">Setup Time</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
