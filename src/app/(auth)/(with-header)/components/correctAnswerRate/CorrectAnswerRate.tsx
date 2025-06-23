"use client";
import React, { useEffect, useState } from "react";
import { CorrectAnswerRateProps } from "./correctAnswerRate.type";
import { container, progressCircle, innerCircle, percentage } from "./correctAnswerRate.variants";

export const CorrectAnswerRate = ({ averageScore, type }: CorrectAnswerRateProps) => {
  const [progress, setProgress] = useState(0);
  const isGame = type === "game";

  useEffect(() => {
    let start: number | null = null;
    const duration = 1000; // 애니메이션 지속 시간 (ms)
    const target = averageScore;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      // 진행률 계산 (0 ~ target)
      const current = Math.min((elapsed / duration) * target, target);
      setProgress(current);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);

    // 만약 averageScore가 변경될 때 다시 애니메이션 시작하도록 할 수도 있음.
  }, [averageScore]);

  return (
    <div className={container({ type })}>
      <div
        className={progressCircle({ type })}
        style={{
          background: `conic-gradient(
            #040450 0%,
            #040450 ${progress}%,
            #e0e0e0 ${progress}%,
            #e0e0e0 100%
          )`,
        }}
      >
        <div className={innerCircle()}>
          {isGame ? (
            <div className="w-full h-full" />
          ) : (
            <span className={percentage({ type })}>{Math.round(progress)}%</span>
          )}
        </div>
      </div>
      {isGame && <span className={percentage({ type })}>{Math.round(progress)}%</span>}
    </div>
  );
};
