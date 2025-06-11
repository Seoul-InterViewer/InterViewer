"use client";
import { List, listVariants } from "@/app/components/list";
import React from "react";
import { MyQuestionsCard } from "./components/myQuestionsCard/MyQuestionsCard";
import { myQuestionsMockData } from "./mock/myQuestions.mock";
import { motion } from "motion/react";
import { myQuestionsCardItemVariants, myQuestionsCardVariants } from "./components/myQuestionsCard";

export default function MyPage() {
  return (
    <motion.div
      variants={myQuestionsCardVariants}
      initial="initial"
      animate="animate"
      className="pb-20"
    >
      <List className={listVariants()}>
        {myQuestionsMockData.map((question) => (
          <motion.div key={question.id} variants={myQuestionsCardItemVariants}>
            <MyQuestionsCard {...question} />
          </motion.div>
        ))}
      </List>
    </motion.div>
  );
}
