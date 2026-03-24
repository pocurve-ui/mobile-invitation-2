import React from 'react';
import { motion } from 'framer-motion';

export default function Page2({ setCurrentPage, setDirection }) {
  const handleNext = () => {
    setDirection(1);
    setCurrentPage(2);
  };

  return (
    <div className="w-full h-full relative flex flex-col pt-[200px] pb-24 px-6 overflow-hidden">
      <motion.div 
        className="z-10 flex-1 flex flex-col max-w-lg w-full"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.2 }}
      >

        <div className="w-full text-[19px] font-normal leading-[1.6] text-black tracking-tight break-keep">
          <div className="flex flex-col mt-0 divide-y divide-black/20">
            <div className="flex py-2">
              <span className="font-bold w-[52px] shrink-0 tracking-[0.03em]">일시</span>
              <span>2026년 4월 28일(화) 14:00</span>
            </div>
            
            <div className="flex py-2">
              <span className="font-bold w-[52px] shrink-0 tracking-[0.03em]">장소</span>
              <span>제주신화월드 랜딩관 볼룸 AB홀</span>
            </div>
 
            <div className="flex py-2">
              <span className="font-bold w-[52px] shrink-0 tracking-[0.03em]">주최</span>
              <span>FSAA 제주국제학교</span>
            </div>
          </div>
 
          <div className="mt-5 space-y-[13px]">
            <div className="space-y-0.5">
              <div className="font-bold text-[16px] tracking-tight text-black">FULTON SCIENCE ACADEMY ATHERTON</div>
              <div className="text-[13px] text-gray-500 font-normal leading-[1.1] tracking-tight">
                02-6274-1007 / www.fsaatherton.org
              </div>
            </div>

            <div className="flex gap-3">
              <a 
                href="tel:02-6274-1007"
                className="flex-1 flex items-center justify-center gap-2 border border-black/20 bg-transparent py-3 px-4 text-[14px] font-semibold transition-all duration-300 hover:border-[#ff00a2] hover:text-[#ff00a2] active:bg-[#ff00a2]/10"
              >
                전화 걸기
              </a>
              <a 
                href="https://www.fsaatherton.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-black/20 bg-transparent py-3 px-4 text-[14px] font-semibold transition-all duration-300 hover:border-[#00f191] hover:text-[#00f191] active:bg-[#00f191]/10"
              >
                홈페이지
              </a>
            </div>
          </div>

        </div>
      </motion.div>


    </div>
  );
}
