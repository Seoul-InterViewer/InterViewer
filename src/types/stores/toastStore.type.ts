import { ReactNode } from "react";

export type Toast = {
  id: string;
  content: string;
  removeBtn?: boolean;
  error?: boolean;
};

export interface IToastStore {
  toasts: Toast[];
  addToast: (
    content: string,
    delay?: number,
    removeBtn?: boolean,
    error?: boolean,
  ) => void;
  removeToast: (id: string) => void;
}
