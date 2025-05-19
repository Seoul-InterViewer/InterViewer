import { IInputProps } from "../input.type";

export interface ICheckboxInputProps extends IInputProps {
  label?: string;
  checked?: boolean;
  labelClass?: string;
}
