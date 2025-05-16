import { IIconProps, IconComponent, IconName } from "./icon.type";

// SVG 파일들을 직접 import
import Apple from "../../../../public/assets/icons/apple.svg";
import Bookmark from "../../../../public/assets/icons/bookmark.svg";
import CardQuiz from "../../../../public/assets/icons/card-quiz.svg";
import Close from "../../../../public/assets/icons/close.svg";
import Codepen from "../../../../public/assets/icons/codepen.svg";
import Correct from "../../../../public/assets/icons/correct.svg";
import CreateNew from "../../../../public/assets/icons/create-new.svg";
import Cs from "../../../../public/assets/icons/cs.svg";
import Edit from "../../../../public/assets/icons/edit.svg";
import Github from "../../../../public/assets/icons/github.svg";
import Google from "../../../../public/assets/icons/google.svg";
import Heart from "../../../../public/assets/icons/heart.svg";
import HeartBlack from "../../../../public/assets/icons/heart-black.svg";
import HeroCodepen from "../../../../public/assets/icons/hero-codepen.svg";
import HeroNote from "../../../../public/assets/icons/hero-note.svg";
import HeroQuestion from "../../../../public/assets/icons/hero-question.svg";
import HeroQuiz from "../../../../public/assets/icons/hero-quiz.svg";
import HorizontalElipsis from "../../../../public/assets/icons/horisontal-elipsis.svg";
import Incorrect from "../../../../public/assets/icons/incorrect.svg";
import Javascript from "../../../../public/assets/icons/javascript.svg";
import Library from "../../../../public/assets/icons/library.svg";
import Menu from "../../../../public/assets/icons/menu.svg";
import Nextjs from "../../../../public/assets/icons/nextjs.svg";
import Plus from "../../../../public/assets/icons/plus.svg";
import QuestionBlack from "../../../../public/assets/icons/question-black.svg";
import React from "../../../../public/assets/icons/react.svg";
import Reply from "../../../../public/assets/icons/reply.svg";
import Report from "../../../../public/assets/icons/report.svg";
import Search from "../../../../public/assets/icons/search.svg";
import Setting from "../../../../public/assets/icons/setting.svg";
import Share from "../../../../public/assets/icons/share.svg";
import Trash from "../../../../public/assets/icons/trash.svg";
import Typescript from "../../../../public/assets/icons/typescript.svg";
import Upload from "../../../../public/assets/icons/upload.svg";
import User from "../../../../public/assets/icons/user.svg";
import VerticalElipsis from "../../../../public/assets/icons/vertical-elipsis.svg";
import Web from "../../../../public/assets/icons/web.svg";

// SVG 컴포넌트 정의
const icons: Record<IconName, IconComponent> = {
  apple: Apple,
  bookmark: Bookmark,
  cardQuiz: CardQuiz,
  close: Close,
  codepen: Codepen,
  correct: Correct,
  createNew: CreateNew,
  cs: Cs,
  edit: Edit,
  github: Github,
  google: Google,
  heart: Heart,
  heartBlack: HeartBlack,
  heroCodepen: HeroCodepen,
  heroNote: HeroNote,
  heroQuestion: HeroQuestion,
  heroQuiz: HeroQuiz,
  horizontalElipsis: HorizontalElipsis,
  incorrect: Incorrect,
  javascript: Javascript,
  library: Library,
  menu: Menu,
  nextjs: Nextjs,
  plus: Plus,
  questionBlack: QuestionBlack,
  react: React,
  reply: Reply,
  report: Report,
  search: Search,
  setting: Setting,
  share: Share,
  trash: Trash,
  typescript: Typescript,
  upload: Upload,
  user: User,
  verticalElipsis: VerticalElipsis,
  web: Web,
};

export const Icon = ({
  name,
  width = 24,
  height = 24,
  className = "",
  strokeWidth,
  stroke,
  fill,
  viewBox,
  ...props
}: IIconProps) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      width={width}
      height={height}
      className={className}
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill={fill}
      viewBox={viewBox}
      {...props}
    />
  );
};
