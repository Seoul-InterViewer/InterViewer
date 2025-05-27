import React from "react";
import Link from "next/link";

import { Icon } from "../icon/Icon";
import { mobileMenuVariants } from "./mobileMenu.variants";

const { content, menuItem } = mobileMenuVariants();

// 타인 콘텐츠용 메뉴 컴포넌트
const MyContentMenu = () => (
  <div className={content()}>
    <Link href="#reply" className={menuItem()}>
      <Icon name="edit" className="w-5 h-5" />
      <span>수정하기</span>
    </Link>
    <Link href="#report" className={mobileMenuVariants({ type: "danger" }).menuItem()}>
      <Icon name="trash" className="w-5 h-5" strokeWidth={2.6} />
      <span>삭제하기</span>
    </Link>
    <Link href="#reply" className={menuItem()}>
      <Icon name="edit" className="w-5 h-5" />
      <span>수정하기</span>
    </Link>
  </div>
);

export default MyContentMenu;
