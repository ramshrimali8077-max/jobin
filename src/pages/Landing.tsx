import { Navbar } from '../components/Navbar';
import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { Features } from '../components/sections/Features';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Templates } from '../components/sections/Templates';
import { Security } from '../components/sections/Security';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { LoginModal } from '../components/LoginModal';
import { useAuth } from '../context/AuthContext';

export function Landing() {
  const { isLoginModalOpen, closeLoginModal } = useAuth();
  return (
    <div className="relative min-h-screen bg-indigo-50/40 overflow-hidden font-sans">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] opacity-50 mix-blend-multiply pointer-events-none -translate-y-1/2" />
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-brand-pink/20 rounded-full blur-[100px] opacity-40 mix-blend-multiply pointer-events-none translate-x-1/3" />
      <div className="absolute top-[60%] left-0 w-[700px] h-[700px] bg-brand-purple/20 rounded-full blur-[120px] opacity-40 mix-blend-multiply pointer-events-none -translate-x-1/4" />
      <div className="absolute bottom-0 right-1/4 w-[900px] h-[900px] bg-brand-blue/15 rounded-full blur-[150px] opacity-50 mix-blend-multiply pointer-events-none translate-y-1/3" />
      
      <div className="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <Templates />
        <Security />
        <FAQ />
        <Pricing />
      </main>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
}
