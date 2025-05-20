import { SVGProps } from "react";

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
  | "horizontalElipsis"
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

export type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactElement;


