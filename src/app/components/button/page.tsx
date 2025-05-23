"use client";
import React from "react";
import { Button } from "./Button";
import { buttonVariants } from "./button.variants";
import { Icon } from "@/app/components/icon";
export default function page() {
  return (
    <div className="flex-center flex-col gap-4 mt-5">
      <Button type="button" className={buttonVariants({ size: "lg", color: "black", hover: true })}>
        이전으로
      </Button>
      <Button
        type="button"
        className={buttonVariants({ size: "lg", color: "yellow", hover: true })}
      >
        다음으로
      </Button>
      <Button type="button" className={buttonVariants({ size: "lg", color: "gray", hover: true })}>
        버튼
      </Button>
      <Button
        type="button"
        className={buttonVariants({ size: "lg", color: "ligthGray", hover: true })}
      >
        버튼
      </Button>
      <Button type="button" className={buttonVariants({ size: "lg", color: "red", hover: true })}>
        버튼
      </Button>
      <Button type="button" className={buttonVariants({ size: "md", color: "red", hover: true })}>
        버튼
      </Button>
      <Button type="button" className={buttonVariants({ size: "md", color: "black", hover: true })}>
        버튼
      </Button>
      <Button
        type="button"
        className={buttonVariants({ size: "md", color: "borderGray", hover: true })}
      >
        버튼
      </Button>
      <Button
        type="button"
        className={buttonVariants({ size: "md", color: "borderBlack", hover: true })}
      >
        버튼
      </Button>
      <Button
        type="button"
        className={buttonVariants({ size: "sm", color: "borderGray", hover: true })}
      >
        버튼
      </Button>
      <Button type="button" className={buttonVariants({ size: "lg", color: "white", hover: true })}>
        버튼
      </Button>
      <Button type="button" className={buttonVariants({ size: "lg", disabled: true, hover: true })}>
        버튼
      </Button>
      <Button
        type="button"
        className={buttonVariants({ size: "lg", color: "yellow", hover: true })}
      >
        버튼
      </Button>

      <Button
        type="button"
        className={buttonVariants({ size: "lg", color: "yellow", hover: true })}
      >
        모바일 버튼
      </Button>

      <Button type="button" className={buttonVariants({ icon: true })}>
        <Icon name="close" size={28} />
      </Button>

      <Button type="button">이전으로</Button>
    </div>
  );
}
