import { Modal, modalVariants } from "@/app/components/modal";
import { IUseeModalProps } from "./bookmarkModal.type";
import { AnimatePresence } from "motion/react";
import { Button, buttonVariants } from "@/app/components/button";

export const RemoveBookmarkModal = ({ props }: { props: IUseeModalProps }) => {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <Modal
          isOpen={props.isOpen}
          onClose={props.close}
          className={modalVariants({ size: "default" })}
          closeButton={true}
          closeWithOverlay={false}
        >
          <div className="flex-center flex-col gap-7.5 w-full h-full">
            <h2 className="font-regular-18">북마트 된 목록을 정말 삭제하시겠습니까?</h2>
            <div className="flex-center gap-5 ">
              <Button
                type="button"
                className={buttonVariants({ color: "black", size: "lg" })}
                onClick={props.close}
              >
                네, 삭제할게요
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
};
