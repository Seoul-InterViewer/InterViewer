import { IQuestion, ITitleProps } from "./title.type";

export const UserBox = ({ type, questions }: Pick<ITitleProps, "type"> & { questions: IQuestion }) => {
  return (
    <>
      {type !== "setting" ? (
        type === "detail" ? (
          <div>
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
