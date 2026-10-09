import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Disable on touch-only devices
    if ('ontouchstart' in window && !window.matchMedia('(pointer:fine)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      try {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);

        const target = e.target;
        if (target && typeof target.closest === 'function') {
          const isInteractive = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer');
          setIsHovered(!!isInteractive);
        } else {
          setIsHovered(false);
        }
      } catch {
        // fail gracefully
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-indigo-500 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.1 }}
      />

      {/* Outer Halo */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-indigo-400/60 pointer-events-none z-50 backdrop-blur-[0.5px]"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 14),
          y: mousePosition.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </>
  );
}
