"use client";

import React from "react";
import { BreadCrumb } from "@/app/components/breadCrumb";
import { List, listVariants } from "@/app/components/list";
import { BookmarkListItem } from "./components/BookmarkListItem";
import { questions, bookmarks } from "./mocks/bookmarkDetailPageData";

const bookmarkedQuestions = questions.filter((question) =>
  bookmarks.some((bookmark) => bookmark.question_id === question.id),
);

export default function Page({ params }: { params: Promise<{ bookmarkGroup: string }> }) {
  const resolvedParams = React.use(params);

  return (
    <section className="w-full flex flex-col gap-7.5">
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "즐겨찾는 질문들", href: "/bookmarks" },
          { label: "react", href: `/bookmarks/${resolvedParams.bookmarkGroup}` },
        ]}
      />
      <List className={listVariants()}>
        {bookmarkedQuestions.map((question) => (
          <BookmarkListItem key={question.id} question={question} />
        ))}
      </List>
    </section>
  );
}
