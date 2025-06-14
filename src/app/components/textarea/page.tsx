"use client";

import { Button, buttonVariants } from "../button";
import { Icon } from "../icon";
import { Textarea } from "./Textarea";

export default function TextareaTestPage() {
  return (
    <div className="px-2.5 py-20 flex flex-col gap-10">
      {/* type="comment" */}
      <div className="h-25 md:h-54">
        <Textarea
          name="comment"
          id="comment"
          type="comment"
          maxLength={500}
          placeholder="댓글을 입력하세요.."
        />
      </div>

      <div className="h-25 md:h-54">
        <Textarea
          name="comment"
          id="comment"
          type="comment"
          maxLength={500}
          placeholder="댓글을 입력하세요.."
          noButton={true}
        />
      </div>

      {/* type="reply" */}
      <div className="h-57 px-7.5 pt-8.5 pb-5.5 bg-[#f5f5f5] flex flex-col gap-3.5">
        <Textarea name="reply" id="reply" type="reply" placeholder="댓글을 입력하세요.." />
        <div className="flex justify-end gap-3.5">
          <Button type="button" className="font-medium-12 underline  cursor-pointer">
            취소
          </Button>
          <Button
            type="button"
            className={`${buttonVariants({ size: "sm", color: "black", hover: true })} px-4 py-1.5`}
          >
            작성
          </Button>
        </div>
      </div>

      {/* type="report" */}
      <div className="w-full md:w-100 h-43 flex flex-col gap-2.5">
        <label className="flex gap-1 font-regular-16 md:font-regular-18" htmlFor="reportContent">
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
        <div className="w-77 md:w-110 mx-auto p-5 flex flex-col gap-4 rounded-lg bg-white">
          <Button type="button" className={`${buttonVariants({ icon: true })} self-end`}>
            <Icon name="close" size={28} />
          </Button>
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
            <Button
              type="button"
              className={`${buttonVariants({ size: "md", color: "black", hover: true })} px-5 py-2.5`}
            >
              저장하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
