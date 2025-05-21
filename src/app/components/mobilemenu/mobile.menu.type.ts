export interface User {
  id: string;
  name?: string;
  email?: string;
  // Add other user properties as needed
}

export type MenuType = "myContent" | "otherContent";

export interface IMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuType?: MenuType; // 메뉴 타입을 직접 지정
  currentUser?: User | null; // 현재 사용자
  authorId?: string; // 댓글/게시글 작성자 ID
}

export interface IMenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: "default" | "danger" | "primary" | "action";
}

export interface IMobileMenuSectionProps {
  items: IMenuItem[];
}
