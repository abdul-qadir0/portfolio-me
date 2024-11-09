// components/StarryBackground.jsx
import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = (count) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.5,
          speed: Math.random() * 0.05
        });
      }
      return stars;
    };

    const drawStars = (stars) => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
    };

    const updateStars = (stars) => {
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
        }
        star.opacity = Math.sin(Date.now() * 0.001 + star.x + star.y) * 0.5 + 0.5;
      });
    };

    const animateStars = (stars) => {
      updateStars(stars);
      drawStars(stars);
      animationFrameId = requestAnimationFrame(() => animateStars(stars));
    };

    const handleResize = () => {
      resizeCanvas();
      stars = createStars(400);
    };

    resizeCanvas();
    window.addEventListener('resize', handleResize);

    let stars = createStars(400);
    animateStars(stars);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default StarryBackground;