"use client";
import React from "react";
import { listVariants } from "./list.variants";
import { IListProps } from "./list.type";

const List = ({ className, children }: IListProps) => {
  return <ul className={className}>{children}</ul>;
};

export default List;
