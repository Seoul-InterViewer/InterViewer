"use client";
import React from "react";
import { Button } from "./Button";
import { buttonVariants } from "./button.variants";
import { IconButton } from "./Button";

export default function page() {
  return (
    <div className="flex-center flex-col gap-4 mt-5">
      <Button
        type="button"
        text="이전으로"
        className={buttonVariants({ size: "lg", color: "black", hover: true })}
      />
      <Button
        type="button"
        text="다음으로"
        className={buttonVariants({ size: "lg", color: "yellow", hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "lg", color: "gray", hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "lg", color: "ligthGray", hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "lg", color: "red", hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "md", color: "red", hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "md", color: "black", hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "md", color: "borderGray", hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "md", color: "borderBlack", hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "sm", color: "borderGray", hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "lg", color: "white", hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "lg", disabled: true, hover: true })}
      />
      <Button
        type="button"
        text="버튼"
        className={buttonVariants({ size: "lg", color: "yellow", hover: true, fullWidth: true })}
      />

      <IconButton type="button" name="close" size={28} />
    </div>
  );
}
