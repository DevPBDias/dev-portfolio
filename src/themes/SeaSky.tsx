"use client";

import { useEffect, useRef, useState } from "react";

type Particle = { left: number; top: number; delay: number; duration: number };

export default function AnimeSky() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const count = 20;
    const generated: Particle[] = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setParticles(generated);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      {/* Animated background image with slow pan */}
      <div className="absolute inset-0 animate-slow-pan">
        <img
          src="/images/day.png"
          alt="Anime Sky Background"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/20" />

      {/* Floating light particles - rendered only after mount to avoid SSR mismatch */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 bg-white rounded-full opacity-60 animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Animated birds on power lines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-bird-fly"
            style={{
              left: `${20 + i * 30}%`,
              top: `${50 + i * 5}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            <div className="w-2 h-2 bg-gray-800 rounded-full opacity-70" />
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slow-pan {
          0% {
            transform: translate(0, 0) scale(1.1);
          }
          50% {
            transform: translate(-3%, -2%) scale(1.15);
          }
          100% {
            transform: translate(0, 0) scale(1.1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
        @keyframes bird-fly {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-slow-pan {
          animation: slow-pan 60s ease-in-out infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-bird-fly {
          animation: bird-fly 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
