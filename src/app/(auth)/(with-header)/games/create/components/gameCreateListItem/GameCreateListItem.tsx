import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Icon } from "@/app/components/icon";

import { questionTags, tags } from "../../mocks/gameCreateData";
import { Title } from "@/app/components/title";
import { IGameCreateListItemProps } from "./gameCreateEditPage.type";
import { CheckboxInput, checkboxInputVariants } from "@/app/components/input/checkboxInput";

import { translatedDifficulty } from "../../utils/translatedDifficulty";

const getTagsForQuestion = (questionID: string) => {
  return questionTags
    .filter((qt) => qt.questionID === questionID)
    .map((qt) => tags.find((tag) => tag.id === qt.tagID)?.name)
    .filter(Boolean);
};

export const GameCreateListItem = ({
  question,
  isChecked,
  onCheckChange,
}: IGameCreateListItemProps) => {
  return (
    <Card key={question.id} type="checkCard">
      <div className="flex md:flex-row md:justify-between md:gap-0 flex-col-reverse gap-5">
        <div className="flex items-center md:gap-12.5">
          <div className="flex-center md:w-43.75 md:h-43.75  border border-gray-200 rounded-lg h-40">
            <Icon name="react" className="w-25 h-25" />
          </div>
          <div className="flex flex-col md:gap-12.5 gap-9.5">
            <div className="flex flex-col md:gap-8.75 gap-2.5">
              <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                <Title size="sm" title={question.title} />
              </div>
              <p className="text-font-gray md:font-sb-18 font-sb-14">by 홍길동</p>
            </div>
            <div className="flex gap-2.5">
              {getTagsForQuestion(question.id).map((tag) => (
                <Tag key={tag} type="default">
                  {tag}
                </Tag>
              ))}
              <Tag type="default">난이도 {translatedDifficulty(question.difficulty)}</Tag>
            </div>
          </div>
        </div>
        <div className="flex-center">
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
