"use client";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { User, MenuType } from "./mobile.menu.type";

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

  // Mock content authors (게시글/댓글 작성자)
  const myContent = {
    authorId: "user123",
    authorName: "현재 사용자",
  };

  const otherContent = {
    authorId: "user456",
    authorName: "다른 사용자",
  };

  // 내 콘텐츠 메뉴 열기
  const openMyContentMenu = () => {
    setMenuType("myContent");
    setIsOpen(true);
  };

  // 타인 콘텐츠 메뉴 열기
  const openOtherContentMenu = () => {
    setMenuType("otherContent");
    setIsOpen(true);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-4 items-center mb-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={openMyContentMenu}>
          내 글 메뉴 열기 (수정/삭제)
        </button>

        <button
          className="px-4 py-2 bg-purple-500 text-white rounded"
          onClick={openOtherContentMenu}
        >
          타인 글 메뉴 열기 (답글/신고)
        </button>
      </div>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        menuType={menuType || undefined}
        currentUser={currentUser}
      />
    </div>
  );
}
