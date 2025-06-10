import React, { useRef } from "react";
import { Input, inputVariants } from "@/app/components/input";
import useInput from "@/hooks/input/useInput";
import { buttonVariants } from "@/app/components/button";
import { Button } from "@/app/components/button";

const JoinForm = () => {
  const emailInput = useInput();
  const nicknameInput = useInput();
  const passwordInput = useInput();
  const passwordConfirmInput = useInput();

  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <form className="flex flex-col gap-6 md:gap-8">
      <div className="md:h-15">
        <Input
          value={emailInput.value}
          onChange={emailInput.handleChange}
          type="email"
          placeholder="이메일"
          name="email"
          id="email"
          required
          isCredential
          className={inputVariants({ withButton: false, variant: "credentials" })}
          label="이메일을 입력해주세요."
          ref={emailRef}
        />
      </div>
      <div className="md:h-15">
        <Input
          value={nicknameInput.value}
          onChange={nicknameInput.handleChange}
          type="text"
          placeholder="닉네임"
          name="nickname"
          id="nickname"
          required
          isCredential
          className={inputVariants({ withButton: false, variant: "credentials" })}
          label="닉네임을 입력해주세요."
        />
      </div>
      <div className="md:h-15"    >
        <Input
          value={passwordInput.value}
          onChange={passwordInput.handleChange}
          type="password"
          placeholder="비밀번호"
          name="password"
          id="password"
          required
          isCredential
          className={inputVariants({ withButton: false, variant: "credentials" })}
          label="비밀번호를 입력해주세요."
        />
      </div>  
      <div className="flex h-15">
        <Input
          value={passwordConfirmInput.value}
          onChange={passwordConfirmInput.handleChange}
          type="password"
          placeholder="비밀번호 확인"
          name="passwordConfirm"
          id="passwordConfirm"
          required
          isCredential
          className={inputVariants({ withButton: true, variant: "credentials" })}
          label="비밀번호를 입력해주세요."
        />
        <Button
          type="submit"
          className={buttonVariants({ color: "black", class: "p-2 h-full flex-1 rounded-none" })}
        >
          회원가입
        </Button>
      </div>
    </form>
  );
};

export default JoinForm;
