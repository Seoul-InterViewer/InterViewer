import { BreadCrumb } from "@/app/components/breadCrumb";
import React from "react";

const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "내 게임",
    href: "/",
  },
  {
    label: "테스트 결과",
    href: "/",
  },
];

export default function GameResultPage() {
  return (
    <div className="w-full">
      {/* Questions */}
      <div>
        <BreadCrumb items={items} />
        <div>sadfsdf</div>
      </div>

      {/* Result Sidebar */}
      <div></div>
    </div>
  );
}
