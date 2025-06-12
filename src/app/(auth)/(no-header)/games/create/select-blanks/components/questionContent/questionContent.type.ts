export interface IWordProps {
  word: string;
  index: number;
  isSelected: boolean;
  inputValue: string;
  onWordClick: (word: string, index: number) => void;
}
