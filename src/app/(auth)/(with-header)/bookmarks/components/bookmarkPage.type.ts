import { IconName } from "@/app/components/icon";

export interface ITagsProps {
  tagId: string;
  tagName: string;
}

export interface IquestionsProps {
  questionId: string;
  tags: ITagsProps[];
}

export interface IBookmarksProps {
  id: string;
  name: string;
  createdAt: string;
  questions?: IquestionsProps[];
}

export interface ITagIconsProps {
  tagIcons: IconName[];
}
