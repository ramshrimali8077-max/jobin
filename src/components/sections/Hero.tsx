import { Mail, Play, CheckCircle2, Clock, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export function Hero() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !glowRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // We update the div directly for 60fps performance
      glowRef.current.style.setProperty('--x', `${x}px`);
      glowRef.current.style.setProperty('--y', `${y}px`);
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <section ref={heroRef} className="relative h-[100dvh] min-h-[700px] flex flex-col font-sans bg-indigo-50/40 overflow-hidden group">
      {/* STATIC FALLBACK GRADIENT */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-multiply bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-200 via-[#EFEFEF] to-[#EFEFEF]" />
      
      {/* COLORFUL MOUSE-TRACKING GLOW */}
      <div 
        ref={glowRef}
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply"
        style={{
          background: `radial-gradient(
            1200px circle at var(--x, 50%) var(--y, 50%),
            rgba(124, 58, 237, 0.25) 0%,
            rgba(229, 72, 168, 0.20) 25%,
            rgba(37, 99, 235, 0.15) 50%,
            transparent 90%
          )`
        }}
      />

      {/* FLEX SPACER */}
      <div className="flex-1" />

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 relative z-10 w-full pt-12 pb-24 sm:pt-24 sm:pb-32 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-[#2B83E4]/10 mb-8 shadow-lg shadow-[#2B83E4]/[0.04]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-brand-dark text-xs font-bold tracking-wide">Now in Public Beta — 50 Free Drafts</span>
        </div>
        
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-brand-dark font-medium tracking-[-0.03em] leading-[1.08] text-[clamp(2.5rem,8vw,5.5rem)] sm:text-[clamp(3rem,6vw,5.5rem)] mb-6">
            Your job search, <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-[#2B83E4] via-[#7B46D1] to-[#D949A6] text-transparent bg-clip-text">fully automated.</span>
          </h1>
          <p className="text-[#64748B] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            AI crafts hyper-personalized emails from your resume, sends them from your real Gmail, and tracks every open in real-time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
          <button 
            onClick={() => navigate('/onboarding')}
            className="group/btn w-full sm:w-auto bg-gradient-to-r from-[#2B83E4] to-[#7B46D1] hover:from-[#3B93F4] hover:to-[#8B56E1] shadow-lg hover:shadow-xl text-white text-[15px] font-bold rounded-2xl px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300"
          >
            Start with Google — It's Free
            <Mail size={18} className="text-white/80" />
          </button>

          <a 
            href="#how-it-works"
            className="group/btn2 w-full sm:w-auto bg-white/80 backdrop-blur-md border border-indigo-100 hover:bg-white text-brand-dark shadow-sm hover:shadow-md text-[15px] font-bold rounded-2xl px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300"
          >
            <Play size={18} className="text-[#7B46D1]" />
            See How It Works
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#94A3B8] font-medium">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#2B83E4]" /> 2 min setup</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-[#7B46D1]" /> Enterprise-grade security</span>
        </div>
      </div>
    </section>
  );
}
