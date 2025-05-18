export interface IButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: ButtonType;
}

export type ButtonType =
  | "defalut"
  | "blackBtn"
  | "yellowBtn"
  | "grayBtn"
  | "lightGrayBtn"
  | "redBtn"
  | "deleteBtn"
  | "editBtn"
  | "borderBtn";
