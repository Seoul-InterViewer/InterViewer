"use client";

import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

export default function DropdownPage() {
  // 각 타입별 선택된 값 상태 관리
  const [reportValue, setReportValue] = useState<string | number | null>(null);
  const [positionValue, setPositionValue] = useState<string | number | null>(null);
  const [levelValue, setLevelValue] = useState<string | number | null>(null);
  const [categoryValue, setCategoryValue] = useState<string | number | null>(null);

  // 커스텀 옵션 예제
  const customOptions = [
    { value: "react", label: "React", disabled: false },
    { value: "vue", label: "Vue", disabled: false },
    { value: "angular", label: "Angular", disabled: true },
    { value: "svelte", label: "Svelte", disabled: false },
    { value: "nextjs", label: "Next.js", disabled: false },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">드롭다운 컴포넌트 타입 예제</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 자동 옵션 드롭다운 */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">자동 옵션 타입</h2>

          <div className="w-64">
            <Dropdown
              type="report"
              value={reportValue}
              onChange={setReportValue}
              variant="filled"
            />
            <p className="mt-1 text-sm text-gray-500">선택: {reportValue}</p>
          </div>

          <div className="w-64">
            <Dropdown type="position" value={positionValue} onChange={setPositionValue} />
            <p className="mt-1 text-sm text-gray-500">선택: {positionValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
