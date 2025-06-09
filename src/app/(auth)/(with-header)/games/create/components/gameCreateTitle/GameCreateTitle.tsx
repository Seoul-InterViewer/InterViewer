import { RadioButton } from "@/app/components/radioButton";
import { difficultyDatas, categoryDatas } from "../../mocks/gameCreateData";
import { useViewport } from "@/hooks/useViewport";

export const GameCreateTitle = () => {
  const { isMobile } = useViewport();

  return (
    <div>
      <div className="flex flex-col md:gap-11 gap-7.5">
        <div className="flex flex-col md:gap-11 gap-2.5">
          <h1 className="md:font-sb-24 font-regular-16">게임 생성 중...</h1>
          <input
            type="text"
            placeholder="게임 제목"
            className="md:font-bold-56 font-bold-28 placeholder:text-font focus:outline-none"
            autoFocus
          />
        </div>
        <div className="flex flex-col md:gap-4 gap-3">
          <div className="flex flex-col gap-3">
            <span className="md:font-sb-16 font-sb-14">난이도</span>
            <RadioButton datas={difficultyDatas} />
          </div>
          <div className="flex flex-col gap-3">
            <span className="md:font-sb-16 font-sb-14">카테고리</span>
            <RadioButton datas={categoryDatas} />
          </div>
        </div>
      </div>
      <hr className="text-sub-text md:mt-12.5 mt-11" />
    </div>
  );
};
