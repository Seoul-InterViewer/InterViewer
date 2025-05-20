export interface IToastProps {
  content: string;
  type?: "success" | "error"
  id?: string;
  onRemove?: () => void;
}
