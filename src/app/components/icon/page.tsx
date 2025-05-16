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
];

const IconGalleryPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">아이콘 목록록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {iconNames.map((name) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center border p-4 rounded hover:shadow-lg transition-shadow min-h-[120px]"
          >
            <div className="flex items-center justify-center h-[48px]">
              <Icon name={name} className="mb-2" />
            </div>
            <span className="text-sm text-gray-700 mt-2">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGalleryPage;
