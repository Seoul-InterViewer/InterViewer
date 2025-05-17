import { SVGProps } from "react";

// 아이콘 이름 타입
export type IconName =
  | "apple"
  | "arrow"
  | "bookmark"
  | "cardQuiz"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "chevronUp"
  | "menu"
  | "web"
  | "google"
  | "user"
  | "verticalElipsis"
  | "upload"
  | "typescript"
  | "trash"
  | "share"
  | "setting"
  | "search"
  | "report"
  | "reply"
  | "react"
  | "questionBlack"
  | "plus"
  | "nextjs"
  | "library"
  | "javascript"
  | "incorrect"
  | "horisontalElipsis"
  | "heroQuiz"
  | "heroQuestion"
  | "heroNote"
  | "heroCodepen"
  | "heart"
  | "heartBlack"
  | "github"
  | "edit"
  | "cs"
  | "createNew"
  | "correct"
  | "codepen"
  | "close";

// Icon 컴포넌트 Props 타입
export interface IIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  viewBox?: string;
}

// SVG 컴포넌트 타입
export type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

// 아이콘 객체 타입
export interface IIcons {
  [key: string]: IconComponent;
}
