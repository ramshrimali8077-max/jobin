import { useState, useEffect } from 'react';

export const FadeIn = ({ children, delay = 0, duration = 1000 }: { children: React.ReactNode, delay?: number, duration?: number }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className="transition-opacity"
      style={{ opacity: visible ? 1 : 0, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};
