export interface IWordProps {
  word: string;
  index: number;
  isSelected: boolean;
  selectedValues: string;
  onWordClick: (word: string, index: number) => void;
}
