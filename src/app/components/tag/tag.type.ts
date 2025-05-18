import { ReactNode } from "react";

// tagData 타입을 위한 import
import { tagData } from "./tag.constants"; // 이 파일은 아직 없지만 곧 만들 것입니다

interface ITagProps {
  children?: ReactNode;
  type?: "default" | "level" | "category" | "card";
  hover?: boolean;
  selected?: string | null;
  onClick?: ((item: string) => void) | (() => void);
  className?: string;
}

interface TagGroupProps {
  type: keyof typeof tagData;
  hover?: boolean;
  selected?: string | null;
  onSelect?: (item: string) => void;
}

export default ITagProps;
export type { TagGroupProps };
