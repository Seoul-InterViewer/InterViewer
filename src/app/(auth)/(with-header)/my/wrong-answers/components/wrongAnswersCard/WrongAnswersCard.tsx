"use client";
import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Title } from "@/app/components/title";
import { Icon } from "@/app/components/icon";
import capitalize from "@/utils/capitalize";
import Link from "next/link";
import { IWrongAnswersCardProps } from "./wrongAnswersCard.type";
import { useEffect, useState } from "react";

//추후 전역 util함수로 리펙토링 예정
const translatedDifficulty = (difficulty: string) => {
  switch (difficulty) {
    case "easy":
      return "하";
    case "medium":
      return "중";
    case "hard":
      return "상";
  }
};

export const WrongAnswersCard = () => {
  const [color, setColor] = useState("#000");
  useEffect(() => {
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, []);
  return (
    <Card type="checkCard">
      <Link href={`/questions/wrong-answers`}>
        <div className="flex md:flex-row md:justify-between md:gap-0 flex-col-reverse gap-5 group">
          <div className="flex gap-15">
            <div
              className="flex-center md:w-43.75 md:h-43.75 rounded-lg h-40"
              style={{ backgroundColor: color }}
            >
              <Icon name={"cardQuiz"} className="w-25 h-25" />
            </div>
            <div className="flex flex-col gap-5">
              <Title size="sm" title="게임 01"/>
              <div className="flex gap-2">
                {/* 태그는 최대 4개  */}
                <Tag >오답</Tag>
                <Tag >쉬움</Tag>
                <Tag >쉬움</Tag>
                <Tag >쉬움</Tag>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};
