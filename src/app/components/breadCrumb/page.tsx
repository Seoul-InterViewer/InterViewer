import React from "react";
import BreadCrumb from "./BreadCrumb";

export default function BreadCrumbPage() {
  // 예시 데이터
  const breadcrumbItems = [
    { label: "홈", href: "/" },
    { label: "컴포넌트", href: "/components" },
    { label: "네비게이션", href: "/components/navigation" },
    { label: "브레드크럼", href: "/components/navigation/breadcrumb", isCurrentPage: true },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">브레드크럼 컴포넌트</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">기본 사용법</h2>
          <BreadCrumb items={breadcrumbItems} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">화살표 구분자 사용</h2>
          <BreadCrumb
            items={breadcrumbItems}
            separator={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
