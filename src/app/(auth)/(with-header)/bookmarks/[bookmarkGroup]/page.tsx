"use client";

import React from "react";
import { BreadCrumb } from "@/app/components/breadCrumb";
import { List, listVariants } from "@/app/components/list";
import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Title } from "@/app/components/title";
import { Icon } from "@/app/components/icon";
import { questions, bookmarks, questionTags, tags } from "./mocks/bookmarkDetailPageData";

const bookmarkedQuestions = questions.filter((question) =>
  bookmarks.some((bookmark) => bookmark.question_id === question.id),
);

const getTagsForQuestion = (questionID: string) => {
  return questionTags
    .filter((qt) => qt.questionID === questionID)
    .map((qt) => tags.find((tag) => tag.id === qt.tagID)?.name)
    .filter(Boolean);
};

const translatedDifficulty = (difficulty: string) => {
  switch (difficulty) {
    case "easy":
      return "하";
    case "medium":
      return "중";
    case "hard":
      return "상";
  }
};
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
          <Card key={question.id} type="checkCard">
            <div className="flex md:flex-row md:justify-between md:gap-0 flex-col-reverse gap-5">
              <div className="flex flex-col md:gap-12.5 gap-9.5">
                <div className="flex flex-col md:gap-8.75 gap-2.5">
                  <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                    <Title size="sm" title={question.title} />
                  </div>
                  <p className="text-font-gray md:font-sb-18 font-sb-14">by 홍길동</p>
                </div>
                <div className="flex gap-2.5">
                  {getTagsForQuestion(question.id).map((tag) => (
                    <Tag key={tag} type="default">
                      {tag}
                    </Tag>
                  ))}
                  <Tag type="default">난이도 {translatedDifficulty(question.difficulty)}</Tag>
                </div>
              </div>
              <div className="flex-center md:w-43.75 md:h-43.75  border border-gray-200 rounded-lg h-40">
                <Icon name="react" className="w-25 h-25" />
              </div>
            </div>
          </Card>
        ))}
      </List>
    </section>
  );
}
