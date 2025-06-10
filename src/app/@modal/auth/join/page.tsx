"use client";

import { Modal } from "@/app/components/modal/Modal";
import { useRouterModal } from "@/hooks/modal/useRouteModal";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useViewport } from "@/hooks/useViewport";
import { Button, buttonVariants } from "@/app/components/button";
import JoinForm from "./components/JoinForm";
import { SNSForm } from "../\bcomponents/snsForm";

export default function JoinModal() {
  const { isOpen, close, open } = useRouterModal();
  const { isMobile } = useViewport();
  console.log(isOpen);
  useEffect(() => {
    open();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={close} closeButton={!isMobile}>
      <div className="relative flex justify-center items-center w-screen h-screen md:w-auto md:h-auto md:px-40 md:py-50">
        {isMobile && (
          <Button type="button" className={buttonVariants({ class: "absolute top-10 left-10 font-regular-18 text-font-gray" })} onClick={() => {close();}}>
            &larr; 뒤로 
          </Button>
        )}
        <div className="flex gap-47 items-center">
          <div className="w-66 hidden md:flex flex-col gap-7 items-center">
            <div className="w-full h-full">
              <Image
                src="/images/logo.svg"
                alt="login-modal-image"
                width={330}
                height={140}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-sb-28 inline-block">당신의 질문이 궁금해요!</span>
          </div>
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-8">
              <strong className="font-sb-28">회원가입</strong>
              <p className="font-sb-24 text-font-gray">이메일로 회원가입</p>
            </div>
            <div className="relative max-w-105 md:w-105 h-20">
              <JoinForm />
            </div>
            <SNSForm type="join" />
          </div>
        </div>

        <div className="font-regular-18 absolute  text-sub-text right-10 bottom-10 hover:underline">
          <Link href="/auth/login">계정이 이미 있으시다면? →</Link>
        </div>
      </div>
    </Modal>
  );
}
