"use client";

import { Button, buttonVariants } from "../button";
import { Icon, IconName } from "../icon";
import { ITitleProps } from "./title.type";

export const IconBox = ({ type }: Pick<ITitleProps, "type">) => {
  const iconList = ["heart", "report", "share", "bookmark"];

  const handleClick = () => {
    console.log("clicked");
  };

  const iconRendor = () => {
    if (type === "detail") {
      return iconList.map((icon) => {
        if (icon === "report" || icon === "share") {
          return (
            <Button
              key={icon}
              type="button"
              className={buttonVariants({ icon: true })}
              onClick={handleClick}
            >
              <Icon name={icon as IconName} className="md:w-9 md:h-9 w-4.5 h-4.5" />
            </Button>
          );
        }
        return (
          <Button key={icon} type="button" className={buttonVariants({ icon: true })}>
            <Icon name={icon as IconName} className="md:w-9 md:h-9 w-4.5 h-4.5" />
          </Button>
        );
      });
    } else if (type === "note") {
      return (
        <Button type="button" className={buttonVariants({ icon: true })} onClick={handleClick}>
          <Icon name={"trash"} className="md:w-9 md:h-9 w-4.5 h-4.5" />
        </Button>
      );
    }
    return null;
  };

  return <div>{iconRendor()}</div>;
};
