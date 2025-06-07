"use client";

import { AnimatePresence } from "motion/react";
import { Modal } from "@/app/components/modal";
import { IUseeModalProps } from "./bookmarkModal.type";
import { Button, buttonVariants } from "@/app/components/button";
import { Input, inputVariants } from "@/app/components/input";
import { useRef } from "react";

export const NewBookmarkModal = ({ props }: { props: IUseeModalProps }) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const title = formData.get("title");

    console.log("제목:", title);
    // 여기에 제목을 저장하거나 API 요청 등 로직 작성
    props.close();
  };

  return (
    <AnimatePresence>
      {props.isOpen && (
        <Modal
          isOpen={props.isOpen}
          onClose={props.close}
          className="w-76 h-57.5 p-3.5"
          closeButton={false}
          type="bookmark"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="w-full h-full">
            <div className="flex flex-col justify-between w-full h-full">
              <h2 className="font-regular-18">새 북마크</h2>
              <div className="w-62.5 h-11.5 mx-auto">
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="제목을 입력해주세요"
                  className={`${inputVariants({ variant: "withBg" })} md:font-sb-16 border-none`}
                />
              </div>
              <div className="flex-center gap-5 ">
                <Button
                  type="button"
                  className={buttonVariants({ color: "black", size: "lg" })}
                  onClick={props.close}
                >
                  취소하기
                </Button>
                <Button type="submit" className={buttonVariants({ color: "yellow", size: "lg" })}>
                  생성하기
                </Button>
              </div>
            </div>
          </form>
        </Modal>
      )}
    </AnimatePresence>
  );
};
