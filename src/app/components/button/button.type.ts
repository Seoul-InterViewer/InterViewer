export interface IButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export type hoverType = boolean;
