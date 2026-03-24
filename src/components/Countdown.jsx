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
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // 1초 단위로 업데이트
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="flex justify-center items-start gap-0 mt-0 mb-0 relative z-20 w-full max-w-sm mx-auto">
      <FlipCard digit={timeLeft.days} label="days" />
      <ColonSeparator />
      <FlipCard digit={timeLeft.hours} label="hrs." />
      <ColonSeparator />
      <FlipCard digit={timeLeft.minutes} label="mins." />
      <ColonSeparator />
      <FlipCard digit={timeLeft.seconds} label="secs." />
    </div>
  );
}
