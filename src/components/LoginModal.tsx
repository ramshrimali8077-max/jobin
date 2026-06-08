import { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import styles from './LoginModal.module.css';

export function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { loginWithGoogle, loginWithEmail, signupWithEmail } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogle = async () => {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to authenticate with Google');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      if (isLogin) {
        await loginWithEmail(email, password);
      } else {
        await signupWithEmail(email, password);
      }
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to authenticate');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>

        <div className={styles.header}>
          <h2>{isLogin ? 'Welcome back' : 'Create an account'}</h2>
          <p>{isLogin ? 'Enter your details to access your drafts.' : 'Get started with Job Mail Loop today.'}</p>
        </div>

        {error && (
          <div className={styles.error}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <button className={styles.googleBtn} onClick={handleGoogle} disabled={loading}>
          <img src="https://www.google.com/favicon.ico" alt="Google" width="16" height="16" />
          Continue with Google
        </button>

        <div className={styles.divider}>
          <span>or continue with email</span>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email address</label>
            <input 
              type="email" 
              placeholder="you@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
            />
          </div>
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className={styles.footer}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} disabled={loading}>
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
}
