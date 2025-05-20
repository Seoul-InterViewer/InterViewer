type TextareaType = "comment1" | "comment2" | "report";

export interface ITextareaProps {
  name: string;
  id: string;
  type: TextareaType;
  maxLength?: number;
  placeholder: string;
}
