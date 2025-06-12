"use client";

import React, { useState } from "react";
import { IRadioButtonProps } from "./radioButton.type";
import { radioButtonVariants } from "./radioButton.variants";

export const RadioButton = ({ datas }: IRadioButtonProps) => {
  const [selected, setSeleted] = useState(datas[0].value);

  return (
    <ul className="w-full flex items-center gap-4 flex-wrap md:flex-nowrap">
      {datas.map((data) => (
        <li key={data.value}>
          <button
            className={radioButtonVariants({
              variant: selected === data.value ? "selected" : "default",
            })}
            onClick={() => setSeleted(data.value)}
          >
            {data.txt}
          </button>
        </li>
      ))}
    </ul>
  );
};
