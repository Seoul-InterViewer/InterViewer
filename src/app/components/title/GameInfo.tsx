import { ITitleProps } from "./title.type";

export const GameInfo = () => {
  return (
    <div className="md:font-sb-18 font-sb-14 [&>div]:flex [&>div]:justify-between [&>div]:items-center [&>div>span:first-child]:text-sub-text">
      <div>
        <span>게임 플레이 횟수</span>
        <span> 6</span>
      </div>
      <div>
        <span>랭킹</span>
        <span># 1</span>
      </div>
    </div>
  );
};
