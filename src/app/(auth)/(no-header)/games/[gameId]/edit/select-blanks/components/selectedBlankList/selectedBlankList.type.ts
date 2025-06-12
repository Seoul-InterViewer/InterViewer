export interface ISelectedBlankListProps {
  selectedBlanks: { word: string; index: number }[];
  selectedValues: { [key: number]: string };
}