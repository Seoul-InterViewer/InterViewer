"use client";
import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Title } from "@/app/components/title";
import { IGameQuestionProps } from "./gamePageListItem.type";
import { questions } from "../../mocks/gamePageData";
import { Icon } from "@/app/components/icon";
import { getCategoryForQuestions } from "../../utils/getCategoryForQuestions";
import { getAverageScore } from "../../utils/getAverageScore";
import { useViewport } from "@/hooks/useViewport";
import { CorrectRate } from "../correctRate/CorrectRate";
import GamePageButtons from "../gamePageButtons/GamePageButtons";

const getQuestions = (source_ids: string[]) => questions.filter((q) => source_ids.includes(q.id));

export const GamePageListItem = ({ gameQuestion }: { gameQuestion: IGameQuestionProps }) => {
  const { isMobile } = useViewport();
  const relatedQuestions = getQuestions(gameQuestion.source_ids);
  const firstTwo = relatedQuestions.slice(0, isMobile ? 1 : 2);
  const restCount = relatedQuestions.length - 2;
  const averageScore = getAverageScore(gameQuestion.id, gameQuestion.source_ids);
  const categoryNames = getCategoryForQuestions(gameQuestion.source_ids);

  return (
    <Card type="editCard" key={gameQuestion.id}>
      <div className="group flex md:flex-row justify-between h-full flex-col">
        <div className="flex flex-col md:justify-between md:gap-0 gap-5">
          <div className="flex flex-col md:gap-6.5 gap-5">
            <div className="flex items-center md:gap-3.5 gap-3">
              <Title size="sm" title={gameQuestion.title} />
              <Icon
                name="chevronRight"
                strokeWidth={2.5}
                className="md:w-3 md:h-5 w-2.5 h-4.5 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              {firstTwo.map((q, idx) => (
                <div
                  key={q.id}
                  className="md:text-sub-text md:font-sb-16 md:line-clamp-1 text-font font-bold-14 line-clamp-2"
                >
                  문제 {idx + 1}: {q.title}
                </div>
              ))}
              {restCount > 0 && (
                <div className="text-gray-300 font-medium-12">외 {restCount}문제...</div>
              )}
            </div>
          </div>
          <div className="flex gap-2.5">
            {categoryNames.map((category) => (
              <Tag key={category} type="default">
                {category}
              </Tag>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <CorrectRate averageScore={averageScore} />
          <GamePageButtons />
        </div>
      </div>
    </Card>
  );
};
