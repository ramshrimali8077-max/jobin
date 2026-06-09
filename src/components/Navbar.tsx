import { useState, useEffect } from 'react';
import { Compass, Shield, CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const { openLoginModal } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', icon: Sparkles, hash: '#features' },
    { name: 'How It Works', icon: Compass, hash: '#how-it-works' },
    { name: 'Security', icon: Shield, hash: '#security' },
    { name: 'Pricing', icon: CreditCard, hash: '#pricing' },
  ];

  return (
    <>
      {/* DESKTOP TOP NAVIGATION */}
      <div className={`hidden md:flex fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-5xl mx-auto w-full px-6">
          <nav className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass-panel px-4 py-3' : 'px-2 py-2'}`}>
            {/* LEFT - LOGO */}
            <div className="flex items-center gap-8">
              <div onClick={() => window.scrollTo({top: 0})} className="cursor-pointer flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500">
                  <span className="text-white text-[13px] font-bold tracking-tight">JM</span>
                </div>
                <span className={`font-semibold tracking-tight transition-opacity duration-300 ${scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 text-white'}`}>
                  Job Mail Loop
                </span>
              </div>
              
              {/* DESKTOP LINKS */}
              <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-md">
                {navLinks.map(link => (
                  <a key={link.name} href={link.hash} className="text-[13px] font-medium text-gray-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all duration-300">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT - ACTIONS */}
            <div className="flex items-center gap-4">
              <button onClick={openLoginModal} className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                Log In
              </button>
              <button 
                onClick={() => navigate('/onboarding')}
                className="spotlight-border bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md text-white text-[13px] font-medium rounded-full px-5 py-2 flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
              >
                <span>Get Started Free</span>
                <ArrowRight size={14} className="text-accent-cyan" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* MOBILE BOTTOM NAVIGATION (Native App Feel) */}
      <div className="md:hidden fixed bottom-6 inset-x-4 z-50">
        <nav className="glass-panel flex items-center justify-between p-2 pb-2 px-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.hash === link.hash;
            return (
              <a 
                key={link.name} 
                href={link.hash}
                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 active:scale-90 relative ${isActive ? 'text-accent-blue' : 'text-gray-400 hover:text-gray-200'}`}
              >
                {isActive && <div className="absolute inset-0 bg-accent-blue/10 rounded-xl blur-md" />}
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className="relative z-10 mb-1" />
                <span className="text-[10px] font-medium relative z-10">{link.name}</span>
              </a>
            );
          })}
          
          <button 
            onClick={() => navigate('/onboarding')}
            className="flex flex-col items-center justify-center p-2 rounded-xl text-accent-cyan hover:text-accent-cyan/80 transition-all duration-300 active:scale-90 relative"
          >
            <div className="absolute inset-0 bg-accent-cyan/10 rounded-xl blur-md animate-pulse" />
            <ArrowRight size={20} strokeWidth={2.5} className="relative z-10 mb-1" />
            <span className="text-[10px] font-medium relative z-10">Start</span>
          </button>
        </nav>
      </div>
    </>
  );
}
