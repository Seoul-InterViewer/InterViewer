"use client";
import React, { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { User, MenuType } from "./mobileMenu.type";

export default function MobileMenuPage() {
  // Mobile menu states
  const [isOpen, setIsOpen] = useState(false);
  const [menuType, setMenuType] = useState<MenuType | null>(null);

  // Mock current user
  const currentUser: User = {
    id: "user123",
    name: "현재 사용자",
    email: "me@example.com",
  };

  const otherContent = {
    id: "user456",
    name: "다른 사용자",
    email: "another@example.com",
  };

  const openContentMenu = (type: MenuType) => {
    setMenuType(type);
    setIsOpen(true);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-xl font-bold mb-4">모바일 메뉴 테스트</h1>

      <div className="flex flex-wrap gap-4 mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => openContentMenu("myContent")}
        >
          내 글 메뉴 열기 (수정/삭제)
        </button>

        <button
          className="px-4 py-2 bg-purple-500 text-white rounded"
          onClick={() => openContentMenu("otherContent")}
        >
          타인 글 메뉴 열기 (답글/신고)
        </button>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => openContentMenu("share")}
        >
          공유 메뉴 열기
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => openContentMenu("admin")}
        >
          관리자 메뉴 열기
        </button>

        <button
          className="px-4 py-2 bg-gray-800 text-white rounded"
          onClick={() => openContentMenu("settings")}
        >
          설정 메뉴 열기
        </button>
      </div>

      {/* isOpen, onClose, menuType, currentUser */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        menuType={menuType || undefined}
        currentUser={currentUser}
      />
    </div>
  );
}
