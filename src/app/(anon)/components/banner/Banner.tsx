"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { BANNER_CARDS_DATA } from "./bannerCard/bannerCardsData.constants";
import { BannerCard } from "./bannerCard/BannerCard";
import {
  bannerCardsContainerVariants,
  bannerChildVariants,
  bannerVariants,
} from "./banner.variants";

export const Banner = () => {
  return (
    <div className="absolute top-16 left-0 right-0 h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute w-130 h-130 left-385 top-180 bg-gradient-to-br from-[#F5C02F] to-[rgba(255,211,57,0.7)] shadow-[0px_20px_200px_20px_rgba(255,225,0,0.25)] rounded-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", delay: 1, duration: 0.6 }}
      ></motion.div>
      <motion.div
        className="absolute w-120 h-120 -left-44 -top-64 bg-[linear-gradient(205.2deg,#F5C02F_13.03%,rgba(255,211,57,0.7)_84%)] shadow-lg rounded-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", delay: 0.8, duration: 0.6 }}
      ></motion.div>
      <div className="flex px-10 justify-between items-center">
        <div className="flex flex-4 min-w-255 flex-col gap-4 px-15 py-18">
          <motion.div
            className="flex flex-col gap-10"
            variants={bannerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.strong className="font-bold-56 break-keep" variants={bannerChildVariants}>
              질문하고 답하며, 퀴즈로 정복하는 프론트엔드 면접
            </motion.strong>
            <motion.p
              className="font-regular-24 break-keep text-font-gray !leading-8"
              variants={bannerChildVariants}
            >
              단순한 문제 풀이를 넘어, 실제 면접에서 나올 수 있는 질문들을 직접 만들고, 다른
              사람들의 답변을 참고하며 심화 학습을 경험하세요. 게임처럼 퀴즈를 풀며 반복 학습으로
              완벽히 준비하세요!
            </motion.p>
            <motion.div variants={bannerChildVariants}>
              <Link
                href="/join"
                className="font-sb-24 text-white bg-main w-fit px-10 py-3 rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              >
                지금 바로 계정 만들기
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.ul
          className="flex-3 min-w-180 grid grid-cols-2 gap-x-10 gap-y-10 relative"
          variants={bannerCardsContainerVariants}
          initial="initial"
          animate="animate"
        >
          {BANNER_CARDS_DATA.map((card) => (
            <BannerCard key={card.title} {...card} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
