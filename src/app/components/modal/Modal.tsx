import { ModalType } from "./modal.type";
import { modalVariants } from "./modal.variants";

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  buttons = [],
  showCloseButton,
  size = "default",
  buttonLocation = "center",
  className = "",
}: ModalType) => {
  const {
    bg,
    container,
    closeButton,
    title: titleStyle,
    buttons: buttonsStyle,
    button,
  } = modalVariants({ size, buttonLocation });
  if (!isOpen) return null;

  return (
    <div className={bg()}>
      <div className={`${container({ className })}`}>
        {showCloseButton && (
          <button className={closeButton()} onClick={onClose}>
            x
          </button>
        )}
        {title && <h2 className={titleStyle()}>{title}</h2>}
        {children}
        {buttons?.length > 0 ? (
          <div className={buttonLocation}>
            <div className={buttonsStyle()}>
              {buttons?.length > 1 ? (
                buttons?.map((button, idx) => <div key={idx}>{button}</div>)
              ) : (
                <div className={button()}>{buttons}</div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
