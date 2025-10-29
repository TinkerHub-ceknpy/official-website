import React, { useRef, useEffect } from 'react';
import './ContainerScrollAnimation.css';

export default function ContainerScrollAnimation({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      el.style.transform = `translateY(-${scrollProgress * 40}px) scale(${1 - scrollProgress * 0.05})`;
      el.style.opacity = `${0.7 + scrollProgress * 0.3}`;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container-scroll-animation" ref={ref}>
      {children}
    </div>
  );
}
