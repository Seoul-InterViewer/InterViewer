import { questions, categories } from "../mocks/gamePageData";

export const getCategoryForQuestions = (source_ids: string[]) => {
  const questionCategories = questions
    .filter((q) => source_ids.includes(q.id))
    .map((q) => q.categoryID);
  return categories.filter((c) => questionCategories.includes(c.id)).map((c) => c.name);
};
