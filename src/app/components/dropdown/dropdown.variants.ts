import { tv } from "tailwind-variants";

export const dropdownVariants = tv({
  base: "relative w-full border border-gray-300 rounded font-medium transition-colors",
  variants: {
    size: {
      sm: "text-xs py-1 px-2",
      md: "text-sm py-2 px-3",
      lg: "text-base py-3 px-4",
    },
    variant: {
      outline: "bg-white border-2",
      filled: "bg-gray-100 border-transparent",
      underlined: "border-x-0 border-t-0 border-b-2 rounded-none",
    },
    state: {
      default: "border-gray-300",
      active: "border-blue-500",
      disabled: "opacity-50 cursor-not-allowed bg-gray-50",
      error: "border-red-500",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    isOpen: {
      true: "ring-2 ring-blue-100",
    },
    type: {
      report: "text-red-600 font-medium",
      position: "text-blue-700 font-medium",
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      state: "active",
      className: "border-blue-500 ring-2 ring-blue-100",
    },
    {
      variant: "filled",
      state: "active",
      className: "bg-blue-50",
    },
    {
      variant: "underlined",
      state: "active",
      className: "border-b-blue-500",
    },
    {
      type: "report",
      variant: "filled",
      className: "bg-red-50 border-red-100",
    },
    {
      type: "position",
      variant: "filled",
      className: "bg-blue-50 border-blue-100",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "outline",
    state: "default",
    rounded: "md",
    isOpen: false,
    type: "report",
  },
});

// 드롭다운 메뉴(옵션 리스트) 스타일
export const dropdownMenuVariants = tv({
  base: "absolute z-50 w-full mt-1 overflow-auto bg-white border border-gray-200 shadow-lg max-h-60",
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    animation: {
      fade: "animate-fade-in",
      scale: "animate-scale-in",
      slideDown: "animate-slide-down",
    },
    type: {
      report: "bg-white border-red-100",
      position: "bg-white border-blue-100",
    },
  },
  defaultVariants: {
    rounded: "md",
    animation: "fade",
    type: "report",
  },
});

// 드롭다운 옵션 아이템 스타일
export const dropdownOptionVariants = tv({
  base: "px-3 py-2 cursor-pointer hover:bg-gray-100",
  variants: {
    selected: {
      true: "bg-blue-50 text-blue-700 font-medium",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed hover:bg-white",
    },
    type: {
      report: "hover:bg-red-50 hover:text-red-700",
      position: "hover:bg-blue-50 hover:text-blue-700",
    },
  },
  compoundVariants: [
    {
      type: "report",
      selected: true,
      className: "bg-red-50 text-red-700 font-medium",
    },
    {
      type: "position",
      selected: true,
      className: "bg-blue-50 text-blue-700 font-medium",
    },
  ],
  defaultVariants: {
    selected: false,
    disabled: false,
    type: "report",
  },
});
