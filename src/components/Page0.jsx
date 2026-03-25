import React, { useState, useEffect } from 'react';

import DiagonalPatternAnimation from './DiagonalPatternAnimation';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Countdown from './Countdown';

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
          className="w-[91%] max-w-[532px] object-contain opacity-90 mt-[60px] -translate-y-[3%]"
        />
      </motion.div>

      {/* 2. 패턴 파도 애니메이션 (z-30으로 올리고 multiply 적용하여 다시 블렌딩 활성화) */}
      <div className="absolute inset-0 pointer-events-none z-30 mix-blend-multiply">
        <DiagonalPatternAnimation />
      </div>

      {/* 3. 상단 콘텐츠: 로고와 타이틀 */}
      <div className="z-20 w-full flex flex-col items-center pointer-events-none mt-2 gap-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center w-full"
        >
          <img 
            src="/assets/mainpage_logo.svg" 
            alt="FSAA 메인 로고" 
            className="h-[88px] w-auto object-contain brightness-0 mix-blend-multiply" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
          className="w-full flex justify-center px-6"
        >
          <h1 className="text-[2.6rem] font-extrabold text-center leading-[1.05] tracking-[-0.03em] text-black mix-blend-multiply uppercase">
            FSAA<br />
            GROUNDBREAKING<br />
            CEREMONY
          </h1>
        </motion.div>
      </div>


      <div className="flex-1" />

      {/* 3. 하단 콘텐츠: 텍스트 및 일시 */}
      <motion.div 
        className="z-20 flex flex-col items-center w-full pointer-events-none pb-[1vh]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <p className="text-black text-[16px] font-sans tracking-tight font-medium mb-0 relative z-10 drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]">
          FSAA 제주국제학교 기공식
        </p>
        <Countdown targetDate="2026-04-28T14:00:00+09:00" />
      </motion.div>


    </div>
  );
}
