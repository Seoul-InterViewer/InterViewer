import React from "react";
import { BreadCrumb } from "./BreadCrumb";

export default function BreadCrumbPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-12">브레드크럼 컴포넌트</h1>

      <div className="space-y-8 mb-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">자동 생성 브레드크럼</h2>
          <BreadCrumb autoGenerate={true} />
        </div>
      </div>

      <div className="space-y-8 mb-12">
        <h2 className="text-xl font-semibold mb-4">
          유저 경로 브레드크럼 (Home {">"} Profile만 표시)
        </h2>
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: "user", href: "/user" },
            { label: "12345678", href: "/user/12345678" },
            { label: "setting", href: "/user/12345678/setting" },
            { label: "profile", href: "/user/12345678/setting/profile", isCurrentPage: true },
          ]}
        />
      </div>

      <div className="space-y-8">
        <h2 className="text-xl font-semibold mb-4">일반 경로 브레드크럼 (전체 경로 표시)</h2>
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: "게시판", href: "/board" },
            { label: "React", href: "/board/react" },
            {
              label: "React란 무엇인가요?",
              href: "/board/react/what-is-react",
              isCurrentPage: true,
            },
          ]}
        />
      </div>
    </div>
  );
}
