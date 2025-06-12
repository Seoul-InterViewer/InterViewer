"use client";
import { Button, buttonVariants } from "@/app/components/button";
import { Input, inputVariants } from "@/app/components/input";
import React, { useEffect, useRef, useState } from "react";
import useInput from "@/hooks/input/useInput";

const LoginForm = () => {
  const [loginMode, setLoginMode] = useState<"email" | "password">("email");
  const emailInput = useInput();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailInput.value) {
      setLoginMode("password");
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");
    console.log(emailInput.value, password);
  };

  useEffect(() => {
    if (loginMode === "email") {
      emailRef.current?.focus();
    } else {
      passwordRef.current?.focus();
    }
  }, [loginMode]);

  return (
    <div className="relative w-full h-full flex top-0 left-0 bg-white overflow-x-clip">
      <form
        onSubmit={handleEmailSubmit}
        className={`absolute w-full h-full flex top-0 transition-all duration-300 ${
          loginMode === "email" ? "right-0 opacity-100" : "right-full opacity-0"
        }`}
      >
        <Input
          value={emailInput.value}
          onChange={emailInput.handleChange}
          type="email"
          placeholder="이메일"
          name="email"
          id="email"
          required
          isCredential
          className={inputVariants({ withButton: true, variant: "credentials" })}
          label="이메일을 입력해주세요."
          ref={emailRef}
        />
        <Button
          type="submit"
          className={buttonVariants({ color: "black", class: "p-2 h-full flex-1 rounded-none" })}
        >
          다음
        </Button>
      </form>

      <form
        onSubmit={handlePasswordSubmit}
        className={`absolute w-full h-full flex top-0 transition-all duration-300 ${
          loginMode === "password" ? "left-0 opacity-100" : "left-full opacity-0"
        }`}
      >
        <Input
          type="password"
          placeholder="비밀번호"
          name="password"
          id="password"
          required
          isCredential
          className={inputVariants({ withButton: true, variant: "credentials" })}
          label="비밀번호를 입력해주세요."
          ref={passwordRef}
        />
        <Button
          type="submit"
          className={buttonVariants({ color: "black", class: "p-2 h-full flex-1 rounded-none" })}
        >
          로그인
        </Button>
        {loginMode === "password" && (
          <Button
            type="button"
            className={buttonVariants({ class: " absolute -bottom-10 left-0 text-sub-text" })}
            onClick={() => setLoginMode("email")}
          >
            &larr; 이전
          </Button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
