import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Button, buttonVariants } from "@/app/components/button";
import { Title } from "@/app/components/title";
import { IGameQuestionProps } from "./gamePageListItem.type";
import {
  tags,
  questionTags,
  gameSessions,
  questions,
  gameSessionRecords,
} from "../../mocks/gamePageData";
import { Icon } from "@/app/components/icon";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Modal, modalVariants } from "@/app/components/modal";
import useModal from "@/hooks/modal/useModal";

const getQuestions = (source_ids: string[]) => questions.filter((q) => source_ids.includes(q.id));

const getTagsForQuestions = (questionIDs: string[]) => {
  const tagNames = questionTags
    .filter((qt) => questionIDs.includes(qt.questionID))
    .map((qt) => tags.find((tag) => tag.id === qt.tagID)?.name)
    .filter(Boolean);

  return Array.from(new Set(tagNames));
};

const getAverageScore = (questionID: string, source_ids: string[]) => {
  const totalScore = source_ids.length;
  const sessionRecord = gameSessionRecords.find((record) => record.game_question_id === questionID);
  const userScore =
    gameSessions.find((session) => session.id === sessionRecord?.session_id)?.total_score ?? 0;

  return Math.floor((userScore / totalScore) * 100);
};

export const GamePageListItem = ({ gameQuestion }: { gameQuestion: IGameQuestionProps }) => {
  const [isMobile, setIsMobile] = useState(false);
  const modalProps = useModal();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const relatedQuestions = getQuestions(gameQuestion.source_ids);
  const firstTwo = relatedQuestions.slice(0, isMobile ? 1 : 2);
  const restCount = relatedQuestions.length - 2;

  return (
    <>
      <Card type="editCard" key={gameQuestion.id}>
        <div className="group flex md:flex-row justify-between h-full flex-col ">
          <div className="flex flex-col md:justify-between md:gap-0 gap-5">
            <div className="flex flex-col md:gap-6.5 gap-5">
              <div className="flex items-center md:gap-3.5 gap-3">
                <Title size="sm" title={gameQuestion.title} />
                <Icon
                  name="chevronRight"
                  strokeWidth={2.5}
                  className="md:w-3 md:h-5 w-2.5 h-4.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col ">
                  {firstTwo.map((q, idx) => (
                    <div
                      key={idx}
                      className="md:text-sub-text md:font-sb-16 md:line-clamp-1 text-font font-bold-14 line-clamp-2 "
                    >
                      문제 {idx + 1}: {q.title}
                    </div>
                  ))}
                </div>
                {restCount > 0 && (
                  <div className="text-gray-300 font-medium-12">외 {restCount}문제...</div>
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
            <div className="md:flex items-center gap-4 border-r-2 border-r-tag md:pr-15 hidden">
              <div
                className="flex-center w-28 h-28 rounded-full bg-sub-text"
                style={{
                  background: `conic-gradient(
                    #040450 0%,
                    #040450 ${getAverageScore(gameQuestion.id, gameQuestion.source_ids)}%,
                    #e0e0e0 ${getAverageScore(gameQuestion.id, gameQuestion.source_ids)}%,
                    #e0e0e0 100%
                  )`,
                }}
              >
                <div className="w-5/6 h-5/6 rounded-full bg-white"></div>
              </div>
              <span className="min-w-18.75 font-sb-28">
                {getAverageScore(gameQuestion.id, gameQuestion.source_ids)}%
              </span>
            </div>
            <div className="md:block flex justify-between w-full">
              <div className="flex md:flex-col md:gap-3.5 md:pl-15 flex-row gap-2.5 pl-0">
                <Button
                  type="button"
                  className="rounded-md cursor-pointer md:font-regular-18 md:px-5 md:py-2.5 font-sb-12 px-2 py-1.5 md:bg-sub-text text-white bg-font hover:opacity-80 transition-opacity"
                >
                  수정하기
                </Button>
                <Button
                  type="button"
                  onClick={modalProps.open}
                  className="rounded-md cursor-pointer md:font-regular-18 md:px-5 md:py-2.5 font-sb-12 px-2 py-1.5 bg-incorrect/60 text-white hover:opacity-80 transition-opacity"
                >
                  삭제하기
                </Button>
              </div>
              <Button
                type="button"
                className="md:hidden cursor-pointer  hover:opacity-80 transition-opacity"
              >
                <Icon name="arrow" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
      <AnimatePresence>
        {modalProps.isOpen && (
          <Modal
            isOpen={modalProps.isOpen}
            onClose={modalProps.close}
            className={modalVariants({ size: "default" })}
            closeButton={true}
            closeWithOverlay={true}
          >
            <div className="w-full h-full flex flex-col justify-center items-center gap-7.5">
              <h3 className="md:font-regular-18 font-regular-14">
                정말로 게임을 삭제하시겠습니까?
              </h3>
              <Button
                type="button"
                className={buttonVariants({ size: "lg", color: "red", hover: true })}
              >
                네, 삭제할게요.
              </Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
