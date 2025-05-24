"use client";

import { useState, useEffect } from "react";
import { Icon } from "../icon";
import { paginationVariants } from "./pagination.variants";
import { IPaginationProps } from "./pagination.type";
import { useRouter, useSearchParams } from "next/navigation";

export const Pagination = ({ totalItemCount, itemCountPerPage, pageCount }: IPaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(totalItemCount / itemCountPerPage);

  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  useEffect(() => {
    if (currentPage >= start + pageCount) {
      setStart((prev) => prev + pageCount);
    } else if (currentPage < start) {
      setStart((prev) => prev - pageCount);
    }
  }, [currentPage, pageCount, start]);

  const movePage = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <div className="flex gap-1 justify-center items-center">
      <button
        className={paginationVariants({ firstLastButton: true, disabled: noPrev })}
        onClick={() => movePage(1)}
      >
        <Icon name="chevronLeft" className="h-4 absolute top-1/2 right-1/3 -translate-y-1/2" />
        <Icon name="chevronLeft" className="h-4 absolute top-1/2 left-1/3 -translate-y-1/2" />
      </button>
      <button
        className={paginationVariants({ disabled: noPrev })}
        onClick={() => movePage(start - pageCount)}
      >
        <Icon name="chevronLeft" className="h-4" />
      </button>

      {[...Array(pageCount)].map((_, i) => {
        const page = start + i;
        if (page > totalPages) return null;
        return (
          <button
            key={i}
            className={paginationVariants({
              variant: page === currentPage ? "selected" : "default",
            })}
            onClick={() => movePage(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        className={paginationVariants({ disabled: noNext })}
        onClick={() => movePage(start + pageCount)}
      >
        <Icon name="chevronRight" className="h-4" />
      </button>
      <button
        className={paginationVariants({ firstLastButton: true, disabled: noNext })}
        onClick={() => movePage(totalPages)}
      >
        <Icon name="chevronRight" className="h-4 absolute top-1/2 right-1/3 -translate-y-1/2" />
        <Icon name="chevronRight" className="h-4 absolute top-1/2 left-1/3 -translate-y-1/2" />
      </button>
    </div>
  );
};
