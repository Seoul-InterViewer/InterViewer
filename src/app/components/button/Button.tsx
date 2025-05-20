"use client";

import { IButtonProps } from "./button.type";
import { buttonVariants } from "./button.variants";
import { Icon } from "@/app/components/icon";

export const Button = ({
  type = "button",
  children,
  className = buttonVariants(),
  onClick,
}: IButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
