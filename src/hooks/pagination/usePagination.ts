import { IPaginationProps } from "@/app/components/pagination";
import { useState, useEffect } from "react";

const usePagination = ({
  totalItemCount,
  itemCountPerPage,
  pageCount,
  currentPage,
}: IPaginationProps) => {
  const [start, setStart] = useState(1);
  const totalPages = Math.ceil(totalItemCount / itemCountPerPage);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  useEffect(() => {
    if (currentPage >= start + pageCount) {
      setStart((prev) => prev + pageCount);
    } else if (currentPage < start) {
      setStart((prev) => prev - pageCount);
    }
  }, [currentPage, pageCount, start]);

  const visiblePages = [...Array(pageCount)]
    .map((_, i) => {
      const page = start + i;
      return page <= totalPages ? page : null;
    })
    .filter((num) => num !== null);

  return { start, totalPages, noPrev, noNext, visiblePages };
};

export default usePagination;
