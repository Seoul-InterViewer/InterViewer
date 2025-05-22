import React from "react";
import Link from "next/link";
import { menuItemVariants, contentVariants } from "./mobile.menu.variants";
import { Icon } from "../icon/Icon";

// 타인 콘텐츠용 메뉴 컴포넌트
const MyContentMenu = () => (
  <div className={contentVariants()}>
    <Link href="#reply" className={menuItemVariants()}>
      <Icon name="edit" className="w-[20px] h-[20px]" />
      <span>수정하기</span>
    </Link>
    <Link href="#report" className={menuItemVariants({ type: "danger" })}>
      <Icon name="trash" className="w-[20px] h-[20px]" strokeWidth={2.6} />
      <span>삭제하기</span>
    </Link>
  </div>
);

export default MyContentMenu;
