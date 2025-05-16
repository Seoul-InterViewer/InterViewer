"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IBreadCrumbProps, { IBreadCrumbItem } from "./breadCrumb.type";
import breadCrumbVariants, { breadCrumbItemVariants } from "./breadCrumb.variants";

// 텍스트 길이 제한 함수
const truncateText = (text: string, maxLength: number = 8) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

const ArrowIcon = ({ color = "#9CA3AF" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const BreadCrumb = ({
  items = [],
  separator = <ArrowIcon />,
  className = "",
  autoGenerate = false,
  maxTextLength = 8, // 최대 텍스트 길이
  activeColor = "#111111", // 활성 아이콘 색상
}: IBreadCrumbProps & {
  autoGenerate?: boolean;
  maxTextLength?: number;
  activeColor?: string;
}) => {
  const pathname = usePathname();

  // 자동 생성 옵션이 활성화된 경우 경로에서 항목 생성
  let breadcrumbItems = items;
  if (autoGenerate) {
    const pathSegments = pathname.split("/").filter(Boolean);

    // 한글 경로에 대한 매핑 테이블 (필요에 따라 확장)
    const pathMapping: Record<string, string> = {
      소개: "소개",
      서비스: "서비스",
      연락처: "연락처",
      // 필요한 경로 매핑 추가
    };

    breadcrumbItems = pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

      // URL 디코딩 후 매핑 테이블에서 레이블 찾기
      const decodedSegment = decodeURIComponent(segment);
      const label =
        pathMapping[decodedSegment] ||
        decodedSegment.charAt(0).toUpperCase() + decodedSegment.slice(1).replace(/-/g, " ");

      // 게시물 경로 처리 (예: "123-useCallback이-뭔가요")
      if (decodedSegment.match(/^\d+-/)) {
        // ID와 제목 분리
        const id = decodedSegment.match(/^(\d+)-/)?.[1] || "";
        const title = decodedSegment.replace(/^\d+-/, "").replace(/-/g, " ");

        return {
          label: truncateText(title, maxTextLength),
          href,
          isCurrentPage: index === pathSegments.length - 1,
          fullLabel: title, // 툴팁이나 타이틀 속성에 사용 가능
        };
      }

      // 일반 경로 처리
      let processedLabel = label;

      // 경로에 따른 특별 처리
      if (decodedSegment === "posts") processedLabel = "게시판";
      else if (decodedSegment === "qna") processedLabel = "질문게시판";
      else
        processedLabel =
          decodedSegment.charAt(0).toUpperCase() + decodedSegment.slice(1).replace(/-/g, " ");

      return {
        label: truncateText(processedLabel, maxTextLength),
        href,
        isCurrentPage: index === pathSegments.length - 1,
      };
    });

    // 홈 항목 추가
    breadcrumbItems.unshift({
      label: truncateText("홈", maxTextLength),
      href: "/",
      isCurrentPage: false,
    });
  }

  // 현재 경로에 맞게 항목에 현재 페이지 표시
  const processedItems = breadcrumbItems.map((item) => ({
    ...item,
    isCurrentPage:
      item.isCurrentPage || decodeURIComponent(item.href) === decodeURIComponent(pathname),
  }));

  return (
    <nav aria-label="Breadcrumb" className={breadCrumbVariants({ className })}>
      <ol className="flex items-center space-x-1">
        {processedItems.map((item, index) => {
          // 현재 항목이 현재 페이지인지 확인
          const isCurrentPage = item.isCurrentPage;

          return (
            <li key={item.href} className="flex items-center text-regular-24">
              {index > 0 && (
                <span className="mx-2">
                  {/* 현재 페이지로 가는 구분자인 경우 활성 색상 적용 */}
                  {isCurrentPage ? <ArrowIcon color={activeColor} /> : separator}
                </span>
              )}

              {isCurrentPage ? (
                <span
                  className={breadCrumbItemVariants({ state: "current" })}
                  title={item.fullLabel || item.label}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={breadCrumbItemVariants({ state: "default" })}
                  title={item.fullLabel || item.label}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
