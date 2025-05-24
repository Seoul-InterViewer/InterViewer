"use client";

import { useState } from "react";
import { Icon } from "../icon";
import { paginationVariants } from "./pagination.variants";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex gap-1 justify-center items-center">
      <span className={paginationVariants({ firstLastButton: true })}>
        <Icon name="chevronLeft" className="h-4 absolute top-1/2 right-1/3 -translate-y-1/2" />
        <Icon name="chevronLeft" className="h-4 absolute top-1/2 left-1/3 -translate-y-1/2" />
      </span>
      <span className={paginationVariants()}>
        <Icon name="chevronLeft" className="h-4" />
      </span>

      <span className={paginationVariants({ variant: 1 === currentPage ? "selected" : "default" })}>
        1
      </span>
      <span
        className={paginationVariants({ variant: 10 === currentPage ? "selected" : "default" })}
      >
        10
      </span>

      <span className={paginationVariants()}>
        <Icon name="chevronRight" className="h-4" />
      </span>
      <span className={paginationVariants({ firstLastButton: true })}>
        <Icon name="chevronRight" className="h-4 absolute top-1/2 right-1/3 -translate-y-1/2" />
        <Icon name="chevronRight" className="h-4 absolute top-1/2 left-1/3 -translate-y-1/2" />
      </span>
    </div>
  );
};
