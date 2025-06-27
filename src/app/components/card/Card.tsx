import React from "react";
import { cardVariants } from "./card.variants";
import { ICardProps } from "./card.type";

export const Card = ({ type = "mainCard", children, className }: ICardProps) => {
  return <div className={className || cardVariants({ type })}>{children}</div>;
};
