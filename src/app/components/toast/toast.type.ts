export interface IToastProps {
  content: string;
  error?: boolean;
  id?: string;
  onRemove?: () => void;
}
