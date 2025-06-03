"use client";

import React, { useEffect } from "react";
import { BreadCrumb } from "@/app/components/breadCrumb";
import { List, listVariants } from "@/app/components/list";
import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Title } from "@/app/components/title";
import { Icon } from "@/app/components/icon";

const questions = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    title: "React - 가상 돔(virtual DOM)",
    content: "React의 기본 개념을 설명해주세요.",
    difficulty: "medium",
    likes: 10,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440000",
    userID: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
  {
    id: "987fcdeb-51a2-43d7-b987-654321098765",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    title: "React - 라이프사이클(생애주기)",
    content: "React의 기본 개념을 설명해주세요.",
    difficulty: "easy",
    likes: 10,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440000",
    userID: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  },
  {
    id: "456a789b-cdef-0123-4567-89abcdef0123",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    title: "React - 리액트 훅(React Hook)",
    content: "React의 기본 개념을 설명해주세요.",
    difficulty: "hard",
    likes: 10,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440000",
    userID: "8ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
  {
    id: "789b012c-3456-789d-0123-456789abcdef",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    title: "React - 프롭스와 스테이트(Props and State)",
    content: "React의 기본 개념을 설명해주세요.",
    difficulty: "easy",
    likes: 10,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440000",
    userID: "9ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
];

const bookmarks = [
  {
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    question_id: "123e4567-e89b-12d3-a456-426614174000",
    createdAt: "2024-01-01",
    group_id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  },
  {
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    question_id: "987fcdeb-51a2-43d7-b987-654321098765",
    createdAt: "2024-01-01",
    group_id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  },
  {
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    question_id: "456a789b-cdef-0123-4567-89abcdef0123",
    createdAt: "2024-01-01",
    group_id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  },
  {
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    question_id: "789b012c-3456-789d-0123-456789abcdef",
    createdAt: "2024-01-01",
    group_id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  },
];

const tags = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "react",
  },
];

const questionTags = [
  {
    questionID: "123e4567-e89b-12d3-a456-426614174000",
    tagID: "550e8400-e29b-41d4-a716-446655440001",
  },
  {
    questionID: "987fcdeb-51a2-43d7-b987-654321098765",
    tagID: "550e8400-e29b-41d4-a716-446655440001",
  },
  {
    questionID: "456a789b-cdef-0123-4567-89abcdef0123",
    tagID: "550e8400-e29b-41d4-a716-446655440001",
  },
  {
    questionID: "789b012c-3456-789d-0123-456789abcdef",
    tagID: "550e8400-e29b-41d4-a716-446655440001",
  },
];

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

  useEffect(() => {
    console.log(bookmarkedQuestions, questions);
  }, []);

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
            <div className="flex md:flex-row md:justify-between md:gap-0 flex-col-reverse gap-5 over">
              <div className="flex flex-col md:gap-12.5 gap-9.5">
                <div className="flex flex-col md:gap-8.75 gap-2.5">
                  <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                    <Title size="sm" title={question.title} />
                  </div>{" "}
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
