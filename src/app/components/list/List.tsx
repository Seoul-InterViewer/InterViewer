"use client";
import React from "react";
import { IListProps } from "./list.type";
import { listVariants } from "./list.variants";

export const List = ({ className, children, type }: IListProps) => {
  return <ul className={type ? listVariants({ type }) : className}>{children}</ul>;
};
