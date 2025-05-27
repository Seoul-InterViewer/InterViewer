import React from "react";
import Link from "next/link";

import { mobileMenuVariants, menuItemVariants } from "./mobileMenu.variants";

const { content } = mobileMenuVariants();

import { Icon } from "../icon/Icon";

// 타인 콘텐츠용 메뉴 컴포넌트
const OtherContentMenu = () => (
  <div className={content()}>
    <Link href="#reply" className={menuItemVariants()}>
      <Icon name="reply" className="w-5 h-5" />
      <span>답글달기</span>
    </Link>
    <Link href="#report" className={menuItemVariants({ type: "danger" })}>
      <Icon name="report" className="w-5 h-5" />
      <span>신고하기</span>
    </Link>
  </div>
);

export default OtherContentMenu;
