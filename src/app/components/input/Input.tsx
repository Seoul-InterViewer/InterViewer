"use client";

import React, { useState } from "react";
import { IInputProps } from "./input.type";
import { inputVariants } from "./input.variants";

export const Input = ({
  type,
  name,
  id,
  placeholder,
  className = inputVariants(),
  onChange,
  value,
}: IInputProps) => {
  return (
    <input
      type={type}
      className={className}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
