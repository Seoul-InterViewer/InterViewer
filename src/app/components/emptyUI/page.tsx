import React from "react";
import { EmptyUI } from "./EmptyUI";

export default function EmptyUITestPage() {
  return (
    <div className="flex flex-col gap-y-20">
      <EmptyUI type="bookmark" />
      <EmptyUI type="wrongNotes" />
      <EmptyUI type="game" />
      <EmptyUI type="comment" />
    </div>
  );
}
