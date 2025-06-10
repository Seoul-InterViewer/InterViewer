"use client";
import { Button, buttonVariants } from "@/app/components/button";
import { Input, inputVariants } from "@/app/components/input";
import useInput from "@/hooks/input/useInput";
import React, { useEffect, useRef, useState } from "react";

const LoginForm = () => {
  const [loginMode, setLoginMode] = useState<"email" | "password">("email");

  const emailInput = useInput();

  const emailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (emailRef.current && loginMode === "email") {
      emailRef.current.onkeydown = (e) => {
        if (e.key === "Enter") {
          if (emailInput.value) {
            setLoginMode("password");
          }
        }
      };
    }
  }, [loginMode, emailRef, emailInput.value]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full h-full flex top-0 left-0 bg-white overflow-x-clip"
    >
      <div
        ref={emailRef}
        className={`absolute w-full h-full flex top-0 transition-all duration-300 ${loginMode === "email" ? "right-0 opacity-100" : "right-full opacity-0"}`}
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
        />
        <Button
          type="button"
          className={buttonVariants({ color: "black", class: "p-2 h-full flex-1 rounded-none" })}
          onClick={() => setLoginMode("password")}
        >
          다음
        </Button>
      </div>

      <div
        className={`absolute w-full h-full flex top-0 transition-all duration-300 ${loginMode === "password" ? "left-0 opacity-100" : "left-full opacity-0  "}`}
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
      </div>
    </form>
  );
};

export default LoginForm;
