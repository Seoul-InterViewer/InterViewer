export interface IQuestionCreateProps {
  questionCount: number;
  answerCount: number;
  onQuestionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAnswerChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IQuestionCreateHeaderProps {
  questionCount: number;
  answerCount: number;
  onQuestionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAnswerChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IQuestionCreateBodyProps {
  questionCount: number;
  answerCount: number;
  onQuestionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAnswerChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IOptoin {
  value: string;
  txt: string;
}
