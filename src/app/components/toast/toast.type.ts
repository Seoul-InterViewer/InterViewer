export interface IToastProps {
  content: string;
  type?: "success" | "error"
  id?: string;
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
