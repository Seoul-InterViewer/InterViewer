import { IToastStore } from "@/types/stores/toastStore.type";
import { create } from "zustand";

const toastStore = create<IToastStore>((set) => ({
  toasts: [],
  addToast: (content, delay, removeBtn = false, error = false) => {
    const id = Date.now().toString();
    set((state) => ({
      ...state,
      toasts: [...state.toasts, { id, content, error, removeBtn }],
    }));
    setTimeout(() => {
      toastStore.getState().removeToast(id);
    }, delay || 3000);
  },
  removeToast: (id) => {
    set((state) => ({
      ...state,
      toasts: state.toasts.filter((toast) => id !== toast.id),
    }));
  },
}));

export default toastStore;
