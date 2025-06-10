import { Title } from "@/app/components/title";
import { Button } from "@/app/components/button";
import { buttonVariants } from "@/app/components/button";
import { GameResultListProps } from "./GameResultList.type";

export const GameResultList = ({ q, i }: GameResultListProps) => {
  return (
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
  );
};
