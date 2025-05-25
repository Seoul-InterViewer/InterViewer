import { IQuestion, TitleType } from "./title.type";

export const UserBox = ({ questions, type }: { questions: IQuestion; type: TitleType }) => {
  return (
    <>
      {type !== "setting" ? (
        type === "detail" ? (
          <div className="flex justify-between items-center gap-1.5">
            <span>{questions.userID}</span>
            <span>{questions.createdAt}</span>
          </div>
        ) : (
          <div>
            <span>{questions.updatedAt}</span>
          </div>
        )
      ) : null}
    </>
  );
};
