import React from "react";
import { Card } from "@/app/components/card";
import { IMainCardProps } from "./mainCard.type";
import Image from "next/image";
import categoryIconMapper from "@/utils/categoryIconMapper";
export const MainCard = ({
  title,
  description,
  imageUrl,
  tags,
  likes,
  publishedAt,
  category,
}: IMainCardProps) => {

  console.log(categoryIconMapper(category))

  return (
    <Card type="mainCard">
      <div className="relative">
        <Image
          src={categoryIconMapper(category) || "/placeholder.svg?height=200&width=300"}
          alt={`${category} icon`}
          width={310}
          height={310}
          className="absolute top-0 left-0"
        />
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
