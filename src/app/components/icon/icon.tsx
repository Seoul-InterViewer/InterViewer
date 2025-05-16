import { IIconProps } from "./icon.type";

// SVG 파일들을 문자열로 import
import apple from "/assets/icons/apple.svg?raw";
import bookmark from "/assets/icons/bookmark.svg?raw";
import cardQuiz from "/assets/icons/card-quiz.svg?raw";
import close from "/assets/icons/close.svg?raw";
import codepen from "/assets/icons/codepen.svg?raw";
import correct from "/assets/icons/correct.svg?raw";
import createNew from "/assets/icons/create-new.svg?raw";
import cs from "/assets/icons/cs.svg?raw";
import edit from "/assets/icons/edit.svg?raw";
import github from "/assets/icons/github.svg?raw";
import google from "/assets/icons/google.svg?raw";
import heart from "/assets/icons/heart.svg?raw";
import heartBlack from "/assets/icons/heart-black.svg?raw";
import heroCodepen from "/assets/icons/hero-codepen.svg?raw";
import heroNote from "/assets/icons/hero-note.svg?raw";
import heroQuestion from "/assets/icons/hero-question.svg?raw";
import heroQuiz from "/assets/icons/hero-quiz.svg?raw";
import horizontalElipsis from "/assets/icons/horisontal-elipsis.svg?raw";
import incorrect from "/assets/icons/incorrect.svg?raw";
import javascript from "/assets/icons/javascript.svg?raw";
import library from "/assets/icons/library.svg?raw";
import menu from "/assets/icons/menu.svg?raw";
import nextjs from "/assets/icons/nextjs.svg?raw";
import plus from "/assets/icons/plus.svg?raw";
import questionBlack from "/assets/icons/question-black.svg?raw";
import react from "/assets/icons/react.svg?raw";
import reply from "/assets/icons/reply.svg?raw";
import report from "/assets/icons/report.svg?raw";
import search from "/assets/icons/search.svg?raw";
import setting from "/assets/icons/setting.svg?raw";
import share from "/assets/icons/share.svg?raw";
import trash from "/assets/icons/trash.svg?raw";
import typescript from "/assets/icons/typescript.svg?raw";
import upload from "/assets/icons/upload.svg?raw";
import user from "/assets/icons/user.svg?raw";
import verticalElipsis from "/assets/icons/vertical-elipsis.svg?raw";
import web from "/assets/icons/web.svg?raw";

const icons = {
  apple,
  bookmark,
  cardQuiz,
  close,
  codepen,
  correct,
  createNew,
  cs,
  edit,
  github,
  google,
  heart,
  heartBlack,
  heroCodepen,
  heroNote,
  heroQuestion,
  heroQuiz,
  horizontalElipsis,
  incorrect,
  javascript,
  library,
  menu,
  nextjs,
  plus,
  questionBlack,
  react,
  reply,
  report,
  search,
  setting,
  share,
  trash,
  typescript,
  upload,
  user,
  verticalElipsis,
  web,
};

export type IconName = keyof typeof icons;

export const Icon = ({
  name,
  size = 24,
  className = "",
  strokeWidth,
  stroke,
  fill,
  viewBox,
}: IIconProps) => {
  const svgString = icons[name as IconName];

  // SVG 문자열을 파싱하여 속성 추출
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
  const svgElement = svgDoc.documentElement;

  // 기본 viewBox 가져오기
  const defaultViewBox = svgElement.getAttribute("viewBox") || "0 0 24 24";

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox || defaultViewBox}
      className={className}
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill={fill}
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
};
