import React from "react";
import { BreadCrumb } from "@/app/components/breadCrumb";
import { List, listVariants } from "@/app/components/list";
import { gameQuestions } from "./mocks/gamePageData";
import { GamePageListItem } from "./components/gamePageListItem";
import { MotionWrapper } from "@/app/components/motionWrapper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300 },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { type: "tween", ease: "easeInOut" },
  },
};

export default function page() {
  return (
    <main className="w-full flex flex-col gap-7.5 md:pb-30 pb-15">
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "빈칸채우기", href: "/games" },
        ]}
      />
      <MotionWrapper variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        <List className={listVariants()}>
          {gameQuestions.map((gameQuestion) => (
            <MotionWrapper variants={itemVariants} key={gameQuestion.id}>
              <GamePageListItem key={gameQuestion.id} gameQuestion={gameQuestion} />
            </MotionWrapper>
          ))}
        </List>
      </MotionWrapper>
    </main>
  );
}
