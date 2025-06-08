import { questionTags, tags } from "../mocks/gameCreateData";

export default function getTagsForQuestion(questionID: string) {
  return questionTags
    .filter((qt) => qt.questionID === questionID)
    .map((qt) => tags.find((tag) => tag.id === qt.tagID)?.name)
    .filter(Boolean);
}
