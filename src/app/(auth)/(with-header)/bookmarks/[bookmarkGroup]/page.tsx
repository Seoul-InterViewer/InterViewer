import React from "react";
import { BreadCrumb } from "@/app/components/breadCrumb";
import { List, listVariants } from "@/app/components/list";
import { BookmarkListItem } from "./components/bookmarkListItem";
import { questions, bookmarks } from "./mocks/bookmarkDetailPageData";
import capitalize from "@/utils/capitalize";
import { MotionWrapper } from "@/app/components/motionWrapper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300 },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { type: "tween", ease: "easeInOut" },
  },
};

const bookmarkedQuestions = questions.filter((question) =>
  bookmarks.some((bookmark) => bookmark.question_id === question.id),
);

export default function Page({ params }: { params: Promise<{ bookmarkGroup: string }> }) {
  const resolvedParams = React.use(params);

  return (
    <main className="w-full flex flex-col gap-7.5">
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "즐겨찾는 질문들", href: "/bookmarks" },
          {
            label: capitalize(resolvedParams.bookmarkGroup),
            href: `/bookmarks/${resolvedParams.bookmarkGroup}`,
          },
        ]}
      />
      <MotionWrapper variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        <List className={listVariants()}>
          {bookmarkedQuestions.map((question) => (
            <MotionWrapper variants={itemVariants} key={question.id}>
              <BookmarkListItem key={question.id} question={question} />
            </MotionWrapper>
          ))}
        </List>
      </MotionWrapper>
    </main>
  );
}
