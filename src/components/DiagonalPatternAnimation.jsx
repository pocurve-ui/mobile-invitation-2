import React, { useState, useEffect } from 'react';

// Polygons defined from 0_ptn ele2.svg
const POLYGONS = [
  "387.17 603.89 909.84 604 1953.97 1637.98 1431.86 1637.98 387.17 603.89", // 0: Stripe 2 (Top middle)
  "960.38 0 1483.04 .1 2527.18 1034.09 2005.06 1034.09 960.38 0",             // 1: Stripe 4 (Top right)
  "0 1774.44 522.67 1774.54 1566.8 2808.53 1044.68 2808.53 0 1774.44",        // 2: Stripe 1 (Bottom left)
  "908.6 1637.98 1431.26 1638.08 2475.4 2672.07 1953.28 2672.07 908.6 1637.98"// 3: Stripe 3 (Middle)
];

// The order they should appear: Top-Right to Bottom-Left for a true spatial Left-to-Right diagonal sweep
const SEQUENCE = [0, 3, 1, 2];

export default function DiagonalPatternAnimation() {
  const colors = ['#00f191', '#ff4400', '#0043ff', '#ff00a2'];
  const [colorIndex, setColorIndex] = useState(() => Math.floor(Math.random() * colors.length));
  const [key, setKey] = useState(0);

  useEffect(() => {
    // 6.6s cycle: 2.5s to appear + 2.0s maintain + 1.5s fade out + 0.6s gap
    const interval = setInterval(() => {
      setColorIndex(prev => (prev + 1) % colors.length);
      setKey(prev => prev + 1);
    }, 6600); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-multiply">
      <style>{`
        @keyframes softWipeStay {
          0% {
            -webkit-mask-position: 100% 100%;
            mask-position: 100% 100%;
          }
          100% {
            -webkit-mask-position: 0% 0%;
            mask-position: 0% 0%;
          }
        }
        @keyframes fadeOutTogether {
          0%, 68% { opacity: 1; }
          91%, 100% { opacity: 0; }
        }
        .soft-gradient-wipe {
          -webkit-mask-image: linear-gradient(to right bottom, black 0%, black 40%, transparent 60%, transparent 100%);
          mask-image: linear-gradient(to right bottom, black 0%, black 40%, transparent 60%, transparent 100%);
          -webkit-mask-size: 300% 300%;
          mask-size: 300% 300%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
        }
      `}</style>

      {/* Container scaled to fit properly and match reference 0_ptn ele2.svg size & position */}
      {/* Reduced to 90% of 2.43x = 2.19x limit for visual refinement. */}
      <div 
        key={key}
        className="relative w-[1500%] aspect-[2527/2808]"
        style={{ 
          transform: 'scale(2.19)', marginTop: 'calc(-80% + 240px)', marginLeft: '30px',
          animation: 'fadeOutTogether 6.6s ease-in-out'
        }}
      >
        {POLYGONS.map((points, index) => {
          const order = SEQUENCE.indexOf(index);
          const delay = order * 0.5 + 0.2; // slight wait before the first one appears
          
          return (
            <svg
              key={`${key}-${index}`}
              viewBox="0 0 2527.18 2808.53"
              className="absolute inset-0 w-full h-full soft-gradient-wipe mix-blend-multiply"
              style={{
                animation: `softWipeStay 0.8s ease-out ${delay}s both`
              }}
            >
              <polygon fill={colors[colorIndex]} points={points} />
            </svg>
          );
        })}
      </div>
    </div>
  );
}
