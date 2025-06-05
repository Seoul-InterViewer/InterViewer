"use client";
import React, { useState } from "react";
import { Card } from "@/app/components/card";
import { IMainCardProps } from "./mainCard.type";
import { Icon } from "@/app/components/icon";
import { Tag } from "@/app/components/tag";
import { List, listVariants } from "@/app/components/list";

export const MainCard = ({
  title,
  description,
  imageUrl,
  tags,
  likes,
  category,
  difficulty,
  author,
}: IMainCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <Card type="mainCard">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <strong className="font-sb-24 text-sub-text">
                {category} | {`난이도: ${difficulty}`}
              </strong>
              <div>
                <Icon
                  name="bookmark"
                  onClick={() => setIsBookmarked((prev) => !prev)}
                />
              </div>
            </div>
            <List type="tags">
              {tags.map((tag) => (
                <Tag type="card" key={tag} className="px-1">
                  {tag}
                </Tag>
              ))}
            </List>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="font-sb-28 break-keep">{title}</strong>
            <p className="font-regular-18 text-font-gray">{description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium-12 text-font-gray">{`작성자: ${author}`}</p>
          <div className="flex items-center gap-1">
            <Icon
              name="heart"
              fill={isLiked ? "#FF4500" : "black"}
              onClick={() => setIsLiked((prev) => !prev)}
              className="w-4"
            />
            <span className="font-medium-12">{likes}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
