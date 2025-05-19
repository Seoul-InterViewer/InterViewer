"use client";

import React from "react";
import Tag from "./Tag";

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

      <Tag type="default" data={defaultTags} />

      <Tag type="card" data={cardTags} />

      <Tag
        type="chooseTag"
        data={chooseTags}
        choose={["React", "TypeScript", "JavaScript"]}
        onClose={(tag) => console.log(tag)}
      />

      <Tag type="correct" data={correctTags} />
      <Tag type="incorrect" data={incorrectTags} />
    </div>
  );
}
