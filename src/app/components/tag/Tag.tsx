"use client";

import React from "react";
import { tagVariants } from "./tag.variants";
import { Button } from "../button/Button";
import { Icon } from "../icon";
import { buttonVariants } from "../button/button.variants";
import { ITagProps } from "./tag.type";

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
