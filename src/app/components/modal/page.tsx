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
          {modalProps.isOpen && (
            <Modal isOpen={modalProps.isOpen} onClose={modalProps.close} closeButton={true}>
              <div className="flex-center flex-col gap-7.5 w-full h-full">
                <h2 className="font-regular-18">정말로 게임을 종료하시겠어요?😭</h2>
                <div className="flex-center gap-5 ">
                  <Button type="button" className={buttonVariants({ color: "black", size: "lg" })}>
                    취소하기
                  </Button>
                  <Button type="button" className={buttonVariants({ color: "yellow", size: "lg" })}>
                    네, 종료할게요
                  </Button>
                </div>
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ModalPage;
