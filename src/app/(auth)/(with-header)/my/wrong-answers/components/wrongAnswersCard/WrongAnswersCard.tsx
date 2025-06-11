"use client";
import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Title } from "@/app/components/title";
import { Icon } from "@/app/components/icon";
import capitalize from "@/utils/capitalize";
import Link from "next/link";
import { IWrongAnswersCardProps } from "./wrongAnswersCard.type";

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
  return (
    <Card type="checkCard">
      <Link href={`/questions/wrong-answers`}>
        <div className="flex md:flex-row md:justify-between md:gap-0 flex-col-reverse gap-5 group">
          <div
            className="flex-center md:w-43.75 md:h-43.7 rounded-lg h-40"
            style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}
          >
            <Icon name={"cardQuiz"} className="w-25 h-25" />
          </div>
        </div>
      </Link>
    </Card>
  );
};
