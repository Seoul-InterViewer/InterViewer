"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookmarkCard } from "./components/BookmarkCard";
import { bookmarkData } from "./mocks/bookmarksPage.mock";

export default function BookmarksPage() {
  const pathname = usePathname();

  return (
    <div className="w-full overflow-x-hidden flex flex-wrap gap-7.5 md:gap-4 border border-red-200">
      {bookmarkData.bookmarks.map((data) => (
        <Link href={`${pathname}/${data.id}`} key={data.id}>
          <BookmarkCard
            id={data.id}
            name={data.name}
            createdAt={data.createdAt}
            questions={data.questions}
          />
        </Link>
      ))}
    </div>
  );
}
