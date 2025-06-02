import { useViewport } from "@/hooks/useViewport";
import { useEffect, useMemo, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

export const NotFound = () => {
  const [showInput, setShowInput] = useState(false);

  const { isMobile } = useViewport();

  console.log(isMobile)

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

  return (
    <section className="w-full flex items-center justify-center">
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
    </section>
  );
};

export default NotFound;
