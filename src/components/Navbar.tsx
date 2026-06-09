import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openLoginModal } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="absolute inset-x-0 top-0 z-50 pt-2 sm:pt-3 px-2 sm:px-3">
      <div className="max-w-[1440px] mx-auto relative">
        <nav className="bg-white rounded-full p-[5px] flex items-center justify-between shadow-sm">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-tight">JM</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['Features', 'Templates', 'How It Works', 'Security', 'Pricing'].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT (Desktop) */}
          <div className="hidden md:flex items-center gap-6 pr-2">
            <div className="hidden lg:flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[13px] text-gray-600">Now in Public Beta</span>
            </div>
            <button onClick={openLoginModal} className="text-[13px] text-gray-600 hover:text-gray-900">
              Log In
            </button>
            <button 
              onClick={() => navigate('/onboarding')}
              className="group bg-gray-900 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 flex items-center gap-3"
            >
              <div className="overflow-hidden h-[20px] flex flex-col justify-start">
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] leading-[20px]">Get Started Free</span>
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] leading-[20px]">Get Started Free</span>
              </div>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] -rotate-45 group-hover:rotate-0">
                <ArrowRight size={12} className="text-gray-900" />
              </div>
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center mr-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={16} className="text-white" /> : <Menu size={16} className="text-white" />}
          </button>
        </nav>
      </div>

      {/* MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      <div 
        className={`fixed bottom-0 left-3 right-3 bg-white rounded-2xl p-6 transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] z-50 ${isOpen ? 'translate-y-[-12px]' : 'translate-y-full'}`}
      >
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[13px] text-gray-600">Now in Public Beta</span>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          {['Features', 'Templates', 'How It Works', 'Security', 'Pricing'].map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
              onClick={() => setIsOpen(false)}
              className="text-[28px] sm:text-[32px] font-medium text-gray-900"
            >
              {link}
            </a>
          ))}
        </div>
        <button 
          onClick={() => { setIsOpen(false); navigate('/onboarding'); }}
          className="group w-full bg-gray-900 text-white text-[15px] font-medium rounded-full pl-6 pr-2 py-3 flex items-center justify-between"
        >
          <div className="overflow-hidden h-[24px] flex flex-col justify-start">
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Start for free</span>
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[24px] leading-[24px]">Start for free</span>
          </div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] -rotate-45 group-hover:rotate-0">
            <ArrowRight size={14} className="text-gray-900" />
          </div>
        </button>
      </div>
    </div>
  );
}
