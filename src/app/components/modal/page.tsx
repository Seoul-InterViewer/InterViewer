"use client";

import { Modal } from "./Modal";
import useModal from "@/hooks/modal/useModal";
import { AnimatePresence } from "motion/react";
import { Button } from "../button/Button";
import { buttonVariants } from "../button";
import { modalVariants } from "./modal.variants";
function ModalPage() {
  // useModal에서 open, close, isOpen을 받아옴
  const defaultModalProps = useModal();
  const customModalProps = useModal();

  return (
    <div className="flex-center flex-col gap-8 w-full h-[100vh]">
      <div className="flex gap-5">
        <Button
          type="button"
          className={buttonVariants({ color: "yellow", size: "lg" })}
          onClick={defaultModalProps.open}
        >
          기본 모달 열기
        </Button>
        <Button
          type="button"
          className={buttonVariants({ color: "black", size: "lg" })}
          onClick={customModalProps.open}
        >
          커스텀 모달 열기
        </Button>
      </div>

      {/* 모달 컴포넌트가 띄워질 위치에  id="modal-root" 요소가 있어야 함 */}
      {/* 사라질 때에도 애니메이션 적용 AnimatePresence */}
      <AnimatePresence>
        {defaultModalProps.isOpen && (
          <Modal
            // 모달 컴포넌트 오픈 여부
            isOpen={defaultModalProps.isOpen}
            // 모달 컴포넌트 닫기
            onClose={defaultModalProps.close}
            // 모달 컴포넌트 크기
            className={modalVariants({ size: "default" })}
            // 모달 컴포넌트 닫기 버튼 유무
            closeButton={true}
            closeWithOverlay={false}
          >
            <div className="flex-center flex-col gap-7.5 w-full h-full">
              <h2 className="font-regular-18">정말로 게임을 종료하시겠어요?😭</h2>
              <div className="flex-center gap-5 ">
                <Button
                  type="button"
                  className={buttonVariants({ color: "black", size: "lg" })}
                  onClick={defaultModalProps.close}
                >
                  취소하기
                </Button>
                <Button
                  type="button"
                  className={buttonVariants({ color: "yellow", size: "lg" })}
                  onClick={defaultModalProps.close}
                >
                  네, 종료할게요
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {customModalProps.isOpen && (
          <Modal
            // 모달 컴포넌트 오픈 여부
            isOpen={customModalProps.isOpen}
            // 모달 컴포넌트 닫기
            onClose={customModalProps.close}
            // className 없을 시 modalVariants의 base 적용
            className="w-200 h-100 md:p-10 p-10"
            // 모달 컴포넌트 닫기 버튼 유무
            closeButton={true}
            // close button 타입 변경
            type="bookmark"
          >
            <div className="flex-center flex-col gap-7.5 w-full h-full">
              <h2 className="font-bold text-2xl font-bold-38">커스텀하는 구간입니다!</h2>
              <p className="text-center px-5">className으로 직접 스타일을 적용</p>
              <Button
                type="button"
                className={buttonVariants({ color: "black", size: "lg" })}
                onClick={customModalProps.close}
              >
                닫기
              </Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ModalPage;
