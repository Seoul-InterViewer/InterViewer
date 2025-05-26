export interface ICardProps {
  type: "mainCard" | "editCard" | "detailCard" | "checkCard" | "favoriteCard";
  data: ICardDataProps;
  size?: "410" | "178" | "165";
}

// 실제 데이터 받으면 변경
export type ICardDataProps = any;
