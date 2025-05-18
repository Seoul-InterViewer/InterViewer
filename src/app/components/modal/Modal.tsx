import { ModalType } from "./modal.type";
import { modalVariants } from "./modal.variants";

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  buttons,
  showCloseButton,
  className,
}: ModalType) => {
  const { bg, container, closeButton, title: titleStyle } = modalVariants();
  if (!isOpen) return null;

  return (
    <div className={bg()}>
      <div className={`${container()} ${className}`}>
        {showCloseButton && <button />}
        {title && <h2 className={titleStyle()}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};
