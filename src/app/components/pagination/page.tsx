"use client";

import { useSearchParams } from "next/navigation";
import { Pagination } from "./Pagination";

export default function PageTestPage() {
  const totalItemCount = 46; //총 아이템 수
  const itemCountPerPage = 4; //한 페이지당 보여줄 아이템 수
  const pageCount = 5; //보여줄 페이지 수

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1; //현재 페이지

  return (
    <div className="mt-30">
      <ul className="text-center mb-10">
        {currentPage &&
          [...Array(itemCountPerPage)].map((_, i) => {
            const startPage = (currentPage - 1) * itemCountPerPage + 1;
            const itemNum = startPage + i;

            if (itemNum > totalItemCount) return;
            return (
              <li key={itemNum} className="mb-2.5">
                {itemNum}번 아이템
              </li>
            );
          })}
      </ul>
      <Pagination
        totalItemCount={totalItemCount}
        itemCountPerPage={itemCountPerPage}
        pageCount={pageCount}
        currentPage={currentPage}
      />
    </div>
  );
}
