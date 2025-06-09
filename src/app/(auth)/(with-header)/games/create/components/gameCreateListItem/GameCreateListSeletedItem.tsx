import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { CheckboxInput, checkboxInputVariants } from "@/app/components/input/checkboxInput";

import { categories } from "../../mocks/gameCreateData";
import { IGameCreateListItemProps } from "./gameCreateEditPage.type";
import translatedDifficulty from "../../utils/translatedDifficulty";
import getCategroyForQuestion  from "../../utils/getCategroyForQuestion";

const getCategoryName = (categoryId: string) => {
  return categories.find((category) => category.id === categoryId)?.name;
};

export const GameCreateListSeletedItem = ({
  question,
  isChecked,
  onRemove,
  type,
}: IGameCreateListItemProps) => {
  return (
    <Card key={question.id} type="mainCard">
      <div
        className="flex flex-col justify-between h-full"
        style={{
          background: `url(/images/card-${getCategoryName(question.categoryID)}.svg) no-repeat left 20% top 10% / cover`,
        }}
      >
        <div className="flex flex-col md:gap-9">
          <div className="flex flex-col md:gap-2">
            <div className="flex gap-2 md:font-sb-24 font-sb-12 text-sub-text">
              <span>{getCategoryName(question.categoryID)}</span>
              <span>난이도: {translatedDifficulty(question.difficulty)}</span>
            </div>
            <div className="flex gap-2.5">
              <Tag type="card">{getCategroyForQuestion(question.id)}</Tag>
            </div>
          </div>

          <div className="flex flex-col md:gap-4.5">
            <div className="line-clamp-2">
              <h3 className="md:font-sb-28 font-sb-16">{question.title}</h3>
            </div>
            <p className="md:font-regular-18 font-medium-10 md:line-clamp-3 line-clamp-2">
              {question.content}
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <span className="md:font-bold-14 font-medium-8">작성자: 전우진</span>
          <CheckboxInput
            className={checkboxInputVariants()}
            id={`question-${type}-${question.id}`}
            name={`question-${type}-${question.id}`}
            checked={isChecked}
            onChange={onRemove}
          />
        </div>
      </div>
    </Card>
  );
};
