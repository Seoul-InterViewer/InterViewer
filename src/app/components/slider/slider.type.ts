export interface ISliderProps {
  children: React.ReactNode;
  indicator?: boolean;
  draggable?: boolean;
  type?: "images" | "mainPageCards" | "selectedQuestionCards";
}
