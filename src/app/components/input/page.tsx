import React from "react";
import { Input } from "./Input";
import { inputVariants } from "./input.variants";
import { toTailwind } from "@/styles/utils";
export default function InputTestPage() {
  return (
    <div className="p-20 flex flex-col gap-4">
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        className={inputVariants({ variant: "withBg" })}
      />
      <Input type="text" name="name" id="name" placeholder="name" />
      <div className={`flex h-20`}>
        <Input
          className={inputVariants({ withButton: true })}
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <button className="bg-black text-white p-2 h-full flex-1">test</button>
      </div>
      <Input
        className={inputVariants({ search: true })}
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
    </div>
  );
}
