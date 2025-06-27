import { useState, useRef } from "react";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import { Input, inputVariants } from "@/app/components/input";
import useSetting from "@/hooks/setting/useSetting";
import toastStore from "@/stores/toastStore";

export const Password = ({ defaultPassword }: { defaultPassword: string }) => {
  const { on, toggle } = useSetting();
  const { addToast } = toastStore();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const currentRef = useRef<HTMLInputElement>(null);
  const newRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleChangePassword = () => {
    if (!on) return;

    if (!currentPassword || !newPassword || !confirmPassword) {
      addToast("모든 필드를 입력해주세요.", 3000, true, true);
      return;
    }

    if (currentPassword !== defaultPassword) {
      addToast("현재 비밀번호가 일치하지 않습니다.", 3000, true, true);
      setCurrentPassword("");
      currentRef.current?.focus();
      return;
    }

    // TODO: 비밀번호 확인도 APi로 변경예정
    if (newPassword !== confirmPassword) {
      addToast("새 비밀번호가 일치하지 않습니다.", 3000, true, true);
      setConfirmPassword("");
      confirmRef.current?.focus();
      return;
    }

    // TODO: 실제 비밀번호 변경 API 호출 (예: fetch, axios 등)
    console.log("비밀번호 변경 시도:", {
      currentPassword,
      newPassword,
    });

    reset();
    toggle(false);
    addToast("비밀번호가 성공적으로 변경되었습니다.", 3000, true, false);
  };
  return (
    <div className="w-full">
      <div className="w-full h-7 flex justify-between items-end mb-2.5 md:mb-5">
        <label className="w-27.5 md:w-37.5 font-sb-20 md:font-sb-24">비밀번호 변경</label>
        {!on ? (
          <Button
            type="button"
            className="h-8 text-main font-regular-18 underline hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            onClick={() => toggle(true)}
          >
            변경
          </Button>
        ) : (
          <Button
            type="button"
            className={buttonVariants({ icon: true })}
            onClick={() => {
              toggle(false);
              reset();
            }}
          >
            <Icon name="close" size={28} />
          </Button>
        )}
      </div>
      <div className="w-full md:w-100 flex flex-col">
        <Input
          className={`${inputVariants({ variant: "borderBottom" })} font-regular-16`}
          type="password"
          name="currentPassword"
          id="currentPassword"
          placeholder="현재 비밀번호"
          disabled={!on}
          value={currentPassword}
          ref={currentRef}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Input
          className={`${inputVariants({ variant: "borderBottom" })} font-regular-16`}
          type="password"
          name="newPassword"
          id="newPassword"
          placeholder="새 비밀번호"
          disabled={!on}
          value={newPassword}
          ref={newRef}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Input
          className={`${inputVariants({ variant: "borderBottom" })} font-regular-16`}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="비밀번호 확인"
          disabled={!on}
          value={confirmPassword}
          ref={confirmRef}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type="button"
          className={`${buttonVariants({ size: "lg", color: "yellow", hover: true, disabled: !on })} shrink-0`}
          onClick={handleChangePassword}
        >
          변경
        </Button>
      </div>
    </div>
  );
};
