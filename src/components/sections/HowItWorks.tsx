import { Lock, FileSearch, Target, SendHorizontal } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 font-sans">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative">
        {/* BADGE ROW */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 relative z-10">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            2
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            The process
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-gray-900 font-medium tracking-[-0.03em] leading-[1.08] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] mb-10 sm:mb-14 lg:mb-16 relative z-10">
          From resume to recruiter inbox <br className="hidden sm:block" /><span className="sm:hidden"> </span>
          in 4 simple steps.
        </h2>

        <div className="relative">
          {/* CONNECTOR LINE */}
          <div className="hidden md:block absolute top-[100px] left-[10%] right-[10%] h-px bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 z-0" />

          {/* STEPS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 relative z-10">
            {/* STEP 1 */}
            <div className="rounded-2xl bg-white p-6 sm:p-7 flex flex-col hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-300">
              <div className="text-[11px] font-semibold text-gray-400 tracking-widest mb-4">01</div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center mb-5 border border-cyan-100/50">
                <Lock size={20} className="text-cyan-600" />
              </div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-gray-900 mb-1">Connect Gmail</h3>
              <p className="text-[13px] sm:text-[14px] leading-[1.6] text-gray-500">
                Securely link your Google account with one click. We use read/send scopes only.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="rounded-2xl bg-white p-6 sm:p-7 flex flex-col hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-300">
              <div className="text-[11px] font-semibold text-gray-400 tracking-widest mb-4">02</div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-5 border border-purple-100/50">
                <FileSearch size={20} className="text-purple-600" />
              </div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-gray-900 mb-1">Upload Resume</h3>
              <p className="text-[13px] sm:text-[14px] leading-[1.6] text-gray-500">
                Drop your PDF or paste your LinkedIn URL. AI parses your skills and experience.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="rounded-2xl bg-white p-6 sm:p-7 flex flex-col hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-300">
              <div className="text-[11px] font-semibold text-gray-400 tracking-widest mb-4">03</div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-violet-50 flex items-center justify-center mb-5 border border-violet-100/50">
                <Target size={20} className="text-violet-600" />
              </div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-gray-900 mb-1">Import & Draft</h3>
              <p className="text-[13px] sm:text-[14px] leading-[1.6] text-gray-500">
                Paste job URLs or let us find matches. AI drafts a custom email per role instantly.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="rounded-2xl bg-white p-6 sm:p-7 flex flex-col hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-300">
              <div className="text-[11px] font-semibold text-gray-400 tracking-widest mb-4">04</div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mb-5 border border-green-100/50">
                <SendHorizontal size={20} className="text-green-600" />
              </div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-gray-900 mb-1">Approve & Send</h3>
              <p className="text-[13px] sm:text-[14px] leading-[1.6] text-gray-500">
                Review drafts in your queue. Click approve and your email lands in their inbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
