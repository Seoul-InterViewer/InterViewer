import { Icon, IconName } from "@/app/components/icon";
import { ITagIconsProps } from "./bookmarkPage.type";
import { bookmarkPageVariants } from "./bookmarkPage.variants";

export const TageCircle = ({ tagIcons }: ITagIconsProps) => {
  const showIcons: IconName[] = [];
  if (tagIcons.length === 0) showIcons.push("horizontalElipsis");
  else if (tagIcons.length > 4) showIcons.push(...tagIcons.slice(0, 4), "horizontalElipsis");
  else showIcons.push(...tagIcons);

  return (
    <div className={bookmarkPageVariants({ variant: tagIcons.length > 1 && true })}>
      <div className="flex gap-5">
        {showIcons.map((iconName, index) => (
          <Icon
            key={iconName}
            name={iconName}
            width={30}
            height={30}
            fill="var(--color-font-gray)"
            stroke="var(--color-background)"
            strokeWidth={1}
            className={
              index !== 0 ? "opacity-0 absolute group-hover:opacity-100 group-hover:static" : ""
            }
          />
        ))}
      </div>
    </div>
  );
};
