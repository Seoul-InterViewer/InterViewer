import { BreadCrumb } from "@/app/components/breadCrumb";
import React from "react";
import { Title } from "@/app/components/title";
import { Button, buttonVariants } from "@/app/components/button";
import { listVariants } from "@/app/components/list";
import { List } from "@/app/components/list";
import { Icon } from "@/app/components/icon";

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

const MockListItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <li className={`p-4 border border-border rounded-md ${className}`}>{children}</li>;

export default function GameResultPage() {
  return (
    <div className="w-full">
      <div className="flex ">
        {/* Questions */}
        <div className="w-[65%]">
          {/* 브래드 크럼 */}
          <div className="mb-5">
            <BreadCrumb items={items} />
          </div>
          {/* 질문들과 Blank*/}
          <div>
            {/* 질문 이름 */}
            <div className="flex w-[95%] justify-between mb-5">
              <Title size="md" title="useMemo" />
              <Button
                type="button"
                className={buttonVariants({ size: "lg", color: "black", hover: true })}
              >
                오답노트에 저장하기
              </Button>
            </div>
            {/* 해설 */}
            <div className="w-[95%] mb-40">
              {/* Question */}
              <div className="mb-5 font-sb-28">
                <div>Q1.</div>
                <p>React에서 useMemo와 useCallback의 차이점은 무엇인가요? 언제 사용하나요?</p>
              </div>
              {/* Answer */}
              <div>
                <div className="font-sb-28">A.</div>
                <p className="font-regular-16 !leading-[1.5]">
                  useMemo는 계산 비용이 큰 값을 메모이제이션해서 리렌더링 시 불필요한 계산을
                  방지하는 데 쓰이고, useCallback은 함수를 메모이제이션해서 불필요한 함수 재생성을
                  방지해요. 예를 들어, 자식 컴포넌트에 콜백 함수를 props로 넘길 떄, 매 렌더마다
                  함수가 새로 생성되면 자식도 불필요하게 리렌더 될 수 있어요. 그럴땐 useCallback을
                  사용하는것이 효과적이죠. 개인적으로는 최적화가 실제로 필요할 때만 사용하는
                  편이에요. 지나치게 남발하면 오히려 코드 복잡도만 올라가고 성능 이점이 없을 수도
                  있거든요.
                </p>
              </div>
            </div>
            {/* 정답 키워드들 */}
            <div className="font-regular-14 text-font-gray">
              <span>정답 :</span>
              <span>메모이제이션해서,</span>
              <span>리렌더,</span>
              <span>메모이제이션해서,</span>
              <span>리렌더,</span>
              <span>코드복잡도만</span>
            </div>
          </div>
        </div>

        {/* Result Sidebar */}
        <div className="w-[35%] min-h-screen ">
          {/* Score */}
          <div className="flex w-full py-10 flex-col bg-main/50 flex-center rounded-lg mb-12 ">
            <div className="font-bold-48 text-center mb-5">83점</div>
            <div className="font-regular-14 text-center">총 20문제 중 8문제 정답</div>
          </div>

          {/* Result  */}
          <List className={listVariants({ type: "gameResultNav" })}>
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
  );
}
