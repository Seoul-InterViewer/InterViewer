export interface IInputProps {
  labelName: string;
  inputName: string;
  inputType: string;
  inputValue: string;
  placeholder: string;
  explanation: string;
  onChangeValue: (newValue: string) => void;
}
