import React from "react";
import { BreadCrumb } from "@/app/components/breadCrumb";
import { List, listVariants } from "@/app/components/list";
import { Card, cardVariants } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { Button } from "@/app/components/button";
import { Title } from "@/app/components/title";

const gameQuestions = [
  {
    id: "d0a7eecc-06d9-4a76-bd6f-9e77a83b9173",
    title: "게임 01",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    source_id: "c24f5b32-f24e-441a-8a88-6b158d812cd6",
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
  {
    id: "f13b1b34-4cf3-4121-bc37-65b8f5a1f74e",
    title: "게임 02",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    source_id: "4c4d8e7d-fb3e-44e1-acc6-5f4a9d99e7c0",
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
];

const gameQuestionBlanks = [
  {
    id: "8b47a85a-1743-4b1f-a12d-1e10df60e571",
    word_index: 0,
    word: "DOM",
    createdAt: "2024-01-01",
    game_question_id: "d0a7eecc-06d9-4a76-bd6f-9e77a83b9173",
  },
  {
    id: "90abfa55-03f3-4e47-a216-48c823a923b0",
    word_index: 1,
    word: "Hoisting",
    createdAt: "2024-01-01",
    game_question_id: "d0a7eecc-06d9-4a76-bd6f-9e77a83b9173",
  },
];

const gameSessionRecords = [
  {
    id: "c1d7e6fc-d73d-495f-909c-2fba658eb97c",
    is_correct: true,
    user_answer: "DOM",
    createdAt: "2024-01-01",
    game_session_id: "3a593292-5a18-49a1-84df-246ed9a7dc0f",
    game_question_blank_id: "8b47a85a-1743-4b1f-a12d-1e10df60e571",
  },
  {
    id: "fc6e2893-c3c1-4988-b41f-4a12ffbb2047",
    is_correct: false,
    user_answer: "Scope",
    createdAt: "2024-01-01",
    game_session_id: "3a593292-5a18-49a1-84df-246ed9a7dc0f",
    game_question_blank_id: "90abfa55-03f3-4e47-a216-48c823a923b0",
  },
];

const gameSessions = [
  {
    id: "3a593292-5a18-49a1-84df-246ed9a7dc0f",
    createdAt: "2024-01-01",
    started_at: "2024-01-01T10:00:00Z",
    ended_at: "2024-01-01T10:10:00Z",
    score: 1,
    total_score: 2,
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
];

const tags = [
  { id: "20c1c3d0-6f35-4e99-a5b3-01b35493fd5f", name: "React" },
  { id: "41f7c1f9-74a1-44b4-9b61-98e37ff3a123", name: "Javascript" },
  { id: "734c7a57-d33e-4c3d-9087-2e7f9e8e822c", name: "Typescript" },
];

const questionTags = [
  {
    questionID: "c24f5b32-f24e-441a-8a88-6b158d812cd6",
    tagID: "41f7c1f9-74a1-44b4-9b61-98e37ff3a123",
  },
  {
    questionID: "c24f5b32-f24e-441a-8a88-6b158d812cd6",
    tagID: "20c1c3d0-6f35-4e99-a5b3-01b35493fd5f",
  },
  {
    questionID: "c24f5b32-f24e-441a-8a88-6b158d812cd6",
    tagID: "734c7a57-d33e-4c3d-9087-2e7f9e8e822c",
  },
];

export default function page() {
  return (
    <section className="w-full flex justify-between">
      <div className="flex flex-col gap-7.5">
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Games", href: "/games" },
          ]}
        />
        <List className={listVariants()}>
          <Card type="checkCard">
            <Title size="sm" title="게임 01" />
          </Card>
        </List>
      </div>
      <div>
        
      </div>
    </section>
  );
}
