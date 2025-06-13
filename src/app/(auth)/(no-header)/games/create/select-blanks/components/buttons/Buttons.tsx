import { Button } from "@/app/components/button/Button";
import { buttonVariants } from "@/app/components/button/button.variants";
import { Modal, modalVariants } from "@/app/components/modal";
import { useRouter } from "next/navigation";
import useModal from "@/hooks/modal/useModal";
import { AnimatePresence } from "motion/react";

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
          제출
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
            closeWithOverlay={true}
            className={modalVariants({ size: "default" })}
          >
            <div className="flex-center flex-col gap-7.5 w-full h-full">
              <h3 className="font-regular-18 text-center">
                게임 생성이 완료되었어요.
                <br />
                바로 생성된 게임을 플레이하시겠어요?
              </h3>
              <div className="flex-center gap-5 ">
                <Button
                  type="button"
                  className={buttonVariants({ color: "black", size: "lg" })}
                  onClick={() => router.push(`/games`)}
                >
                  게임페이지로 가기
                </Button>
                <Button type="button" className={buttonVariants({ color: "yellow", size: "lg" })} onClick={() => router.push(`/games/[gameId]/play`)}>
                  바로 플레이하기
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
