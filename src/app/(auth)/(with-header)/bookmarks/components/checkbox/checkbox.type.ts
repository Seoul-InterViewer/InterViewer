export interface ICheckDataProps {
  checkName: string;
  text: string;
  value: string;
  count: number;
  firstPathname: string;
  removeBookmarkOpen?: () => void;
}
