"use client";
import React from "react";
import { listItemVariants } from "./listItem.variants";
export const ListItem = () => {
  return (
    <li className={listItemVariants()}>
      <div>left side</div>
      <div>right side</div>
    </li>
  );
};
