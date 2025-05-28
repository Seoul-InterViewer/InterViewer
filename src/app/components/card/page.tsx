"use client";
import { Card } from "./Card";

export default function CardPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col gap-20 w-full pl-4 pr-4  md:w-pc mx-auto">
        card components
        <Card type="mainCard">
          <div className="w-full h-full border border-gray-200">mainCard</div>
        </Card>
        <Card type="favoriteCard">
          <div className="w-full h-full border border-gray-200">favoriteCard</div>
        </Card>
        <Card type="editCard">
          <div className="w-full h-full border border-gray-200">editCard</div>
        </Card>
        <Card type="detailCard">
          <div className="w-full h-full border border-gray-200">detailCard</div>
        </Card>
        <Card type="checkCard">
          <div className="w-full h-full border border-gray-200">checkCard</div>
        </Card>
      </div>
    </div>
  );
}
