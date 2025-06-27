import { IBannerCardData } from "./bannerCard.type";

export const BANNER_CARDS_DATA: IBannerCardData[] = [
  {
    title: "오답노트",
    description:
      "빈칸채우기에서 틀린 문제를 모아 복습하고, 복습퀴즈를 통해 부족했던 개념을 확실히 복습해요. ",
    backTitle: "틀린 문제는 다시 한번!",
    backDescription:
      "틀린 문제를 저장하고, 나중에 다시 확인하여 반복 학습할 수 있습니다. 실수한 부분을 집중적으로 복습하며 실력을 향상시켜보세요.",
    iconName: "heroNote",
  },
  {
    title: "질문하기",
    description: "원하는 면접 질문이 없으면 직접 등록하고 퀴즈로 풀 수 있어요.",
    backTitle: "원하는 질문이 없다면 직접!",
    backDescription:
      "원하는 기출 문제를 찾지 못했다면 직접 등록해 보세요. 자신만의 질문을 만들어 퀴즈로 풀며 학습할 수 있습니다.",
    iconName: "heroQuestion",
  },
  {
    title: "빈칸채우기 퀴즈",
    description: "중요한 질문들은 선택해서 빈칸 퀴즈로 반복 학습하실 수 있어요.",
    backTitle: "암기하고 싶은 질문, 빈칸으로 테스트!",
    backDescription:
      "선택한 질문을 빈칸 채우기 퀴즈로 변형하여 기억에 더욱 남도록 학습할 수 있습니다. 퀴즈를 풀며 반복 학습을 통해 완벽히 익힐 수 있습니다.",
    iconName: "heroQuiz",
  },
  {
    title: "CodePen 연동",
    description:
      "CodePen 연동을 지원하여, 해당 질문의 모범답안 원리를 한층 더 직관적으로 이해하실 수 있어요.",
    backTitle: "모범답안은 코드로 확인하기!",
    backDescription:
      "CodePen을 통해 질문에 대한 실시간 코딩을 확인하고, 모범답안의 원리를 직관적으로 이해할 수 있습니다. 실제 코드를 작성하면서 학습 효과를 높여보세요.",
    iconName: "heroCodepen",
  },
];
