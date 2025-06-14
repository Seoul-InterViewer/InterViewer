import { Card } from "@/app/components/card";
import { TagCircle } from "./TagCircle";
import { Icon, IconName } from "@/app/components/icon";
import { IBookmarksProps } from "./bookmarkCard.type";
import { formattedDate } from "@/utils/formattedDate";

const categoryIcons: IconName[] = [
  "typescript",
  "javascript",
  "nextjs",
  "react",
  "web",
  "cs",
  "library",
];

export const BookmarkCard = ({ id, name, createdAt, questions }: IBookmarksProps) => {
  const tags: string[] = [];
  questions?.map((question) => {
    question.tags.map((tag) => tags.push(tag.tagName));
  });

  const tagIcons = tags.filter((tag) => categoryIcons.includes(tag as IconName)) as IconName[];

  return (
    <Card type="favoriteCard">
      <div className="w-full h-full relative">
        <div className="flex flex-col gap-0 md:gap-7.5">
          <div>
            <p className="mb-1.5 md:mb-0.5 font-sb-20 md:font-bold-48 tracking-tight md:tracking-normal text-font overflow-hidden text-ellipsis whitespace-nowrap">
              {name}
            </p>
            <p className="font-regular-14 md:font-regular-24 text-sub-text tracking-tight md:tracking-normal">
              {formattedDate(createdAt)}
            </p>
          </div>
          <p className="font-medium-10 md:font-bold-14 text-sub-text tracking-tight md:tracking-normal overflow-hidden text-ellipsis whitespace-nowrap">
            {tags && tags.join(", ")}
          </p>
        </div>
        {tags.length > 0 && (
          <div className="flex gap-1.5 md:gap-4.5 absolute bottom-0 right-0">
            <TagCircle tagIcons={tagIcons} />
            <div className="w-7.5 md:w-15 h-7.5 md:h-15 bg-font rounded-full flex justify-center items-center gap-0.25 md:gap-0.5 text-background font-sb-12 md:font-sb-20">
              {tags.length}
              <Icon
                name="plus"
                fill="var(--color-background)"
                className="w-1.75 md:w-2.5 h-1.75 md:h-2.5"
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
