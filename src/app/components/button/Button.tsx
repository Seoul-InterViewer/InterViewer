import { IButtonProps } from "./button.type";
import { buttonVariants } from "./button.variants";

export const Button = ({ text, type = "defalut", className, onClick }: IButtonProps) => {
  return (
    <button className={className || buttonVariants({ type })} onClick={onClick}>
      {text}
    </button>
  );
};
