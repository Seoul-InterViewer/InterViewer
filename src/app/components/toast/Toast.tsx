"use client";
import React from "react";
import { IToastProps } from "./toast.type";
import { motion } from "motion/react";
import { Icon } from "../icon";
import toastStore from "@/stores/toastStore";

export const Toast = ({ content, id, error, onRemove }: IToastProps) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={onRemove ? "min-w-50" : ""}
    >
      <div className="flex items-center justify-between w-full px-4 bg-white text-xs text-black p-3 shadow-lg mb-2 md:text-lg">
        <p className="flex gap-2">
          <span>{error ? "🚫" : "✅"}</span>
          {content}
        </p>

        {onRemove && (
          <button className="w-3 h-3 border-none text-sub-text cursor-pointer" onClick={onRemove}>
            <Icon name="close" fill="currentColor" size={16} />
          </button>
        )}
      </div>
    </motion.div>
  );
};
