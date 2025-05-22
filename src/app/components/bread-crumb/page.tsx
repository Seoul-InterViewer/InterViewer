import React from "react";
import BreadCrumb from "./BreadCrumb";

export default function BreadCrumbPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">브레드크럼 컴포넌트</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">자동 생성 브레드크럼</h2>
          <BreadCrumb autoGenerate={true} items={[]} />
        </div>
      </div>
    </div>
  );
}
