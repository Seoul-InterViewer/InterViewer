import React, { useState } from "react";
import { Icon } from "@/app/components/icon/Icon";
import { IBannerCardData } from "./bannerCard.type";

export const BannerCard = ({
  iconName,
  title,
  description,
  backTitle,
  backDescription,
}: IBannerCardData) => {
  return (
    <li
      data-title={backTitle}
      data-desc={backDescription}
      className="p-10 w-85 aspect-square bg-white rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative
      before:content-[attr(data-title)]
      before:absolute
      before:bottom-0
      before:left-0
      before:overflow-hidden
      before:w-full
      before:h-0
      before:duration-300
      before:ease-in-out
      before:z-10
      before:bg-main
      before:text-white
      before:p-0
      before:font-bold-32
      before:rounded-lg
      before:transition-all
      hover:before:h-full
      hover:before:p-10
      "
    >
      <div className="flex flex-col gap-6">
        <Icon name={iconName} />
        <strong className="font-sb-24 break-keep">{title}</strong>
        <p className="font-regular-20 break-keep text-sub-text">{description}</p>
      </div>
    </li>
  );
};
