"use client";
import { Button, buttonVariants } from "@/app/components/button";
import { Input, inputVariants } from "@/app/components/input";
import React, { useState } from "react";

const LoginForm = () => {
  const [loginMode, setLoginMode] = useState<"email" | "password">("email");
  return (
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
        <Button
          type="button"
          className={buttonVariants({ color: "black", class: "p-2 h-full flex-1 rounded-none" })}
          onClick={() => setLoginMode("password")}
        >
          다음
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
        <Button
          type="button"
          className={buttonVariants({ color: "black", class: "p-2 h-full flex-1 rounded-none" })}
        >
          로그인
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
