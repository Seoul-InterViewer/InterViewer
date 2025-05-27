"use client";
import { useResponsiveSize } from "@/hooks/card/useResponsiveSize";
import { Card } from "./Card";
import {
  mainCardData,
  editCardData,
  detailCardData,
  checkCardData,
  favoriteCardData,
} from "./constants";

export default function CardPage() {
  // 178 컴포넌트와 165컴포넌트 두 개 렌더링
  const size = useResponsiveSize("165");

  return (
    <div className="flex flex-col gap-20 ml-4 mr-4 md:ml-8 md:mr-8 mt-8">
      <div className="flex flex-col gap-4">
        <h1>mainCard가 렌더링 됩니다.</h1>
        <div className="flex flex-row gap-4">
          {mainCardData.map((item) => (
            <Card key={item.contentId} type="mainCard" data={[item]} size={size} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1>editCard가 렌더링 됩니다.</h1>
        {editCardData.map((item) => (
          <Card key={item.contentId} type="editCard" data={[item]} />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h1>detailCard가 렌더링 됩니다.</h1>
        {detailCardData.map((item) => (
          <Card key={item.contentId} type="detailCard" data={[item]} />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h1>checkCard가 렌더링 됩니다.</h1>
        {checkCardData.map((item) => (
          <Card key={item.contentId} type="checkCard" data={[item]} />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h1>favoriteCard가 렌더링 됩니다.</h1>
        <div className="flex flex-row gap-4">
          {favoriteCardData.map((item) => (
            <Card key={item.contentId} type="favoriteCard" data={[item]} />
          ))}
        </div>
      </div>
    </div>
  );
}
