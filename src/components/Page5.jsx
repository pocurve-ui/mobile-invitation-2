import React from 'react';
import { motion } from 'framer-motion';

export default function Page5() {
  return (
    <div className="w-full h-full relative flex flex-col pt-[210px] pb-24 px-6 overflow-hidden">
      <motion.div 
        className="z-10 flex-1 flex flex-col max-w-lg w-full"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        {/* 슬로건 이미지 */}
        <div className="w-full mb-10">
          <img 
            src="/assets/slogan.svg" 
            alt="FSAA Slogan" 
            className="w-full h-auto brightness-0"
          />
        </div>

        {/* 구분선 */}
        <div className="w-full h-[1px] bg-black/20 mb-[32px]"></div>

        {/* 연락처 정보 */}
        <div className="space-y-3 text-[13px] text-gray-500 font-normal leading-[1.1] tracking-tight">
          <div className="space-y-[3px]">
            <p>2432, Boseong-ri / 1174, Gueok-ri, Daejeong-eup,</p>
            <p>Seogwipo-si, Jeju-do, Korea</p>
          </div>
          
          <div className="space-y-[9px]">
            <p>+82 2 6274 1007</p>
            <p>contact@atherton.sc.kr</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
