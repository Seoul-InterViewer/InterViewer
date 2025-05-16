import { SVGProps } from "react";

// 아이콘 이름 타입
export type IconName =
  | "apple"
  | "bookmark"
  | "cardQuiz"
  | "close"
  | "codepen"
  | "correct"
  | "createNew"
  | "cs"
  | "edit"
  | "github"
  | "google"
  | "heart"
  | "heartBlack"
  | "heroCodepen"
  | "heroNote"
  | "heroQuestion"
  | "heroQuiz"
  | "horizontalElipsis"
  | "incorrect"
  | "javascript"
  | "library"
  | "menu"
  | "nextjs"
  | "plus"
  | "questionBlack"
  | "react"
  | "reply"
  | "report"
  | "search"
  | "setting"
  | "share"
  | "trash"
  | "typescript"
  | "upload"
  | "user"
  | "verticalElipsis"
  | "web";

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
