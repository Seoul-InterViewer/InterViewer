import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import React from "react";

export default function GamePlayPage() {
  return (
    <div>
      <div className="flex items-center gap-3 cursor-pointer mb-10">
        <Icon name="reply" />
        <span>뒤로</span>
      </div>

      <div className="w-full md:w-[70%] mx-auto">
        <div className="flex gap-2 mb-4">
          <Icon name="questionBlack" />
          <div className="font-regular-16">
            Question <span>8</span> of <span>20</span>
          </div>
        </div>
        <div className="md:w-full font-medium-12 text-font-gray mb-16 !leading-5">
          빈칸을 채워주세요. <span>(최소 한 칸 이상은 채워야합니다.)</span>
        </div>
        <div className="font-sb-20 mb-4 !leading-7">
          Q. React에서 useMemo와 useCallback의 차이점은 무엇인가요? 언제 사용하나요?
        </div>
        <p className="font-regular-16 text-font-gray !leading-7 md:!leading-10 mb-30">
          useMemo는 계산 비용이 큰 값을 메모이제이션해서 리렌더링 시 불필요한 계산을 방지하는 데
          쓰이고, useCallback은 함수를 메모이제이션해서 불필요한 함수 재생성을 방지해요. 예를 들어,
          자식 컴포넌트에 콜백 함수를 props로 넘길 떄, 매 렌더마다 함수가 새로 생성되면 자식도
          불필요하게 리렌더 될 수 있어요. 그럴 땐 useCallback을 사용하는것이 효과적이죠.
          개인적으로는 최적화가 실제로 필요할 때만 사용하는 편이에요. 지나치게 남발하면 오히려 코드
          복잡도만 올라가고 성능 이점이 없을 수도 있거든요.
          <br />
        </p>
        <div className="flex gap-4">
          <Button
            type="button"
            className={buttonVariants({ size: "md", color: "black", hover: true })}
          >
            이전
          </Button>
          <Button
            type="button"
            className={buttonVariants({ size: "md", color: "yellow", hover: true })}
          >
            다음문제
          </Button>
        </div>
      </div>
    </div>
  );
}
