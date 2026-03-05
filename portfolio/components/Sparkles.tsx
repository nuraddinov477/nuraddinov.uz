"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: "star" | "dot" | "cross";
  color: string;
}

function StarIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function CrossIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M11 0h2v24h-2zM0 11h24v2H0z" />
    </svg>
  );
}

export default function Sparkles({ count = 40 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ["#facc15", "#fde68a", "#fbbf24", "#ffffff", "#fef08a"];
    const types: Particle["type"][] = ["star", "dot", "cross"];
    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 4,
      delay: Math.random() * 6,
      duration: Math.random() * 3 + 2,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `twinkle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: 0,
          }}
        >
          {p.type === "star" && <StarIcon size={p.size} color={p.color} />}
          {p.type === "dot" && (
            <div
              style={{
                width: p.size / 2,
                height: p.size / 2,
                borderRadius: "50%",
                background: p.color,
                boxShadow: `0 0 ${p.size}px ${p.color}`,
              }}
            />
          )}
          {p.type === "cross" && <CrossIcon size={p.size} color={p.color} />}
        </div>
      ))}
    </div>
  );
}
