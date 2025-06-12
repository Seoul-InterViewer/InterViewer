export interface IMainCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  difficulty: "초급" | "중급" | "고급";
  tags: string[];
  likes: number;
  publishedAt: string;
  imageUrl?: string;
  isBookmarked?: boolean;
}
