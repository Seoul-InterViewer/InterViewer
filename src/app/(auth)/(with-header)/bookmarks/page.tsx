import Link from "next/link";
import { BookmarkCard } from "./components/bookmarkCard/BookmarkCard";
import { bookmarkData } from "./mocks/bookmarksPage.mock";
import { BreadCrumb } from "@/app/components/breadCrumb";
import { EditButton } from "./components/modal/EditButton";

export default function BookmarksPage() {
  return (
    <main className="w-full flex flex-col gap-7.5 md:pb-30 pb-15">
      <div className="flex justify-between">
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: "즐겨찾는 질문들", href: "/bookmarks" },
          ]}
        />
        <EditButton />
      </div>
      <div className="w-full overflow-x-hidden grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-items-center gap-2 sm:gap-4 md:gap-5">
        {bookmarkData.map((data) => (
          <Link href={`bookmarks/${data.id}`} key={data.id}>
            <BookmarkCard
              id={data.id}
              name={data.name}
              createdAt={data.createdAt}
              questions={data.questions}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
