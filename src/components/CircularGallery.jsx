import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CircularGallery.css';

export default function CircularGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const calculateImagePosition = (index) => {
    const totalImages = images.length;
    const angleStep = (2 * Math.PI) / totalImages;
    const radius = 250; // Adjust this value to change circle size
    const angle = angleStep * index;

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      scale: index === currentIndex ? 1.2 : 0.8,
      zIndex: index === currentIndex ? 10 : 1,
    };
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.pageX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startX]);

  return (
    <div className="circular-gallery" ref={containerRef}>
      <div className="gallery-container">
        {images.map((image, index) => {
          const { x, y, scale, zIndex } = calculateImagePosition(
            (index - currentIndex + images.length) % images.length
          );

          return (
            <motion.div
              key={index}
              className="gallery-item"
              initial={false}
              animate={{
                x,
                y,
                scale,
                zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image.src} alt={image.alt || `Gallery image ${index + 1}`} />
            </motion.div>
          );
        })}
      </div>
      <div className="gallery-controls">
        <button onClick={handlePrev} className="control-btn prev">
          ←
        </button>
        <button onClick={handleNext} className="control-btn next">
          →
        </button>
      </div>
    </div>
  );
}