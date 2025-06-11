"use client";
import React from "react";
import { IMotionWrapperProps } from "./motionWrapper.type";
import { motion } from "framer-motion";

const MotionWrapper = ({
  children,
  className,
  initial,
  animate,
  exit,
  variants,
  transition,
  ...rest
}: IMotionWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
