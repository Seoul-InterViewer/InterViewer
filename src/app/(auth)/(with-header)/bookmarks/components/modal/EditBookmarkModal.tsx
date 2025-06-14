"use client";

import { Button, buttonVariants } from "@/app/components/button";
import { Checkbox } from "../checkbox/Checkbox";
import { IEditBookmarkModalProps } from "./bookmarkModal.type";
import { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Modal } from "@/app/components/modal";
import { usePathname } from "next/navigation";
import useModal from "@/hooks/modal/useModal";

import { RemoveBookmarkModal } from "./RemoveBookmarkModal";
import { NewBookmarkModal } from "./NewBookmarkModal";

export const EditBookmarkModal = ({ props, datas, checkName }: IEditBookmarkModalProps) => {
  const firstPathname = usePathname().split("/")[1];
  const [selectedToRemove, setSelectedToRemove] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);

  const newBookmarkModalProps = useModal();
  const removeBookmarkModalProps = useModal();

  // 새 북마크 생성 or 저장하기 버튼
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (firstPathname === "bookmarks") {
      newBookmarkModalProps.open();
    } else {
      const formData = new FormData(formRef.current);
      console.log(formData.getAll(checkName));
      // 여기에 API 요청 등 로직 작성
      props.close();
    }
  };

  // x버튼 눌렀을 때
  const handleOpenRemoveBookmark = (value: string) => {
    setSelectedToRemove(value);
    removeBookmarkModalProps.open();
  };

  // 삭제처리
  const handleConfirmRemove = () => {
    if (!selectedToRemove) return;

    console.log("삭제할 북마크 value:", selectedToRemove);
    //삭제 API 호출 등 처리 로직 추가

    setSelectedToRemove(null);
    removeBookmarkModalProps.close();
  };

  return (
    <div>
      <AnimatePresence>
        {props.isOpen && (
          <Modal
            isOpen={props.isOpen}
            onClose={props.close}
            closeButton={false}
            className="w-76.5 h-100 p-4"
          >
            <div className="w-full h-full">
              <div className="w-full flex justify-between mb-6">
                <h3 className="font-regular-18">
                  북마크
                  {firstPathname === "bookmarks" ? " 편집" : " 저장"}
                </h3>
                <Button
                  type="button"
                  className={buttonVariants({ size: "md", hover: true })}
                  onClick={props.close}
                >
                  닫기
                </Button>
              </div>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center gap-3"
              >
                <div className="w-63.5 h-66 pr-2.5 flex flex-col gap-4 overflow-y-auto">
                  {datas.map((data, idx) => (
                    <Checkbox
                      key={idx}
                      checkName={checkName}
                      text={data.text}
                      value={data.value}
                      count={data.count}
                      firstPathname={firstPathname}
                      removeBookmarkOpen={handleOpenRemoveBookmark}
                    />
                  ))}
                </div>
                <Button
                  type="submit"
                  className={`${buttonVariants({ size: "md", color: "borderBlack", hover: true })} px-5 py-2.5`}
                >
                  {firstPathname === "bookmarks" ? "새 북마크 생성" : "저장하기"}
                </Button>
              </form>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* 새 북마크 모달 */}
      <NewBookmarkModal props={newBookmarkModalProps} />

      {/* 북마크 삭제 모달 */}
      <RemoveBookmarkModal props={removeBookmarkModalProps} onConfirm={handleConfirmRemove} />
    </div>
  );
};
