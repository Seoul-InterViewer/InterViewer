import { tv } from "tailwind-variants";

export const mainCardVariants = tv({
  // 1) slots 정의
  slots: {
    container:
      "relative bg-white rounded-2xl border border-gray-200 flex flex-col justify-between h-full overflow-hidden",
    header: "flex items-center justify-between mb-2",
    categoryTitle: "font-sb-24 text-[#9a9a9a]",
    tags: "flex gap-2 mb-6",
    title: "font-sb-28 text-gray-900 mb-4 leading-tight line-clamp-2",
    content: "text-gray-600 font-r-18  line-clamp-3",
    footer: "flex items-center justify-between",
    creator: "text-gray-500 font-bold-14 truncate max-w-[200px] inline-block align-bottom",
    hearts: "text-gray-500 font-medium-12",
  },
  // 2) size별로 slots 덮어쓰기
  variants: {
    size: {
      "410": {
        container: "w-[414px] h-[414px] py-4 px-4",
        // (header/tags/title/... 은 기본 slot 값 그대로 쓸 거면 생략해도 됩니다)
      },
      "178": {
        container: "w-[178px] h-[178px] py-2 px-2",
        header: "mb-1",
        categoryTitle: "font-sb-12 text-[#9a9a9a]",
        tags: "flex gap-2 mb-2",

        title: "font-sb-14 text-gray-900 mb-0 leading-tight",
        content: "font-medium-10 flex-1 line-clamp-2",
        creator: "font-medium-8 truncate max-w-[70px] inline-block align-bottom",
        hearts: "font-medium-10",
      },
      "165": {
        container: "w-[165px] h-[165px] py-2 px-2",
        header: "mb-1",
        categoryTitle: "font-sb-12 text-[#9a9a9a]",
        tags: "flex gap-2 mb-2",

        title: "font-sb-14 text-gray-900 mb-0 leading-tight",
        content: "font-medium-10 flex-1 line-clamp-2",
        creator: "font-medium-8 truncate max-w-[70px] inline-block align-bottom",
        hearts: "font-medium-10",
      },
    },
  },
});

export const editCardVariants = tv({
  slots: {
    inner: "w-full",
    container: "bg-white rounded-lg shadow-sm border border-gray-200 p-6",
    section: "flex flex-col md:flex-row md:items-center justify-between  h-full gap-4 md:h-[196px]",
  },
});

export const detailCardVariants = tv({
  slots: {
    inner: "w-full",
    container: "bg-white rounded-lg shadow-sm border border-gray-200 py-5 px-4 md:p-6",
    section: "flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0",
  },
});

export const checkCardVariants = tv({
  slots: {
    inner: "w-full",
    container: "bg-white rounded-lg shadow-sm border border-gray-200 p-6",
    section: "flex flex-col md:flex-row md:items-center gap-6",
  },
});

export const favoriteCardVariants = tv({
  slots: {
    container: "bg-white rounded-2xl border border-gray-200 flex flex-col justify-between h-full",
  },
});
