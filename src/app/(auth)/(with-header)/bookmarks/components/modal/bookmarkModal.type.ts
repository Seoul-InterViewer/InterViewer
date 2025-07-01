export interface IUseeModalProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export interface IEditBookmarkDataProps {
  text: string;
  value: string;
  count: number;
}

export interface IEditBookmarkModalProps {
  datas: IEditBookmarkDataProps[];
  checkName: string;
  props: IUseeModalProps;
}

export interface INewBookmarkModalProps {
  props: IUseeModalProps;
}

export interface IRemoveBookmarkModalProps {
  props: IUseeModalProps;
  onConfirm: () => void;
}
