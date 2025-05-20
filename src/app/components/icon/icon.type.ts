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
  className?: string;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  size?: number;
}

export type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactElement;
