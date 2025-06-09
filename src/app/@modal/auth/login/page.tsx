"use client";

import { Button } from "@/app/components/button";
import { Input, inputVariants } from "@/app/components/input";
import { Modal } from "@/app/components/modal/Modal";
import { useRouterModal } from "@/hooks/modal/useRouteModal";
import Image from "next/image";
import { useEffect } from "react";

export default function LoginModal() {
  const { isOpen, close, open } = useRouterModal();
  console.log(isOpen);
  useEffect(() => {
    open();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={close} closeButton>
      <div className="flex justify-center items-center px-40 py-50">
        <div className="flex gap-47 items-center">
          <div className="flex flex-col gap-7 items-center">
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
              <strong className="font-sb-28">로그인</strong>
              <p className="font-sb-24 text-font-gray">이메일로 로그인</p>
            </div>
            <div className="relative w-105 h-20">
              <form className="relative w-full h-full flex top-0 left-0 bg-white overflow-x-clip">
                <div className="absolute w-full h-full flex top-0 ">
                  <Input
                    type="email"
                    placeholder="이메일"
                    name="email"
                    id="email"
                    required
                    isCredential
                    className={inputVariants({ withButton: true, variant: "credentials" })}
                    label="이메일을 입력해주세요."
                  />
                  <Button type="button" className="bg-black text-white p-2 h-full flex-1">
                    다음
                  </Button>
                </div>

                <div className="absolute left-full w-full h-full flex top-0">
                  <Input
                    type="password"
                    placeholder="비밀번호"
                    name="password"
                    id="password"
                    required
                    isCredential
                    className={inputVariants({ withButton: true, variant: "credentials" })}
                    label="비밀번호를 입력해주세요."
                  />
                  <Button type="button" className="bg-black text-white p-2 h-full flex-1">
                    로그인
                  </Button>
                </div>
              </form>
            </div>
            <div>
              <strong>소셜 계정으로 로그인</strong>
              <ul>
                <li>
                  <Button type="submit">Google</Button>
                </li>
                <li>
                  <Button type="submit">Apple</Button>
                </li>
                <li>
                  <Button type="submit">Kakao</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0">회원가입</div>
      </div>
    </Modal>
  );
}
