import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Title } from "@/app/components/title";
import { Icon } from "@/app/components/icon";
import { IMyQuestionsCardProps } from "./myQuestionsCard.type";
import capitalize from "@/utils/capitalize";
import Link from "next/link";

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

export const MyQuestionsCard = ({
  id,
  author,
  title,
  category,
  difficulty,
}: IMyQuestionsCardProps) => {
  return (
    <Card type="checkCard">
      <Link href={`/questions/${id}`}>
        <div className="flex md:flex-row md:justify-between md:gap-0 flex-col-reverse gap-5 group">
          <div className="flex flex-col md:gap-12.5 gap-9.5">
            <div className="flex flex-col md:gap-8.75 gap-2.5">
              <div className="text-ellipsis overflow-hidden whitespace-nowrap group-hover:underline">
                <Title size="sm" title={title} />
              </div>
              <p className="text-font-gray md:font-sb-18 font-sb-14">by {author}</p>
            </div>
            <div className="flex gap-2.5">
              <Tag type="default">{capitalize(category)}</Tag>
              <Tag type="default">난이도 {translatedDifficulty(difficulty)}</Tag>
            </div>
          </div>
          <div className="flex-center md:w-43.75 md:h-43.75  border border-gray-200 rounded-lg h-40">
            <Icon name={category} className="w-25 h-25" />
          </div>
        </div>
      </Link>
    </Card>
  );
};
