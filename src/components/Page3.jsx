import React from 'react';
import { motion } from 'framer-motion';

export default function Page3({ setCurrentPage, setDirection }) {
  const schedule = [
    { time: '14:00 ~ 14:08', title: '개식 및 참석 내외빈 소개' },
    { time: '14:00 ~ 14:15', title: '제작영상 상영' },
    { time: '14:15 ~ 14:19', title: '회장님 인사말' },
    { time: '14:19 ~ 14:23', title: '환영사' },
    { time: '14:23 ~ 14:35', title: '축사' },
    { time: '14:35 ~ 14:45', title: '기념 세레모니 및 촬영' },
    { time: '14:45 ~ 14:50', title: '폐식 및 안내' },
    { time: '15:00 ~ 15:30', title: 'SITE TOUR' },
  ];

  const handleNext = () => {
    // 마지막 페이지이므로 첫 화면으로 돌아가게 설정하거나 동작을 정의. (여기서는 예시로 0페이지로 이동)
    setDirection(1);
    setCurrentPage(0);
  };

  return (
    <div className="w-full h-full relative flex flex-col pt-[200px] pb-24 px-6 overflow-hidden">
      <motion.div 
        className="z-10 flex-1 flex flex-col max-w-lg w-full max-h-full"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        <div className="space-y-[2.5px] w-full text-black">
          {schedule.map((item, index) => (
            <div key={index} className={`flex flex-col py-2 border-black/20 text-[16px] ${index !== schedule.length - 1 ? 'border-b' : ''}`}>
              <div className="flex w-full">
                <div className="font-bold tracking-tight shrink-0 w-[130px] text-black">
                  {item.time}
                </div>
                <div className="font-normal tracking-tight text-gray-700">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>


    </div>
  );
}
