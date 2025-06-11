import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Title } from "@/app/components/title";
import { Icon, IconName } from "@/app/components/icon";
import { questions, categories } from "../../mocks/bookmarkDetailPageData";
import { IBookmarkQuestionProps } from "./bookmarkDetailPage.type";
import Link from "next/link";
import translatedDifficulty from "@/utils/translatedDifficulty";

const mapCategoryToIconName = (categoryName: string | undefined): IconName => {
  if (!categoryName) return "web";

  const categoryMap: Record<string, IconName> = {
    React: "react",
    Nextjs: "nextjs",
    Typescript: "typescript",
    JavaScript: "javascript",
    Web: "web",
    CS: "cs",
    Library: "library",
  };

  return categoryMap[categoryName];
};

const getCategroyForQuestion = (questionID: string) => {
  const categoryID = questions.find((question) => question.id === questionID)?.categoryID;
  const categoryName = categories.find((category) => category.id === categoryID)?.name;
  return mapCategoryToIconName(categoryName);
};

export const BookmarkListItem = ({ question }: { question: IBookmarkQuestionProps }) => {
  const iconName = getCategroyForQuestion(question.id);

  return (
    <Card key={question.id} type="checkCard">
      <div className="flex md:flex-row md:justify-between md:gap-0 flex-col-reverse gap-5">
        <div className="flex flex-col md:gap-12.5 gap-9.5">
          <div className="flex flex-col md:gap-8.75 gap-2.5">
            <div className="text-ellipsis overflow-hidden whitespace-nowrap hover:underline">
              <Link href={`/questions/${question.id}`}>
                <Title size="sm" title={question.title} />
              </Link>
            </div>
            <p className="text-font-gray md:font-sb-18 font-sb-14">by 홍길동</p>
          </div>
          <div className="flex gap-2.5">
            <Tag type="default">{getCategroyForQuestion(question.id)}</Tag>
            <Tag type="default">난이도 {translatedDifficulty(question.difficulty)}</Tag>
          </div>
        </div>
        <div className="flex-center md:w-43.75 md:h-43.75  border border-gray-200 rounded-lg h-40">
          <Icon name={iconName} className="w-25 h-25" />
        </div>
      </div>
    </Card>
  );
};
