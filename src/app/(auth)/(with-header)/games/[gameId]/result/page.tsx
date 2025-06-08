import { BreadCrumb } from "@/app/components/breadCrumb";
import React from "react";
import { Title } from "@/app/components/title";
import { Button, buttonVariants } from "@/app/components/button";
import { listVariants } from "@/app/components/list";
import { List } from "@/app/components/list";
import { Icon } from "@/app/components/icon";

// BreadCrumb 아이템들
const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "내 게임",
    href: "/",
  },
  {
    label: "테스트 결과",
    href: "/",
    isCurrentPage: true,
  },
];

// 질문들
const questions = [
  {
    title: "useMemo",
    question: "React에서 useMemo와 useCallback의 차이점은 무엇인가요? 언제 사용하나요?",
    answer:
      "useMemo는 계산 비용이 큰 값을 메모이제이션해서 리렌더링 시 불필요한 계산을 방지하는 데 쓰이고, useCallback은 함수를 메모이제이션해서 불필요한 함수 재생성을 방지해요. 예를 들어, 자식 컴포넌트에 콜백 함수를 props로 넘길 때, 매 렌더마다 함수가 새로 생성되면 자식도 불필요하게 리렌더 될 수 있어요. 그럴땐 useCallback을 사용하는것이 효과적이죠. 개인적으로는 최적화가 실제로 필요할 때만 사용하는 편이에요. 지나치게 남발하면 오히려 코드 복잡도만 올라가고 성능 이점이 없을 수도 있거든요.",
    keywords: ["메모이제이션해서", "리렌더", "useCallback", "최적화", "코드복잡도"],
  },
  {
    title: "Virtual DOM",
    question: "Virtual DOM이란 무엇이며, React에서 어떻게 동작하나요?",
    answer:
      "Virtual DOM은 실제 DOM의 가벼운 사본으로, 상태 변화가 발생하면 새로운 Virtual DOM을 만들고 이전 Virtual DOM과 비교(diff)하여 변경된 부분만 실제 DOM에 반영합니다. 이를 통해 성능을 최적화할 수 있습니다.",
    keywords: ["Virtual DOM", "diff", "성능", "최적화", "DOM 반영"],
  },
  {
    title: "Props State",
    question: "Props와 State의 차이점은 무엇인가요?",
    answer:
      "Props는 부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용하며, 읽기 전용입니다. State는 컴포넌트 내부에서 관리하는 데이터로, 값이 변경되면 컴포넌트가 리렌더링됩니다.",
    keywords: ["Props", "State", "부모-자식", "읽기 전용", "리렌더링"],
  },
  {
    title: "useEffect",
    question: "useEffect 훅은 언제 사용하며, 의존성 배열의 역할은 무엇인가요?",
    answer:
      "useEffect는 컴포넌트가 마운트, 언마운트, 업데이트될 때 특정 작업(부수 효과)을 수행할 때 사용합니다. 의존성 배열에 명시된 값이 변경될 때만 effect가 실행됩니다.",
    keywords: ["useEffect", "의존성 배열", "부수 효과", "마운트", "업데이트"],
  },
  {
    title: "Key Prop",
    question: "React에서 리스트를 렌더링할 때 key prop이 왜 필요한가요?",
    answer:
      "key prop은 React가 각 엘리먼트를 고유하게 식별할 수 있도록 도와줍니다. key가 없거나 중복되면 리렌더링 시 효율적으로 DOM을 업데이트하지 못해 성능 저하나 버그가 발생할 수 있습니다.",
    keywords: ["key prop", "리스트", "고유성", "성능", "버그"],
  },
];

// sidebar 리스트들
const MockListItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <li className={`p-4 border border-border rounded-md ${className}`}>{children}</li>;

export default function GameResultPage() {
  return (
    <div className="w-full min-h-screen  relative">
      <div>
        {/* 브래드 크럼 */}
        <div className="mb-5">
          <BreadCrumb items={items} />
        </div>
        {/* Questions Wrapper */}
        <div className="flex flex-col flex-col-reverse md:flex-row md:items-start">
          {/* Questions */}
          <div className="w-full md:w-[85%]">
            {/* 질문들과 Blank*/}
            <div className="flex flex-col gap-20">
              {questions.map((q, i) => (
                <div key={i}>
                  {/* 질문 이름 */}
                  <div className="flex w-[95%] justify-between mb-5">
                    <Title size="md" title={q.title} />
                    <Button
                      type="button"
                      className={buttonVariants({ size: "lg", color: "black", hover: true })}
                    >
                      오답노트에 저장하기
                    </Button>
                  </div>
                  {/* 해설 */}
                  <div className="w-full md:w-[95%] mb-40">
                    {/* Question */}
                    <div className="mb-5 font-sb-20 md:font-sb-28">
                      <div className="mb-2 md:mb-0">{`Q${i + 1}.`}</div>
                      <p className="!leading-[1.6] md:!leading-[1.5]">{q.question}</p>
                    </div>
                    {/* Answer */}
                    <div>
                      <div className="font-sb-20 md:font-sb-28 mb-2 md:mb-0">A.</div>
                      <p className="font-regular-16 !leading-[1.5]">{q.answer}</p>
                    </div>
                  </div>
                  {/* 정답 키워드들 */}
                  <div className="font-regular-14 text-font-gray">
                    <span>정답 :</span>
                    {q.keywords.map((keyword, idx) => (
                      <span key={idx}>
                        {keyword}
                        {idx < q.keywords.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Result Sidebar */}
          <div className="w-full md:w-[20vw] self-start md:fixed top-45 right-0 pr-[1vw] bg-white md:min-h-screen">
            <div className="">
              {/* Score */}
              <div className="flex w-full px-4 md:px-0 py-3 md:py-10 flex-col bg-main/50 md:flex-center rounded-lg mb-12 relative">
                <div className="font-sb-28 md:font-bold-48 md:text-center mb-2 md:mb-5">83점</div>
                <div className="font-regular-14 md:text-center">총 20문제 중 8문제 정답</div>
                <div className="absolute md:static bottom-1/2 right-3 translate-y-1/2 md:hidden flex items-center gap-2">
                  <span>목록 보기</span>
                  <Icon name="chevronRight" className="w-3 h-3" />
                </div>
              </div>
              {/* Result  */}
              <List className={`${listVariants({ type: "gameResultNav" })} hidden md:block`}>
                {Array.from({ length: 3 }).map((_, index) => (
                  <MockListItem key={index} className="cursor-pointer">
                    <div className="flex itmes-center gap-4">
                      <Icon name="correct" />
                      <div>Question 0{index + 1}</div>
                    </div>
                  </MockListItem>
                ))}
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
