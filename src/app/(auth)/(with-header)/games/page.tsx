"use client";

import React from "react";
import { BreadCrumb } from "@/app/components/breadCrumb";
import { List, listVariants } from "@/app/components/list";
import { gameQuestions } from "./mocks/gamePageData";
import { GamePageListItem } from "./components/gamePageListItem";

export default function page() {

  return (
    <section className="w-full flex flex-col gap-7.5">
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "빈칸채우기", href: "/games" },
        ]}
      />
      <List className={listVariants()}>
        {gameQuestions.map((gameQuestion) => {
          return (
            <GamePageListItem
              key={gameQuestion.id}
              gameQuestion={gameQuestion}
            />
          );
        })}
      </List>
    </section>
  );
}
