import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  signupWithEmail: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth as any, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    if (!auth) return;
    await signInWithPopup(auth as any, googleProvider as any);
  };

  const loginWithEmail = async (email: string, pass: string) => {
    if (!auth) return;
    await signInWithEmailAndPassword(auth as any, email, pass);
  };

  const signupWithEmail = async (email: string, pass: string) => {
    if (!auth) return;
    await createUserWithEmailAndPassword(auth as any, email, pass);
  };

  const logout = () => {
    if (!auth) return Promise.resolve();
    return signOut(auth as any);
  };

  return (
    <AuthContext.Provider value={{ 
      user, loading, loginWithGoogle, loginWithEmail, signupWithEmail, logout,
      isLoginModalOpen, openLoginModal: () => setIsLoginModalOpen(true), closeLoginModal: () => setIsLoginModalOpen(false)
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
