import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Page0 from './components/Page0';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

const pages = [Page0, Page1, Page2, Page3, Page4, Page5];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const isTransitioning = useRef(false);

  const changePage = (newDirection, targetPage = null) => {
    if (isTransitioning.current) return;
    
    let nextPage;
    if (targetPage !== null) {
      if (targetPage === currentPage) return;
      nextPage = targetPage;
      setDirection(targetPage > currentPage ? 1 : -1);
    } else {
      nextPage = currentPage + newDirection;
      setDirection(newDirection);
      
      // 마지막 페이지에서 다음으로 가면 첫 페이지로 루프
      if (nextPage === pages.length) {
        nextPage = 0;
        setDirection(1); // 루프 시에도 정방향 연출 유지
      }
      
      // 첫 페이지에서 이전으로 가면 마지막 페이지로 루프 (선택 사항이지만 일관성 위해 추가)
      if (nextPage === -1) {
        nextPage = pages.length - 1;
        setDirection(-1);
      }
    }
    
    if (nextPage >= 0 && nextPage < pages.length) {
      setCurrentPage(nextPage);
      isTransitioning.current = true;
      setTimeout(() => {
        isTransitioning.current = false;
      }, 750);
    }
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaY) > 20) {
      if (e.deltaY > 0) changePage(1);
      else changePage(-1);
    }
  };

  const touchStartY = useRef(0);
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    if (Math.abs(diff) > 50) {
      if (diff > 0) changePage(1);
      else changePage(-1);
    }
  };

  const slideVariants = {
    initial: (direction) => ({
      y: direction === 0 ? 0 : (direction > 0 ? 80 : -80),
      opacity: 0,
      scale: 1,
      zIndex: 1
    }),
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (direction) => ({
      y: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 1,
      zIndex: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const CurrentPageComponent = pages[currentPage];

  return (
    <div 
      className="w-full h-full relative overflow-hidden bg-white text-black touch-none"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sticky 공통 Header */}
      {currentPage > 0 && (
        <Header currentPage={currentPage} changePage={changePage} />
      )}

      {/* 고정된 워터마크 배경 */}
      {currentPage > 0 && (
        <div className="absolute inset-y-0 w-full max-w-[480px] mx-auto left-0 right-0 flex items-center justify-center pointer-events-none z-0 mt-20">
          <img 
            src="/assets/logo_background.svg" 
            alt="방패 로고 워터마크" 
            className="w-[50%] max-w-[250px] object-contain opacity-[0.05] grayscale"
          />
        </div>
      )}

      <AnimatePresence custom={direction} mode="wait" initial={false}>
        <motion.div
           key={currentPage}
           custom={direction}
           variants={slideVariants}
           initial="initial"
           animate="animate"
           exit="exit"
           className="absolute inset-0 h-full will-change-transform w-full max-w-[480px] mx-auto left-0 right-0"
         >
          <CurrentPageComponent 
            setCurrentPage={setCurrentPage} 
            setDirection={setDirection} 
            changePage={changePage}
          />
        </motion.div>
      </AnimatePresence>

      {/* 고정된 하단 화살표 */}
      <motion.div 
        className="absolute bottom-10 left-0 w-full z-20 flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity text-black"
        onClick={() => changePage(1)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))' }}>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
