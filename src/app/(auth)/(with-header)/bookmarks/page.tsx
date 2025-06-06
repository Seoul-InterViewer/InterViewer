import { BookmarkCard } from "./components/BookmarkCard";
import { bookmarkData } from "./mocks/bookmarksPage.mock";

export default function BookmarksPage() {
  return (
    <div className="w-full overflow-x-hidden flex flex-wrap gap-7.5 md:gap-4 border border-red-200">
      {bookmarkData.bookmarks.map((data) => (
        <BookmarkCard
          key={data.id}
          id={data.id}
          name={data.name}
          createdAt={data.createdAt}
          userId={data.userId}
          questions={data.questions}
        />
      ))}
    </div>
  );
}
