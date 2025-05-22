"use client";

import React from "react";
import { IEmptyUIProps } from "./emptyUI.type";
import { motion } from "framer-motion";
import {
  emptyUIChildVariants,
  emptyUIGameMobileVariants,
  emptyUIGameVariants,
  emptyUIMobileChildVariants,
  emptyUIMotionVariants,
  emptyUIStyleVariants,
} from "./emptyUI.variants";
import Image from "next/image";
import { useViewport } from "@/hooks/useViewport";
import Link from "next/link";

export const EmptyUI = ({ type }: IEmptyUIProps) => {
  const {
    container,
    bookmarkInnerContainer,
    gameInnerContainer,
    bookmarkChild,
    gameChild,
    description,
  } = emptyUIStyleVariants();
  const { isMobile } = useViewport();

  const uiContent = () => {
    switch (type) {
      case "comment":
        return <p className="font-regular-14 md:font-regular-18 text-font-gray">작성된 댓글이 없습니다.</p>;
      case "bookmark":
        return (
          <motion.div
            variants={emptyUIMotionVariants}
            initial="initial"
            animate="animate"
            className={container()}
          >
            <div className={bookmarkInnerContainer()}>
              {Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  className={bookmarkChild()}
                  key={index}
                  variants={isMobile ? emptyUIMobileChildVariants : emptyUIChildVariants}
                  initial={String(index)}
                  animate={`animate${index}`}
                >
                  <Image src="/images/emptyUI/bookmark.png" alt="북마크" width={200} height={200} />
                </motion.div>
              ))}
            </div>
            <p className={description()}>등록된 즐겨찾기가 없습니다 🥲</p>
          </motion.div>
        );
      case "wrongNotes":
        return (
          <motion.div
            variants={emptyUIMotionVariants}
            initial="initial"
            animate="animate"
            className={container()}
          >
            <motion.div variants={emptyUIChildVariants} initial="1" animate="animate1">
              <Image
                src="/images/emptyUI/wrong-notes.png"
                alt="오답노트"
                width={isMobile ? 150 : 320}
                height={isMobile ? 150 : 320}
              />
            </motion.div>
            <p className={description()}>등록된 오답노트가 없습니다 🥲</p>
          </motion.div>
        );
      case "game":
        return (
          <motion.div
            variants={emptyUIMotionVariants}
            initial="initial"
            animate="animate"
            className={container()}
          >
            <div className={gameInnerContainer()}>
              {Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  className={gameChild()}
                  key={index}
                  variants={isMobile ? emptyUIGameMobileVariants : emptyUIGameVariants}
                  initial={String(index)}
                  animate={`animate${index}`}
                >
                  <Image
                    src="/images/emptyUI/game.png"
                    alt="북마크"
                    width={isMobile ? 320 : 740}
                    height={isMobile ? 126 : 216}
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5">
              <p className={description()}>아직 게임을 안만드셨어요 🥲</p>
              <Link
                href="/game/create"
                className="underline decoration-sub-text decoration-1 underline-offset-2 font-regular-14 md:font-regular-18 text-sub-text cursor-pointer"
              >
                게임 만들기
              </Link>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return <div>{uiContent()}</div>;
};
