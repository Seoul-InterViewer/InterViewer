"use client";

import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import useModal from "@/hooks/modal/useModal";
import { bookmarkData } from "../../mocks/bookmarksPage.mock";
import { EditBookmarkModal } from "./EditBookmarkModal";

export const EditButton = () => {
  const editBookmarkModalProps = useModal();

  const editBookmarkDatas = bookmarkData.map((data) => ({
    text: data.name,
    value: data.id,
    count: data.questions?.length ?? 0,
  }));

  return (
    <div>
      <Button
        type="button"
        className={buttonVariants({ size: "md", color: "white", hover: true })}
        onClick={editBookmarkModalProps.open}
      >
        <span className="flex items-center gap-0.5">
          <Icon name="plus" width={8} height={8} fill="var(--color-font)" />
          편집
        </span>
      </Button>

      {/* 북마크 편집 모달 */}
      <EditBookmarkModal
        datas={editBookmarkDatas}
        checkName="bookmark"
        props={editBookmarkModalProps}
      />
    </div>
  );
};
