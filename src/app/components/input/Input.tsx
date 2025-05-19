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
  label,
  isCredential = false,
}: IInputProps) => {
  return (
    <>
      {isCredential ? (
        <div className="relative flex-5">
          <label className="absolute -top-2 left-3 text-sub-text bg-white text-regular-12 md:text-regular-14" htmlFor={id}>
            {label}
          </label>
          <input
            type={type}
            className={className}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
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
        />
      )}
    </>
  );
};
