"use client";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import { IGameCreateListHeaderProps } from "./gameCreateListHeader.type";
import { AnimatePresence } from "motion/react";
import { Modal } from "@/app/components/modal";
import useModal from "@/hooks/modal/useModal";
import { questions } from "../../mocks/gameCreateData";
import { List, listVariants } from "@/app/components/list";
import { GameCreateListItem, GameCreateListSeletedItem } from "../gameCreateListItem";
import { useEffect } from "react";

export const GameCreateListHeader = ({
  selectedQuestions,
  totalQuestions,
  type,
  isChecked,
  onCheckChange,
  handleQuestionRemove,
}: IGameCreateListHeaderProps) => {
  const modalProps = useModal();

  // 제목 텍스트 가져오기
  const getTitle = () => {
    switch (type) {
      case "bookmark":
        return "북마크된 문제";
      case "wrongAnswer":
        return "최근 오답 문제";
      default:
        return "선택된 질문";
    }
  };

  // 선택된 문제 수 계산
  const getSelectedCount = () => {
    switch (type) {
      case "bookmark":
        return selectedQuestions.bookmarks.size;
      case "wrongAnswer":
        return selectedQuestions.wrongAnswers.size;
      default:
        return selectedQuestions.wrongAnswers.size + selectedQuestions.bookmarks.size;
    }
  };

  // 모달 내용 렌더링
  const renderModalContent = () => {
    const title = getTitle();
    const selectedCount = getSelectedCount();

    return (
      <div className="flex flex-col w-full max-w-300 h-200 p-15">
        <div className="flex flex-col md:gap-8 overflow-hidden">
          <div className="flex items-center md:gap-5">
            <h3 className="font-sb-28">{title}</h3>
            <p className="font-regular-16 text-sub-text">
              {selectedCount} / {totalQuestions.length} 선택됨
            </p>
          </div>
          <div className="flex-1 overflow-y-auto pr-2">
            <List
              className={type === "selected" ? listVariants({ type: "showAll" }) : listVariants()}
            >
              {renderQuestionList()}
            </List>
          </div>
        </div>
      </div>
    );
  };

  // 문제 리스트 렌더링
  const renderQuestionList = () => {
    if (type === "selected") {
      return questions
        .filter(
          (q) => selectedQuestions.wrongAnswers.has(q.id) || selectedQuestions.bookmarks.has(q.id),
        )
        .map((question) => (
          <GameCreateListSeletedItem
            key={question.id}
            question={question}
            type="modalSelected"
            onRemove={() => handleQuestionRemove?.(question.id)}
          />
        ));
    }

    return questions.map((question) => (
      <GameCreateListItem
        key={question.id}
        question={question}
        type={type === "wrongAnswer" ? "modalWrongAnswer" : "modalBookmark"}
        isChecked={isChecked(question.id)}
        onCheckChange={(e) => onCheckChange(question.id, e.target.checked)}
      />
    ));
  };

  // 스크롤 제어
  useEffect(() => {
    document.body.style.overflow = modalProps.isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalProps.isOpen]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center md:gap-5 gap-4">
          <h3 className="md:font-sb-28 font-sb-16">{getTitle()}</h3>
          <p className="md:font-regular-16 font-regular-14 text-sub-text">
            {getSelectedCount()} / {totalQuestions.length} 선택됨
          </p>
        </div>
        <Button type="button" className={buttonVariants({ icon: true })} onClick={modalProps.open}>
          <div className="flex items-center md:gap-3 gap-1">
            <span className="md:font-bold-18 font-sb-14 text-font-gray">전체보기</span>
            <Icon name="chevronRight" className="w-2 h-3 text-font-gray" />
          </div>
        </Button>
      </div>

      <AnimatePresence>
        {modalProps.isOpen && (
          <Modal
            isOpen={modalProps.isOpen}
            onClose={modalProps.close}
            closeButton={true}
            closeWithOverlay={true}
          >
            {renderModalContent()}
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
