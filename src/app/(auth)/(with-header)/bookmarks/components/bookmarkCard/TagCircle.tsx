import { Icon, IconName } from "@/app/components/icon";
import { ITagIconsProps } from "./bookmarkCard.type";
import { tagCircleVariants } from "./tagCircle.variants";

export const TageCircle = ({ tagIcons }: ITagIconsProps) => {
  const showIcons: IconName[] = [];
  if (tagIcons.length === 0) showIcons.push("horizontalElipsis");
  else if (tagIcons.length > 4) showIcons.push(...tagIcons.slice(0, 4), "horizontalElipsis");
  else showIcons.push(...tagIcons);

  return (
    <div className={tagCircleVariants({ variant: tagIcons.length > 1 && true })}>
      <div className="flex gap-5">
        {showIcons.map((iconName, index) => (
          <Icon
            key={iconName}
            name={iconName}
            fill={iconName === "nextjs" ? "var(--color-font-gray)" : "var(--color-background)"}
            stroke="var(--color-background)"
            className={`${index !== 0 ? "opacity-0 absolute group-hover:opacity-100 group-hover:static" : ""} w-3.5 md:w-7.5 h-3.5 md:h-7.5`}
          />
        ))}
      </div>
    </div>
  );
};
