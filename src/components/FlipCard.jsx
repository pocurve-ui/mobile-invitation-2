import React, { useEffect, useState, useRef } from 'react';

const SingleDigit = ({ digit }) => {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [nextDigit, setNextDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (digit !== currentDigit) {
      setNextDigit(digit);
      setIsFlipping(true);

      const timer = setTimeout(() => {
        setCurrentDigit(digit);
        setIsFlipping(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [digit, currentDigit]);

  return (
    <div className="relative w-[18px] sm:w-[19px] h-[44px] sm:h-[48px] text-black text-[1.74rem] sm:text-[1.87rem] font-bold bg-transparent border-none rounded-none overflow-hidden perspective">
      {/* Static Top */}
      <div className="absolute inset-x-0 top-0 h-1/2 flex items-end justify-center bg-transparent overflow-hidden">
        <span className="leading-[0] mt-[50%] absolute z-10 block translate-y-[2%] opacity-100">{nextDigit}</span>
      </div>
      {/* Static Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 flex items-start justify-center bg-transparent overflow-hidden">
        <span className="leading-[0] mb-[50%] absolute z-10 block translate-y-[2%] opacity-100">{currentDigit}</span>
      </div>
      {/* Flipping Top */}
      {isFlipping && (
        <div className="absolute inset-x-0 top-0 h-1/2 flex items-end justify-center bg-white/50 origin-bottom flip-top-flap overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
          <span className="leading-[0] mt-[50%] absolute z-10 block translate-y-[2%] opacity-100">{currentDigit}</span>
        </div>
      )}
      {/* Flipping Bottom */}
      {isFlipping && (
        <div className="absolute inset-x-0 bottom-0 h-1/2 flex items-start justify-center bg-white/50 origin-top flip-bottom-flap overflow-hidden">
          <span className="leading-[0] mb-[50%] absolute z-10 block translate-y-[2%] opacity-100">{nextDigit}</span>
        </div>
      )}
    </div>
  );
};

const FlipCard = ({ digit, label }) => {
  const tens = Math.floor(digit / 10);
  const ones = digit % 10;

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-0">
        <SingleDigit digit={tens} />
        <SingleDigit digit={ones} />
      </div>
      
      {/* Label (Days, Hours, Minutes, Seconds) */}
      <span className="text-[13px] sm:text-[13px] text-black font-light font-sans tracking-wide mt-[-5px]">
        {label}
      </span>
      
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        @keyframes flipTop {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-90deg); }
        }
        @keyframes flipBottom {
          0% { transform: rotateX(90deg); }
          100% { transform: rotateX(0deg); }
        }
        .flip-top-flap {
          animation: flipTop 0.3s ease-in forwards;
          z-index: 30;
        }
        .flip-bottom-flap {
          animation: flipBottom 0.3s ease-out 0.3s forwards;
          transform: rotateX(90deg);
          z-index: 30;
        }
      `}</style>
    </div>
  );
};

export default FlipCard;
