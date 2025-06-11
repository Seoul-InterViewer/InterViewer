export interface ICardProps {
  type?: "mainCard" | "favoriteCard" | "editCard" | "detailCard" | "checkCard";
  children: React.ReactNode;
  className?: string;
}
