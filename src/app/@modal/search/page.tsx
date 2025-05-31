"use client";

import { Modal } from "@/app/components/modal/Modal";
import { useRouterModal } from "@/hooks/modal/useRouteModal";
import { useEffect } from "react";

export default function SearchModal() {
  const { isOpen, close, open } = useRouterModal();
  console.log(isOpen);
  useEffect(() => {
    open();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={close} closeButton>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Search Modal</h2>
        <p>This is a test modal using the Modal component and useRouterModal hook.</p>
      </div>
    </Modal>
  );
}
