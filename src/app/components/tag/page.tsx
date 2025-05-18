"use client";

import React, { useState } from "react";
import Tag from "./Tag";
import { tagData } from "./tag.constants"; // tagData 가져오기

export default function TagPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div>
      <Tag hover>일반 태그</Tag>
      <Tag type="level" hover selected={selectedLevel} onClick={setSelectedLevel}></Tag>
      <Tag type="category" hover selected={selectedCategory} onClick={setSelectedCategory}></Tag>

      <div style={{}}>
        {tagData.card.items.map((item) => (
          <Tag key={item} type="card">
            {item}
          </Tag>
        ))}
      </div>
    </div>
  );
}
