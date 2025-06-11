"use client";
import Link from "next/link";
import React from "react";
import NAVIGATION_ITEMS from "../constants/navigationItems.constant";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex gap-12 relative mb-15">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <div
              key={item.href}
              className="flex flex-col items-center justify-center text-center font-sb-24 h-[calc(100% + 3px)] relative"
            >
              <Link href={item.href}>{item.label}</Link>
              {isActive && (
                <motion.div
                  className="absolute -bottom-1 h-[3px] w-full bg-main"
                  layoutId="underline"
                ></motion.div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavigationBar;
