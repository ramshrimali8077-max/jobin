import { Sparkles, Mail, Eye, Activity, Zap, Search, CheckCircle2 } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="relative z-10 pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* BADGE ROW */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 text-center sm:text-left justify-center sm:justify-start">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#2B83E4] to-[#7B46D1] text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shadow-md">
            1
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-[#7B46D1]/20 bg-white/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-brand-dark">
            Features
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-brand-dark font-medium tracking-[-0.03em] leading-[1.08] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] mb-12 sm:mb-16 lg:mb-20 text-center sm:text-left">
          Everything you need to <br className="hidden sm:block" /><span className="sm:hidden"> </span>
          land interviews.
        </h2>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* FEATURE 1: Live Outreach Simulator (Full Width) */}
          <div className="md:col-span-12 group relative rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/50 p-8 lg:p-12 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
              <div className="flex-1 w-full text-center lg:text-left">
                <div className="w-14 h-14 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-[#7B46D1] to-[#D949A6] flex items-center justify-center mb-6 shadow-lg shadow-brand-purple/20">
                  <Activity size={24} className="text-white" />
                </div>
                <h3 className="text-[22px] sm:text-[28px] font-bold text-brand-dark mb-4">Live Outreach Simulator</h3>
                <p className="text-[16px] sm:text-[18px] leading-[1.65] text-brand-dark/70 mb-6 max-w-lg mx-auto lg:mx-0">
                  Click the button to simulate a recruiter opening your email. Watch tracking update instantly.
                </p>
              </div>
              <div className="flex-1 w-full max-w-lg">
                <div className="space-y-4">
                  <div className="bg-white/90 backdrop-blur-md border border-white rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div>
                      <div className="font-bold text-[15px] text-brand-dark mb-0.5">Google</div>
                      <div className="text-[13px] text-brand-dark/60">Staff Engineer</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold font-mono px-3 py-1.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">unread</span>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md border border-white rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div>
                      <div className="font-bold text-[15px] text-brand-dark mb-0.5">Stripe</div>
                      <div className="text-[13px] text-brand-dark/60">Backend Dev</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold font-mono px-3 py-1.5 rounded-full bg-emerald-100/50 text-emerald-600 border border-emerald-200">3x opened</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 2: Authentic Gmail Delivery (5 cols) */}
          <div className="md:col-span-5 group relative rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/50 p-8 lg:p-10 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2B83E4] to-[#7B46D1] flex items-center justify-center mb-6 shadow-lg shadow-brand-blue/20">
                <Mail size={20} className="text-white" />
              </div>
              <h3 className="text-[20px] font-bold text-brand-dark mb-3">Authentic Gmail Delivery</h3>
              <p className="text-[15px] leading-[1.65] text-brand-dark/70 mb-8">
                Everything ships from your real Gmail address. No third-party mailer, no spam folder. Recruiters see a genuine person reaching out.
              </p>
              <div className="mt-auto bg-white/80 border border-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2B83E4] to-[#7B46D1] text-white flex items-center justify-center text-[12px] font-bold">U</div>
                  <div className="text-[14px] font-medium text-brand-dark">you@gmail.com</div>
                  <div className="ml-auto flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-[10px] font-bold">
                    <CheckCircle2 size={12} /> Connected
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 3: Hyper-Personalized Pitches (7 cols) */}
          <div className="md:col-span-7 group relative rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/50 p-8 lg:p-10 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D949A6] to-[#7B46D1] flex items-center justify-center mb-6 shadow-lg shadow-brand-pink/20">
                <Sparkles size={20} className="text-white" />
              </div>
              <h3 className="text-[20px] font-bold text-brand-dark mb-3">Hyper-Personalized Pitches</h3>
              <p className="text-[15px] leading-[1.65] text-brand-dark/70 mb-8">
                Every email is uniquely crafted for each recruiter. Our AI analyzes the job description, the company, and your background.
              </p>
              <div className="mt-auto bg-white/80 border border-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
                <div className="text-[10px] text-[#D949A6] font-bold uppercase tracking-wider flex items-center gap-1 mb-2">
                  <Sparkles size={12} /> AI Personalization Segment
                </div>
                <p className="text-[13px] text-brand-dark/70 italic border-l-2 border-[#D949A6] pl-3 py-1">
                  "Hi Sarah, I saw Google's infra team is scaling Kubernetes... I led a similar migration at my last role, cutting deploys by 40%."
                </p>
              </div>
            </div>
          </div>

          {/* FEATURE 4: One-Click to Direct Gmail (6 cols) */}
          <div className="md:col-span-6 group relative rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/50 p-8 lg:p-10 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7B46D1] to-[#2B83E4] flex items-center justify-center mb-6 shadow-lg shadow-brand-purple/20">
                <Zap size={20} className="text-white" />
              </div>
              <h3 className="text-[20px] font-bold text-brand-dark mb-3">One-Click to Direct Gmail</h3>
              <p className="text-[15px] leading-[1.65] text-brand-dark/70 mb-8">
                Skip the complex inbox setups. Jump straight to your Gmail drafts or sent items with a single click.
              </p>
              <div className="mt-auto flex gap-3">
                <div className="bg-white/80 border border-white rounded-xl px-4 py-2.5 text-[12px] font-bold text-brand-dark flex items-center gap-2 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Drafts Folder
                </div>
                <div className="bg-white/80 border border-white rounded-xl px-4 py-2.5 text-[12px] font-bold text-brand-dark flex items-center gap-2 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Sent Mail
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 5: Intelligent Reply Scanner (6 cols) */}
          <div className="md:col-span-6 group relative rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/50 p-8 lg:p-10 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,70,209,0.15)] transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                <Search size={20} className="text-white" />
              </div>
              <h3 className="text-[20px] font-bold text-brand-dark mb-3">Intelligent Reply Scanner</h3>
              <p className="text-[15px] leading-[1.65] text-brand-dark/70 mb-8">
                Only scan the messages you sent from our app. We respect your privacy — our reply scanner isolates tracking to outreach emails.
              </p>
              <div className="mt-auto bg-white/80 border border-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/50 flex items-center justify-center text-emerald-600">
                  <Eye size={18} />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-brand-dark mb-0.5">Privacy First</div>
                  <div className="text-[11px] text-brand-dark/60">Personal emails are never read.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
