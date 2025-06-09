import React from "react";

export const CorrectRate = ({ averageScore }: { averageScore: number }) => {
  return (
    <div className="md:flex items-center gap-4 border-r-2 border-r-tag md:pr-15 hidden">
      <div
        className="flex-center w-28 h-28 rounded-full bg-sub-text"
        style={{
          background: `conic-gradient(
                    #040450 0%,
                    #040450 ${averageScore}%,
                    #e0e0e0 ${averageScore}%,
                    #e0e0e0 100%
                  )`,
        }}
      >
        <div className="w-5/6 h-5/6 rounded-full bg-white"></div>
      </div>    
      <span className="min-w-18.75 font-sb-28">{averageScore}%</span>
    </div>
  );
};
