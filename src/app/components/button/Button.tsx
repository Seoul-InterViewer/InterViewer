"use client";

import { IButtonProps } from "./button.type";
import { buttonVariants } from "./button.variants";

export const Button = ({ text, className = buttonVariants(), onClick, onSubmit }: IButtonProps) => {
  return (
    <button className={className} onClick={onClick} onSubmit={onSubmit}>
      {text}
    </button>
  );
};
