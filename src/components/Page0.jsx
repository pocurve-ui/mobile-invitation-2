import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import DiagonalPatternAnimation from './DiagonalPatternAnimation';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Page0({ setDirection, setCurrentPage }) {
  const handleNext = () => {
    setDirection(1);
    setCurrentPage(1);
  };

  return (
    <div className="w-full h-full relative flex flex-col items-center pt-8 pb-24 px-6 bg-white">
      
      {/* 1. 배경 아치 로고 (가장 밑바탕 z-0) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <img 
          src="/assets/0_arch.png" 
          alt="배경 아치 로고" 
          className="w-[91%] max-w-[532px] object-contain opacity-90 mt-[60px]"
        />
        {/* 2. 패턴 파도 애니메이션 (아치와 같은 컨텍스트 내에서 블렌딩) */}
        <div className="absolute inset-0 pointer-events-none">
          <DiagonalPatternAnimation />
        </div>
      </motion.div>

      {/* 3. 상단 콘텐츠: 중앙 정렬된 로고와 좌측 정렬된 타이틀 */}
      <div className="z-20 w-full flex flex-col items-center pointer-events-none mt-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center w-full"
        >
          <img 
            src="/assets/0_logo.svg" 
            alt="FSAA 방패 로고" 
            className="w-[29%] md:w-[124px] h-auto object-contain mix-blend-multiply" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="w-full flex justify-center"
        >
          <img 
            src="/0_assets2/0_title3.svg" 
            alt="STEP INTO THE NEXT FRONTIER" 
            className="w-[81%] h-auto object-contain mix-blend-multiply" 
          />
        </motion.div>
      </div>

      <div className="flex-1" />



      {/* 3. 하단 콘텐츠 (텍스트, 카운트다운 - 화살표 위에 배치) */}
      <motion.div 
        className="z-20 flex flex-col items-center w-full pointer-events-none mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <p className="text-black text-[16px] font-sans tracking-tight font-medium mix-blend-multiply mb-0 relative z-10">
          FSAA 제주 캠퍼스 기공식
        </p>
        <Countdown targetDate="2026-04-28T14:00:00+09:00" />
      </motion.div>


    </div>
  );
}
