"use client";
import React from "react";
import { Input } from "./Input";
import { inputVariants } from "./input.variants";
import { useViewport } from "@/hooks/useViewport";
import { vw } from "@/styles/utils";
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
    </div>
  );
}
