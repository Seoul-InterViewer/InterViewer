import { IconName } from "@/app/components/icon";

export interface ITagsProps {
  tagId: string;
  tagName: string;
}

export interface IQuestionsProps {
  questionId: string;
  tags: ITagsProps[];
}

export interface IBookmarksProps {
  id: string;
  name: string;
  createdAt: string;
  questions?: IQuestionsProps[];
}

export interface ITagIconsProps {
  tagIcons: IconName[];
}
