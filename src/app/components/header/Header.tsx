"use client";
import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
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

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="border-b border-gray-200">
        <div className="mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="border w-[52px] h-[52px] flex items-center justify-center cursor-pointer"
                onClick={() => setSidebarOpen(true)}
              >
                Menu
              </div>
              <Link href="/">
                <div className="border w-[133px] h-[65px] flex items-center justify-center">
                  Logo
                </div>
              </Link>
            </div>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-4">
                <li className="sb24">
                  <Link href="/mypage" className="hover:text-main transition-colors">
                    마이페이지
                  </Link>
                </li>
                <li className="sb24">
                  <Link href="/fill-blank" className="hover:text-main transition-colors">
                    빈칸채우기
                  </Link>
                </li>
                <li className="sb24">
                  <Link href="/favorites" className="hover:text-main transition-colors">
                    즐겨찾는 질문들
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="border flex items-center justify-center w-[33px] h-[33px]">I</div>
            <div>Login</div>
          </div>
        </div>
      </header>

      {/* 오버레이 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 사이드바 */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl">메뉴</h2>
            <button className="p-2 cursor-pointer" onClick={() => setSidebarOpen(false)}>
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

          <nav className="mt-8">
            <h1 className="mb-4">
              <Link
                href="/"
                className="block py-2 hover:text-main transition-colors font-bold text-xl"
              >
                InterViewer
              </Link>
            </h1>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-2 hover:text-main transition-colors">
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

export default Header;
