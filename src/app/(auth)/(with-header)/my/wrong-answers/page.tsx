"use client";
import { List, listVariants } from "@/app/components/list";
import React from "react";
import {motion} from "motion/react";
export default function WrongAnswersPage() {
  return (
    <motion.div variants={myQuestionsCardVariants} initial="initial" animate="animate" className="pb-20">
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
