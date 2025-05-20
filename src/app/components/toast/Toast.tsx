"use client";
import React from "react";
import { IToastProps } from "./toast.type";
import { motion } from "motion/react";
import { Icon } from "../icon";

export const Toast = ({ content, type = "success", onRemove }: IToastProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="relative min-w-64 bg-white text-medium-12 text-black p-3 shadow-lg mb-2 md:text-regular-18"
    >
      <p className="flex gap-2">
        <span>{type === "error" ? "❌" : "✅"}</span>
        {content}
      </p>

      {onRemove && (
        <button
          className="w-3 h-3 absolute top-1/2 right-1 -translate-y-1/2 border-none fill-sub-text"
          onClick={onRemove}
        >
          <Icon name="close" />
        </button>
      )}
    </motion.div>
  );
};
