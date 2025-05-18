"use client";

import React, { useState } from "react";
import { RadioButtonProps } from "./radioButton.type";
import { radioButtonVariants } from "./radioButton.variants";

export const RadioButton = ({ datas, width }: RadioButtonProps) => {
  const [selected, setSeleted] = useState(datas[0].value);
  const { wrapper, item } = radioButtonVariants({ variant: "default" });

  return (
    <ul className={wrapper()} style={{ width }}>
      {datas.map((data) => (
        <li
          key={data.value}
          className={`${radioButtonVariants({
            variant: selected === data.value ? "selected" : "default",
          }).item()} text-sb-14`}
          onClick={() => setSeleted(data.value)}
        >
          {data.txt}
        </li>
      ))}
    </ul>
  );
};
