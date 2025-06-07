import { VariantProps } from "tailwind-variants";
import { listVariants } from "./list.variants";

type ListType = VariantProps<typeof listVariants>["type"];

export interface IListProps {
  className?: string;
  children: React.ReactNode;
  type?: ListType;
}
