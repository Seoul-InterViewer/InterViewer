"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import IHeaderProps, { IMenuItem } from "./header.type";
import {
  headerVariants,
  menuButtonVariants,
  searchButtonVariants,
  sidebarVariants,
  modalOverlayVariants,
  sidebarMenuItemVariants,
  navMenuVariants,
  loginButtonVariants,
  createMenuVariants,
} from "./header.variants";
import { Button, buttonVariants } from "../button";
import { Icon } from "../icon/Icon";

// 사이드바에 표시될 기본 메뉴 항목 데이터
const defaultMenuItems: IMenuItem[] = [
  { name: "마이페이지", href: "/mypage" },
  { name: "빈칸채우기", href: "/fill-blank" },
  { name: "즐겨찾는 질문들", href: "/favorites" },
  { name: "오답노트", href: "/wrong-answers" },
  { name: "인기질문", href: "/popular-questions" },
  { name: "React", href: "/react" },
  { name: "JavaScript", href: "/javascript" },
  { name: "Next.js", href: "/nextjs" },
  { name: "Node.js", href: "/nodejs" },
  { name: "Vue", href: "/vue" },
  { name: "TypeScript", href: "/typescript" },
];

const Header = ({ isLoggedIn }: IHeaderProps) => {
  // 상태 관리: 사이드바 및 검색 모달 표시 여부
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [createMenuOpen, setCreateMenuOpen] = useState(false);
  // 검색 입력란에 대한 참조 (포커스 설정에 사용)
  const searchInputRef = useRef<HTMLInputElement>(null);

  // 네비게이션 메뉴 항목 (PC 화면용)
  const navMenuItems = [
    { name: "마이페이지", href: "/mypage" },
    { name: "빈칸채우기", href: "/fill-blank" },
    { name: "즐겨찾는 질문들", href: "/favorites" },
  ];

  // 검색 모달이 열릴 때 자동으로 검색창에 포커스
  useEffect(() => {
    if (searchModalOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchModalOpen]);

  // ESC 키를 누르면 검색 모달 닫기 (접근성 향상)
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchModalOpen(false);
      }
    };

    // 이벤트 리스너 등록 및 클린업
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // 드롭다운 메뉴가 외부 클릭시 닫히도록 처리
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (createMenuOpen && !target.closest(".create-menu-container")) {
        setCreateMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [createMenuOpen]);

  return (
    <>
      {/* 헤더 영역 */}
      <header className={headerVariants()}>
        <div className="mx-auto flex justify-between items-center">
          {/* 헤더 좌측: 메뉴 버튼, 로고, 네비게이션 */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-[8px] md:gap-[12px]">
              {/* 햄버거 메뉴 버튼 (클릭 시 사이드바 표시) */}
              <div className={menuButtonVariants()} onClick={() => setSidebarOpen(true)}>
                <Button
                  type="button"
                  className={`${buttonVariants({ color: "white" })} !border-0 px-[0px] py-[0px]`}
                >
                  <Icon name="menu" className="w-[30px] h-[30px] md:w-[52px] md:h-[52px]" />
                </Button>
              </div>
              {/* 로고 (홈페이지 링크) */}
              <Link href="/">
                <img src="/images/logo.svg" alt="logo" className="w-[77px] h-auto md:w-[133px]" />
              </Link>
            </div>

            {/* PC 화면에서만 표시되는 네비게이션 메뉴 (768px 이상) */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-4">
                {navMenuItems.map((item) => (
                  <li key={item.href} className={navMenuVariants()}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 헤더 우측: 검색 버튼, 로그인 */}
          <div className="flex items-center gap-[12px] md:gap-[29px]">
            {/* 검색 버튼 (클릭 시 검색 모달 표시) */}
            <div
              className={searchButtonVariants({ state: "hover" })}
              onClick={() => setSearchModalOpen(true)}
            >
              <Button type="button" className={`${buttonVariants({ color: "white" })} !border-0`}>
                <Icon name="search" className="w-[26px] h-[26px] md:w-[33px] md:h-[33px]" />
              </Button>
            </div>

            {isLoggedIn ? (
              // 로그인 된 상태 - 아이콘 두 개 추가
              <>
                <div className="relative create-menu-container">
                  <Icon
                    name="createNew"
                    className="w-[26px] h-[26px] md:w-[33px] md:h-[33px] cursor-pointer"
                    onClick={() => setCreateMenuOpen(!createMenuOpen)}
                  />

                  {/* 드롭다운 메뉴 */}
                  {createMenuOpen && (
                    <div className={createMenuVariants()}>
                      <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-regular-16">
                          <Link href="/create-question" className="block w-full">
                            질문올리기
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-regular-16">
                          <Link href="/create-game" className="block w-full">
                            게임만들기
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link href="/setting">
                  <Icon
                    name="setting"
                    className="w-[26px] h-[26px] md:w-[33px] md:h-[33px] cursor-pointer"
                  />
                </Link>
              </>
            ) : (
              // 비로그인 상태 - 로그인 버튼 표시
              <Link href="#">
                <div className={loginButtonVariants()}>Login</div>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* 사이드바 오버레이 (사이드바가 열려있을 때만 표시) */}
      {sidebarOpen && (
        <div
          className={modalOverlayVariants({ type: "sidebar" })}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 사이드바 (왼쪽에서 슬라이드 인) */}
      <div className={sidebarVariants({ isOpen: sidebarOpen })}>
        <div className="p-4">
          {/* 사이드바 헤더: 제목과 닫기 버튼 */}
          <div className="flex justify-between items-center">
            <h2 className="font-sb-24">메뉴</h2>
            <button className="p-2 cursor-pointer" onClick={() => setSidebarOpen(false)}>
              <Icon name="close" className="w-[26px] h-[26px] md:w-[33px] md:h-[33px]" />
            </button>
          </div>

          {/* 사이드바 메뉴 항목들 */}
          <nav className="mt-8">
            {/* 사이트 제목/로고 */}
            <h1 className="mb-4">
              <Link href="/" className={sidebarMenuItemVariants({ type: "title" })}>
                InterViewer
              </Link>
            </h1>
            {/* 메뉴 항목 목록 (배열에서 동적 생성) */}
            <ul className="space-y-4">
              {defaultMenuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={sidebarMenuItemVariants()}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* 검색 모달 (검색 버튼 클릭 시 표시) */}
      {searchModalOpen && (
        <>
          {/* 검색 모달 오버레이 - 클릭하면 모달 닫힘 */}
          <div
            className={modalOverlayVariants({ type: "search" })}
            onClick={() => setSearchModalOpen(false)}
          />

          {/* 검색 모달 컨텐츠 영역 - 화면 중앙에 배치하고 오버레이와 이벤트 분리 */}
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl px-4 md:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg shadow-xl transform transition-all duration-300 scale-100">
              <div className="p-5">
                {/* 모달 헤더: 제목과 닫기 버튼 */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">검색</h2>
                  <button
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => setSearchModalOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* 검색 입력 필드 (아이콘 포함) */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
                    placeholder="검색어를 입력하세요..."
                  />
                </div>

                {/* 검색 섹션 */}
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2"> 검색어</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
                      React
                    </button>
                    <button className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
                      JavaScript
                    </button>
                    <button className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
                      Next.js
                    </button>
                    <button className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
                      TypeScript
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
