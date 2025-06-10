import { Icon } from "@/app/components/icon";
import { List, listVariants } from "@/app/components/list";
import { resultVariants } from "../../resultVariants";
import { GameResultData } from "./GameResultSidebar.type";

const { resultSidebarWrapper, scoreWrapper, scoreTitle, scoreDescription, scoreList } =
  resultVariants();

const MockListItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <li className={`p-4 border border-border rounded-md ${className}`}>{children}</li>;

export const GameResultSidebar = ({ data }: { data: GameResultData[] }) => {
  const correctCount = data.filter((q) => q.isCorrect).length;
  const score = (correctCount / data.length) * 100;

  return (
    <div className={resultSidebarWrapper()}>
      <div>
        {/* Score */}
        <div className={scoreWrapper()}>
          <div className={scoreTitle()}>
            <span>{score}</span>점
          </div>
          <div className={scoreDescription()}>
            총 {data.length}문제 중 {correctCount}문제 정답
          </div>
          <div className={scoreList()}>
            <span>목록 보기</span>
            <Icon name="chevronRight" className="w-3 h-3" />
          </div>
        </div>

        {/* Result  */}
        <List className={`${listVariants({ type: "gameResultNav" })} hidden md:block`}>
          {data.map((q, index) => (
            <MockListItem key={index} className="cursor-pointer">
              <div className="flex itmes-center gap-4">
                <Icon name={q.isCorrect ? "correct" : "incorrect"} />
                <div>Question 0{index + 1}</div>
              </div>
            </MockListItem>
          ))}
        </List>
      </div>
    </div>
  );
};
