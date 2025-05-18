export interface IButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: ButtonType;
  hover?: hoverType;
  mobile?: mobileType;
}

export type ButtonType =
  | "default"
  | "blackBtn"
  | "yellowBtn"
  | "grayBtn"
  | "lightGrayBtn"
  | "redBtn"
  | "deleteBtn"
  | "editBtn"
  | "fillterWhiteBtn"
  | "fillterBlackBtn"
  | "writeBtn";

export type hoverType = boolean;
export type mobileType = "default" | "normalSize" | "fullSize";
