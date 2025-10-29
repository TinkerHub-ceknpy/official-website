import React, { useRef, useEffect } from 'react';
import './ScrollStack.css';

const items = [
  {
    title: 'Learn Together',
    description: 'Collaborate and grow with the community.'
  },
  {
    title: 'Build Projects',
    description: 'Work on real-world challenges and showcase your skills.'
  },
  {
    title: 'Join Events',
    description: 'Participate in workshops, hackathons, and meetups.'
  },
  {
    title: 'Connect',
    description: 'Network with like-minded peers and mentors.'
  }
];

export default function ScrollStack() {
  const stackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const stack = stackRef.current;
      if (!stack) return;
      const cards = stack.querySelectorAll('.scroll-stack__card');
      const stackRect = stack.getBoundingClientRect();
      cards.forEach((card, i) => {
        const cardRect = card.getBoundingClientRect();
        const offset = cardRect.top - stackRect.top;
        const progress = Math.min(Math.max(offset / stackRect.height, 0), 1);
        card.style.transform = `translateY(-${progress * 40}px) scale(${1 - progress * 0.1})`;
        card.style.opacity = `${1 - progress * 0.5}`;
        card.style.zIndex = `${items.length - i}`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-stack" ref={stackRef}>
      {items.map((item, i) => (
        <div className="scroll-stack__card" key={i}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
