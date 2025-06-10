import React from "react";
export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isCredential?: boolean;
  error?: boolean;
  errorMsg?: string;
  ref?: React.RefObject<HTMLInputElement> | null;
}
