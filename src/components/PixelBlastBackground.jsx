import React, { useRef, useEffect } from 'react';
import './PixelBlastBackground.css';

export default function PixelBlastBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Pixel size between 6 and 15
    const minPixelSize = 6;
    const maxPixelSize = 15;
    // Only black color
    const colors = ['#111'];
    // Fewer pixels (lower density)
    const density = 0.08; // 8% of normal density
    const pixels = [];
    for (let x = 0; x < width; x += maxPixelSize) {
      for (let y = 0; y < height; y += maxPixelSize) {
        if (Math.random() < density) {
          const size = Math.floor(Math.random() * (maxPixelSize - minPixelSize + 1)) + minPixelSize;
          pixels.push({
            x,
            y,
            size,
            color: colors[0],
            dx: (Math.random() - 0.5) * 2.5, // Faster movement
            dy: (Math.random() - 0.5) * 2.5,
          });
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let pixel of pixels) {
        pixel.x += pixel.dx;
        pixel.y += pixel.dy;
        if (pixel.x < 0 || pixel.x > width) pixel.dx *= -1;
        if (pixel.y < 0 || pixel.y > height) pixel.dy *= -1;
        ctx.fillStyle = pixel.color;
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="pixel-blast-bg">
      <canvas ref={canvasRef} className="pixel-blast-canvas" />
    </div>
  );
}
