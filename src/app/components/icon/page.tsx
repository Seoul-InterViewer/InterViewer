import { Icon } from "./icon";
import { IconName } from "./icon.type";

const iconNames: IconName[] = [
  "apple",
  "bookmark",
  "cardQuiz",
  "menu",
  "web",
  "google",
  "user",
  "verticalElipsis",
  "upload",
  "typescript",
  "trash",
  "share",
  "setting",
  "search",
  "report",
  "reply",
  "react",
  "questionBlack",
  "plus",
  "nextjs",
  "library",
  "javascript",
  "incorrect",
  "horisontalElipsis",
  "heroQuiz",
  "heroQuestion",
  "heroNote",
  "heroCodepen",
  "heart",
  "heartBlack",
  "github",
  "edit",
  "cs",
  "createNew",
  "correct",
  "codepen",
  "close",
  "arrow",
  "chevronLeft",
  "chevronRight",
  "chevronUp",
  "chevronDown",
];

const IconGalleryPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">아이콘 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {iconNames.map((name) => (
          <div key={name} className="flex-center flex-col border p-4 rounded">
            <div className="flex items-center justify-center h-[48px]">
              <Icon name={name} />
            </div>
            <span className="--font-sb-14 text-gray-700 mt-2">{name}</span>
          </div>
        ))}
      </div>
      <Icon name="menu" width={20} height={20} />
      <Icon name="chevronUp" width={50} height={50} />
      <Icon name="chevronDown" width={50} height={50} strokeWidth={2} stroke="var(--color-main)" />
      <Icon name="typescript" width={50} height={50} />
    </div>
  );
};

export default IconGalleryPage;
