import { create } from "zustand";

interface IViewportStore {
  width: number;
  height: number;
  setDimensions: (width: number, height: number) => void;
}

const viewportStore = create<IViewportStore>((set) => ({
  width: 0,
  height: 0,
  setDimensions: (width, height) => set({ width, height }),
}));

export default viewportStore;

