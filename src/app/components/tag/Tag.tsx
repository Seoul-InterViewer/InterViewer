"use client";

import React from "react";
import { tagVariants } from "./tag.variants";
import ITagProps from "./tag.type";

const Tag = ({ type = "default", data, choose = [], onClose }: ITagProps) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {data.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className={`${tagVariants({ type })} flex items-center justify-center gap-2`}
        >
          {item}
          {choose.includes(item) && onClose && (
            <button
              onClick={() => onClose(item)}
              className="hover:bg-gray-100 rounded-full w-[9px] h-[9px] inline-block border border-gray-300 cursor-pointer"
              aria-label="Remove tag"
            ></button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tag;
