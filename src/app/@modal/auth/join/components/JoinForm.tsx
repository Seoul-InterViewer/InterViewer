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

  const inputFields = [
    {
      label: "이메일을 입력해주세요.",
      type: "email",
      placeholder: "이메일",
      name: "email",
      id: "email",
      useInput: emailInput,
      ref: emailRef,
      withButton: false,
    },
    {
      label: "닉네임을 입력해주세요.",
      type: "text",
      placeholder: "닉네임",
      name: "nickname",
      id: "nickname",
      useInput: nicknameInput,
      withButton: false,
    },
    {
      label: "비밀번호를 입력해주세요.",
      type: "password",
      placeholder: "비밀번호",
      name: "password",
      id: "password",
      useInput: passwordInput,
      withButton: false,
    },
    {
      label: "비밀번호를 입력해주세요.",
      type: "password",
      placeholder: "비밀번호 확인",
      name: "passwordConfirm",
      id: "passwordConfirm",
      useInput: passwordConfirmInput,
      withButton: true,
    },
  ];

  return (
    <form className="flex flex-col gap-6 md:gap-8">
      {inputFields.map((field, index) => (
        <div key={index} className={`md:h-15 ${index === 3 ? "flex h-15" : ""}`}>
          <Input
            value={field.useInput.value}
            onChange={field.useInput.handleChange}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            id={field.id}
            required
            isCredential
            className={inputVariants({ withButton: field.withButton, variant: "credentials" })}
            label={field.label}
            ref={field.ref}
          />
          {index === 3 && (
            <Button
              type="submit"
              className={buttonVariants({ color: "black", class: "p-2 h-full flex-1 rounded-none" })}
            >
              회원가입
            </Button>
          )}
        </div>
      ))}
    </form>
  );
};

export default JoinForm;
