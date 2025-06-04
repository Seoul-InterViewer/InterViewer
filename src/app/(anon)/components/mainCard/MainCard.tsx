import React from "react";
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
  return (
    <Card type="mainCard">
      <div>
        <div>
          <div className="flex justify-between items-center">
            <strong>
              {category} | {`난이도: ${difficulty}`}
            </strong>
            <div>
              <Icon name="bookmark" strokeWidth={0.6} className="*:stroke-1" />
            </div>
          </div>
          <List type="tags">
            {tags.map((tag) => (
              <Tag type="card" key={tag}>
                {tag}
              </Tag>
            ))}
          </List>
        </div>
        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
        <div>
          <div>{author}</div>
          <div>
            <Icon name="heart" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
