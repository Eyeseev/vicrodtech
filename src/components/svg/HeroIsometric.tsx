"use client";
import React, { useRef, useState } from "react";
import { motion, SVGMotionProps } from "framer-motion";

const gridLines = [
  "M10 170L310 170",
  "M30 150L290 150",
  "M50 130L270 130",
  "M70 110L250 110",
  "M90 90L230 90",
  "M110 70L210 70",
  "M130 50L190 50",
  "M150 30L170 30",
];

const panels = [
  { x: 60, y: 60, w: 200, h: 80, r: 8 },
  { x: 80, y: 80, w: 160, h: 40, r: 6 },
  { x: 110, y: 100, w: 100, h: 20, r: 4 },
];

const nodes = [
  { cx: 70, cy: 70, r: 3 },
  { cx: 250, cy: 140, r: 3 },
  { cx: 160, cy: 120, r: 2 },
];

const HeroIsometric: React.FC<SVGMotionProps<SVGSVGElement>> = (props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Parallax effect on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => setParallax({ x: 0, y: 0 });

  return (
    <motion.svg
      ref={svgRef}
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      aria-hidden="true"
      style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Isometric grid lines animate draw-in */}
      <g stroke="#e5e7eb" strokeWidth="1">
        {gridLines.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.1 + i * 0.07 }}
          />
        ))}
      </g>
      {/* Isometric window panels animate draw-in */}
      <g stroke="#1c398e" strokeWidth="2">
        {panels.map((p, i) => (
          <motion.rect
            key={i}
            x={p.x}
            y={p.y}
            width={p.w}
            height={p.h}
            rx={p.r}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
            style={{ pathLength: 1 }}
          />
        ))}
      </g>
      {/* Accent circles pulse */}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="#1c398e"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.2, delay: 1.2 + i * 0.2, repeat: Infinity }}
        />
      ))}
    </motion.svg>
  );
};

export default HeroIsometric; 