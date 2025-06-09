export const categoryIconMap = {
  "Next.js": "nextjs",
  React: "react",
  Typescript: "typescript",
  JavaScript: "javascript",
  Web: "web",
  CS: "cs",
  Library: "library",
} as const;

export type CategoryIconMap = typeof categoryIconMap;
export type CategoryIconName = CategoryIconMap[keyof CategoryIconMap];
export type CategoryName = keyof CategoryIconMap;

export const getCategoryIcon = (categoryName: CategoryName): CategoryIconName => {
  return categoryIconMap[categoryName];
};
  