import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const shapes = [
  { id: 1, type: 'polygon', points: "369.23 61.54 430.77 61.54 492.31 61.54 553.85 61.54 553.85 0 492.31 0 430.77 0 369.23 0 307.69 0 246.15 0 246.15 61.54 307.69 61.54 369.23 61.54" },
  { id: 2, type: 'rect', x: 184.62, y: 61.54, width: 61.54, height: 61.54 },
  { id: 3, type: 'rect', x: 553.85, y: 61.54, width: 61.54, height: 61.54 },
  { id: 4, type: 'rect', x: 123.08, y: 123.08, width: 61.54, height: 61.54 },
  { id: 5, type: 'polygon', points: "430.77 184.62 492.31 184.62 492.31 123.08 430.77 123.08 369.23 123.08 307.69 123.08 307.69 184.62 369.23 184.62 430.77 184.62" },
  { id: 6, type: 'rect', x: 615.38, y: 123.08, width: 61.54, height: 61.54 },
  { id: 7, type: 'rect', x: 61.54, y: 184.62, width: 61.54, height: 61.54 },
  { id: 8, type: 'rect', x: 246.15, y: 184.62, width: 61.54, height: 61.54 },
  { id: 9, type: 'rect', x: 492.31, y: 184.62, width: 61.54, height: 61.54 },
  { id: 10, type: 'rect', x: 676.92, y: 184.62, width: 61.54, height: 61.54 },
  { id: 11, type: 'rect', x: 184.62, y: 246.15, width: 61.54, height: 61.54 },
  { id: 12, type: 'rect', x: 369.23, y: 246.15, width: 61.54, height: 61.54 },
  { id: 13, type: 'rect', x: 553.85, y: 246.15, width: 61.54, height: 61.54 },
  { id: 14, type: 'polygon', points: "738.46 246.15 738.46 307.69 738.46 369.23 738.46 430.77 738.46 492.31 738.46 553.85 800 553.85 800 492.31 800 430.77 800 369.23 800 307.69 800 246.15 738.46 246.15" },
  { id: 15, type: 'rect', x: 307.69, y: 307.69, width: 61.54, height: 61.54 },
  { id: 16, type: 'rect', x: 430.77, y: 307.69, width: 61.54, height: 61.54 },
  { id: 17, type: 'polygon', points: "615.38 369.23 615.38 430.77 615.38 492.31 676.92 492.31 676.92 430.77 676.92 369.23 676.92 307.69 615.38 307.69 615.38 369.23" },
  { id: 18, type: 'polygon', points: "184.62 369.23 184.62 307.69 123.08 307.69 123.08 369.23 123.08 430.77 123.08 492.31 184.62 492.31 184.62 430.77 184.62 369.23" },
  { id: 19, type: 'rect', x: 246.15, y: 369.23, width: 61.54, height: 61.54 },
  { id: 20, type: 'rect', x: 369.23, y: 369.23, width: 61.54, height: 61.54 },
  { id: 21, type: 'rect', x: 492.31, y: 369.23, width: 61.54, height: 61.54 },
  { id: 22, type: 'polygon', points: "61.54 430.77 61.54 369.23 61.54 307.69 61.54 246.15 0 246.15 0 307.69 0 369.23 0 430.77 0 492.31 0 553.85 61.54 553.85 61.54 492.31 61.54 430.77" },
  { id: 23, type: 'rect', x: 307.69, y: 430.77, width: 61.54, height: 61.54 },
  { id: 24, type: 'rect', x: 430.77, y: 430.77, width: 61.54, height: 61.54 },
  { id: 25, type: 'rect', x: 184.62, y: 492.31, width: 61.54, height: 61.54 },
  { id: 26, type: 'rect', x: 369.23, y: 492.31, width: 61.54, height: 61.54 },
  { id: 27, type: 'rect', x: 553.85, y: 492.31, width: 61.54, height: 61.54 },
  { id: 28, type: 'rect', x: 61.54, y: 553.85, width: 61.54, height: 61.54 },
  { id: 29, type: 'rect', x: 246.15, y: 553.85, width: 61.54, height: 61.54 },
  { id: 30, type: 'rect', x: 492.31, y: 553.85, width: 61.54, height: 61.54 },
  { id: 31, type: 'rect', x: 676.92, y: 553.85, width: 61.54, height: 61.54 },
  { id: 32, type: 'rect', x: 123.08, y: 615.38, width: 61.54, height: 61.54 },
  { id: 33, type: 'polygon', points: "369.23 615.38 307.69 615.38 307.69 676.92 369.23 676.92 430.77 676.92 492.31 676.92 492.31 615.38 430.77 615.38 369.23 615.38" },
  { id: 34, type: 'rect', x: 615.38, y: 615.38, width: 61.54, height: 61.54 },
  { id: 35, type: 'rect', x: 184.62, y: 676.92, width: 61.54, height: 61.54 },
  { id: 36, type: 'rect', x: 553.85, y: 676.92, width: 61.54, height: 61.54 },
  { id: 37, type: 'polygon', points: "430.77 738.46 369.23 738.46 307.69 738.46 246.15 738.46 246.15 800 307.69 800 369.23 800 430.77 800 492.31 800 553.85 800 553.85 738.46 492.31 738.46 430.77 738.46" },
];

const waveColors = ["#0043ff", "#ff00a2", "#ff4400", "#00f191"];

export default function PatternWave() {
  const [waveIndex, setWaveIndex] = useState(0);

  useEffect(() => {
    // 한 사이클 5초 (5000ms)로 단축
    const waveCycleTime = 5000; 
    const timer = setInterval(() => {
      setWaveIndex(prev => (prev + 1) % waveColors.length);
    }, waveCycleTime);
    return () => clearInterval(timer);
  }, []);

  const animatedShapes = useMemo(() => {
    return shapes.map(shape => {
      let cx = 0, cy = 0;
      if (shape.type === 'rect') {
        cx = shape.x + shape.width / 2;
        cy = shape.y + shape.height / 2;
      } else {
        const pts = shape.points.trim().split(/\s+/).map(Number);
        let sumX = 0, sumY = 0;
        for (let i = 0; i < pts.length; i += 2) {
          sumX += pts[i];
          sumY += pts[i+1];
        }
        cx = sumX / (pts.length / 2);
        cy = sumY / (pts.length / 2);
      }
      
      const dx = cx - 400;
      const dy = cy - 400;
      const distance = Math.sqrt(dx*dx + dy*dy);
      
      // 가장 먼 거리가 대략 565 내외, 거리에 비례하여 점멸 딜레이 부여 (최대 3초)
      const delay = (distance / 565) * 3.0;

      return { ...shape, delay };
    });
  }, []);

  const currentColor = waveColors[waveIndex];
  const previousColor = waveIndex === 0 ? "#002288" : waveColors[(waveIndex - 1 + waveColors.length) % waveColors.length];

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-10 overflow-hidden mix-blend-screen">
      <style>
        {`
          @keyframes wave-fade {
            0% { opacity: 0; transform: scale(0.95); }
            50% { opacity: 0.6; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.95); }
          }
          .wave-shape {
            backface-visibility: hidden;
            transform-box: fill-box;
            transform-origin: center;
            opacity: 0;
          }
        `}
      </style>
      <svg 
        viewBox="0 0 800 800" 
        className="w-[150vw] h-[150vw] sm:w-[120vw] sm:h-[120vw] md:w-[100vw] md:h-[100vw] max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <g key={waveIndex}>
          {animatedShapes.map((shape) => {
            const style = {
              animation: `wave-fade 3s ease-in-out forwards`,
              animationDelay: `${shape.delay * 0.6}s`,
              fill: currentColor
            };

            if (shape.type === 'rect') {
              return (
                <rect
                  key={`${shape.id}-${waveIndex}`}
                  x={shape.x}
                  y={shape.y}
                  width={shape.width}
                  height={shape.height}
                  className="wave-shape"
                  style={style}
                />
              );
            } else {
              return (
                <polygon
                  key={`${shape.id}-${waveIndex}`}
                  points={shape.points}
                  className="wave-shape"
                  style={style}
                />
              );
            }
          })}
        </g>
      </svg>
    </div>
  );
}
