"use client";
import React, { useState } from "react";
import { Card } from "@/app/components/card";
import { IMainCardProps } from "./mainCard.type";
import { Icon } from "@/app/components/icon";
import { Tag } from "@/app/components/tag";
import { List, listVariants } from "@/app/components/list";
import Image from "next/image";

const categoryIconMapper = (category: string) => {
  // 추후 DB에서 카테고리 목록을 가져와 이를 객체로 매핑하는 식으로 사용할 예정
  const categories = {
    javascript: "/icons/javascript.svg",
    react: "/icons/react.svg",
    nextjs: "/icons/nextjs.svg",
    typescript: "/icons/typescript.svg",
    nodejs: "/icons/nodejs.svg",
    express: "/icons/express.svg",
    mongodb: "/icons/mongodb.svg",
    mysql: "/icons/mysql.svg",
    postgresql: "/icons/postgresql.svg",
    docker: "/icons/docker.svg",
    aws: "/icons/aws.svg",
    git: "/icons/git.svg",
    github: "/icons/github.svg",
    gitlab: "/icons/gitlab.svg",
    interview: "/icons/interview.svg",
    performance: "/icons/performance.svg",
    a11y: "/icons/a11y.svg",
  } as const;
  return categories[category as keyof typeof categories];
};

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
      <div className="flex flex-col justify-between h-full relative">
        <div>
          {category && <Image src={categoryIconMapper(category)} alt={title} width={100} height={100} />}
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <strong className="font-sb-24 text-sub-text">
                {category} | {`난이도: ${difficulty}`}
              </strong>
              <div>
                <Icon name="bookmark" onClick={() => setIsBookmarked((prev) => !prev)} />
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
