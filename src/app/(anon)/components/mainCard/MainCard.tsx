"use client";
import React, { useState } from "react";
import { Card } from "@/app/components/card";
import { IMainCardProps } from "./mainCard.type";
import { Icon } from "@/app/components/icon";
import { Tag } from "@/app/components/tag";
import { List } from "@/app/components/list";
import Image from "next/image";
import categoryIconMapper from "@/utils/categoryIconMapper";
import Link from "next/link";
import { useViewport } from "@/hooks/useViewport";

export const MainCard = ({
  title,
  description,
  tags,
  likes,
  category,
  difficulty,
  author,
  id,
}: IMainCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { isMobile } = useViewport();

  return (
    <Card type="mainCard">
      <div className="flex flex-col justify-between h-full min-h-55 relative group">
        <div className="absolute -top-6 right-0 md:-right-20 w-2/3 md:w-94 h-full z-0">
          {categoryIconMapper("mainCard", category) && (
            <Image
              src={categoryIconMapper("mainCard", category)}
              alt={title}
              fill
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 md:gap-10 relative">
          <div className="flex flex-col gap-1 md:gap-3">
            <div className="flex justify-between items-center">
              <strong className="font-sb-12 md:font-sb-24 text-sub-text capitalize">
                {category} | {`난이도: ${difficulty}`}
              </strong>
              <div>
                <Icon
                  name="bookmark"
                  onClick={() => setIsBookmarked((prev) => !prev)}
                  fill={isBookmarked ? "black" : "black"}
                  width={isMobile ? 18 : 36}
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
          <div className="flex flex-col gap-1 md:gap-4">
            <Link href={`/questions/${id}`}>
              <strong className="inline-block font-sb-14 md:font-sb-28 break-keep !leading-4 md:!leading-9 group-hover:underline">{title}</strong>
            </Link>
            <p className="font-medium-10 md:font-regular-18 text-font-gray">{description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium-8 md:font-medium-12 text-font-gray">{`작성자: ${author}`}</p>
          <div className="flex items-center gap-1">
            <Icon
              name="heart"
              fill={isLiked ? "#FF4500" : "black"}
              onClick={() => setIsLiked((prev) => !prev)}
              className="w-4"
            />
            <span className="font-medium-10 md:font-medium-12">{likes}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
