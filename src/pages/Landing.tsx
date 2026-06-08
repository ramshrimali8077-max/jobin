import { Navbar } from '../components/Navbar';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Templates } from '../components/sections/Templates';
import { Security } from '../components/sections/Security';
import { Pricing } from '../components/sections/Pricing';
import { LoginModal } from '../components/LoginModal';
import { useAuth } from '../context/AuthContext';

export function Landing() {
  const { isLoginModalOpen, closeLoginModal } = useAuth();
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Templates />
        <Security />
        <Pricing />
      </main>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
}
