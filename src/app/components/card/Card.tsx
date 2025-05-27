"use client";

import React from "react";
import { ICardProps } from "./card.type";
import { MainCard } from "./cards/MainCard";
import { EditCard } from "./cards/EditCard";
import { DetailCard } from "./cards/DetailCard";
import { CheckCard } from "./cards/CheckCard";
import { FavoriteCard } from "./cards/FavoriteCard";

const CARD_COMPONENTS = {
  mainCard: MainCard,
  editCard: EditCard,
  detailCard: DetailCard,
  checkCard: CheckCard,
  favoriteCard: FavoriteCard,
} as const;

export const Card = ({ type, data, size }: ICardProps) => {
  const CardComponent = CARD_COMPONENTS[type];

  if (!CardComponent) return null;

  return (
    <div>
      {data.map((item: string, idx: number) => (
        <CardComponent key={idx} type={type} data={item} size={size} />
      ))}
    </div>
  );
};
``;
