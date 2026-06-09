import { Lock, ShieldCheck, Eye } from 'lucide-react';

export function Security() {
  return (
    <section id="security" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 font-sans">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* HEADER SECTION (Centered) */}
        <div className="flex flex-col items-center text-center">
          {/* BADGE ROW */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-dark text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
              4
            </div>
            <div className="text-[12px] sm:text-[13px] font-medium border border-indigo-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-brand-dark">
              Trust & safety
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-brand-dark font-medium tracking-[-0.03em] leading-[1.08] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] mb-6 sm:mb-8">
            Without your approval, <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            we don't mail.
          </h2>
          
          <p className="max-w-2xl mx-auto text-[16px] sm:text-[18px] text-brand-dark/60 leading-[1.65] mb-12 sm:mb-16">
            Our AI queues drafts for your review. No email is ever sent automatically. You must physically approve every message.
          </p>
        </div>

        {/* 3 SECURITY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* CARD 1 */}
          <div className="rounded-2xl bg-white/80 backdrop-blur-md p-7 sm:p-8 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-300">
            <Lock className="w-8 h-8 text-green-500 mb-4" strokeWidth={2} />
            <h3 className="text-[16px] font-semibold text-brand-dark mb-2">You Hold the Keys</h3>
            <p className="text-[14px] leading-[1.65] text-brand-dark/60">
              OAuth only. We never store your Gmail password. Permissions can be revoked from Google at any time.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl bg-white/80 backdrop-blur-md p-7 sm:p-8 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-300">
            <ShieldCheck className="w-8 h-8 text-green-500 mb-4" strokeWidth={2} />
            <h3 className="text-[16px] font-semibold text-brand-dark mb-2">Approval-Only Sending</h3>
            <p className="text-[14px] leading-[1.65] text-brand-dark/60">
              Every draft sits in your queue until you tap Approve. One click sends, one click deletes — always your choice.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl bg-white/80 backdrop-blur-md p-7 sm:p-8 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-300">
            <Eye className="w-8 h-8 text-green-500 mb-4" strokeWidth={2} />
            <h3 className="text-[16px] font-semibold text-brand-dark mb-2">Full Transparency</h3>
            <p className="text-[14px] leading-[1.65] text-brand-dark/60">
              View every email we draft, every tracking pixel we use, and every data point we store — in plain English.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
