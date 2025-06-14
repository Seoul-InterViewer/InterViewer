type TextareaType = "comment" | "reply" | "report" | "wrongAnswer";

export interface ITextareaProps {
  name: string;
  id: string;
  type: TextareaType;
  maxLength?: number;
  placeholder: string;
  noButton?: boolean;
}
