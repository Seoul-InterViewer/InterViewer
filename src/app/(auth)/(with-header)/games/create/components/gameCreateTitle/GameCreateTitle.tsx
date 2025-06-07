import { RadioButton } from "@/app/components/radioButton";
import { difficultyDatas, categoryDatas } from "../../mocks/gameCreateData";

export const GameCreateTitle = () => {
  return (
    <div>
      <div className="flex flex-col md:gap-11">
        <h1 className="font-sb-24">게임 생성 중...</h1>
        <input
          type="text"
          placeholder="게임 제목"
          className="font-bold-56 placeholder:text-font focus:outline-none"
          autoFocus
        />
        <div className="flex flex-col md:gap-4">
          <div className="flex flex-col md:gap-3">
            <label className="font-sb-16">난이도</label>
            <RadioButton datas={difficultyDatas} />
          </div>
          <div className="flex flex-col md:gap-3">
            <label className="font-sb-16">카테고리</label>
            <RadioButton datas={categoryDatas} />
          </div>
        </div>
      </div>
      <hr className="text-sub-text md:mt-12.5" />
    </div>
  );
};
