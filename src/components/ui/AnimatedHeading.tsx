import { useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedHeading = ({ text, className, style }: AnimatedHeadingProps) => {
  const [visible, setVisible] = useState(false);
  const initialDelay = 200;
  const charDelay = 30;

  useEffect(() => {
    // start animation shortly after mount
    const t = setTimeout(() => setVisible(true), initialDelay);
    return () => clearTimeout(t);
  }, []);

  const lines = text.split('\n');

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} style={{ display: 'block' }}>
          {line.split('').map((char, charIdx) => {
            const delay = initialDelay + (lineIdx * lines[0].length * charDelay) + (charIdx * charDelay);
            return (
              <span
                key={charIdx}
                style={{
                  display: 'inline-block',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-18px)',
                  transition: `opacity 500ms ease, transform 500ms ease`,
                  transitionDelay: `${delay}ms`
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
};
