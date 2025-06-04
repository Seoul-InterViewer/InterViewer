import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Button, buttonVariants } from "@/app/components/button";
import { Title } from "@/app/components/title";
import { IGameQuestionProps } from "./gamePageListItemType";
import {
  tags,
  questionTags,
  gameQuestions,
  gameSessions,
  questions,
  gameSessionRecords,
} from "../mocks/gamePageData";
import useModal from "@/hooks/modal/useModal";

const getQuestions = (source_ids: string[]) => questions.filter((q) => source_ids.includes(q.id));

const getTagsForQuestions = (questionIDs: string[]) =>
  Array.from(
    new Set(
      questionIDs.flatMap((id) =>
        questionTags
          .filter((qt) => qt.questionID === id)
          .map((qt) => tags.find((tag) => tag.id === qt.tagID)?.name)
          .filter(Boolean),
      ),
    ),
  );

const getTagsForQuestion = (questionID: string) => {
  return questionTags
    .filter((qt) => qt.questionID === questionID)
    .map((qt) => tags.find((tag) => tag.id === qt.tagID)?.name)
    .filter(Boolean);
};

const getAverageScore = (questionID: string, source_ids: string[]) => {
  const totalScore = source_ids.length;
  const sessionRecord = gameSessionRecords.find((record) => record.game_question_id === questionID);
  const userScore =
    gameSessions.find((session) => session.id === sessionRecord?.session_id)?.total_score ?? 0;

  return Math.floor((userScore / totalScore) * 100);
};

export const GamePageListItem = ({ gameQuestion }: { gameQuestion: IGameQuestionProps }) => {
  const modalProps = useModal();
  const relatedQuestions = getQuestions(gameQuestion.source_ids);
  const firstTwo = relatedQuestions.slice(0, 2);
  const restCount = relatedQuestions.length - 2;

  return (
    <Card type="checkCard" key={gameQuestion.id}>
      <div className="flex justify-between h-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-6.5">
            <div>
              <Title size="sm" title={gameQuestion.title} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col ">
                {firstTwo.map((q, idx) => (
                  <div key={idx} className="text-sub-text font-sb-16">
                    문제 {idx + 1}: {q.title}
                  </div>
                ))}
              </div>
              {restCount > 0 && (
                <div className="text-sub-text font-medium-12">외 {restCount}문제...</div>
              )}
            </div>
          </div>
          <div className="flex gap-2.5">
            {getTagsForQuestions(gameQuestion.source_ids).map((tag) => (
              <Tag type="default" key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div
              data-progress={getAverageScore(gameQuestion.id, gameQuestion.source_ids)}
              className={`flex-center w-28 h-28 rounded-full bg-sub-text [background:conic-gradient(#000080_0,#000080_var(--progress),transparent_var(--progress))]`}
              style={{"--progress": `${getAverageScore(gameQuestion.id, gameQuestion.source_ids)}%`} as React.CSSProperties}
            >
              <div className="w-[85%] h-[85%]  rounded-full bg-white"></div>
            </div>
            <span className="font-sb-28">
              {getAverageScore(gameQuestion.id, gameQuestion.source_ids)}%
            </span>
          </div>
          <div className="flex flex-col gap-3.5">
            <Button
              type="button"
              className="rounded-md cursor-pointer md:font-regular-18 md:px-5 md:py-2.5 font-regular-14 px-4 py-2 bg-sub-text text-white hover:opacity-80 transition-opacity"
            >
              수정하기
            </Button>
            <Button
              type="button"
              onClick={modalProps.open}
              className={buttonVariants({ size: "lg", color: "red", hover: true })}
            >
              삭제하기
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
