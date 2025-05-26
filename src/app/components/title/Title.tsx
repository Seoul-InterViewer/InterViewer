"use client";

import { ITitleProps } from "./title.type";
import { titleVariants } from "./title.variants";

export const Title = ({ title, size }: ITitleProps) => {
  return (
    <div>
      {size === "lg" && <h2 className={titleVariants({ size })}>{title}</h2>}
      {size === "md" && <h3 className={titleVariants({ size })}>{title}</h3>}
      {size === "sm" && <h4 className={titleVariants({ size })}>{title}</h4>}
    </div>
  );
};
