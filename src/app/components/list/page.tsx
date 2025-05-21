import React from "react";
import List from "./List";
import { listVariants } from "./list.variants";



const MockListItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <li className={`p-4 border border-border rounded-md ${className}`}>{children}</li>;

const ImageItem = () => (
  <li className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">이미지</li>
);

const TagItem = ({ text }: { text: string }) => (
  <li className="px-3 py-1 bg-tag rounded-full text-font-gray">{text}</li>
);

const BookmarkGroupItem = () => (
  <li className="p-4 border border-border rounded-md aspect-square flex flex-col items-center justify-center gap-2">
    <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center">📚</div>
    <span>북마크 그룹</span>
  </li>
);

export default function ListTestPage() {
  return (
    <div className="w-full max-w-[1260px] mx-auto p-4 space-y-12">
      <h1 className="text-2xl font-bold">List Variants 데모</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Search</h2>
          <List className={listVariants({ type: "search" })}>
            {Array.from({ length: 5 }).map((_, index) => (
              <MockListItem key={index} className="border-b border-border">
                검색 결과 {index + 1}
              </MockListItem>
            ))}
          </List>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Slider</h2>
          <List className={listVariants({ type: "slider" })}>
            {Array.from({ length: 5 }).map((_, index) => (
              <MockListItem key={index} className="min-w-60">
                슬라이더 아이템 {index + 1}
              </MockListItem>
            ))}
          </List>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Tags</h2>
          <List className={listVariants({ type: "tags" })}>
            {["태그1", "태그2", "태그3", "긴태그입니다", "태그5"].map((tag, index) => (
              <TagItem key={index} text={tag} />
            ))}
          </List>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Answer</h2>
          <List className={listVariants({ type: "answer" })}>
            {Array.from({ length: 3 }).map((_, index) => (
              <MockListItem key={index}>답변 {index + 1}</MockListItem>
            ))}
          </List>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Image</h2>
          <List className={listVariants({ type: "image" })}>
            {Array.from({ length: 4 }).map((_, index) => (
              <ImageItem key={index} />
            ))}
          </List>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">ShowAll (Grid)</h2>
          <List className={listVariants({ type: "showAll" })}>
            {Array.from({ length: 8 }).map((_, index) => (
              <MockListItem key={index}>그리드 아이템 {index + 1}</MockListItem>
            ))}
          </List>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">BookmarkGroup</h2>
          <List className={listVariants({ type: "bookmarkGroup" })}>
            {Array.from({ length: 6 }).map((_, index) => (
              <BookmarkGroupItem key={index} />
            ))}
          </List>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Question</h2>
          <List className={listVariants({ type: "question" })}>
            {Array.from({ length: 3 }).map((_, index) => (
              <MockListItem key={index}>질문 {index + 1}</MockListItem>
            ))}
          </List>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Comment</h2>
          <List className={listVariants({ type: "comment" })}>
            {Array.from({ length: 3 }).map((_, index) => (
              <MockListItem key={index}>댓글 {index + 1}</MockListItem>
            ))}
          </List>
        </section>
      </div>
    </div>
  );
}
