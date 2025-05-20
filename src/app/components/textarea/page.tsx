"use client";

import { Textarea } from "./Textarea";

export default function TextareaTestPage() {
  return (
    <div className="p-20 flex flex-col gap-10">
      <div className="w-315 h-54">
        <Textarea
          name="comment1"
          id="comment1"
          type="comment1"
          maxLength={500}
          placeholder="댓글을 입력하세요.."
        />
      </div>
      <div className="w-100 h-43">
        <label className="flex gap-1 font-regular-18 mb-2.5" htmlFor="reportContent">
          신고내용<span className="text-incorrect font-medium-12">*</span>
        </label>
        <Textarea
          name="reportContent"
          id="reportContent"
          type="report"
          placeholder="내용을 입력해주세요.."
        />
      </div>
    </div>
  );
}
