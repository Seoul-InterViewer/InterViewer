"use client";

import React, { useState } from "react";
import Tag from "./Tag";

export default function TagPage() {
  return (
    <div>
      <Tag type="default">기본 태그</Tag>
      <Tag type="card">카드 태그</Tag>
    </div>
  );
}
