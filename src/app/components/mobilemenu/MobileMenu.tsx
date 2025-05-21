"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  mobileMenuVariants,
  backdropVariants,
  menuItemVariants,
  handleVariants,
} from "./mobile.menu.variants";
import { IMobileMenuProps, User, MenuType } from "./mobile.menu.type";

const isValidUser = (user: User | null): boolean =>
  Boolean(user && typeof user.id === "string" && user.id.length > 0);

// 내 콘텐츠용 메뉴 컴포넌트
const MyContentMenu = () => (
  <>
    <Link href="#edit" className={menuItemVariants()}>
      <i>✏️</i>
      <span>수정하기</span>
    </Link>
    <Link href="#delete" className={menuItemVariants({ type: "danger" })}>
      <i>🗑️</i>
      <span>삭제하기</span>
    </Link>
  </>
);

// 타인 콘텐츠용 메뉴 컴포넌트
const OtherContentMenu = () => (
  <>
    <Link href="#reply" className={menuItemVariants()}>
      <i>💬</i>
      <span>답글달기</span>
    </Link>
    <Link href="#report" className={menuItemVariants({ type: "danger" })}>
      <i>🚨</i>
      <span>신고하기</span>
    </Link>
  </>
);

const MobileMenu: React.FC<IMobileMenuProps> = ({
  isOpen,
  onClose,
  menuType, // 직접 메뉴 타입 지정
  currentUser = null,
  authorId = "",
}) => {
  // 메뉴 타입이 지정되지 않은 경우 작성자 ID로 판단
  const isAuthor = isValidUser(currentUser) && currentUser?.id === authorId;
  const effectiveMenuType: MenuType = menuType || (isAuthor ? "myContent" : "otherContent");

  // Animation variants
  const menuVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      y: "100%",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={backdropVariants()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className={mobileMenuVariants()}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.7}
            onDragEnd={(_, info) => {
              // 드래그가 일정 거리 이상 아래로 이동했으면 메뉴 닫기
              if (info.offset.y > 100) {
                onClose();
              }
            }}
          >
            <div className="p-8">
              <div className={handleVariants()} />

              <div className="space-y-6 py-2">
                {effectiveMenuType === "myContent" ? <MyContentMenu /> : <OtherContentMenu />}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
