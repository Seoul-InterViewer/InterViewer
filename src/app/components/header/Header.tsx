"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  headerVariants,
  sidebarVariants,
  modalOverlayVariants,
  sidebarMenuItemVariants,
} from "./header.variants";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const { header, navMenu, createMenu, login } = headerVariants();
import { Button, buttonVariants } from "../button";
import { Icon } from "../icon/Icon";

// 사이드바에 표시될 기본 메뉴 항목 데이터
const defaultMenuItems = [
  { name: "마이페이지", href: "/my" },
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
  { name: "Php", href: "/php" },
  { name: "Python", href: "/python" },
  { name: "Java", href: "/java" },
  { name: "C#", href: "/csharp" },
  { name: "C++", href: "/cpp" },
  { name: "Ruby", href: "/ruby" },
  { name: "Swift", href: "/swift" },
];

export const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  // 상태 관리: 사이드바 및 검색 모달 표시 여부
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [createMenuOpen, setCreateMenuOpen] = useState(false);

  const [isCondensed, setIsCondensed] = useState(false);
  const { scrollY } = useScroll();

  // 네비게이션 메뉴 항목 (PC 화면용)
  const navMenuItems = [
    { name: "마이페이지", href: "/mypage" },
    { name: "빈칸채우기", href: "/fill-blank" },
    { name: "즐겨찾는 질문들", href: "/favorites" },
  ];

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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 50) {
      setIsCondensed(true);
    } else if (latest < previous) {
      setIsCondensed(false);
    }
  });

  return (
    <>
      {/* 헤더 영역 */}
      <motion.header
        className={header()}
        animate={{
          height: isCondensed ? "60px" : "80px",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto flex justify-between items-center h-full">
          {/* 헤더 좌측: 메뉴 버튼, 로고, 네비게이션 */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-0 md:gap-2">
              {/* 햄버거 메뉴 버튼 (클릭 시 사이드바 표시) */}
              <motion.div
                className="flex items-center gap-2 md:gap-4"
                animate={{
                  scale: isCondensed ? 0.8 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  type="button"
                  className={`${buttonVariants({ color: "white" })}  px-0 py-0`}
                  onClick={() => setSidebarOpen(true)}
                >
                  <Icon name="menu" className="w-10 h-10 md:w-11 md:h-11" />
                </Button>
              </motion.div>
              {/* 로고 (홈페이지 링크) */}
              <motion.div
                animate={{
                  scale: isCondensed ? 0.8 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/">
                  <img src="/images/logo.svg" alt="logo" className="w-24 h-auto md:w-28" />
                </Link>
              </motion.div>
            </div>

            {/* PC 화면에서만 표시되는 네비게이션 메뉴 (768px 이상) */}
            <div className="hidden md:block">
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isCondensed ? 0 : 1,
                  x: isCondensed ? -20 : 0,
                  display: isCondensed ? "none" : "block",
                }}
                transition={{ duration: 0.3 }}
              >
                <ul className="flex items-center gap-4">
                  {navMenuItems.map((item) => (
                    <li key={item.href} className={navMenu()}>
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </div>
          </div>

          {/* 헤더 우측: 검색 버튼, 로그인 */}
          <div className="flex items-center justify-end gap-2 md:gap-4 h-full">
            {isLoggedIn ? (
              // 로그인 된 상태 - 아이콘 두 개 추가
              <motion.div
                className="flex items-center gap-2 md:gap-4"
                animate={{
                  opacity: isCondensed ? 0 : 1,
                  x: isCondensed ? 20 : 0,
                  visibility: isCondensed ? "hidden" : "visible",
                }}
              >
                <div className="relative flex items-center gap-2 md:gap-4">
                  <Button
                    type="button"
                    className={`${buttonVariants({ color: "white" })}`}
                    onClick={() => setCreateMenuOpen(!createMenuOpen)}
                  >
                    <Icon name="createNew" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                  </Button>
                  <Link href="/setting">
                    <Icon name="setting" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                  </Link>

                  {/* 드롭다운 메뉴 */}
                  {createMenuOpen && (
                    <div className={createMenu()}>
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
              </motion.div>
            ) : (
              // 비로그인 상태 - 로그인 버튼 표시
              <motion.div
                className="flex items-center"
                animate={{
                  opacity: isCondensed ? 0 : 1,
                  x: isCondensed ? 20 : 0,
                  visibility: isCondensed ? "hidden" : "visible",
                }}
                transition={{ duration: 0.3 }}
              >
                <Button type="button" className={`${buttonVariants({ color: "white" })}`}>
                  <div className={login()}>Login</div>
                </Button>
              </motion.div>
            )}

            {/* 검색 버튼 (클릭 시 검색 모달 표시) */}
            <motion.div
              className="flex items-center"
              animate={{
                scale: isCondensed ? 0.8 : 1,
              }}
            >
              <Button
                type="button"
                className={`${buttonVariants({ color: "white", icon: true })} `}
              >
                <Link href="/search">
                  <Icon name="search" className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* 사이드바 오버레이 (사이드바가 열려있을 때만 표시) */}
      {sidebarOpen && (
        <div
          className={modalOverlayVariants({ type: "sidebar" })}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 사이드바 (왼쪽에서 슬라이드 인) */}
      <div className={sidebarVariants({ isOpen: sidebarOpen })}>
        <div className="p-4 h-screen flex flex-col">
          {/* 사이드바 헤더: 제목과 닫기 버튼 */}
          <div className="flex justify-between items-center">
            <h2 className="font-sb-24">메뉴</h2>
            <button className="p-2 cursor-pointer" onClick={() => setSidebarOpen(false)}>
              <Icon name="close" className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* 사이드바 메뉴 항목들 */}
          <nav className="mt-8 flex-1 overflow-y-auto">
            {/* 사이트 제목/로고 */}
            <h1 className="mb-4">
              <div className={sidebarMenuItemVariants({ type: "title" })}>InterViewer</div>
            </h1>
            {/* 메뉴 항목 목록 (배열에서 동적 생성) */}
            <ul className="space-y-4">
              {defaultMenuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={sidebarMenuItemVariants({ type: "menuItem" })}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
