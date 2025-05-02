// AnimatedText.tsx
import React, { useRef, useEffect, useState } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text, className  }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`animated-text-container ${className || ''}`}>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className={`letter ${isVisible ? 'visible' : ''}`}
        style={{ animationDelay: `${i * 50}ms` }}
      >
        {char}
      </span>
    ))}
  </div>
  );
};

export default AnimatedText;
