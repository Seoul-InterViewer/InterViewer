import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import { IGameCreateListHeaderProps } from "./gameCreateListHeader.type";

export const GameCreateListHeader = ({
  selectedQuestions,
  totalQuestions,
  type,
}: IGameCreateListHeaderProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center md:gap-5">
        <h3 className="font-sb-28">
          {type === "bookmark"
            ? "북마크된 문제"
            : type === "wrongAnswer"
              ? "최근 오답 문제"
              : "선택된 질문"}
        </h3>
        <p className="font-regular-16 text-sub-text">
          {selectedQuestions} / {totalQuestions} 선택됨
        </p>
      </div>
      <Button type="button" className={buttonVariants({ icon: true })}>
        <div className="flex items-center md:gap-3">
          <span className="font-bold-18 text-font-gray">전체보기</span>
          <Icon name="chevronRight" className="w-2 h-3 text-font-gray" />
        </div>
      </Button>
    </div>
  );
};
