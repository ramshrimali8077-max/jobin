import { Mail, Sparkles, ArrowRight } from 'lucide-react';
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
    <section ref={heroRef} className="relative h-[100dvh] min-h-[700px] flex flex-col font-sans bg-background overflow-hidden group">
      {/* NOISE TEXTURE */}
      <div className="absolute inset-0 z-20 noise-bg mix-blend-overlay pointer-events-none opacity-40"></div>

      {/* DYNAMIC AURORA & MESH */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-blue/20 blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-accent-purple/20 blur-[120px] animate-blob mix-blend-screen" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-accent-cyan/15 blur-[120px] animate-blob mix-blend-screen" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_80%)]" />
      </div>
      
      {/* MOUSE TRACKING GLOW */}
      <div 
        ref={glowRef}
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen"
        style={{
          background: `radial-gradient(
            800px circle at var(--x, 50%) var(--y, 50%),
            rgba(59, 130, 246, 0.15) 0%,
            rgba(139, 92, 246, 0.1) 25%,
            transparent 70%
          )`
        }}
      />

      <div className="flex-1" />

      {/* CONTENT */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-6 pb-20 sm:pb-32 flex flex-col items-center text-center">
        
        {/* FLOATING BADGE */}
        <div className="animate-fade-in-slide-up mb-8 flex items-center gap-2 glass-panel px-4 py-2 rounded-full border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 cursor-pointer">
          <Sparkles size={14} className="text-accent-cyan animate-pulse" />
          <span className="text-[13px] font-medium text-gray-300">Job Mail Loop 2.0 is here</span>
          <div className="w-[1px] h-3 bg-white/20 mx-2" />
          <span className="text-[13px] font-medium text-white flex items-center gap-1 group/badge">
            Read launch post <ArrowRight size={12} className="group-hover/badge:translate-x-1 transition-transform" />
          </span>
        </div>

        {/* HEADLINE */}
        <h1 className="animate-fade-in-slide-up [animation-delay:100ms] text-white font-[900] tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,8vw,6rem)] mb-6 drop-shadow-2xl">
          Your job search, <br className="hidden sm:block" />
          <span className="text-gradient relative inline-block">
            automated.
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan blur-[40px] opacity-30 animate-pulse mix-blend-screen"></div>
          </span>
        </h1>

        <p className="animate-fade-in-slide-up [animation-delay:200ms] text-[17px] sm:text-[20px] text-gray-400 max-w-2xl leading-relaxed mb-10">
          Upload your resume once. We use advanced AI models to write, personalize, and send cold emails that actually convert to interviews.
        </p>

        {/* CTA ROW */}
        <div className="animate-fade-in-slide-up [animation-delay:300ms] flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <button 
            onClick={() => navigate('/onboarding')}
            className="group relative w-full sm:w-auto bg-white text-primary text-[15px] sm:text-[16px] font-semibold rounded-full px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
            <Mail size={18} className="relative z-10" />
            <span className="relative z-10">Start Automating Free</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />
          </button>
        </div>
      </div>
    </section>
  );
}
