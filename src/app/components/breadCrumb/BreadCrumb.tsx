"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IBreadCrumbProps, IBreadCrumbItem } from "./breadCrumb.type";
import breadCrumbVariants, { breadCrumbItemVariants } from "./breadCrumb.variants";
import { Icon } from "@/app/components/icon";

// 텍스트 길이 제한 함수
const truncateText = (text: string, maxLength: number = 8) =>
  text.length <= maxLength ? text : text.substring(0, maxLength) + "...";

export const BreadCrumb: React.FC<
  IBreadCrumbProps & {
    autoGenerate?: boolean;
    maxTextLength?: number;
    activeColor?: string;
  }
> = ({
  items = [],
  separator = <Icon name="chevronRight" className="w-2 h-4 md:w-2 md:h-4" />,
  className = "",
  autoGenerate = false,
  maxTextLength = 12,
  activeColor = `var(--color-font)`,
}) => {
  const pathname = usePathname();

  // 1) items 기본 설정
  let breadcrumbItems: IBreadCrumbItem[] = items;

  // 2) autoGenerate 모드면 URL 경로로부터 아이템 생성
  if (autoGenerate) {
    const pathSegments = pathname.split("/").filter(Boolean);

    // 제외할 민감 segment 리스트 및 정규식
    const SENSITIVE_SEGMENTS = ["user", "userId", "setting", "token"];
    const SENSITIVE_REGEX = /^[0-9a-fA-F\-]{8,}$|^\d{8,}$/; // 긴 숫자/UUID 등

    breadcrumbItems = pathSegments
      .filter((segment) => !SENSITIVE_SEGMENTS.includes(segment) && !SENSITIVE_REGEX.test(segment))
      .map((segment, index, filteredSegments) => {
        const href = "/" + filteredSegments.slice(0, index + 1).join("/");
        const decoded = decodeURIComponent(segment);

        // 기본 라벨: 첫 글자 대문자, 하이픈은 공백으로
        const baseLabel = decoded.charAt(0).toUpperCase() + decoded.slice(1).replace(/-/g, " ");

        // posts/qna 특별 처리
        let processedLabel = baseLabel;
        if (decoded === "posts") processedLabel = "게시판";
        else if (decoded === "qna") processedLabel = "질문게시판";

        // "123-제목-형태" 경로 처리
        if (/^\d+-/.test(decoded)) {
          const title = decoded.replace(/^\d+-/, "").replace(/-/g, " ");
          return {
            label: truncateText(title, maxTextLength),
            href,
            isCurrentPage: index === filteredSegments.length - 1,
            fullLabel: title,
          };
        }

        return {
          label: truncateText(processedLabel, maxTextLength),
          href,
          isCurrentPage: index === filteredSegments.length - 1,
        };
      });

    // 맨 앞에 Home 추가
    breadcrumbItems.unshift({
      label: truncateText("Home", maxTextLength),
      href: "/",
      isCurrentPage: false,
    });
  }

  // 3) items 중 현재 페이지 표시 보정
  const processedItems = breadcrumbItems.map((item) => ({
    ...item,
    isCurrentPage:
      item.isCurrentPage || decodeURIComponent(item.href) === decodeURIComponent(pathname),
  }));

  // 4) 렌더링
  // Check if any item's href starts with '/user'
  const isUserPath = processedItems.some((item) => item.href.startsWith("/user"));
  const visibleItems =
    isUserPath && processedItems.length > 1
      ? [processedItems[0], processedItems[processedItems.length - 1]]
      : processedItems;

  return (
    <nav aria-label="Breadcrumb" className={breadCrumbVariants({ className })}>
      <ol className="flex flex-wrap items-center gap-1">
        {visibleItems.map((item, idx) => {
          const isCurrent = item.isCurrentPage;
          const showSeparator =
            idx > 0 && (!isUserPath || (isUserPath && idx === visibleItems.length - 1));

          return (
            <React.Fragment key={item.href + idx}>
              {showSeparator && (
                <span className="mx-2">
                  {isCurrent ? (
                    <Icon
                      name="chevronRight"
                      className="w-2 h-4 md:w-2 md:h-4"
                      stroke={activeColor}
                      strokeWidth={3}
                    />
                  ) : (
                    separator
                  )}
                </span>
              )}
              {isCurrent ? (
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
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
