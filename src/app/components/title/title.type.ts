export interface ITitleProps {
  qestions: object;
  type: "detail" | "note" | "setting";
}

export interface IQuestion {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  difficulty: "easy" | "normal" | "hard";
  likes: number;
  isSample: boolean;
  categoryID: string;
  userID: string;
}
