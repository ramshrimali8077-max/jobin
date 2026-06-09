import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { WordReveal } from '@/components/ui/WordReveal';


export function Step13Auth() {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      // On success, redirect to dashboard
      navigate('/dashboard');
    } catch (e) {
      console.error(e);
      // Wait, just in case auth fails, do not block entirely
    }
  };

  const handleSkip = () => {
    // Skip auth and go directly to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] text-center font-sans">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <WordReveal className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[-0.03em] mb-3 text-white" text="Your workspace is ready." />
      <p className="text-[16px] text-gray-400 mb-10">Connect Google to continue.</p>
      
      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <button 
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-white px-6 py-4 rounded-full text-[15px] font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" width="18" height="18" />
          Continue with Google
        </button>

        <button 
          onClick={handleSkip}
          className="text-[14px] text-gray-400 hover:text-white font-medium transition-colors mt-2"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}