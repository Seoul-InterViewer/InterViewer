import { IconName } from "@/app/components/icon";

export interface IButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  className?: string;
  onClick?: () => void;
}

export interface IIconButtonProps {
  name: IconName;
  size?: number;
  width?: number;
  height?: number;
  viewBox?: string;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  className?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export type hoverType = boolean;
