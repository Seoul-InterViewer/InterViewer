import { ReactNode } from "react";

// tagData 타입을 위한 import
import { tagData } from "./tag.constants"; // 이 파일은 아직 없지만 곧 만들 것입니다

interface ITagProps {
  type?: "default" | "card" | "chooseTag" | "correct" | "incorrect";
  className?: string;
  data: string[]; // 여러 태그를 렌더링하기 위한 데이터 배열
  choose?: string[]; // 선택된 태그 배열
  onClose?: (tag: string) => void; // 태그 제거를 위한 콜백 함수
}

interface TagGroupProps {
  type: keyof typeof tagData;
  hover?: boolean;
  selected?: string | null;
  onSelect?: (item: string) => void;
}

export default ITagProps;
export type { TagGroupProps };
