import React from "react";
import { IEmptyUIProps } from "./emptyUI.type";

export const EmptyUI = ({ type }: IEmptyUIProps) => {
  const uiContent = () => {
    switch (type) {
      case "comment":
        return (
          <div>
            <h2>댓글이 없습니다.</h2>
            <p>댓글을 추가해주세요.</p>
          </div>
        );
      case "bookmark":
        return (
          <div>
            <h2>북마크가 없습니다.</h2>
            <p>북마크를 추가해주세요.</p>
          </div>
        );
      case "wrongNotes":
        return (
          <div>
            <h2>오답노트가 없습니다.</h2>
            <p>오답노트를 추가해주세요.</p>
          </div>
        );
      case "game":
        return (
          <div>
            <h2>게임 결과가 없습니다.</h2>
            <p>게임을 플레이해주세요.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{uiContent()}</div>;
};
