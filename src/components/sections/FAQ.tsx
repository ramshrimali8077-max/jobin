import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does Job Mail Loop send emails?",
    answer: "We use your personal Gmail account via official Google OAuth APIs. Emails are sent directly from your real inbox, not from a third-party server. This ensures maximum deliverability and authenticity."
  },
  {
    question: "Will recruiters know it's automated?",
    answer: "No. Because we use your real Gmail address and generate highly personalized emails specific to the job description and your background, the outreach looks and feels completely authentic."
  },
  {
    question: "Is my data safe?",
    answer: "Yes. We use enterprise-grade security and only request the minimum Google OAuth scopes required (send and read access). Your personal emails are never read, and we isolate our reply scanner only to the outreach emails."
  },
  {
    question: "What does 'Without your approval, we don't mail' mean?",
    answer: "It means you are always in control. Our AI prepares drafts and places them in a queue for your review. Not a single email is dispatched until you explicitly click \"Approve & Send\"."
  },
  {
    question: "How does open tracking work?",
    answer: "We embed a tiny, invisible tracking pixel in the emails sent through our platform. When the recruiter opens the email, the pixel loads, and we update your dashboard in real-time so you know exactly who's interested."
  },
  {
    question: "Is it free to use?",
    answer: "Yes, we are currently in Public Beta. You receive 50 free drafts upon signup, with no credit card required. We are finalizing our Pro and Team plans for heavier users."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-20 sm:pb-28 font-sans">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8">
        
        {/* HEADING */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-brand-dark font-medium tracking-[-0.03em] leading-[1.08] text-[clamp(2rem,6vw,3.5rem)] mb-4">
            FAQ
          </h2>
          <p className="text-[16px] sm:text-[18px] text-brand-dark/60">
            Common questions, straight answers.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'bg-white/80 backdrop-blur-md border-indigo-200 shadow-md' 
                  : 'bg-white/40 backdrop-blur-sm border-white hover:bg-white/60 hover:border-indigo-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-brand-dark text-[15px] sm:text-[17px]">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'bg-indigo-50 rotate-180' : 'bg-transparent'
                }`}>
                  <ChevronDown size={18} className={openIndex === index ? 'text-[#7B46D1]' : 'text-brand-dark/40'} />
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[14px] sm:text-[15px] text-brand-dark/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
