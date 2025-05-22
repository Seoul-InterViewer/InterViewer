"use client";
import React from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Link from "next/link";
import {
  mobileMenuVariants,
  backdropVariants,
  menuItemVariants,
  handleVariants,
  contentVariants,
} from "./mobile.menu.variants";
import { IMobileMenuProps, User, MenuType } from "./mobile.menu.type";
import { Icon } from "../icon/Icon";
import OtherContentMenu from "./OtherContentMenu";
import MyContentMenu from "./MyContentMenu";

const isValidUser = (user: User | null): boolean =>
  Boolean(user && typeof user.id === "string" && user.id.length > 0);

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

  // y 위치 모션 값 생성
  const y = useMotionValue(0);

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
          {/* 반투명 검은색 Backdrop */}
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
            // drag="y"
            // 드래그 범위 제한 - 위로는 제한된 범위까지만, 아래로는 제한 없음
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.4}
            style={{
              y,
              // minHeight: "50vh",
              // height: "210PX",
            }}
          >
            <div className="p-8 flex flex-col">
              <div className={handleVariants()} onClick={onClose} />

              <div className=" py-2 flex-1">
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
