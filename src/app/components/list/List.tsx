"use client";
import React from "react";
import { listVariants } from "./list.variants";
import { ListItem } from "./listItem/ListItem";

const List = () => {
  return (
    <ul className={listVariants()}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
};

export default List;
