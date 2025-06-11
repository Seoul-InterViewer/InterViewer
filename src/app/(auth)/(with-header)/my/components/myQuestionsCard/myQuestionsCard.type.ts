import { IconName } from "@/app/components/icon";

export interface IMyQuestionsCardProps {
  id: number;
  title: string;
  author: string;
  // 추후 전역 타입에 카테고리 타입 및 전역 constant 추가예정 
  category: IconName;
  difficulty: "easy" | "medium" | "hard";
}
