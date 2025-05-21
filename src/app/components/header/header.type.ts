// 메뉴 항목 인터페이스
export interface IMenuItem {
  name: string;
  href: string;
}

// 헤더 컴포넌트 props 인터페이스
export interface IHeaderProps {
  isLoggedIn?: boolean;
}

export default IHeaderProps;
