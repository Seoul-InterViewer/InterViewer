"use client";

import { GameInfo } from "./GameInfo";
import { IconBox } from "./IconBox";
import { IQuestion, ITitleProps } from "./title.type";
import { UserBox } from "./UserBox";

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
        <div className="flex gap-2">
          <span>Q. </span>
          <span>{questions.title}</span>
        </div>
      ),
      note: (
        <div>
          <span>{questions.content}</span>
        </div>
      ),
      setting: (
        <div>
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
    if (type !== "detail") return null;

    return (
      <>
        <div className="left-top">
          <span>SkillStack</span>
          <span>{questions.difficulty}</span>
          <span>{questions.categoryID}</span>
        </div>
        <div className="left-bottom">
          <p>latest update date</p>
        </div>
        <div className="title-bottom-left">
          <UserBox type={type} questions={questions} />
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-10">
        {/* 상단 네비게이션 */}
        <div className="title-top flex gap-5.5 font-sb-24 text-font-gray [&>*:last-child]:text-black">
          <span>Home</span>
          <span>&gt;</span>
          <span>React</span>
          <span>&gt;</span>
          <span>React에서 useCallback 사용하기</span>
        </div>

        {/* 타이틀 중앙 영역 */}
        <div className="title-center font-bold-56">{renderContent()}</div>
      </div>

      {/* 하단 정보 영역 */}
      <div className="title-bottom">
        <div className="title-bottom-left">{renderDetailInfo()}</div>
        <div className="title-bottom-right">
          <IconBox type={type} />
        </div>
      </div>
      <hr />
    </div>
  );
};
