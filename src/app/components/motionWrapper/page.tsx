"use client";

import React from "react";
import { MotionWrapper } from "./MotionWrapper";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MotionWrapperTestPage() {
  const [isVisible, setIsVisible] = useState(true);

  // Example with variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // Example with custom transition
  const springTransition = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  // Stagger children example
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

  // Orchestrated animation with when property
  const orchestratedVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-4">MotionWrapper 테스트 예제</h1>

      {/* Simple example */}
      <div className="example">
        <h2>기본 애니메이션</h2>
        <MotionWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue-100 p-4 rounded"
        >
          <p>변형 없는 페이드인 애니메이션</p>
        </MotionWrapper>
      </div>

      {/* With variants */}
      <div className="example">
        <h2>변형 사용하기</h2>
        <MotionWrapper
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-green-100 p-4 rounded"
        >
          <p>변형을 사용한 애니메이션</p>
        </MotionWrapper>
      </div>

      {/* With custom transition */}
      <div className="example">
        <h2>맞춤 전환 효과</h2>
        <MotionWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={springTransition}
          className="bg-purple-100 p-4 rounded"
        >
          <p>맞춤 전환을 사용한 스프링 애니메이션</p>
        </MotionWrapper>
      </div>

      {/* Toggle visibility example */}
      <div className="example">
        <h2>토글 애니메이션</h2>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-gray-200 px-4 py-2 mb-4 rounded"
        >
          토글
        </button>
        <AnimatePresence>
          {isVisible && (
            <MotionWrapper
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-yellow-100 p-4 rounded overflow-hidden"
            >
              <p>이 콘텐츠는 토글할 수 있습니다</p>
            </MotionWrapper>
          )}
        </AnimatePresence>
      </div>

      {/* Hover animation */}
      <div className="example">
        <h2>호버 효과</h2>
        <MotionWrapper
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-100 p-4 rounded cursor-pointer"
        >
          <p>애니메이션을 보려면 호버하고 탭하세요</p>
        </MotionWrapper>
      </div>

      {/* StaggerChildren example */}
      <div className="example">
        <h2>자식 요소 시차 애니메이션</h2>
        <MotionWrapper
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-indigo-100 p-4 rounded space-y-2"
        >
          {[1, 2, 3, 4].map((item) => (
            <MotionWrapper key={item} variants={itemVariants} className="bg-indigo-200 p-2 rounded">
              <p>시차 아이템 {item}</p>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>

      {/* Orchestrated animation */}
      <div className="example">
        <h2>조율된 애니메이션 (beforeChildren)</h2>
        <MotionWrapper
          variants={orchestratedVariants}
          initial="hidden"
          animate="visible"
          className="bg-pink-100 p-4 rounded"
        >
          <p className="mb-4">부모가 먼저 애니메이션</p>
          <MotionWrapper variants={childVariants} className="bg-pink-200 p-2 rounded">
            <p>그 다음 자식 애니메이션</p>
          </MotionWrapper>
        </MotionWrapper>
      </div>

      {/* Animation with keyframes */}
      <div className="example">
        <h2>키프레임 애니메이션</h2>
        <MotionWrapper
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, 50, -50, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="bg-emerald-100 p-4 rounded"
        >
          <p>키프레임을 사용한 애니메이션</p>
        </MotionWrapper>
      </div>
    </div>
  );
}
