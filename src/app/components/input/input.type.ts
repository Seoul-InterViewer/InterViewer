import React from "react";
import { inputVariants } from "./input.variants";

export interface IInputProps {
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
