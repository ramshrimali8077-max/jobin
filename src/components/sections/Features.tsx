import { Sparkles, Mail, Eye, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="bg-white/80 backdrop-blur-md pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* BADGE ROW */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-dark text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            1
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-indigo-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-brand-dark">
            What it does
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-brand-dark font-medium tracking-[-0.02em] leading-[1.12] text-[clamp(1.5rem,4vw,3.2rem)] mb-12 sm:mb-16 lg:mb-28">
          Everything you need to <br className="hidden sm:block" /><span className="sm:hidden"> </span>
          land your next interview.
        </h2>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FEATURE 1 */}
          <div className="group relative rounded-2xl bg-[#F5F5F5] p-7 sm:p-8 lg:p-10 overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <div className="w-10 h-10 rounded-xl bg-brand-dark flex items-center justify-center mb-6">
              <Sparkles size={18} className="text-white" />
            </div>
            <h3 className="text-[17px] sm:text-[19px] font-semibold text-brand-dark mb-2">AI Drafts, Personalized</h3>
            <p className="text-[14px] sm:text-[16px] leading-[1.65] text-brand-dark/60">
              Upload your resume once. Our AI reads each job posting and writes a hyper-personal cold email matched to the role and company.
            </p>
            <div className="mt-6 rounded-xl bg-white/80 backdrop-blur-md overflow-hidden p-4 shadow-sm">
              <div className="border-b border-gray-100 pb-3 mb-3 text-[13px]">
                <div className="text-brand-dark/40 mb-1">To: recruiter@company.com</div>
                <div className="text-brand-dark font-medium">Subject: Frontend Lead — Axion</div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-2 bg-indigo-100/50 rounded w-full"></div>
                <div className="h-2 bg-indigo-100/50 rounded w-5/6"></div>
                <div className="h-2 bg-indigo-100/50 rounded w-4/6"></div>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-indigo-100/50 text-brand-dark/60 rounded-full text-[11px] font-medium">Edit</div>
                <div className="px-3 py-1 bg-green-500 text-white rounded-full text-[11px] font-medium">Approve & Send</div>
              </div>
            </div>
            
            {/* HOVER BUTTON */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md h-9 w-9 group-hover:w-[130px] rounded-full overflow-hidden px-2.5 transition-all duration-300 ease-in-out shadow-sm cursor-pointer">
              <span className="text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 whitespace-nowrap text-brand-dark absolute left-[34px]">
                Learn more
              </span>
              <ArrowRight size={14} className="text-brand-dark -rotate-45 group-hover:rotate-0 transition-transform duration-300 absolute left-2.5" />
            </div>
          </div>

          {/* FEATURE 2 */}
          <div className="group relative rounded-2xl bg-[#F5F5F5] p-7 sm:p-8 lg:p-10 overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <div className="w-10 h-10 rounded-xl bg-brand-dark flex items-center justify-center mb-6">
              <Mail size={18} className="text-white" />
            </div>
            <h3 className="text-[17px] sm:text-[19px] font-semibold text-brand-dark mb-2">Sends From Your Gmail</h3>
            <p className="text-[14px] sm:text-[16px] leading-[1.65] text-brand-dark/60">
              Emails land in recruiter inboxes from your real address — not a third-party domain. Zero spam filter risk.
            </p>
            <div className="mt-6 rounded-xl bg-white/80 backdrop-blur-md overflow-hidden p-6 flex items-center justify-center shadow-sm">
              <div className="flex items-center gap-3 bg-indigo-50/40 border border-gray-100 px-4 py-2 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">U</div>
                <div className="text-[13px] text-brand-dark">user@gmail.com</div>
                <div className="flex items-center gap-1 text-green-500 bg-green-50 px-2 py-0.5 rounded text-[10px] font-medium ml-2">
                  <CheckCircle2 size={10} /> Connected
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md h-9 w-9 group-hover:w-[130px] rounded-full overflow-hidden px-2.5 transition-all duration-300 ease-in-out shadow-sm cursor-pointer">
              <span className="text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 whitespace-nowrap text-brand-dark absolute left-[34px]">
                Learn more
              </span>
              <ArrowRight size={14} className="text-brand-dark -rotate-45 group-hover:rotate-0 transition-transform duration-300 absolute left-2.5" />
            </div>
          </div>

          {/* FEATURE 3 */}
          <div className="group relative rounded-2xl bg-[#F5F5F5] p-7 sm:p-8 lg:p-10 overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <div className="w-10 h-10 rounded-xl bg-brand-dark flex items-center justify-center mb-6">
              <Eye size={18} className="text-white" />
            </div>
            <h3 className="text-[17px] sm:text-[19px] font-semibold text-brand-dark mb-2">Real-Time Open Tracking</h3>
            <p className="text-[14px] sm:text-[16px] leading-[1.65] text-brand-dark/60">
              See exactly when a recruiter opens your email, how many times, and from what city. Know who's interested before they reply.
            </p>
            <div className="mt-6 rounded-xl bg-white/80 backdrop-blur-md overflow-hidden shadow-sm flex flex-col">
              <div className="flex items-center justify-between p-3 border-b border-gray-50">
                <span className="text-[13px] font-medium text-brand-dark">Google</span>
                <span className="text-[10px] font-medium bg-indigo-100/50 text-brand-dark/60 px-2 py-0.5 rounded-full">unread</span>
              </div>
              <div className="flex items-center justify-between p-3 border-b border-gray-50">
                <span className="text-[13px] font-medium text-brand-dark">Stripe</span>
                <span className="text-[10px] font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">3x opened</span>
              </div>
              <div className="flex items-center justify-between p-3">
                <span className="text-[13px] font-medium text-brand-dark">OpenAI</span>
                <span className="text-[10px] font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">replied</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md h-9 w-9 group-hover:w-[130px] rounded-full overflow-hidden px-2.5 transition-all duration-300 ease-in-out shadow-sm cursor-pointer">
              <span className="text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 whitespace-nowrap text-brand-dark absolute left-[34px]">
                Learn more
              </span>
              <ArrowRight size={14} className="text-brand-dark -rotate-45 group-hover:rotate-0 transition-transform duration-300 absolute left-2.5" />
            </div>
          </div>

          {/* FEATURE 4 */}
          <div className="group relative rounded-2xl bg-[#F5F5F5] p-7 sm:p-8 lg:p-10 overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <div className="w-10 h-10 rounded-xl bg-brand-dark flex items-center justify-center mb-6">
              <ShieldCheck size={18} className="text-white" />
            </div>
            <h3 className="text-[17px] sm:text-[19px] font-semibold text-brand-dark mb-2">You Approve Every Send</h3>
            <p className="text-[14px] sm:text-[16px] leading-[1.65] text-brand-dark/60">
              Nothing goes out without your say. Review every draft, tweak the tone, then click send. You stay in full control.
            </p>
            <div className="mt-6 rounded-xl bg-white/80 backdrop-blur-md overflow-hidden p-8 flex flex-col items-center justify-center shadow-sm text-center">
              <div className="bg-green-500 text-white px-5 py-2 rounded-full text-[13px] font-medium flex items-center gap-2 mb-3 cursor-pointer shadow-md">
                <CheckCircle2 size={16} /> Approve & Send
              </div>
              <div className="text-[11px] text-brand-dark/40">0 emails sent without approval.</div>
            </div>

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md h-9 w-9 group-hover:w-[130px] rounded-full overflow-hidden px-2.5 transition-all duration-300 ease-in-out shadow-sm cursor-pointer">
              <span className="text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 whitespace-nowrap text-brand-dark absolute left-[34px]">
                Learn more
              </span>
              <ArrowRight size={14} className="text-brand-dark -rotate-45 group-hover:rotate-0 transition-transform duration-300 absolute left-2.5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
