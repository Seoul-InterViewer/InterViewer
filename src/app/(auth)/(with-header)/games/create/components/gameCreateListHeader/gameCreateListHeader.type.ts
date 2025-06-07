export interface IGameCreateListHeaderProps {
  selectedQuestions: number;
  totalQuestions: number;
  type: "bookmark" | "wrongAnswer" | "selected";
}