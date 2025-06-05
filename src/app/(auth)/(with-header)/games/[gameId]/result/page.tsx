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
      <div>
        {/* 브래드 크럼 */}
        <div className="mb-5">
          <BreadCrumb items={items} />
        </div>
        <div className="flex flex-col flex-col-reverse md:flex-row">
          {/* Questions */}
          <div className="w-full md:w-[65%]">
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
              <div className="w-full md:w-[95%] mb-40">
                {/* Question */}
                <div className="mb-5 font-sb-20 md:font-sb-28">
                  <div className="mb-2 md:mb-0">Q1.</div>
                  <p className="!leading-[1.6] md:!leading-[1.5]">
                    React에서 useMemo와 useCallback의 차이점은 무엇인가요? 언제 사용하나요?
                  </p>
                </div>
                {/* Answer */}
                <div>
                  <div className="font-sb-20 md:font-sb-28 mb-2 md:mb-0">A.</div>
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
          <div className="w-full md:w-[35%] md:min-h-screen relative">
            {/* Score */}
            <div className="flex w-full px-4 md:px-0 py-3 md:py-10 flex-col bg-main/50 md:flex-center rounded-lg mb-12 relative">
              <div className="font-sb-28 md:font-bold-48 md:text-center mb-2 md:mb-5">83점</div>
              <div className="font-regular-14 md:text-center">총 20문제 중 8문제 정답</div>
              <div className="absolute bottom-1/2 right-3 translate-y-1/2 md:hidden flex items-center gap-2">
                <span>목록 보기</span>
                <Icon name="chevronRight" className="w-3 h-3" />
              </div>
            </div>

            {/* Result  */}
            <List
              className={`${listVariants({ type: "gameResultNav" })} hidden md:block absolute top-0 right-0 md:static`}
            >
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
  );
}
