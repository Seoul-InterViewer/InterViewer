import React from "react";
import { Card } from "@/app/components/card";
import { IMainCardProps } from "./mainCard.type";

export const MainCard = ({
  title,
  description,
  imageUrl,
  tags,
  likes,
  publishedAt,
}: IMainCardProps) => {
  return (
    <Card type="mainCard">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{imageUrl}</p>
        <p>{tags}</p>
        <p>{likes}</p>
        <p>{publishedAt}</p>
      </div>
    </Card>
  );
};
