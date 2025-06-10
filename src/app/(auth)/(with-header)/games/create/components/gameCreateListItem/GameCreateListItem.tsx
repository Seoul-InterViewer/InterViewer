"use client";
import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Icon } from "@/app/components/icon";
import { IGameCreateListItemProps } from "./gameCreateEditPage.type";
import { CheckboxInput, checkboxInputVariants } from "@/app/components/input/checkboxInput";
import { translatedDifficulty } from "../../utils/translatedDifficulty";
import { getCategroyForQuestion } from "../../utils/getCategroyForQuestion";
import { useViewport } from "@/hooks/useViewport";

export const GameCreateListItem = ({
  question,
  isChecked,
  onCheckChange,
  type,
}: IGameCreateListItemProps) => {
  const { isMobile } = useViewport();

  return (
    <Card key={question.id} type={isMobile ? "mainCard" : "checkCard"}>
      <div className="flex md:flex-row md:gap-12.5 flex-col gap-1 w-full">
        <div className="flex-center md:w-43.75 md:h-43.75 border border-gray-200 rounded-lg w-14 h-14 md:border md:border-gray-200 md:rounded-lg">
          <Icon name="react" className="md:w-25 md:h-25 w-14 h-14" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex flex-col md:gap-8.75 gap-2.5 order-1">
              <div className="md:line-clamp-1 line-clamp-2 md:mb-0 mb-2">
                <h3 className="md:font-sb-28 font-sb-16">{question.title}</h3>
              </div>
            </div>
            <div className="flex justify-between items-center md:order-2 order-3">
              <p className="text-font-gray md:font-sb-18 font-medium-12">by 홍길동</p>
              <CheckboxInput
                className={checkboxInputVariants()}
                id={`question-${type}-${question.id}`}
                name={`question-${type}-${question.id}`}
                checked={isChecked}
                onChange={onCheckChange}
              />
            </div>
            <div className="flex gap-2.5 md:mb-0 mb-2 md:order-3 order-2">
              <Tag type={isMobile ? "card" : "default"}>{getCategroyForQuestion(question.id)}</Tag>
              <Tag type={isMobile ? "card" : "default"}>
                난이도 {translatedDifficulty(question.difficulty)}
              </Tag>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
