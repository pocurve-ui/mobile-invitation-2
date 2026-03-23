import React, { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        milliseconds: Math.floor((difference % 1000) / 10) // 2자리 표기를 위해 10으로 나눔
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 10); // Update every 10ms for smooth millisecond transition
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, '0');

  // className prop을 받아 위치 지정을 자유롭게 할 수 있도록 수정
  return (
    <div className="flex flex-col items-center justify-center space-y-0 relative z-20 w-full text-center">
      {/* 텍스트 크기 이전의 80% 추가 축소 (text-base md:text-2xl 정도), 자간(tracking-normal), 바탕(font-medium) */}
      <div className="text-black tracking-normal tabular-nums flex items-baseline justify-center">
        <span className="font-thin text-[1.84rem] md:text-[2.66rem]">
          {pad(timeLeft.days)}:{pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
          <span className="text-[#ff00a2]">:{pad(timeLeft.milliseconds)}</span>
        </span>
      </div>
    </div>
  );
}
