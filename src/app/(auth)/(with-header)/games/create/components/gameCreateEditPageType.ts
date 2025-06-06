export interface IGameCreateListItemProps {
    question: {
      id: string;
      title: string;
      difficulty: string;
    };
    isSelected: boolean;
    onCheckboxChange: (id: string) => void;
  }