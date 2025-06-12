export interface IGameSessionRecordProps {
  id: string;
  is_correct: boolean;
  user_answer: string;
  score: number;
  createdAt: string;
  session_id: string;
  game_question_id: string;
}

export interface IGameSessionProps {
  id: string;
  createdAt: string;
  started_at: string;
  ended_at: string;
  total_score: number;
  user_id: string;
}

export interface IGameQuestionProps {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  source_ids: string[];
  user_id: string;
}