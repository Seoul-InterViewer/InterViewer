import { Button, buttonVariants } from "@/app/components/button";
import { useRouter } from "next/navigation";
import useModal from "@/hooks/modal/useModal";
import { AnimatePresence } from "framer-motion";
import { Modal, modalVariants } from "@/app/components/modal";

export const GameCreateButtons = ({ hasSelectedQuestions }: { hasSelectedQuestions: boolean }) => {
  const router = useRouter();
  const modalProps = useModal();

  const handleNext = () => {
    if (!hasSelectedQuestions) {
      modalProps.open();
    } else {
      router.push("/games/create/select-blanks");
    }
  };
  return (
    <div className="flex justify-between gap-4">
      <Button
        type="button"
        className={buttonVariants({ size: "lg", color: "black" })}
        onClick={() => router.back()}
      >
        취소
      </Button>
      <Button
        type="button"
        className={buttonVariants({ size: "lg", color: "yellow" })}
        onClick={handleNext}
      >
        다음으로
      </Button>
      <AnimatePresence>
        {modalProps.isOpen && (
          <Modal
            isOpen={modalProps.isOpen}
            onClose={modalProps.close}
            closeWithOverlay={true}
            className={modalVariants({ size: "default" })}
          >
            <div className="flex-center flex-col gap-7.5 w-full h-full">
              <h3 className="font-regular-18 text-center">
                선택된 질문이 없습니다.❌
                <br />
                문제를 선택해주세요.
              </h3>
              <Button
                type="button"
                className={buttonVariants({ size: "lg", color: "black" })}
                onClick={modalProps.close}
              >
                확인
              </Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
