"use client";

import { Modal } from "./Modal";
import useModal from "@/hooks/useModal";
import { AnimatePresence } from "motion/react";
import { Button } from "../button/Button";
import { buttonVariants } from "../button";
function ModalPage() {
  const modalProps = useModal();

  return (
    <div className="flex-center w-full h-[100vh]">
      <Button
        type="button"
        className={buttonVariants({ color: "yellow", size: "lg" })}
        onClick={modalProps.open}
      >
        모달 열기
      </Button>
      <div>
        <AnimatePresence>
          <Modal
            isOpen={modalProps.isOpen}
            onClose={modalProps.close}
            closeButton={true}
            type="bookmark"
            className=""
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ModalPage;
