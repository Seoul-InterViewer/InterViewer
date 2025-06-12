import { Variant, TargetAndTransition, VariantLabels } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

export interface IMotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  variants?: {
    [key: string]: Variant;
  };
}
