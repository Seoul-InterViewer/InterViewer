import { useViewport } from "@/hooks/useViewport";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

export const NotFound = () => {
  const [showInput, setShowInput] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const { isMobile } = useViewport();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInput(true);
    }, 1400);

    return () => clearTimeout(timeout);
  }, []);

  const numberStyle = useMemo(
    () => ({
      fontSize: isMobile ? 150 : 400,
      fontWeight: "bold",
      color: "#000",
      fontFamily: "Pretendard, sans-serif",
    }),
    [isMobile],
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "4") {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center gap-20">
      <div className="flex items-center gap-2 md:gap-5">
        {[4, 0, 4].map((num, index, arr) => {
          if (index === 2 && showInput) {
            return (
              <div
                key={index}
                className="bg-[#b6b6b6] px-3 md:px-5 rounded-2xl flex gap-8 h-fit md:h-120 items-center overflow-hidden"
              >
                <input
                  type="text"
                  placeholder="4"
                  className="flex border-none outline-none justify-center items-center w-24 md:w-64 h-45 md:h-fit text-[150px] md:text-[400px] font-bold text-black font-sans"
                  autoFocus
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  aria-autocomplete="none"
                  maxLength={1}
                />
              </div>
            );
          }
          return (
            <div
              key={index}
              className="bg-[#b6b6b6] px-3 md:px-5 rounded-2xl flex h-fit items-center overflow-visible md:overflow-hidden *:text-center"
            >
              <AnimatedNumbers
                key={isMobile ? "mobile" : "desktop"}
                animateToNumber={num}
                fontStyle={numberStyle}
                transitions={() => ({
                  duration: 1,
                })}
                includeComma={false}
                className="w-24 md:w-64 min-h-45 h-45 md:h-120 flex items-center justify-center"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center">
        <strong className="block font-bold-32 md:font-bold-48 capitalize mb-5">
          page not found
        </strong>
        <p className="md:w-4/5 font-regular-14 md:font-regular-24 text-center break-keep !leading-5 md:!leading-8">
          죄송합니다. 요청하신 페이지를 찾을 수 없습니다. 주소가 바뀌었거나, 존재하지 않는 페이지일
          수 있습니다. 홈 페이지로 돌아가시려면{" "}
          <Link href="/" className="text-main underline">
            여기
          </Link>
          를 클릭하세요.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
