import React from 'react';
import { motion } from 'framer-motion';

export default function Page4() {
  return (
    <div className="w-full h-full relative flex flex-col pt-[190px] pb-24 px-6 overflow-hidden">
      <motion.div 
        className="z-10 flex-1 flex flex-col max-w-lg w-full"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        {/* 장소 정보 */}
        <div className="mb-[14px]">
          <h2 className="text-[16px] font-bold text-black tracking-tight mb-0.5">제주신화월드 랜딩관 볼룸 AB홀</h2>
          <p className="text-[16px] text-gray-600 font-normal tracking-tight">
            제주특별자치도 서귀포시 안덕면 신화역사로 304번길 38
          </p>
        </div>

        {/* 지도 이미지 */}
        <div className="w-full aspect-[16/10] bg-white overflow-hidden mb-4 border-[0.5px] border-[#BFBFBF]">
          <img 
            src="/assets/map_illust4-wh.png" 
            alt="지도 안내" 
            className="w-full h-full object-cover translate-y-[-10px] scale-[1.1] translate-x-[-1px]"
          />
        </div>

        {/* 안내 버튼 */}
        <div className="flex gap-3 mt-0">
          <a 
            href="https://www.shinhwaworld.com/howtogethere.jhtml?lang=kr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-black/20 bg-transparent py-3 px-4 text-[14px] text-black font-semibold transition-all duration-300 hover:border-[#ff00a2] hover:text-[#ff00a2] active:bg-[#ff00a2]/10"
          >
            대중교통, 주차장 안내
          </a>
          <a 
            href="https://naver.me/GTn3bYuT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-black/20 bg-transparent py-3 px-4 text-[14px] text-black font-semibold transition-all duration-300 hover:border-[#00f191] hover:text-[#00f191] active:bg-[#00f191]/10"
          >
            네이버 지도
          </a>
        </div>
      </motion.div>
    </div>
  );
}
