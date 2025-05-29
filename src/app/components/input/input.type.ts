import React from "react";

export interface IInputProps {
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  isCredential?: boolean;
  error?: boolean;
  errorMsg?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
}
