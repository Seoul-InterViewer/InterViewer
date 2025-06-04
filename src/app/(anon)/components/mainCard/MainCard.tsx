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
  publishedAt,
  category,
  difficulty,
}: IMainCardProps) => {
  return (
    <Card type="mainCard">
      <div>
        <div>
          <div className="flex justify-between">
            <strong>
              {category} | {`난이도: ${difficulty}`}
            </strong>
            <div>
              <Icon name="bookmark" />
            </div>
          </div>
          <List className={listVariants({ type: "tags" })}>
            {tags.map((tag) => (
              <Tag type="card" key={tag}>
                {tag}
              </Tag>
            ))}
          </List>
        </div>
        <div>
          <strong></strong>
          <p></p>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Card>
  );
};
