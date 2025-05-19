import { ModalType } from "./modal.type";
import { modalVariants } from "./modal.variants";

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  buttons = [],
  showCloseButton,
  className = modalVariants(),
}: ModalType) => {
  if (!isOpen) return null;

  return (
    <div className={className}>
      <div className={className}>
        {showCloseButton && <button onClick={onClose} />}
        {title && <h2 className={className}>{title}</h2>}
        {children}
        {buttons?.length > 0 ? (
          buttons?.length > 1 ? (
            buttons?.map((button, idx) => (
              <div key={idx} className={className}>
                {button}
              </div>
            ))
          ) : (
            <div className={className}>{buttons}</div>
          )
        ) : null}
      </div>
    </div>
  );
};
