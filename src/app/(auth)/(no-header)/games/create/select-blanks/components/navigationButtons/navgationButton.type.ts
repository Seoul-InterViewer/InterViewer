export interface INavigationButtonsProps {
  currentIndex: number;
  totalQuestions: number;
  onPrev: () => void;
  onNext: () => void;
  onComplete: () => void;
}
