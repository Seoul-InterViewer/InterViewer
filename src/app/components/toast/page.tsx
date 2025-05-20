"use client";
import React from "react";
import { Toast } from "./Toast";

export default function ToastTestPage() {
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) =>
    console.log(e.currentTarget.closest("div"));

  return (
    <div>
      <Toast content="Toast 테스트 1" onRemove={handleRemove} />
      <Toast content="에러 Toast 테스트 1" type="error" />
    </div>
  );
}
