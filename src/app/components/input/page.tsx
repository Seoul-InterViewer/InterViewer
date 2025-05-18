import React from "react";
import { Input } from "./Input";
import { inputVariants } from "./input.variants";
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
          className={inputVariants({ withButton: true })}
          type="text"
          name="name"
          id="name"
          placeholder="이메일일"
        />
        <button className="bg-black text-white p-2 h-full flex-1">test</button>
      </div>
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
    </div>
  );
}
  