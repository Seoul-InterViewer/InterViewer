"use client";

import React from "react";
import { ICardProps } from "./card.type";
import { MainCard } from "./cards/MainCard";
import { EditCard } from "./cards/EditCard";
import { DetailCard } from "./cards/DetailCard";
import { CheckCard } from "./cards/CheckCard";
import { FavoriteCard } from "./cards/FavoriteCard";

export const Card = ({ type, data, size }: ICardProps) => {
  const cardContent = () => {
    switch (type) {
      case "mainCard":
        const mainCardItem = data[0];
        return <MainCard type="mainCard" data={mainCardItem} size={size} />;
      case "editCard":
        const editCardItem = data[0];
        return <EditCard type="editCard" data={editCardItem} size={size} />;
      case "detailCard":
        const detailCardItem = data[0];
        return <DetailCard type="detailCard" data={detailCardItem} size={size} />;
      case "checkCard":
        const checkCardItem = data[0];
        return <CheckCard type="checkCard" data={checkCardItem} size={size} />;
      case "favoriteCard":
        const favoriteCardItem = data[0];
        return <FavoriteCard type="favoriteCard" data={favoriteCardItem} size={size} />;
      default:
        return null;
    }
  };

  return <div>{cardContent()}</div>;
};
