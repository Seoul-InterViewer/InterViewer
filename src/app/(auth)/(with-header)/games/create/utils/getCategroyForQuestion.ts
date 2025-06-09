import { categories, questions } from "../mocks/gameCreateData";

export default function getCategroyForQuestion(questionID: string) {
  const categoryID = questions.find((question) => question.id === questionID)?.categoryID;
  return categories.find((category) => category.id === categoryID)?.name;
}
