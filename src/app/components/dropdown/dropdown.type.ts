import { ReactNode } from "react";
import { dropdownData } from "./dropdown.constants";

export type DropdownSize = "sm" | "md" | "lg";
export type DropdownVariant = "outline" | "filled" | "underlined";
export type DropdownRounded = "none" | "sm" | "md" | "lg" | "full";
export type DropdownPosition = "bottom-left" | "bottom-right" | "top-left" | "top-right";
export type DropdownType = keyof typeof dropdownData;

export interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface DropdownProps {
  options?: DropdownOption[];
  value?: string | number | null;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  loading?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  size?: DropdownSize;
  variant?: DropdownVariant;
  rounded?: DropdownRounded;
  type?: DropdownType;
  position?: DropdownPosition;
  label?: string;
  required?: boolean;
  className?: string;
  containerClassName?: string;
  menuClassName?: string;
  optionClassName?: string;
}
