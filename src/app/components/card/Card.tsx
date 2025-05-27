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
        return data.map((item: string, idx: number) => (
          <MainCard key={idx} type="mainCard" data={item} size={size} />
        ));
      case "editCard":
        return data.map((item: string, idx: number) => (
          <EditCard key={idx} type="editCard" data={item} size={size} />
        ));
      case "detailCard":
        return data.map((item: string, idx: number) => (
          <DetailCard key={idx} type="detailCard" data={item} size={size} />
        ));
      case "checkCard":
        return data.map((item: string, idx: number) => (
          <CheckCard key={idx} type="checkCard" data={item} size={size} />
        ));
      case "favoriteCard":
        return data.map((item: string, idx: number) => (
          <FavoriteCard key={idx} type="favoriteCard" data={item} size={size} />
        ));
      default:
        return null;
    }
  };

  return <div>{cardContent()}</div>;
};
