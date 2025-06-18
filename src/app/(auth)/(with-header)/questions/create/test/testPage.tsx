{
  /* Main Content */
}
import React from "react";

export const testPage = () => {
  const tags = ["React", "JavaScript", "Next", "Node", "PHP", "JAVA", "Python"];

  const files = [
    { name: "component를 시키는 방법.png", size: "12mb", date: "25/05/14" },
    { name: "component를 시키는 방법.png", size: "12mb", date: "25/05/14" },
    { name: "component를 시키는 방법.png", size: "12mb", date: "25/05/14" },
    { name: "component를 시키는 방법.png", size: "12mb", date: "25/05/14" },
    { name: "component를 시키는 방법.png", size: "12mb", date: "25/05/14" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="text-sm text-gray-600 mb-4">글 작성 중..</div>
        <h1 className="text-2xl font-bold mb-6">질문 제목</h1>

        {/* Navigation */}
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">카테고리</div>
          <div className="flex gap-2 mb-4">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
              J
            </div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>

          <div className="text-sm text-gray-600 mb-2">카테고리</div>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                  tag === "JavaScript"
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">태그</div>
          <div className="flex gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700">
              개발자
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            placeholder="질문을 등록해주세요"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Content */}
        <div className="flex-1 p-6">
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">
              React에서 상태(State)는 직접 수정하지 않고,
              <br />
              함수 (setState)를 사용하여 수정해야 하나요?
            </h2>
          </div>

          {/* Answer Section */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">📝</span>
              <h3 className="text-lg font-semibold">해설</h3>
            </div>

            <p className="text-gray-700 mb-6">
              React에서 상태(state)는 직접 수정하지 않고 함수 (setState)를 사용하여 수정해야 합니다.
            </p>

            {/* Code Editor */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm">main.py</span>
                </div>
                <div className="text-white text-sm">3/6</div>
              </div>

              <div className="p-4 text-sm font-mono">
                <div className="text-blue-400">
                  <span className="text-pink-400">def</span>{" "}
                  <span className="text-yellow-300">is_evenly_divisible</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-400">number</span>
                  <span className="text-white">):</span>
                </div>
                <div className="text-gray-400 ml-4"># 코드를 작성하세요</div>
                <div className="text-blue-400 ml-4">
                  <span className="text-pink-400">if</span>{" "}
                  <span className="text-orange-400">number</span>{" "}
                  <span className="text-pink-400">%</span> <span className="text-green-400">2</span>{" "}
                  <span className="text-pink-400">==</span>{" "}
                  <span className="text-green-400">0</span>
                  <span className="text-white">:</span>
                </div>
                <div className="text-blue-400 ml-8">
                  <span className="text-pink-400">return</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">True</span>
                  <span className="text-white">)</span>
                </div>
                <div className="mt-2 text-blue-400 ml-4">
                  <span className="text-pink-400">if</span>{" "}
                  <span className="text-orange-400">number</span>{" "}
                  <span className="text-pink-400">%</span> <span className="text-green-400">2</span>{" "}
                  <span className="text-pink-400">!=</span>{" "}
                  <span className="text-green-400">0</span>
                  <span className="text-white">:</span>
                </div>
                <div className="text-blue-400 ml-8">
                  <span className="text-pink-400">return</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">False</span>
                  <span className="text-white">)</span>
                </div>
                <div className="mt-4 text-gray-400"># 테스트</div>
                <div className="text-blue-400">
                  <span className="text-pink-400">print</span>
                  <span className="text-white">(</span>
                  <span className="text-yellow-300">is_evenly_divisible</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">3</span>
                  <span className="text-white">))</span>
                </div>
                <div className="text-blue-400">
                  <span className="text-pink-400">print</span>
                  <span className="text-white">(</span>
                  <span className="text-yellow-300">is_evenly_divisible</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">7</span>
                  <span className="text-white">))</span>
                </div>
                <div className="text-blue-400">
                  <span className="text-pink-400">print</span>
                  <span className="text-white">(</span>
                  <span className="text-yellow-300">is_evenly_divisible</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">8</span>
                  <span className="text-white">))</span>
                </div>
                <div className="text-blue-400">
                  <span className="text-pink-400">print</span>
                  <span className="text-white">(</span>
                  <span className="text-yellow-300">is_evenly_divisible</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">210</span>
                  <span className="text-white">))</span>
                </div>
                <div className="text-blue-400">
                  <span className="text-pink-400">print</span>
                  <span className="text-white">(</span>
                  <span className="text-yellow-300">is_evenly_divisible</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">317</span>
                  <span className="text-white">))</span>
                </div>
              </div>

              <div className="bg-gray-800 px-4 py-2 flex gap-2">
                <button className="px-3 py-1 text-sm bg-gray-700 border border-gray-600 text-white rounded hover:bg-gray-600 transition-colors">
                  저장
                </button>
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  실행
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l p-4">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">CODEPEN URL</span>
            </div>
            <input
              placeholder="https://..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">이미지 업로드</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-sm text-gray-600">img/main.py. (10) 수정/편집</span>
            </div>
          </div>

          {/* File List */}
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{file.name}</div>
                  <div className="text-xs text-gray-500">{file.date}</div>
                </div>
                <div className="text-xs text-gray-500">{file.size}</div>
                <div className="flex gap-1">
                  <span className="px-2 py-1 text-xs bg-red-500 text-white rounded">삭제하기</span>
                  <span className="px-2 py-1 text-xs bg-gray-800 text-white rounded">편집하기</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
