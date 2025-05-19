import { ReactNode } from "react";

export type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  buttons?: ReactNode[];
  showCloseButton?: boolean;
  size?: "default" | "mobile";
  buttonLocation?: "left" | "center" | "right";
  className?: string;
};
