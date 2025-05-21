type TextareaType = "comment1" | "comment2" | "report" | "wrongAnswer";

export interface ITextareaProps {
  name: string;
  id: string;
  type: TextareaType;
  maxLength?: number;
  placeholder: string;
}
