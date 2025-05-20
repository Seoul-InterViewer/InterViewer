"use client";
import toastStore from "@/stores/toastStore";
import { AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import { Toast } from "../Toast";
import { createPortal } from "react-dom";

const ToastContainer = () => {
  const [portalElement, setPortalElement] = useState<null | HTMLDivElement>(null);
  const { toasts, removeToast } = toastStore();

  useEffect(() => {
    const element = document.createElement("div");
    element.id = "toast-portal";
    document.body.appendChild(element);
    setPortalElement(element);
  }, []);

  const toastContent = (
    <div className="fixed bottom-12 right-12 flex flex-col items-center z-50">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            content={toast.content}
            onRemove={toast.removeBtn ? () => removeToast(toast.id) : undefined}
            error={toast.error}
          />
        ))}
      </AnimatePresence>
    </div>
  );

  return portalElement ? createPortal(toastContent, portalElement) : null;
};

export default ToastContainer;
