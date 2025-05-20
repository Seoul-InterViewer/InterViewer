"use client";
import React from "react";
import { Button } from "./Button";
import { buttonVariants } from "./button.variants";

export default function page() {
  return (
    <div className="flex-center flex-col gap-4 mt-5">
      <Button text="이전으로" className={buttonVariants({ type: "blackBtn", hover: true })} />
      <Button text="다음으로" className={buttonVariants({ type: "yellowBtn", hover: true })} />
      <Button text="버튼" className={buttonVariants({ type: "grayBtn", hover: true })} />
      <Button text="버튼" className={buttonVariants({ type: "lightGrayBtn", hover: true })} />
      <Button text="버튼" className={buttonVariants({ type: "redBtn", hover: true })} />
      <Button text="버튼" className={buttonVariants({ type: "deleteBtn" })} />
      <Button text="버튼" className={buttonVariants({ type: "editBtn", hover: true })} />
      <Button text="버튼" className={buttonVariants({ type: "fillterWhiteBtn", hover: true })} />
      <Button text="버튼" className={buttonVariants({ type: "fillterBlackBtn", hover: true })} />
      <Button text="버튼" className={buttonVariants({ type: "writeBtn", hover: true })} />
      <Button text="버튼" className={buttonVariants({ type: "whiteBtn", hover: true })} />
      <Button text="버튼" className={buttonVariants({ type: "disabledBtn", hover: true })} />
      <Button
        text="버튼"
        className={buttonVariants({ type: "yellowBtn", mobile: "normalSize", hover: true })}
      />
      <Button
        text="버튼"
        className={buttonVariants({ type: "yellowBtn", mobile: "fullSize", hover: true })}
      />
    </div>
  );
}
