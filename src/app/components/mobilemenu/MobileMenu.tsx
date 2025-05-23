"use client";
import React from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Link from "next/link";
import {
  menuItemVariants,
  mobileMenuVariants,
  menuAnimationVariants,
} from "./mobile.menu.variants";

const { mobileMenu, content, backdrop, handle } = mobileMenuVariants();

import { IMobileMenuProps, User, MenuType } from "./mobile.menu.type";
import { Icon } from "../icon/Icon";
import OtherContentMenu from "./OtherContentMenu";
import MyContentMenu from "./MyContentMenu";

// 타입에 따른 컴포넌트 렌더링을 위한 함수
const renderMenuContent = (menuType: MenuType) => {
  switch (menuType) {
    case "myContent":
      return <MyContentMenu />;
    case "otherContent":
      return <OtherContentMenu />;
    case "share":
      return (
        <div className={content()}>
          <Link href="#share-link" className={menuItemVariants()}>
            <Icon name="share" className="w-5 h-5" />
            <span>링크 공유하기</span>
          </Link>
          <Link href="#share-kakao" className={menuItemVariants()}>
            <Icon name="share" className="w-5 h-5" />
            <span>카카오톡 공유하기</span>
          </Link>
        </div>
      );
    case "admin":
      return (
        <div className={content()}>
          <Link href="#admin-approve" className={menuItemVariants()}>
            <Icon name="user" className="w-5 h-5" />
            <span>승인하기</span>
          </Link>
          <Link href="#admin-reject" className={menuItemVariants({ type: "danger" })}>
            <Icon name="trash" className="w-5 h-5" />
            <span>거절하기</span>
          </Link>
        </div>
      );
    case "settings":
      return (
        <div className={content()}>
          <Link href="#settings-profile" className={menuItemVariants()}>
            <Icon name="user" className="w-5 h-5" />
            <span>프로필 설정</span>
          </Link>
          <Link href="#settings-notification" className={menuItemVariants()}>
            <Icon name="report" className="w-5 h-5" />
            <span>알림 설정</span>
          </Link>
          <Link href="#settings-logout" className={menuItemVariants({ type: "danger" })}>
            <Icon name="user" className="w-5 h-5" />
            <span>로그아웃</span>
          </Link>
        </div>
      );
    default:
      return <OtherContentMenu />; // 기본값
  }
};

const isValidUser = (user: User | null): boolean =>
  Boolean(user && typeof user.id === "string" && user.id.length > 0);

export const MobileMenu: React.FC<IMobileMenuProps> = ({
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 반투명 검은색 Backdrop */}
          <motion.div
            className={backdrop()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className={mobileMenu()}
            variants={menuAnimationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag="y"
            // 드래그 범위 제한 - 위로는 제한된 범위까지만, 아래로는 제한 없음
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.4}
            style={{
              y,
              // minHeight: "50vh",
              height: "auto",
            }}
            onDrag={(_, info) => {
              if (info.offset.y < 0) {
                y.set(0);
              } else {
                y.set(info.offset.y);
              }
            }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100) {
                onClose();
              }
            }}
          >
            <div className="p-8 flex flex-col">
              <div className={handle()} onClick={onClose} />
              <div className="py-2 flex-1">{renderMenuContent(effectiveMenuType)}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
