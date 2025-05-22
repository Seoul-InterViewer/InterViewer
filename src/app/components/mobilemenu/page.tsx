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

  const otherContent = {
    id: "user456",
    name: "다른 사용자",
    email: "another@example.com",
  };

  const openContentMenu = (id?: string | null) => {
    if (id === currentUser.id) {
      setMenuType("myContent");
    } else {
      setMenuType("otherContent");
    }

    setIsOpen(true);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-4 items-center mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => openContentMenu(currentUser.id)}
          /* data-id 속성은 더이상 필요 없어요 */
        >
          currentUser
        </button>

        <button
          className="px-4 py-2 bg-purple-500 text-white rounded"
          onClick={() => openContentMenu(otherContent.id)}
        >
          otherContent
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
