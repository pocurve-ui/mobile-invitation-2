import React, { useState, useEffect } from 'react';
import FlipCard from './FlipCard';

const ColonSeparator = () => (
  <div className="h-[44px] sm:h-[48px] flex items-center justify-center text-black text-[1.3rem] sm:text-[1.35rem] font-bold pb-1 sm:pb-2 px-[6px]">
    :
  </div>
);

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    const duration = Math.abs(difference);
    return {
      elapsed: difference <= 0,
      days: Math.floor(duration / 86400000),
      hours: Math.floor(duration / 3600000) % 24,
      minutes: Math.floor(duration / 60000) % 60,
      seconds: Math.floor(duration / 1000) % 60
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // 1초 단위로 업데이트
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-start gap-0 mt-0 mb-0 relative z-20 w-full max-w-sm mx-auto">
      <FlipCard digit={timeLeft.days} label="days" prefix={timeLeft.elapsed ? '+' : ''} />
      <ColonSeparator />
      <FlipCard digit={timeLeft.hours} label="hrs." />
      <ColonSeparator />
      <FlipCard digit={timeLeft.minutes} label="mins." />
      <ColonSeparator />
      <FlipCard digit={timeLeft.seconds} label="secs." />
    </div>
  );
}
