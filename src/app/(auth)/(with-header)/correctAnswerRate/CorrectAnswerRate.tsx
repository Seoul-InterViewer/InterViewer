import React from "react";
import { CorrectAnswerRateProps } from "./correctAnswerRate.type";
import { container, progressCircle, innerCircle, percentage } from "./correctAnswerRateVariants";

export const CorrectAnswerRate = ({ averageScore, type }: CorrectAnswerRateProps) => {
  const isGame = type === "game";

  return (
    <div className={container({ type })}>
      <div
        className={progressCircle({ type })}
        style={{
          background: `conic-gradient(
                    #040450 0%,
                    #040450 ${averageScore}%,
                    #e0e0e0 ${averageScore}%,
                    #e0e0e0 100%
                  )`,
        }}
      >
        <div className={innerCircle()}>
          {isGame ? (
            <div className="w-full h-full" />
          ) : (
            <span className={percentage({ type })}>{averageScore}%</span>
          )}
        </div>
      </div>
      {isGame && <span className={percentage({ type })}>{averageScore}%</span>}
    </div>
  );
};
