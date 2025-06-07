import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Title } from "@/app/components/title";
import { CheckboxInput, checkboxInputVariants } from "@/app/components/input/checkboxInput";

import { questionTags, tags, categories } from "../../mocks/gameCreateData";
import { IGameCreateListItemProps } from "./gameCreateEditPage.type";
import { translatedDifficulty } from "../../utils/translatedDifficulty";

const getTagsForQuestion = (questionID: string) => {
  return questionTags
    .filter((qt) => qt.questionID === questionID)
    .map((qt) => tags.find((tag) => tag.id === qt.tagID)?.name)
    .filter(Boolean);
};


const getCategoryName = (categoryId: string) => {
  return categories.find((category) => category.id === categoryId)?.name;
};

export const GameCreateListSeletedItem = ({
  question,
  isChecked,
  onCheckChange,
}: IGameCreateListItemProps) => {
  return (
    <Card key={question.id} type="mainCard">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col md:gap-9">
          <div className="flex flex-col md:gap-2">
            <div className="flex gap-2 font-sb-24 text-sub-text">
              <span>{getCategoryName(question.categoryID)}</span>
              <span>난이도: {translatedDifficulty(question.difficulty)}</span>
            </div>
            <div className="flex gap-2.5">
              {getTagsForQuestion(question.id).map((tag) => (
                <Tag key={tag} type="card">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:gap-4.5">
            <div className="line-clamp-2">
              <Title size="sm" title={question.title} />
            </div>
            <p className="font-regular-18 line-clamp-3">{question.content}</p>
          </div>

          <div></div>
        </div>

        <div className="flex justify-between">
          <span>작성자: 전우진</span>
          <CheckboxInput
            className={checkboxInputVariants()}
            id={`question-${question.id}`}
            name={`question-${question.id}`}
            checked={isChecked}
            onChange={onCheckChange}
          />
        </div>
      </div>
    </Card>
  );
};
