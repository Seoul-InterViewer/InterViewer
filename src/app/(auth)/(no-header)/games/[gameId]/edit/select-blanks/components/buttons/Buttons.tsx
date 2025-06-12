import { Button } from "@/app/components/button/Button";
import { buttonVariants } from "@/app/components/button/button.variants";

export const Buttons = ({
  currentIndex,
  setCurrentIndex,
  questions,
}: {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  questions: number;
}) => {
  return (
    <div className="flex gap-4">
      <Button
        type="button"
        className={
          buttonVariants({ size: "md", color: "black", hover: true }) +
          (currentIndex === 0 ? " opacity-50 cursor-not-allowed pointer-events-none" : "")
        }
        onClick={() => {
          if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
        }}
      >
        이전
      </Button>
      {currentIndex === questions - 1 ? (
        <Button
          type="button"
          className={buttonVariants({ size: "md", color: "yellow", hover: true })}
        >
          제출
        </Button>
      ) : (
        <Button
          type="button"
          className={buttonVariants({ size: "md", color: "yellow", hover: true })}
          onClick={() => {
            if (currentIndex < questions - 1) setCurrentIndex(currentIndex + 1);
          }}
        >
          다음
        </Button>
      )}
    </div>
  );
};
