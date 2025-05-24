"use client";

import { Icon } from "../icon";
import { paginationVariants } from "./pagination.variants";
import { IPaginationProps } from "./pagination.type";
import { useRouter } from "next/navigation";
import usePagination from "@/hooks/pagination/usePagination";

export const Pagination = ({
  totalItemCount,
  itemCountPerPage,
  pageCount,
  currentPage,
}: IPaginationProps) => {
  const router = useRouter();

  const { start, totalPages, noPrev, noNext, visiblePages } = usePagination({
    totalItemCount,
    itemCountPerPage,
    pageCount,
    currentPage,
  });

  const movePage = (page: number) => {
    if (page === currentPage) return;
    router.push(`?page=${page}`);
  };

  return (
    <div className="flex gap-1 justify-center items-center">
      <button
        className={paginationVariants({ firstLastButton: true, disabled: currentPage === 1 })}
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

      {visiblePages.map((page) => (
        <button
          key={page}
          className={paginationVariants({
            variant: page === currentPage ? "selected" : "default",
          })}
          onClick={() => movePage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={paginationVariants({ disabled: noNext })}
        onClick={() => movePage(start + pageCount)}
      >
        <Icon name="chevronRight" className="h-4" />
      </button>
      <button
        className={paginationVariants({
          firstLastButton: true,
          disabled: currentPage === totalPages,
        })}
        onClick={() => movePage(totalPages)}
      >
        <Icon name="chevronRight" className="h-4 absolute top-1/2 right-1/3 -translate-y-1/2" />
        <Icon name="chevronRight" className="h-4 absolute top-1/2 left-1/3 -translate-y-1/2" />
      </button>
    </div>
  );
};
