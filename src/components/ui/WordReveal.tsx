import { motion } from 'framer-motion';

interface WordRevealProps {
  text: string;
  className?: string;
}

export function WordReveal({ text, className = "" }: WordRevealProps) {
  const words = text.split(" ");
  
  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
