"use client";
import { List, listVariants } from "@/app/components/list";
import React from "react";
import { motion } from "motion/react";
import { WrongAnswersCard } from "./components/wrongAnswersCard/WrongAnswersCard";
export default function WrongAnswersPage() {
  return (
    <motion.div initial="initial" animate="animate" className="pb-20">
      <List className={listVariants()}>
        <WrongAnswersCard />
      </List>
    </motion.div>
  );
}
