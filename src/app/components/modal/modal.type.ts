export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  closeButton?: boolean;
  className?: string;
  type?: "default" | "bookmark";
}
