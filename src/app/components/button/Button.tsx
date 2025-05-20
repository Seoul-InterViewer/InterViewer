"use client";

import { IButtonProps, IIconButtonProps } from "./button.type";
import { buttonVariants } from "./button.variants";
import { Icon } from "@/app/components/icon";

export const Button = ({
  type = "button",
  text,
  className = buttonVariants(),
  onClick,
}: IButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export const IconButton = ({
  name,
  size,
  width,
  height,
  viewBox,
  strokeWidth,
  stroke,
  fill,
  className,
  type = "button",
  onClick,
}: IIconButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      <Icon
        name={name}
        size={size}
        width={width}
        height={height}
        viewBox={viewBox}
        strokeWidth={strokeWidth}
        stroke={stroke}
        fill={fill}
      />
    </button>
  );
};
