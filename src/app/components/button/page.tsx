"use client";
import React from "react";
import { Button } from "./Button";

const page = () => {
  return (
    <div className="flex-center ">
      <Button text="이전으로" type="blackBtn" hover={true} />
      <Button text="다음으로" type="yellowBtn" hover={true} mobile="normalSize" />
      <Button text="버튼" type="grayBtn" hover={true} />
      <Button text="버튼" type="lightGrayBtn" hover={true} />
      <Button text="버튼" type="redBtn" hover={true} />
      <Button text="버튼" type="deleteBtn" hover={true} />
      <Button text="버튼" type="editBtn" hover={true} />
      <Button text="버튼" type="fillterWhiteBtn" hover={true} />
      <Button text="버튼" type="fillterBlackBtn" hover={true} />
      <Button text="버튼" type="writeBtn" hover={true} />
    </div>
  );
};

export default page;
