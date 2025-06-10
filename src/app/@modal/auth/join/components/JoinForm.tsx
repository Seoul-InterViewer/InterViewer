import React from "react";
import { Input } from "@/app/components/input";

const JoinForm = () => {
  return (
    <form>
      <Input type="text" placeholder="이메일" />
      <Input type="text" placeholder="닉네임" />
      <Input type="password" placeholder="비밀번호" />
      <Input type="password" placeholder="비밀번호 확인" />
    </form>
  );
};

export default JoinForm;
