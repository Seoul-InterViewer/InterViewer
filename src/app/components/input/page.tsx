import React from "react";
import { Input } from "./Input";
import { inputVariants, labelVariants } from "./input.variants";
import { CheckboxInput, checkboxInputVariants } from "./checkboxInput";
export default function InputTestPage() {
  
  return (
    <div className="p-20 flex flex-col gap-4">
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="북마크"
        className={inputVariants({ variant: "withBg" })}
      />
      <Input type="text" name="name" id="name" placeholder="기본" />
      <div className={`flex h-20`}>
        <Input
          className={inputVariants({ withButton: true, variant: "credentials" })}
          type="email"
          name="name"
          id="name"
          placeholder="Example@gmail.com"
          isCredential
          label="이메일을 입력해주세요."
        />
        <button className="bg-black text-white p-2 h-full flex-1">test</button>
      </div>
      <Input
        className={inputVariants({ variant: "credentials" })}
        type="password"
        name="name"
        id="name"
        placeholder="비밀번호"
        isCredential
        label="비밀번호를 입력해주세요."
      />
      <div className={`flex h-20`}>
        <Input
          className={inputVariants({ withButton: true, variant: "credentials", error: true })}
          type="email"
          name="name"
          id="name"
          placeholder="Example@gmail.com"
          isCredential
          label="이메일을 입력해주세요."
          error
          errorMsg="존재하지 않는 이메일입니다. "
        />
        <button className="bg-black text-white p-2 h-full flex-1">test</button>
      </div>
      <Input
        className={inputVariants({ variant: "credentials", error: true })}
        type="password"
        name="name"
        id="name"
        placeholder="비밀번호"
        isCredential
        label="비밀번호를 입력해주세요."
        error
        errorMsg="비밀번호가 일치하지 않습니다."
      />
      <Input
        className={inputVariants({ search: true })}
        type="text"
        name="name"
        id="name"
        placeholder="검색.."
      />
      <Input
        className={inputVariants({ search: true, variant: "withBg" })}
        type="text"
        name="name"
        id="name"
        placeholder="태그"
      />
      <Input
        className={inputVariants({ variant: "borderBottom" })}
        type="text"
        name="name"
        id="name"
        placeholder="비밀번호 변경"
      />
      <div className="w-fit">
        <Input
          className={inputVariants({ variant: "blank" })}
          type="text"
          name="name"
          id="name"
          placeholder="빈칸"
        />
      </div>
      <CheckboxInput
        className={checkboxInputVariants({ variant: "bookmark" })}
        label={"복습할 것들"}
        labelClass={labelVariants()}
        id="bookmark"
        name="bookmark"
      />
      <CheckboxInput className={checkboxInputVariants()} id="list" name="list" />
    </div>
  );
}
