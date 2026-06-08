import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnswerRevealProps {
  children: React.ReactNode;
}

export function AnswerReveal({ children }: AnswerRevealProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex-1 flex flex-col items-center">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xl mx-auto flex flex-col gap-4 animate-pulse mt-4"
          >
            <div className="h-16 bg-gray-200/60 rounded-2xl w-full"></div>
            <div className="h-16 bg-gray-200/60 rounded-2xl w-full"></div>
            <div className="h-16 bg-gray-200/60 rounded-2xl w-full"></div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
