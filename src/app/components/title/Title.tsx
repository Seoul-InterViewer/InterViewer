"use client";

import { GameInfo } from "./GameInfo";
import { IconBox } from "./IconBox";
import { IQuestion, ITitleProps } from "./title.type";
import { UserBox } from "./UserBox";
import { titleVariants } from "./title.variants";

/**
 * Title 컴포넌트
 *
 * 타입에 따라 다른 형태의 타이틀을 보여주는 컴포넌트입니다.
 * - detail: 게임 상세 정보와 스킬스택, 레벨 등을 표시
 * - note: 사용자 닉네임 정보를 표시
 * - setting: 게임 플레이 횟수와 랭킹 정보를 표시
 */

export const Title = ({
  questions,
  type,
}: {
  questions: IQuestion;
  type: "detail" | "note" | "setting";
}) => {
  /**
   * 타입별 컨텐츠를 렌더링하는 함수
   */
  const renderContent = () => {
    const contentByType = {
      detail: (
        <div className="flex flex-col md:gap-7 gap-3 ">
          <div className="flex ">
            <span>Q.&nbsp;</span>
            <span>{questions.title}</span>
          </div>
          <div className="flex gap-1.5 font-regular-18">
            <span>React</span>
            <span>{questions.difficulty}</span>
            <span>{questions.categoryID}</span>
          </div>
        </div>
      ),
      note: (
        <div>
          <span>{questions.content}</span>
        </div>
      ),
      setting: (
        <div className="w-full flex md:flex-row md:justify-between md:items-center md:gap-0 flex-col items-start gap-5">
          <span>{questions.userID}</span>
          <GameInfo />
        </div>
      ),
    };

    return contentByType[type];
  };

  /**
   * 상세 페이지의 추가 정보를 렌더링하는 함수
   */
  const renderDetailInfo = () => {
    const contentByType = {
      detail: (
        <div className="flex flex-col gap-1.5">
          <div className="title-bottom-left md:font-sb-20 font-sb-12">
            <UserBox type={type} questions={questions} />
          </div>
          <div className="left-bottom md:1.5 md:font-sb-12 text-sub-text font-medium-10">
            <p>마지막으로 수정: {questions.updatedAt}</p>
          </div>
        </div>
      ),
      note: (
        <div>
          <span>{questions.createdAt}</span>
        </div>
      ),
      setting: null,
    };
    return contentByType[type];
  };

  /**
   * 하단 정보 영역을 렌더링하는 함수
   */
  const renderBottom = () => {
    if (type === "setting") return null;

    return (
      <div className={titleVariants({ layout: "bottom" })}>
        <div className="title-bottom-left">{renderDetailInfo()}</div>
        <div className="title-bottom-right">
          <IconBox type={type} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={titleVariants({ layout: "container" })}>
        {/* 상단 네비게이션 */}
        <div className={titleVariants({ layout: "navigation" })}>
          <span>Home</span>
          <span>&gt;</span>
          <span>React</span>
          <span>&gt;</span>
          <span>React에서 useCallback 사용하기</span>
        </div>

        {/* 타이틀 중앙 영역 */}
        <div className={titleVariants({ fontSize: "title" })}>{renderContent()}</div>
      </div>

      {/* 하단 정보 영역 */}
      {renderBottom()}
      <hr />
    </div>
  );
};
