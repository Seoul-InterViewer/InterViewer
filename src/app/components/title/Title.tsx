"use client";

import { ITitleProps } from "./title.type";
import { titleVariants } from "./title.variants";

const Title = ({ className, children = titleVariants() }: ITitleProps) => {
  return (
    <div>
      <h2 className={`${className} flex items-center`}>{children}</h2>
    </div>
  );
};

export default Title;
