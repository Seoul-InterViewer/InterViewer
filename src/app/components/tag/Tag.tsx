"use client";

import React from "react";
import { tagVariants } from "./tag.variants";
import ITagProps, { ITagListProps } from "./tag.type";

// 단일 태그 컴포넌트 (children 방식)
const Tag = ({ type = "default", children, className, onClose, closable }: ITagProps) => {
  return (
    <div
      className={`${tagVariants({ type })} ${className || ""} flex items-center justify-center gap-2`}
    >
      {children}
      {closable && onClose && (
        <button
          onClick={onClose}
          className="hover:bg-gray-100 rounded-full w-[9px] h-[9px] inline-block border border-gray-300 cursor-pointer"
          aria-label="Remove tag"
        ></button>
      )}
    </div>
  );
};

// 여러 태그를 리스트로 표시하는 컴포넌트 (하위 호환성)
export const TagList = ({ type = "default", data, choose = [], onClose }: ITagListProps) => {
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
