import { QuestionData } from "../../index";
import { useState, useRef, useLayoutEffect } from "react";

export const RenderAnswerWithBlanks = ({ q }: { q: QuestionData }) => {
  const [inputs, setInputs] = useState<string[]>(Array(q.keywords.length).fill(""));
  const [_, forceUpdate] = useState(0); // 강제 리렌더용
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // 질문이 바뀔 때 ref 배열과 inputs 초기화
  useLayoutEffect(() => {
    spanRefs.current = [];
    setInputs(Array(q.keywords.length).fill(""));
  }, [q]);

  // inputs가 바뀌거나 질문이 바뀔 때 강제 리렌더 (ref 연결 후 width 재계산)
  useLayoutEffect(() => {
    forceUpdate((v) => v + 1);
  }, [inputs, q]);

  let blankIndex = 0;
  const parts = q.answer.split(new RegExp(`(${q.keywords.join("|")})`));

  return (
    <>
      {parts.map((word, index) => {
        if (q.keywords.includes(word)) {
          const inputIdx = blankIndex++;
          return (
            <span key={index} className="inline-block align-middle mx-1 relative mb-1.5">
              <input
                value={inputs[inputIdx] || ""}
                onChange={(e) => {
                  const newInputs = [...inputs];
                  newInputs[inputIdx] = e.target.value;
                  setInputs(newInputs);
                }}
                className="
                  bg-gray-300/20 rounded-sm text-center outline-yellow-200/10  border border-gray-400/30 focus:border-yellow-400 focus:outline-yellow-400/60  h-8.5 pt-0.7 duration-300 ease-in-out
                "
                style={{
                  width: Math.max((spanRefs.current[inputIdx]?.offsetWidth ?? 60) + 20, 60),
                  maxWidth: 180,
                  minWidth: 60,
                }}
              />
              {/* 숨겨진 span: input value와 동일한 스타일 */}
              <span
                ref={(el) => {
                  if (el) {
                    spanRefs.current[inputIdx] = el;
                  }
                }}
                className="invisible absolute left-0 top-0 whitespace-pre min-w-15"
                style={{ padding: 0, margin: 0 }}
                aria-hidden
              >
                {inputs[inputIdx] || " "}
              </span>
            </span>
          );
        }
        return <span key={index}>{word} </span>;
      })}
    </>
  );
};
