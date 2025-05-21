import { tv } from "tailwind-variants";

// showAll은 추후 전체 보기 색션을 위해 사용합니다.
// question은 내가 등록한 질문, 즐겨찾기 그룹 내의 질문 목록, 오답노트 목록, 게임 목록, 모바일메뉴, 게임내역, 게임내역상세모달에 모두 사용합니다.

export const listVariants = tv({
  base: "flex flex-col gap-4 w-full",
  variants: {
    type: {
      slider: "flex-row",
      search: "gap-0 [&>*:last-child]:mb-0 [&>*:last-child]:border-b-0",
      tagSearchResult: "border-border",
      tags: "flex-row gap-1 md:gap-2",
      image: "gap-0 md:gap-6",
      input: "gap-3 md:gap-8",
      select: "gap-5",
      showAll: "grid grid-cols-4 md:gap-6",
      question: "gap-5",
      tableOfContents: "gap-7",
      gameResultNav: "gap-2 md:gap-4",
      comment: "gap-8 md:gap-14",
      reply: "gap-2",
      bookmarkGroup: "grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7",
    },
  },
});
