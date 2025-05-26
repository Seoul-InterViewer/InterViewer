import Title from "./Title";
import { titleVariants } from "./title.variants";
export default function page() {
  //  타이틀 컴포넌트
  // 사이즈 lg, md, sm, className(직접입력)으로 스타일링 하시면 됩니다

  // 모든 텍스트는 children으로 받기 때문에 쌍태그를 이용하여 텍스트를 넣어주시면 됩니다.

  return (
    <div className="md:w-[1260px] h-[100vh] mx-auto w-full flex flex-col gap-10 mt-10">
      <Title className={titleVariants({ size: "lg" })}>
        Q. React에서 useMemo와 useCallback의 차이점은 무엇인가요? 언제 사용하나요?
      </Title>

      <Title className={titleVariants({ size: "md" })}>
        <span>📝&nbsp;</span>해설
      </Title>

      <Title className={titleVariants({ size: "md" })}>(1) 전역 공간에서의 this</Title>

      {/* 텍스트 사이즈가 서로 다를 경우 */}
      <Title className={titleVariants({ size: "sm" })}>
        <span className="md:font-bold-32 font-bold-24">Q.&nbsp;</span>javascript
      </Title>
    </div>
  );
}
