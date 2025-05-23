import { Button, buttonVariants } from "../button";
import { Icon, IconName } from "../icon";

export const IconBox = ({ isDetailPage = false }: { isDetailPage?: boolean }) => {
  const iconList = ["heart", "alarm", "share", "bookmark"];

  const handleClick = () => {
    console.log("clicked");
  };

  const iconRendor = () => {
    if (!isDetailPage) {
      return (
        <Button type="button" className={buttonVariants({ icon: true })} onClick={handleClick}>
          <Icon name={"trash"} className="md:w-9 md:h-9 w-4.5 h-4.5" />
        </Button>
      );
    } else {
      return iconList.map((icon) => {
        if (icon === "report" || icon === "share") {
          return (
            <Button type="button" className={buttonVariants({ icon: true })} onClick={handleClick}>
              <Icon name={icon as IconName} className="md:w-9 md:h-9 w-4.5 h-4.5" />
            </Button>
          );
        }
        <Button type="button" className={buttonVariants({ icon: true })}>
          <Icon name={icon as IconName} className="md:w-9 md:h-9 w-4.5 h-4.5" />
        </Button>;
      });
    }
  };

  return <div>{iconRendor()}</div>;
};
