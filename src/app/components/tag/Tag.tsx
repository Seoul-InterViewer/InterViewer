"use client";

import React from "react";
import { tagVariants } from "./tag.variants";
import ITagProps from "./tag.type";

const Tag = ({ type = "default", className, children }: ITagProps) => {
  return <div className={className ?? tagVariants({ type })}>{children}</div>;
};

export default Tag;
