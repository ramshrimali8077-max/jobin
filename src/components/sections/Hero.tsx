import { Mail } from 'lucide-react';
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
    <section ref={heroRef} className="relative h-[100dvh] min-h-[600px] flex flex-col font-sans bg-[#EFEFEF] overflow-hidden group">
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
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20 flex flex-col items-center text-center">
        <div className="mb-6 sm:mb-10 flex items-center justify-center gap-3 sm:gap-4">
          <img src="/logo-icon.png" alt="Job Mail Loop Logo" className="w-[48px] h-[48px] sm:w-[68px] sm:h-[68px] object-contain mix-blend-multiply drop-shadow-sm shrink-0" />
          <span className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-none bg-gradient-to-r from-[#2B83E4] via-[#7B46D1] to-[#D949A6] text-transparent bg-clip-text">Job Mail Loop</span>
        </div>

        <h1 className="text-gray-900 font-medium tracking-[-0.03em] leading-[1.08] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          Your job search, automated <br className="hidden sm:block" /><span className="sm:hidden"> </span>
          so you can focus on <br className="hidden sm:block" /><span className="sm:hidden"> </span>
          what actually matters.
        </h1>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button 
            onClick={() => navigate('/onboarding')}
            className="group/btn bg-gradient-to-r from-[#2B83E4] to-[#7B46D1] hover:from-[#3B93F4] hover:to-[#8B56E1] shadow-md hover:shadow-lg text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-3 transition-all duration-300"
          >
            <div className="overflow-hidden h-[20px] sm:h-[22px] flex flex-col justify-start">
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-translate-y-[20px] sm:group-hover/btn:-translate-y-[22px] leading-[20px] sm:leading-[22px]">Start with Google</span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-translate-y-[20px] sm:group-hover/btn:-translate-y-[22px] leading-[20px] sm:leading-[22px]">Start with Google</span>
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] -rotate-45 group-hover/btn:rotate-0 shrink-0">
              <Mail size={14} className="text-white" />
            </div>
          </button>

          <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] rounded-[4px] px-3 py-2 transition-shadow duration-300">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">50 free drafts on signup</span>
            <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded font-medium ml-1">Free</span>
          </div>
        </div>
      </div>
    </section>
  );
}
