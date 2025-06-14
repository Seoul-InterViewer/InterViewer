"use client";

import Link from "next/link";
import { BookmarkCard } from "./components/bookmarkCard/BookmarkCard";
import { bookmarkData } from "./mocks/bookmarksPage.mock";
import { BreadCrumb } from "@/app/components/breadCrumb";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import useModal from "@/hooks/modal/useModal";
import { EditBookmarkModal } from "./components/modal/EditBookmarkModal";

export default function BookmarksPage() {
  const checkName = "bookmarks";
  const editBookmarkModalProps = useModal();

  const editBookmarkDatas = bookmarkData.bookmarks.map((data) => ({
    text: data.name,
    value: data.id,
    count: data.questions?.length ?? 0,
  }));

  return (
    <div>
      <div className="flex justify-between mb-15">
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: "즐겨찾는 질문들", href: "/bookmarks" },
          ]}
        />
        <Button
          type="button"
          className={buttonVariants({ size: "md", color: "white", hover: true })}
          onClick={editBookmarkModalProps.open}
        >
          <span className="flex items-center gap-0.5">
            <Icon name="plus" width={8} height={8} fill="var(--color-font)" />
            편집
          </span>
        </Button>
      </div>
      <div className="w-full mb-15 overflow-x-hidden grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-items-center gap-2 sm:gap-4 md:gap-5">
        {bookmarkData.bookmarks.map((data) => (
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

      {/* 북마크 편집 모달 */}
      <EditBookmarkModal
        datas={editBookmarkDatas}
        checkName={checkName} // checkbox의 name으로 줄 값
        props={editBookmarkModalProps}
      />
    </div>
  );
}
