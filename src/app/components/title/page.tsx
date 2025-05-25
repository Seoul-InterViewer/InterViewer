import { Title } from "./Title";

export default function page() {
  
  const questions = {
    id: "1231adsf",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    title: "React에서 useMemo와 useCallback의 차이점은 무엇인가요? 언제 사용하나요?",
    content: "",
    difficulty: "easy" as const,
    likes: 10,
    isSample: false,
    categoryID: "asdkfl",
    userID: "asd123kfl",
  };

  return (
    <div className="md:w-[1260px] h-[100vh] mx-auto w-full">
      <Title type="detail" questions={questions} />
    </div>
  );
}
