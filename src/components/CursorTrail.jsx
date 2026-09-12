import React, { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [hearts, setHearts] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch primary
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    let idCounter = 0;
    const handleMouseMove = (e) => {
      // Throttle creation
      if (Math.random() > 0.4) return;

      const newHeart = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 12 + 10,
        rotation: (Math.random() - 0.5) * 40,
        symbol: ['♡', '💖', '✨', '🌸', '💕'][Math.floor(Math.random() * 5)]
      };

      setHearts(prev => [...prev.slice(-12), newHeart]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (hearts.length === 0) return;
    const timer = setTimeout(() => {
      setHearts(prev => prev.slice(1));
    }, 800);
    return () => clearTimeout(timer);
  }, [hearts]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute transition-all duration-700 ease-out select-none text-[#C76575] opacity-80 animate-ping"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            fontSize: `${heart.size}px`,
            transform: `translate(-50%, -50%) rotate(${heart.rotation}deg)`,
          }}
        >
          {heart.symbol}
        </span>
      ))}
    </div>
  );
}
