import { Icon } from "./Icon";
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
  "horizontalElipsis",
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

export default function IconGalleryPage() {
  return (
    <div className="p-8 flex flex-col gap-15">
      <div>
        <h1 className="text-3xl font-bold mb-6">아이콘 목록</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {iconNames.map((name) => (
            <div key={name} className="flex-center flex-col border p-4 rounded">
              <div className="flex items-center justify-center h-12">
                <Icon name={name} fill="var(--color-correct)" stroke="var(--color-incorrect)" />
              </div>
              <span className="--font-sb-14 text-gray-700 mt-2">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-6">아이콘 직접 props 입력</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <Icon name="menu" width={20} height={20} />
          <Icon name="chevronUp" width={50} height={50} />
          <Icon
            name="chevronDown"
            width={50}
            height={50}
            strokeWidth={2}
            stroke="var(--color-main)"
          />
          <Icon name="typescript" width={50} height={50} />
          <Icon name="report" width={50} height={50} stroke="var(--color-incorrect)" />
          <Icon name="plus" width={50} height={50} fill="var(--color-border)" />
          <Icon name="chevronDown" width={50} height={50} fill="var(--color-border)" />
          <Icon name="chevronUp" width={50} height={50} fill="var(--color-border)" stroke="var(--color-main)" />
          <Icon name="search" width={50} height={50} fill="var(--color-border)" stroke="var(--color-main)" />
          <Icon name="user" width={50} height={50} fill="var(--color-border)" stroke="var(--color-main)" />
          <Icon name="verticalElipsis" width={50} height={50} fill="var(--color-border)" stroke="var(--color-main)" />
        </div>
      </div>
    </div>
  );
}
