"use client";

import { Modal } from "./Modal";
import { modalVariants } from "./modal.variants";
import useModal from "@/hooks/useModal";

function ModalPage() {
  const { isOpen, open, close } = useModal();

  return (
    <div className="flex-center w-full h-[100vh]">
      <button className="bg-black text-white px-4 py-2 rounded-md" onClick={open}>
        모달 열기
      </button>
      <div>
        <Modal
          className={modalVariants({ type: "container" })}
          isOpen={isOpen}
          onClose={close}
          title="정말로 종료하시겠습니까?"
          showCloseButton={true}
          buttons={[<button onClick={close}>취소</button>, <button onClick={close}>확인</button>]}
        />
      </div>
    </div>
  );
}

export default ModalPage;
