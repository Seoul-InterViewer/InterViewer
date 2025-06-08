"use client";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import React, { useState } from "react";

const questions = [
  {
    question: "React에서 useMemo와 useCallback의 차이점은 무엇인가요? 언제 사용하나요?",
    answer:
      "useMemo는 계산 비용이 큰 값을 메모이제이션해서 리렌더링 시 불필요한 계산을 방지하는 데 쓰이고, useCallback은 함수를 메모이제이션해서 불필요한 함수 재생성을 방지해요. 예를 들어, 자식 컴포넌트에 콜백 함수를 props로 넘길 때, 매 렌더마다 함수가 새로 생성되면 자식도 불필요하게 리렌더 될 수 있어요. 그럴 땐 useCallback을 사용하는것이 효과적이죠. 개인적으로는 최적화가 실제로 필요할 때만 사용하는 편이에요. 지나치게 남발하면 오히려 코드 복잡도만 올라가고 성능 이점이 없을 수도 있거든요. useMemo는 계산 비용이 큰 값을 메모이제이션해서 리렌더링 시 불필요한 계산을 방지하는 데 쓰이고, useCallback은 함수를 메모이제이션해서 불필요한 함수 재생성을 방지해요. 예를 들어, 자식 컴포넌트에 콜백 함수를 props로 넘길 때, 매 렌더마다 함수가 새로 생성되면 자식도 불필요하게 리렌더 될 수 있어요. 그럴 땐 useCallback을 사용하는것이 효과적이죠. 개인적으로는 최적화가 실제로 필요할 때만 사용하는 편이에요. 지나치게 남발하면 오히려 코드 복잡도만 올라가고 성능 이점이 없을 수도 있거든요. useMemo는 계산 비용이 큰 값을 메모이제이션해서 리렌더링 시 불필요한 계산을 방지하는 데 쓰이고, useCallback은 함수를 메모이제이션해서 불필요한 함수 재생성을 방지해요. 예를 들어, 자식 컴포넌트에 콜백 함수를 props로 넘길 때, 매 렌더마다 함수가 새로 생성되면 자식도 불필요하게 리렌더 될 수 있어요. 그럴 땐 useCallback을 사용하는것이 효과적이죠. 개인적으로는 최적화가 실제로 필요할 때만 사용하는 편이에요. 지나치게 남발하면 오히려 코드 복잡도만 올라가고 성능 이점이 없을 수도 있거든요. useMemo는 계산 비용이 큰 값을 메모이제이션해서 리렌더링 시 불필요한 계산을 방지하는 데 쓰이고, useCallback은 함수를 메모이제이션해서 불필요한 함수 재생성을 방지해요. 예를 들어, 자식 컴포넌트에 콜백 함수를 props로 넘길 때, 매 렌더마다 함수가 새로 생성되면 자식도 불필요하게 리렌더 될 수 있어요. 그럴 땐 useCallback을 사용하는것이 효과적이죠. 개인적으로는 최적화가 실제로 필요할 때만 사용하는 편이에요. 지나치게 남발하면 오히려 코드 복잡도만 올라가고 성능 이점이 없을 수도 있거든요.",
    // 필요하다면 아래와 같이 추가
    // hint: "useMemo는 값, useCallback은 함수 메모이제이션",
    // keywords: ["메모이제이션", "리렌더", "함수", "성능"],
  },
  {
    question: "Virtual DOM이란 무엇이며, React에서 어떻게 동작하나요?",
    answer:
      "Virtual DOM은 실제 DOM의 가벼운 사본으로, 상태 변화가 발생하면 새로운 Virtual DOM을 만들고 이전 Virtual DOM과 비교(diff)하여 변경된 부분만 실제 DOM에 반영합니다. 이를 통해 성능을 최적화할 수 있습니다.",
    // hint: "실제 DOM과 비교(diff) 후 변경만 반영",
  },
  {
    question: "Props와 State의 차이점은 무엇인가요?",
    answer:
      "Props는 부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용하며, 읽기 전용입니다. State는 컴포넌트 내부에서 관리하는 데이터로, 값이 변경되면 컴포넌트가 리렌더링됩니다.",
    // hint: "props는 외부, state는 내부 데이터",
  },
  {
    question: "useEffect 훅은 언제 사용하며, 의존성 배열의 역할은 무엇인가요?",
    answer:
      "useEffect는 컴포넌트가 마운트, 언마운트, 업데이트될 때 특정 작업(부수 효과)을 수행할 때 사용합니다. 의존성 배열에 명시된 값이 변경될 때만 effect가 실행됩니다.",
    // hint: "의존성 배열이 바뀔 때만 실행",
  },
  {
    question: "React에서 리스트를 렌더링할 때 key prop이 왜 필요한가요?",
    answer:
      "key prop은 React가 각 엘리먼트를 고유하게 식별할 수 있도록 도와줍니다. key가 없거나 중복되면 리렌더링 시 효율적으로 DOM을 업데이트하지 못해 성능 저하나 버그가 발생할 수 있습니다.",
    // hint: "key는 고유 식별자, 성능/버그 방지",
  },
];

export default function GamePlayPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div className="flex items-center gap-3 cursor-pointer mb-10">
        <Icon name="reply" />
        <span>뒤로</span>
      </div>

      <div className="w-full md:w-[70%]  min-h-[60vh] mx-auto flex flex-col justify-between">
        <div>
          <div className="flex gap-2 mb-4">
            <Icon name="questionBlack" />
            <div className="font-regular-16">
              Question <span>{currentIndex + 1}</span> of <span>{questions.length}</span>
            </div>
          </div>
          <div className="md:w-full font-medium-12 text-font-gray mb-16 !leading-5">
            빈칸을 채워주세요. <span>(최소 한 칸 이상은 채워야합니다.)</span>
          </div>
          <div className="font-sb-20 mb-4 !leading-8">
            Q. <span>{questions[currentIndex].question}</span>
          </div>
          <p className="font-regular-16 text-font-gray !leading-7 md:!leading-8 mb-20 max-h-[20vh] md:max-h-[30vh] overflow-y-auto">
            {questions[currentIndex].answer}
            <br />
          </p>
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            className={
              buttonVariants({ size: "md", color: "black", hover: true }) +
              (currentIndex === 0 ? " opacity-50 cursor-not-allowed pointer-events-none" : "")
            }
            onClick={() => {
              if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
            }}
          >
            이전
          </Button>
          {currentIndex === questions.length - 1 ? (
            <Button
              type="button"
              className={buttonVariants({ size: "md", color: "yellow", hover: true })}
            >
              제출
            </Button>
          ) : (
            <Button
              type="button"
              className={buttonVariants({ size: "md", color: "yellow", hover: true })}
              onClick={() => {
                if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
              }}
            >
              다음
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
