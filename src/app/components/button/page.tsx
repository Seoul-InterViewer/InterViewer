"use client";
import React from "react";
import { Button } from "./Button";
import { buttonVariants } from "./button.variants";

const page = () => {
  return (
    <div className="flex-center flex-col gap-4 mt-5">
      <Button text="이전으로" className={buttonVariants({ type: "blackBtn" })} />
      <Button text="다음으로" className={buttonVariants({ type: "yellowBtn" })} />
      <Button text="버튼" className={buttonVariants({ type: "grayBtn" })} />
      <Button text="버튼" className={buttonVariants({ type: "lightGrayBtn" })} />
      <Button text="버튼" className={buttonVariants({ type: "redBtn" })} />
      <Button text="버튼" className={buttonVariants({ type: "deleteBtn" })} />
      <Button text="버튼" className={buttonVariants({ type: "editBtn" })} />
      <Button text="버튼" className={buttonVariants({ type: "fillterWhiteBtn" })} />
      <Button text="버튼" className={buttonVariants({ type: "fillterBlackBtn" })} />
      <Button text="버튼" className={buttonVariants({ type: "writeBtn" })} />
      <Button text="버튼" className={buttonVariants({ type: "yellowBtn", mobile: "normalSize" })} />
      <Button text="버튼" className={buttonVariants({ type: "yellowBtn", mobile: "fullSize" })} />
    </div>
  );
};

export default page;
