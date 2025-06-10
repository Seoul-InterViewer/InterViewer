import { Button, buttonVariants } from "@/app/components/button";
import { Icon, IconName } from "@/app/components/icon";
import React from "react";
import SOCIAL_LOGINS from "../../login/constants/socialLogins";
import { ISNSFormProps } from "./snsForm.type";

export const SNSForm = ({type}: ISNSFormProps) => {



  return (
    <form>
      <div className="flex flex-col gap-8 pt-5">
        <strong className="font-sb-24 text-font-gray">{type === "login" ? "소셜 계정으로 로그인" : "소셜 계정으로 간편가입하기"}</strong>
        <ul className="flex gap-10">
          {SOCIAL_LOGINS.map((social) => (
            <li key={social.name}>
              <Button
                type="submit"
                className={buttonVariants({ class: "flex gap-2 items-center" })}
              >
                <Icon name={social.name as IconName} />
                <span>{social.label}</span>
                <input type="hidden" name="social" value={social.name} />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

