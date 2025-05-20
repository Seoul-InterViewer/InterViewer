"use client";
import React from "react";
import toastStore from "@/stores/toastStore";

export default function ToastTestPage() {
  const { addToast } = toastStore();
  const { removeToast } = toastStore();
  const handleAddToast = () => {
    let i = 0;
    addToast(`Test Toast ${i++}`);
  };

  const handleErrorToast = () => {
    let i = 0;
    addToast(`Test Toast ${i++}`, 3000, false, "error");
  };

  return (
    <div>
      <button
        onClick={handleAddToast}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
      >
        click to add toast
      </button>
      <button onClick={handleErrorToast} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md">
        error toast
      </button>
    </div>
  );
}
