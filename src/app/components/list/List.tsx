"use client";
import React from "react";
import { IListProps } from "./list.type";

export const List = ({ className, children }: IListProps) => {
  return <ul className={className}>{children}</ul>;
};


