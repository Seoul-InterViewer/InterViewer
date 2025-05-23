"use client";

import React from "react";
import { tagVariants } from "./tag.variants";
import ITagProps, { ITagListProps } from "./tag.type";
import { Button } from "../button/Button";
import { Icon } from "../icon";
import { buttonVariants } from "../button/button.variants";

// 단일 태그 컴포넌트 (children 방식)
export const Tag = ({ type = "default", children, className, onClose, closable }: ITagProps) => {
  return (
    <div
      className={`${tagVariants({ type })} ${className || ""} flex items-center justify-center gap-2`}
    >
      {children}
      {closable && onClose && (
        <Button
          type="button"
          onClick={() => onClose()}
          className={buttonVariants({
            icon: true,
          })}
          aria-label="Remove tag"
        >
          <Icon name="close" className="w-2 h-2 md:w-3 md:h-3" />
        </Button>
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
            <Button
              type="button"
              onClick={() => onClose(item)}
              className={buttonVariants({
                icon: true,
              })}
              aria-label="Remove tag"
            >
              <Icon name="close" className="w-2 h-2 md:w-3 md:h-3" />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};
