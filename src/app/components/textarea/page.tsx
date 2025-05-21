"use client";

import { Textarea } from "./Textarea";

export default function TextareaTestPage() {
  return (
    <div className="p-20 flex flex-col gap-10">
      {/* type="comment1" */}
      <div className="w-315 h-54">
        <Textarea
          name="comment1"
          id="comment1"
          type="comment1"
          maxLength={500}
          placeholder="댓글을 입력하세요.."
        />
      </div>

      {/* type="comment2" */}
      <div className="w-315 h-57 px-7.5 pt-8.5 pb-5.5 bg-[#f5f5f5] flex flex-col gap-3.5">
        <Textarea name="comment2" id="comment2" type="comment2" placeholder="댓글을 입력하세요.." />
        <div className="flex justify-end gap-3.5">
          <button className="font-medium-12 underline bg-white cursor-pointer">취소</button>
          <button className="px-4 py-1.5 font-medium-12 text-white bg-black rounded cursor-pointer">
            작성
          </button>
        </div>
      </div>

      {/* type="report" */}
      <div className="w-100 h-43 flex flex-col gap-2.5">
        <label className="flex gap-1 font-regular-18" htmlFor="reportContent">
          신고내용<span className="text-incorrect font-medium-12">*</span>
        </label>
        <Textarea
          name="reportContent"
          id="reportContent"
          type="report"
          placeholder="내용을 입력해주세요.."
        />
      </div>

      {/* type="wrongAnswer" */}
      <div className="w-full py-5 bg-modal-bg text-center">
        <div className="w-110 mx-auto p-5 flex flex-col gap-4 rounded-lg bg-white">
          <button className="w-7 h-7 self-end font-sb-28 cursor-pointer">X</button>
          <div className="w-full h-full flex flex-col items-center gap-7.5">
            <label className="font-sb-20 mb-2.5" htmlFor="wrongAnswerContent">
              Q2. React에서 useMemo와 useCallback의... 해당 질문을 오답노트에 저장하시겠어요?
            </label>
            <Textarea
              name="wrongAnswerContent"
              id="wrongAnswerContent"
              type="wrongAnswer"
              placeholder="오답에 대한 간단한 메모를 작성하실 수 있어요.."
            />
            <button className="w-fit px-5 py-2.5 rounded bg-black text-white font-sb-16 cursor-pointer">
              저장하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
