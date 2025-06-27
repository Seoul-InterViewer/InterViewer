"use client";

import React from "react";
import { IInputProps } from "./input.type";
import { inputVariants, labelVariants } from "./input.variants";

export const Input = ({
  type,
  name,
  id,
  placeholder,
  className = inputVariants(),
  onChange,
  value,
  label,
  isCredential = false,
  error = false,
  errorMsg = "",
  ref,
  onBlur,
  onFocus,
  ...restProps
}: IInputProps) => {
  return (
    <>
      {isCredential ? (
        <div className="relative flex-5 h-full">
          <label className={labelVariants({ isCredential: true, error })} htmlFor={id}>
            {errorMsg || label}
          </label>
          <input
            type={type}
            className={className}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            ref={ref}
            {...restProps}
          />
        </div>
      ) : (
        <input
          type={type}
          className={className}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={ref}
          {...restProps}
        />
      )}
    </>
  );
};
