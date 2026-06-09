import { Lock, FileSearch, Target, SendHorizontal } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 font-sans">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative">
        {/* BADGE ROW */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 relative z-10">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#2B83E4] to-[#7B46D1] text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shadow-md">
            2
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-[#7B46D1]/20 bg-white/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-brand-dark">
            How It Works
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-brand-dark font-medium tracking-[-0.03em] leading-[1.08] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] mb-10 sm:mb-14 lg:mb-16 relative z-10">
          From resume to recruiter inbox <br className="hidden sm:block" /><span className="sm:hidden"> </span>
          in 4 simple steps.
        </h2>

        <div className="relative">
          {/* CONNECTOR LINE */}
          <div className="hidden md:block absolute top-[100px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#2B83E4]/0 via-[#7B46D1]/30 to-[#D949A6]/0 z-0 blur-[1px]" />
          <div className="hidden md:block absolute top-[100px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#2B83E4]/20 via-[#7B46D1]/50 to-[#D949A6]/20 z-0" />

          {/* STEPS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 relative z-10">
            {/* STEP 1 */}
            <div className="group rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/50 p-6 sm:p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-[14px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 tracking-widest mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" /> 01
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-50 to-white flex items-center justify-center mb-6 border border-cyan-100/50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Lock size={24} className="text-cyan-500" />
              </div>
              <h3 className="text-[17px] sm:text-[19px] font-semibold text-brand-dark mb-2">Connect Gmail</h3>
              <p className="text-[14px] sm:text-[15px] leading-[1.65] text-brand-dark/70">
                Securely link your Gmail via OAuth. One click, zero passwords shared.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="group rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/50 p-6 sm:p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2B83E4]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-[14px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2B83E4] to-blue-600 tracking-widest mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2B83E4] shadow-[0_0_8px_rgba(43,131,228,0.8)] animate-pulse" /> 02
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center mb-6 border border-blue-100/50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <FileSearch size={24} className="text-[#2B83E4]" />
              </div>
              <h3 className="text-[17px] sm:text-[19px] font-semibold text-brand-dark mb-2">Upload Resume</h3>
              <p className="text-[14px] sm:text-[15px] leading-[1.65] text-brand-dark/70">
                Drop your PDF. AI extracts skills, experience & talking points.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="group rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/50 p-6 sm:p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7B46D1]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-[14px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B46D1] to-purple-600 tracking-widest mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7B46D1] shadow-[0_0_8px_rgba(123,70,209,0.8)] animate-pulse" /> 03
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-white flex items-center justify-center mb-6 border border-purple-100/50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Target size={24} className="text-[#7B46D1]" />
              </div>
              <h3 className="text-[17px] sm:text-[19px] font-semibold text-brand-dark mb-2">Import & Draft</h3>
              <p className="text-[14px] sm:text-[15px] leading-[1.65] text-brand-dark/70">
                Add recruiter emails. AI writes unique pitches for each.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="group rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/50 p-6 sm:p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D949A6]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-[14px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D949A6] to-pink-500 tracking-widest mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D949A6] shadow-[0_0_8px_rgba(217,73,166,0.8)] animate-pulse" /> 04
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-white flex items-center justify-center mb-6 border border-pink-100/50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <SendHorizontal size={24} className="text-[#D949A6]" />
              </div>
              <h3 className="text-[17px] sm:text-[19px] font-semibold text-brand-dark mb-2">Approve & Send</h3>
              <p className="text-[14px] sm:text-[15px] leading-[1.65] text-brand-dark/70">
                Review every draft. Nothing sends without your click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
