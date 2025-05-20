import { ReactNode } from "react";

export type Toast = {
  id: string;
  content: string;
  removeBtn?: boolean;
  type?: "success" | "error";
};

export interface IToastStore {
  toasts: Toast[];
  addToast: (
    content: string,
    delay?: number,
    removeBtn?: boolean,
    type?: "success" | "error",
  ) => void;
  removeToast: (id: string) => void;
}
