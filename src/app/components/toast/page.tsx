"use client";
import React, { useState } from "react";
import toastStore from "@/stores/toastStore";

export default function ToastTestPage() {
  const [testCount, setTestCount] = useState(0);
  const { addToast } = toastStore();
  const handleAddToast = () => {
    setTestCount(testCount + 1);
    addToast(`Test Toast ${testCount}`);
  };

  const handleErrorToast = () => {
    setTestCount(testCount + 1);
    addToast(`Test Toast ${testCount}`, 3000, true, true);
  };

  return (
    <div>
      <button
        onClick={handleAddToast}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
      >
        click to add toast
      </button>
      <button
        onClick={handleErrorToast}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md"
      >
        error toast
      </button>
    </div>
  );
}
