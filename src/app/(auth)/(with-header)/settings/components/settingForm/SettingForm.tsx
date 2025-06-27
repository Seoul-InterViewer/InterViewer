"use client";

import { useState } from "react";
import { InputLine } from "../inputLIne/InputLine";
import { ISettingFormProps } from "./settingForm.type";
import { Password } from "../password/Password";
import { Button, buttonVariants } from "@/app/components/button";
import { AnimatePresence } from "motion/react";
import useModal from "@/hooks/modal/useModal";
import { Modal, modalVariants } from "@/app/components/modal";
import toastStore from "@/stores/toastStore";

export const SettingForm = ({
  defaultNickname,
  defaultEmail,
  gamePlayCount,
  gameRank,
  defaultPassword,
}: ISettingFormProps) => {
  const [nickname, setNickname] = useState(defaultNickname);
  const [email, setEmail] = useState(defaultEmail);

  const defaultModalProps = useModal();
  const { addToast } = toastStore();

  const withdrawMembership = () => {
    // TODO: 회월 탈퇴 로직 필요
    console.log("회원탈퇴");

    addToast("탈퇴 되었습니다.");
    defaultModalProps.close();

    // TODO: 로그아웃 로직 추가
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold-32 md:font-bold-48 overflow-hidden text-ellipsis whitespace-nowrap">
          {nickname}
        </h1>
        <div>
          <div className="w-32.5 md:w-46 flex justify-between items-center">
            <span className="font-sb-14 md:font-sb-18 text-sub-text">게임 플레이 횟수</span>
            <span className="font-sb-14 md:font-sb-18 text-font">{gamePlayCount}</span>
          </div>
          <div className="w-32.5 md:w-46 flex justify-between items-center">
            <span className="font-sb-14 md:font-sb-18 text-sub-text">게임 랭킹</span>
            <span className="font-sb-14 md:font-sb-18 text-font">#{gameRank}</span>
          </div>
        </div>
      </div>
      <span className="inline-block w-full h-0.25 mt-5 mb-12.5 md:my-15 bg-black/20"></span>
      <div className="w-full flex flex-col gap-10">
        <InputLine
          labelName="닉네임"
          inputName="nickName"
          inputType="text"
          inputValue={nickname}
          placeholder="변경할 닉네임을 입력해주세요"
          explanation="질문 작성 시, 작성자를 나타내는 이름입니다."
          onChangeValue={setNickname}
        />
        <InputLine
          labelName="이메일 주소"
          inputName="email"
          inputType="email"
          inputValue={email}
          placeholder="변경할 이메일 주소를 입력해주세요"
          explanation="회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다."
          onChangeValue={setEmail}
        />
        <Password defaultPassword={defaultPassword} />
        <div className="w-full">
          <div className="w-full h-7 flex justify-between items-end mb-2.5 md:mb-5">
            <label className="w-27.5 md:w-37.5 font-sb-20 md:font-sb-24">회원 탈퇴</label>
            <Button
              type="button"
              className={buttonVariants({ size: "lg", color: "red", hover: true })}
              onClick={defaultModalProps.open}
            >
              회원 탈퇴
            </Button>
          </div>
          <div className="font-regular-14 md:font-regular-18 text-sub-text">
            탈퇴 시 작성하신 질문 및 댓글이 모두 삭제되며 복구되지 않습니다.
          </div>
        </div>
      </div>

      <AnimatePresence>
        {defaultModalProps.isOpen && (
          <Modal
            isOpen={defaultModalProps.isOpen}
            onClose={defaultModalProps.close}
            className={modalVariants({ size: "default" })}
            closeButton={true}
            closeWithOverlay={false}
          >
            <div className="flex-center flex-col gap-7.5 w-full h-full">
              <h2 className="font-regular-18">정말로 회원을 탈퇴하시겠습니까?</h2>
              <div className="flex-center gap-5 ">
                <Button
                  type="button"
                  className={buttonVariants({ color: "red", size: "lg" })}
                  onClick={withdrawMembership}
                >
                  네, 탈퇴할게요.
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
