import { IButtonProps } from "./button.type";
import { buttonVariants } from "./button.variants";

export const Button = ({
  text,
  type = "default",
  hover = true,
  mobile = "default",
  className,
  onClick,
}: IButtonProps) => {
  return (
    <button className={className || buttonVariants({ type, hover, mobile })} onClick={onClick}>
      {text}
    </button>
  );
};
