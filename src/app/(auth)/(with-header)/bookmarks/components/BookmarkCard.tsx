import { Card } from "@/app/components/card";
import { TageCircle } from "./TagCircle";
import { Icon, IconName } from "@/app/components/icon";
import { IBookmarksProps } from "./bookmarkPage.type";

const categoryIcons: IconName[] = [
  "typescript",
  "javascript",
  "nextjs",
  "react",
  "web",
  "cs",
  "library",
];

const formattedDate = (originDate: string) => {
  const date = new Date(originDate);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
};

export const BookmarkCard = ({ id, name, createdAt, questions }: IBookmarksProps) => {
  const tags: string[] = [];
  questions?.map((question) => {
    question.tags.map((tag) => tags.push(tag.tagName));
  });

  const tagIcons = tags.filter((tag): tag is IconName => categoryIcons.includes(tag as IconName));

  return (
    <Card type="favoriteCard">
      <div className="w-full h-full relative">
        <div className="flex flex-col gap-7.5">
          <div>
            <p className="mb-1.5 font-bold-48 text-font">{name}</p>
            <p className="font-regular-24 text-sub-text">{formattedDate(createdAt)}</p>
          </div>
          <p className="font-bold-14 text-[#6B7280] overflow-hidden text-ellipsis whitespace-nowrap">
            {tags && tags.join(", ")}
          </p>
        </div>
        {tags.length > 0 && (
          <div className="flex gap-4.5 absolute bottom-0 right-0">
            <TageCircle tagIcons={tagIcons} />
            <div className="w-15 h-15 bg-font rounded-full flex justify-center items-center gap-0.5 text-background">
              {tags.length}
              <Icon name="plus" width={8} height={8} fill="var(--color-background)" />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
