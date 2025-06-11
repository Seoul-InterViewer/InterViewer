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
import Link from "next/link";
import capitalize from "@/utils/capitalize";

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
      <article className="group flex h-full flex-col justify-between md:flex-row">
        <section className="flex flex-col gap-7 md:justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 md:gap-3.5">
              <Link href={`/games/${gameQuestion.id}`}>
                <Title size="sm" title={gameQuestion.title} />
              </Link>
              <Icon
                name="chevronRight"
                strokeWidth={2.5}
                className="w-2.5 h-4.5 opacity-0 md:w-3 md:h-5 md:group-hover:opacity-100"
              />
            </div>

            <section className="flex flex-col gap-3 md:gap-2">
              {firstTwo.map((q, idx) => (
                <div
                  key={q.id}
                  className="text-font font-bold-14 line-clamp-2 md:text-sub-text md:font-sb-16 md:line-clamp-1"
                >
                  문제 {idx + 1}: {q.title}
                </div>
              ))}
              {restCount > 0 && (
                <div className="text-gray-300 font-medium-12">외 {restCount}문제...</div>
              )}
            </section>
          </div>

          <div className="flex gap-2.5">
            {categoryNames.map((category) => (
              <Tag key={category} type="default">
                {capitalize(category)}
              </Tag>
            ))}
          </div>
        </section>

        <div className="flex items-center justify-between">
          <CorrectRate averageScore={averageScore} />
          <GamePageButtons />
        </div>
      </article>
    </Card>
  );
};
