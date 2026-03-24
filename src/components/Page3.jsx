import React from 'react';
import { motion } from 'framer-motion';

export default function Page3({ setCurrentPage, setDirection }) {
  const schedule = [
    { time: '14:00 - 14:10', title: '국민의례 및 참석 내외빈 소개' },
    { time: '14:10 - 14:15', title: '이사장 인사말' },
    { time: '14:15 - 14:20', title: '영상상영' },
    { time: '14:20 - 14:35', title: 'FSAA의 비전과 미래 (PPT)' },
    { time: '14:35 - 14:40', title: '총교장 환영사' },
    { time: '14:40 - 15:15', title: '축사' },
    { time: '15:15 - 15:20', title: '발파 세레모니' },
    { time: '15:20 - 15:25', title: '기념 촬영' },
    { time: '15:25 - 15:30', title: '폐식 및 안내' },
    { time: '15:30 - ', title: 'SITE TOUR' },
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
        <div className="w-full text-black">
          {schedule.map((item, index) => (
            <div key={index} className={`flex flex-col py-[6px] border-black/20 text-[16px] ${index !== schedule.length - 1 ? 'border-b' : ''}`}>
              <div className="flex w-full items-start">
                <div className="font-bold tracking-tight shrink-0 flex items-center text-black w-[115px]">
                  <span className="w-[40px] text-left">{item.time.split(' - ')[0]}</span>
                  <span className="w-[20px] text-center font-normal">{item.time.includes(' -') ? '-' : ''}</span>
                  <span className="w-[45px] text-left">{item.time.split(' - ')[1] || ''}</span>
                </div>
                <div className="font-normal tracking-tight text-gray-700 ml-4 flex-1">
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
