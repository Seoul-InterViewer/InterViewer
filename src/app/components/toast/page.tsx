import React from "react";
import { Toast } from "./Toast";

export default function ToastTestPage() {
  return (
    <div>
      <Toast content="Toast 테스트 1" />
      <Toast content="에러 Toast 테스트 1" type="error" />
    </div>
  );
}
