import React from 'react';
import { motion } from 'framer-motion';

export default function Page1({ setCurrentPage, setDirection }) {
  const handleNext = () => {
    setDirection(1);
    setCurrentPage(3);
  };

  return (
    <div className="w-full h-full relative flex flex-col pt-[210px] pb-24 px-6 overflow-hidden">
      {/* 중앙 정렬된 콘텐츠 */}
      <motion.div 
        className="z-10 flex-1 flex flex-col items-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        <div className="w-16 h-[1px] bg-gray-500 mb-10"></div>
        
        <div className="space-y-[18px] text-[16px] font-normal leading-[1.6] text-gray-800 tracking-tight break-keep text-center">
          <p>
            제주에서 아시아 최고의 STEM 교육 플랫폼을 제공할<br/>
            <strong className="font-bold text-black">풀턴 사이언스 아카데미 애서튼(FSAA)</strong>이<br/>
            새로운 출발을 알리는 기공식을 개최합니다.
          </p>
          <p>
            글로벌 교육혁신을 위한 FSAA의 성공을 위해<br/>
            함께 하시어 자리를 빛내 주시기를 바랍니다.
          </p>
          <p className="font-bold text-black pt-[14px]">
            FSAA 이사장 김 형 수
          </p>
        </div>
      </motion.div>


    </div>
  );
}
