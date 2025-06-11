import { Button } from "@/app/components/button/Button";
import { buttonVariants } from "@/app/components/button/button.variants";
import { INavigationButtonsProps } from "./navgationButton.type";
import React from "react";

export const NavigationButton = ({
  currentIndex,
  totalQuestions,
  onPrev,
  onNext,
  onComplete,
}: INavigationButtonsProps) => {
  return (
    <div className="flex gap-4">
      {currentIndex > 0 && (
        <Button
          type="button"
          className={buttonVariants({ size: "lg", color: "black" })}
          onClick={onPrev}
        >
          이전
        </Button>
      )}
      {currentIndex < totalQuestions - 1 ? (
        <Button
          type="button"
          className={buttonVariants({ size: "lg", color: "yellow" })}
          onClick={onNext}
        >
          다음
        </Button>
      ) : (
        <Button
          type="button"
          className={buttonVariants({ size: "lg", color: "yellow" })}
          onClick={onComplete}
        >
          생성완료
        </Button>
      )}
    </div>
  );
};
