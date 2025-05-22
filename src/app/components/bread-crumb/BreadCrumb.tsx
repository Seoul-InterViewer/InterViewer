"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IBreadCrumbProps, { IBreadCrumbItem } from "./breadCrumb.type";
import breadCrumbVariants, { breadCrumbItemVariants } from "./breadCrumb.variants";
import { Icon } from "@/app/components/icon";

// 텍스트 길이 제한 함수
const truncateText = (text: string, maxLength: number = 8) =>
  text.length <= maxLength ? text : text.substring(0, maxLength) + "...";

const BreadCrumb: React.FC<
  IBreadCrumbProps & {
    autoGenerate?: boolean;
    maxTextLength?: number;
    activeColor?: string;
  }
> = ({
  items = [],
  separator = <Icon name="chevronRight" className="w-[8px] h-[16px] md:w-[12px] md:h-[24px]" />,
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

    breadcrumbItems = pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
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
          isCurrentPage: index === pathSegments.length - 1,
          fullLabel: title,
        };
      }

      return {
        label: truncateText(processedLabel, maxTextLength),
        href,
        isCurrentPage: index === pathSegments.length - 1,
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
  return (
    <nav aria-label="Breadcrumb" className={breadCrumbVariants({ className })}>
      <ol className="flex flex-wrap items-center gap-1 lg:gap-2">
        {processedItems.map((item, idx) => {
          const isCurrent = item.isCurrentPage;
          return (
            <li key={item.href + idx} className="flex items-center">
              {idx > 0 && (
                <span className="mr-2">
                  {isCurrent ? (
                    <Icon
                      name="chevronRight"
                      className="w-2 h-4 md:w-3 md:h-6"
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
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
