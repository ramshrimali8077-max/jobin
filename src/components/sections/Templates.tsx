import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Templates() {
  const navigate = useNavigate();

  const templates = [
    { name: "The Direct Pitch", role: "For open roles", tag: "Direct" },
    { name: "The Warm Intro", role: "Mutual connections", tag: "Networking" },
    { name: "The Follow-Up", role: "After applying", tag: "Follow-up" },
    { name: "The Career Pivot", role: "Different industry", tag: "Pivot" },
    { name: "The Referral Ask", role: "Targeting alumni", tag: "Referral" },
  ];

  return (
    <section id="templates" className="bg-white/80 backdrop-blur-md pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* BADGE ROW */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-dark text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            3
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-indigo-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-brand-dark">
            Email templates
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-brand-dark font-medium tracking-[-0.02em] leading-[1.12] text-[clamp(1.5rem,4vw,3.2rem)] mb-12 sm:mb-16 lg:mb-28">
          Pitches that actually <br className="hidden sm:block" /><span className="sm:hidden"> </span>
          get replies.
        </h2>

        {/* CONTENT AREA */}
        <div className="flex flex-col lg:grid lg:grid-cols-[30%_1fr_44%] lg:items-end gap-10 lg:gap-6 xl:gap-8">
          
          {/* LEFT COLUMN: Text + Button */}
          <div className="flex flex-col gap-8 lg:self-end">
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-brand-dark">
              From aggressive cold outreach to subtle networking pitches — our AI matches tone to context so every message feels hand-written.
            </p>
            <div>
              <button 
                onClick={() => navigate('/onboarding')}
                className="group inline-flex bg-brand-dark text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 items-center gap-3 transition-colors duration-300"
              >
                <div className="overflow-hidden h-[20px] sm:h-[22px] flex flex-col justify-start">
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] sm:group-hover:-translate-y-[22px] leading-[20px] sm:leading-[22px]">Browse all templates</span>
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] sm:group-hover:-translate-y-[22px] leading-[20px] sm:leading-[22px]">Browse all templates</span>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] -rotate-45 group-hover:rotate-0 shrink-0">
                  <ArrowRight size={14} className="text-brand-dark" />
                </div>
              </button>
            </div>
          </div>

          {/* CENTER COLUMN: Templates List */}
          <div className="flex flex-col gap-3 lg:self-start mt-8 lg:mt-0">
            {templates.map((t, i) => (
              <div key={i} className="bg-[#F5F5F5] p-5 rounded-xl flex items-center justify-between hover:bg-indigo-100/50 transition-colors cursor-pointer">
                <div>
                  <div className="text-[15px] font-semibold text-brand-dark">{t.name}</div>
                  <div className="text-[13px] text-brand-dark/60">{t.role}</div>
                </div>
                <div className="text-[11px] text-brand-dark/70 border border-indigo-200 rounded-full px-2.5 py-0.5 font-medium">
                  {t.tag}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Mock Email Panel */}
          <div className="hidden lg:block lg:self-end bg-[#F5F5F5] rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              <span className="ml-4 text-[13px] font-medium text-brand-dark/40">New Message</span>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 mb-6 shadow-sm border border-gray-100">
              <div className="border-b border-gray-100 pb-2 mb-2 flex items-center">
                <span className="text-brand-dark/40 text-[12px] w-12">To:</span>
                <span className="text-brand-dark text-[13px] font-medium">hiring@stripe.com</span>
              </div>
              <div className="border-b border-gray-100 pb-2 mb-2 flex items-center">
                <span className="text-brand-dark/40 text-[12px] w-12">From:</span>
                <span className="text-brand-dark text-[13px] font-medium">you@gmail.com</span>
              </div>
              <div className="flex items-center pt-1">
                <span className="text-brand-dark/40 text-[12px] w-12">Subject:</span>
                <span className="text-brand-dark text-[13px] font-medium">Senior Software Engineer — Inquiry</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full w-[90%]"></div>
              <div className="h-2.5 bg-gray-200 rounded-full w-[95%]"></div>
              <div className="h-2.5 bg-gray-200 rounded-full w-[60%]"></div>
            </div>

            <div className="flex gap-3">
              <button className="px-5 py-2 bg-white/80 backdrop-blur-md text-brand-dark border border-indigo-100 rounded-full text-[12px] font-medium hover:bg-indigo-50/40 transition-colors">
                Edit Draft
              </button>
              <button className="px-5 py-2 bg-brand-dark text-white rounded-full text-[12px] font-medium hover:bg-brand-dark/90 transition-colors">
                Approve & Send
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
