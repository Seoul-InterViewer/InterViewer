import { tv } from "tailwind-variants";

export const radioButtonVariants = tv({
  slots: {
    wrapper: "flex justify-between items-center",
    item: "px-[14px] py-[5px] rounded-[8px] border cursor-pointer",
  },
  variants: {
    variant: {
      default: { item: "border-[rgba(0,0,0,0.17)] bg-white text-font-gray" },
      selected: { item: "border-transparent bg-main text-white" },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
