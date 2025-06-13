import { Button } from "@/app/components/button/Button";
import { buttonVariants } from "@/app/components/button/button.variants";
import { Modal, modalVariants } from "@/app/components/modal";
import useModal from "@/hooks/modal/useModal";
import { AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
export const Buttons = ({
  currentIndex,
  setCurrentIndex,
  questions,
}: {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  questions: number;
}) => {
  const modalProps = useModal();
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/games`);
  };
  return (
    <div className="flex gap-4">
      <Button
        type="button"
        className={
          buttonVariants({ size: "md", color: "black", hover: true }) +
          (currentIndex === 0 ? " opacity-50 cursor-not-allowed pointer-events-none" : "")
        }
        onClick={() => {
          if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
        }}
      >
        이전
      </Button>
      {currentIndex === questions - 1 ? (
        <Button
          type="button"
          className={buttonVariants({ size: "md", color: "yellow", hover: true })}
          onClick={modalProps.open}
        >
          수정
        </Button>
      ) : (
        <Button
          type="button"
          className={buttonVariants({ size: "md", color: "yellow", hover: true })}
          onClick={() => {
            if (currentIndex < questions - 1) setCurrentIndex(currentIndex + 1);
          }}
        >
          다음
        </Button>
      )}
      <AnimatePresence>
        {modalProps.isOpen && (
          <Modal
            isOpen={modalProps.isOpen}
            onClose={modalProps.close}
            closeButton={true}
            closeWithOverlay={false}
            className={modalVariants({ size: "default" })}
          >
            <div className="flex-center flex-col gap-7.5 w-full h-full">
              <h3 className="font-regular-18">이대로 수정하시겠습니까?</h3>
              <Button
                type="button"
                className={buttonVariants({ color: "black", size: "lg" })}
                onClick={handleOnClick}
              >
                네, 수정할게요.
              </Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
