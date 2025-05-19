import React from "react";
import { ICheckboxInputProps } from "./checkboxInput.type";

export const CheckboxInput = ({
  type = "checkbox",
  label,
  onChange,
  id,
  className,
  labelClass,
}: ICheckboxInputProps) => {
  return (
    <label className={labelClass}>
      <input id={id} type={type} onChange={onChange} className={className} />
      {label}
    </label>
  );
};
