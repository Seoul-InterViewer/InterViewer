import React from "react";
import { cardVariants } from "./card.variants";
import { ICardProps } from "./card.type";

export const Card = ({ type = "mainCard", children }: ICardProps) => {
  return <div className={cardVariants({ type })}>{children}</div>;
};
