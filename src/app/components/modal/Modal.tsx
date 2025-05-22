"use client";

import { useEffect, useState } from "react";
import { IModalProps } from "./modal.type";
import { modalVariants, iconVariants } from "./modal.variants";
import { motion } from "framer-motion";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";
import { buttonVariants } from "../button";
import Portal from "../Portal";

export const Modal = ({
  isOpen,
  onClose,
  children,
  closeButton,
  className,
  type = "default",
}: IModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // modal-root 요소가 없다면 생성
    if (!document.getElementById("modal-root")) {
      const modalRoot = document.createElement("div");
      modalRoot.id = "modal-root";
      document.body.appendChild(modalRoot);
    }

    // Esc키 닫기
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div className="fixed left-0 top-0 w-full h-full z-99 flex-center bg-black/25 shadow-lg">
      <motion.div
        className={`${modalVariants()} ${className || ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {closeButton && (
          <div className="absolute top-5 right-5">
            <Button type="button" className={buttonVariants({ color: "white" })} onClick={onClose}>
              <Icon name="close" className={iconVariants({ type })} />
            </Button>
          </div>
        )}
        {children}
      </motion.div>
    </div>
  );

  return <Portal id="modal-root" content={modalContent} />;
};
