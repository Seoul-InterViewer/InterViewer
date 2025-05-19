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

export type IconSize = "sm" | "md" | "lg" | "xl";
export type IconColor =
  | "primary"
  | "secondary"
  | "black"
  | "white"
  | "gray"
  | "yellow"
  | "red"
  | "green";
export type IconVariant = "solid" | "outline";

export interface IIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  viewBox?: string;
  size?: IconSize;
  color?: IconColor;
  variant?: IconVariant;
}

export type CloseSize = "modal" | "login" | "tag" | "blank";

export type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

export interface IIcons {
  [key: string]: IconComponent;
}
