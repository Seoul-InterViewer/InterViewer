"use client";
import { useState } from "react";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import { AnimatePresence } from "motion/react";
import { Modal, modalVariants } from "@/app/components/modal";
import useModal from "@/hooks/modal/useModal";
import toastStore from "@/stores/toastStore";

const GamePageButtons = () => {
  const modalProps = useModal();
  const { addToast } = toastStore();
  const [shouldShowToast, setShouldShowToast] = useState(false);

  const handleDelete = () => {
    setShouldShowToast(true);
    modalProps.close();
  };

  const handleExitComplete = () => {
    if (shouldShowToast) {
      addToast(`해당 게임을 삭제했습니다`, 3000, true, true);
      setShouldShowToast(false);
    }
  };

  return (
    <>
      <div className="flex md:flex-col md:gap-3.5 md:pl-15 flex-row gap-2.5 pl-0">
        <Button
          type="button"
          className="rounded-md cursor-pointer md:font-regular-18 md:px-5 md:py-2.5 font-sb-12 px-2 py-1.5 md:bg-sub-text text-white bg-font hover:opacity-80 transition-opacity"
        >
          수정하기
        </Button>
        <Button
          type="button"
          onClick={modalProps.open}
          className="rounded-md cursor-pointer md:font-regular-18 md:px-5 md:py-2.5 font-sb-12 px-2 py-1.5 bg-incorrect/60 text-white hover:opacity-80 transition-opacity"
        >
          삭제하기
        </Button>
      </div>
      <Button
        type="button"
        className="md:hidden block opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300"
      >
        <Icon name="arrow" />
      </Button>

      <AnimatePresence onExitComplete={handleExitComplete}>
        {modalProps.isOpen && (
          <Modal
            isOpen={modalProps.isOpen}
            onClose={modalProps.close}
            className={modalVariants({ size: "default" })}
            closeButton={true}
            closeWithOverlay={true}
          >
            <div className="w-full h-full flex flex-col justify-center items-center gap-7.5">
              <h3 className="md:font-regular-18 font-regular-14">
                정말로 게임을 삭제하시겠습니까?
              </h3>
              <Button
                type="button"
                className={buttonVariants({ size: "lg", color: "red", hover: true })}
                onClick={handleDelete}
              >
                네, 삭제할게요.
              </Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default GamePageButtons;
