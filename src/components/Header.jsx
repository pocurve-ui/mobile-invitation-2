import React from 'react';

export default function Header({ currentPage, changePage }) {
  // currentPage가 변경될 때 메뉴 활성화 판별
  let activeMenuIndex = -1;
  if (currentPage === 1 || currentPage === 2) activeMenuIndex = 0;
  else if (currentPage === 3) activeMenuIndex = 1;
  else if (currentPage === 4 || currentPage === 5) activeMenuIndex = 2;

  const menus = [
    { name: '모시는 글', targetPage: 1, activeColor: 'text-[#0043ff]' },
    { name: '식순', targetPage: 3, activeColor: 'text-[#ff00a2]' },
    { name: '오시는 길', targetPage: 4, activeColor: 'text-[#00f191]' }
  ];

  const handleLogoClick = () => {
    changePage(0, 0); // 타겟 페이지를 0 (첫 화면)으로 특정
  };

  return (
    <header className="absolute top-0 left-0 right-0 w-full max-w-[480px] mx-auto pt-[14px] pb-8 px-6 flex flex-col items-start space-y-[10px] z-50 pointer-events-auto">
      {/* 귀환 로고 (간소화) / flex shrink 방지 및 60% 크기 축소 */}
      <div 
        className="cursor-pointer transition-opacity active:opacity-50 shrink-0 translate-y-[5px]"
        onClick={handleLogoClick}
      >
        <img 
          src="/assets/logo_simple.svg" 
          alt="처음으로" 
          className="h-[32px] w-auto object-contain shrink-0 brightness-0"
        />
      </div>

      {/* 네비게이터 메뉴 */}
      <nav className="self-end flex flex-col items-start space-y-[2px]">
        {menus.map((menu, index) => {
          const isActive = index === activeMenuIndex;
          return (
            <div 
              key={menu.name} 
              onClick={() => {
                if (menu.targetPage !== -1) changePage(0, menu.targetPage);
              }}
              className={`text-[19px] tracking-normal transition-colors cursor-pointer active:opacity-50 flex items-center ${
                isActive ? `${menu.activeColor} font-bold underline underline-offset-[5px] decoration-[1px]` : 'text-[#b6b6b6] font-normal'
              }`}
            >
              {menu.name}
            </div>
          );
        })}
      </nav>
    </header>
  );
}
