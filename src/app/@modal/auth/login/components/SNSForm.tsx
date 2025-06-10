import { Button, buttonVariants } from "@/app/components/button";
import { Icon, IconName } from "@/app/components/icon";
import React, { useActionState } from "react";
import SOCIAL_LOGINS from "../constants/socialLogins";

const SNSForm = () => {

  return (
    <form>
      <div className="flex flex-col gap-8 pt-5">
        <strong className="font-sb-24 text-font-gray">소셜 계정으로 로그인</strong>
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

export default SNSForm;
