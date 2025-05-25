"use client";

import { GameInfo } from "./GameInfo";
import { IconBox } from "./IconBox";
import { IQuestion, TitleType } from "./title.type";
import { UserBox } from "./UserBox";
import { titleVariants } from "./title.variants";

/*
 * 타입에 따라 다른 형태의 타이틀을 보여주는 컴포넌트입니다.
 * - detail: 질문 상세페이지 입니다.
 * - note: 오답노트 상세페이지 입니다.
 * - setting: 설정 페이지에 입니다.
 */

// 타입별 컨텐츠 컴포넌트
const DetailContent = ({ questions }: { questions: IQuestion }) => (
  <div className={titleVariants({ direction: "vertical", gap: "medium" })}>
    <div className="flex">
      <span>Q.&nbsp;</span>
      <span>{questions.title}</span>
    </div>
    <div className={titleVariants({ gap: "small", text: "paragraph" })}>
      <span>React</span>
      <span>{questions.difficulty}</span>
      <span>{questions.categoryID}</span>
    </div>
  </div>
);

const NoteContent = ({ questions }: { questions: IQuestion }) => (
  <div className={titleVariants({ text: "heading", size: "full" })}>
    <span>{questions.content}</span>
  </div>
);

const SettingContent = ({ questions }: { questions: IQuestion }) => (
  <div className={titleVariants({ direction: "horizontalBetween", size: "full" })}>
    <span>{questions.userID}</span>
    <GameInfo />
  </div>
);

// 하단 정보 컴포넌트
const BottomInfo = ({ type, questions }: { type: TitleType; questions: IQuestion }) => {
  if (type === "setting") return null;

  const detailInfo = {
    detail: (
      <div className={titleVariants({ direction: "vertical", gap: "small" })}>
        <div className={titleVariants({ text: "subheading" })}>
          <UserBox type={type} questions={questions} />
        </div>
        <div className={titleVariants({ text: "description" })}>
          <p>마지막으로 수정: {questions.updatedAt}</p>
        </div>
      </div>
    ),
    note: (
      <div className={titleVariants({ text: "subheading" })}>
        <span>{questions.createdAt}</span>
      </div>
    ),
    setting: null,
  } as const;

  return (
    <div className={titleVariants({ container: "bottom" })}>
      <div className="title-bottom-left">{detailInfo[type]}</div>
      <div className="title-bottom-right">
        <IconBox type={type} />
      </div>
    </div>
  );
};

export const Title = ({ questions, type }: { questions: IQuestion; type: TitleType }) => {
  // 타입별 컨텐츠 컴포넌트 매핑
  const ContentComponent = {
    detail: DetailContent,
    note: NoteContent,
    setting: SettingContent,
  }[type];

  return (
    <div>
      <div className={titleVariants({ container: "main", size: "full" })}>

        <div className={titleVariants({ direction: "navigation" })}>
          <span>Home</span>
          <span>&gt;</span>
          <span>React</span>
          <span>&gt;</span>
          <span>React에서 useCallback 사용하기</span>
        </div>

        <div className={titleVariants({ text: "heading", size: "full" })}>
          <ContentComponent questions={questions} />
        </div>
      </div>
      <BottomInfo type={type} questions={questions} />
      <hr />
    </div>
  );
};
