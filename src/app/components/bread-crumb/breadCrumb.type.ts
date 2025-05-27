// 각 경로 항목을 나타내는 인터페이스
export interface IBreadCrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
  fullLabel?: string;
}

// 브레드크럼 컴포넌트의 props 인터페이스
export interface IBreadCrumbProps {
  items?: IBreadCrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}
