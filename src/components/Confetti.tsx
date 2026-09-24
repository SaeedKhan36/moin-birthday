import { useEffect, useMemo, useState } from "react";

type Piece = {
  id: number;
  left: string;
  delay: string;
  duration: string;
  color: string;
  size: string;
  radius: string;
};

const COLORS = ["#7dd3fc", "#fef08a", "#99f6e4", "#c4b5fd", "#fda4af", "#86efac", "#fdba74"];

export function Confetti({ active }: { active: boolean }) {
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    if (!active) return;
    setBurst(1);
    const id = window.setInterval(() => setBurst((b) => b + 1), 4500);
    return () => window.clearInterval(id);
  }, [active]);

  const pieces = useMemo(() => {
    if (!active || burst === 0) return [] as Piece[];
    return Array.from({ length: 48 }, (_, i) => ({
      id: burst * 100 + i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 1.2}s`,
      duration: `${2.8 + Math.random() * 2.4}s`,
      color: COLORS[i % COLORS.length],
      size: `${6 + Math.random() * 8}px`,
      radius: Math.random() > 0.5 ? "2px" : "999px",
    }));
  }, [active, burst]);

  if (!active) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece absolute top-0"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.radius,
            animationDelay: p.delay,
            animationDuration: p.duration,
            border: "1px solid #1c1917",
          }}
        />
      ))}
    </div>
  );
}
