"use client";

import { Pagination } from "./Pagination";

export default function PageTestPage() {
  // totalItemCount: 총 아이템 수
  // itemCountPerPage: 한 페이지당 보여줄 아이템 수
  // pageCount: 보여줄 페이지 수
  // currentPage: 현재 페이지
  return (
    <div className="mt-30">
      <Pagination totalItemCount={46} itemCountPerPage={4} pageCount={5} />
    </div>
  );
}
