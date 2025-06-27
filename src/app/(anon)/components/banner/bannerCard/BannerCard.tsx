import React, { useState } from "react";
import { Icon } from "@/app/components/icon/Icon";
import { IBannerCardData } from "./bannerCard.type";
import { bannerCardVariants } from "./bannerCard.variants";
import { useViewport } from "@/hooks/useViewport";

export const BannerCard = ({
  iconName,
  title,
  description,
  backTitle,
  backDescription,
}: IBannerCardData) => {
  const { isMobile } = useViewport();
  return (
    <li
      data-title={backTitle}
      data-desc={backDescription}
      // 너무 클래스가 길어지면 Variants로 리펙토링 하는게 좋을 것 같아서..
      className={bannerCardVariants()}
    >
      <div className="flex flex-col gap-2 md:gap-6">
        <Icon name={iconName} width={isMobile ? 26 : 50} height={isMobile ? 26 : 50} />
        <strong className="font-sb-16 md:font-sb-24 break-keep">{title}</strong>
        <p className="font-medium-10 md:font-regular-18 break-keep text-sub-text">{description}</p>
      </div>
    </li>
  );
};
