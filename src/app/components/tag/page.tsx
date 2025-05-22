"use client";

import React from "react";
import Tag, { TagList } from "./Tag";

export default function TagPage() {
  // 태그 데이터 예시
  const defaultTags = ["React", "JavaScript", "TypeScript", "Next.js", "Node.js"];
  const cardTags = ["프론트엔드", "백엔드", "디자이너", "PM", "DevOps"];
  const chooseTags = ["React", "TypeScript", "JavaScript"];
  const correctTags = ["정답"];
  const incorrectTags = ["오답"];

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">태그 컴포넌트</h1>

      <h2 className="text-xl font-bold mt-8 mb-4">새로운 방식 (Children 사용)</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <Tag type="default">React</Tag>
        <Tag type="default">JavaScript</Tag>
        <Tag type="default">TypeScript</Tag>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Tag type="card">프론트엔드</Tag>
        <Tag type="card">백엔드</Tag>
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

      <h2 className="text-xl font-bold mt-8 mb-4">기존 방식 (배열 사용)</h2>
      <TagList type="default" data={defaultTags} />

      <TagList type="card" data={cardTags} />

      <TagList
        type="chooseTag"
        data={chooseTags}
        choose={["React", "TypeScript", "JavaScript"]}
        onClose={(tag) => console.log(tag)}
      />

      <TagList type="correct" data={correctTags} />
      <TagList type="incorrect" data={incorrectTags} />
    </div>
  );
}
