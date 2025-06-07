"use client";

import React from "react";
import { Tag } from "./Tag";

export default function TagPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">태그 컴포넌트</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        <Tag type="default">React</Tag>
        <Tag type="default">JavaScript</Tag>
        <Tag type="default">TypeScript</Tag>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Tag type="card">프론트엔드</Tag>
        <Tag type="card">백엔드</Tag>
        <Tag type="card">AI인공지능개발자</Tag>
        <Tag type="card">더긴텍스트가들어오게된다면</Tag>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Tag type="chooseTag" closable onClose={() => console.log("태그 삭제")}>
          React
        </Tag>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Tag type="correct">정답</Tag>
        <Tag type="incorrect">오답</Tag>
      </div>
    </div>
  );
}
