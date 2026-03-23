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
  const [colorIndex, setColorIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // 14.5s cycle: 12s animation + 3.6s max staggered delay ensures 1.5s solid hold of all 4 stripes before wipe out
    const interval = setInterval(() => {
      setColorIndex(prev => (prev + 1) % colors.length);
      setKey(prev => prev + 1);
    }, 11700); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-multiply">
      <style>{`
        @keyframes softWipeStay {
          0% {
            -webkit-mask-position: -15000vw -15000vw;
            mask-position: -15000vw -15000vw;
          }
          100% {
            -webkit-mask-position: 1500vw 1500vw;
            mask-position: 1500vw 1500vw;
          }
        }
        .soft-gradient-wipe {
          /* 15000vw mask with sharp 5% transition bands (20%-25% and 75%-80%) creates a distinct 0.4s wipe effect 
             instead of a global slow fade, fixing the "all fading at once" issue. */
          -webkit-mask-image: linear-gradient(-45deg, transparent 0%, transparent 20%, black 25%, black 75%, transparent 80%, transparent 100%);
          mask-image: linear-gradient(-45deg, transparent 0%, transparent 20%, black 25%, black 75%, transparent 80%, transparent 100%);
          -webkit-mask-size: 15000vw 15000vw;
          mask-size: 15000vw 15000vw;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
        }
      `}</style>

      {/* Container scaled to fit properly and match reference 0_ptn ele2.svg size & position */}
      {/* Reduced to 90% of 2.43x = 2.19x limit for visual refinement. */}
      <div 
        className="relative w-[1500%] aspect-[2527/2808]"
        style={{ transform: 'scale(2.19)', marginTop: 'calc(-80% + 240px)', marginLeft: '30px' }}
      >
        {POLYGONS.map((points, index) => {
          const order = SEQUENCE.indexOf(index);
          const delay = order * 1.2 - 1.3; // 0.7s wait before appearing
          
          return (
            <svg
              key={`${key}-${index}`}
              viewBox="0 0 2527.18 2808.53"
              className="absolute inset-0 w-full h-full soft-gradient-wipe mix-blend-multiply"
              style={{
                animation: `softWipeStay 12.0s linear ${delay}s both`
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
