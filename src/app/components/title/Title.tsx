import { IconBox } from "./IconBox";

export const Title = ({
  isSetting,
  isMyQuestion,
  isDetailPage,
}: {
  isSetting: boolean;
  isMyQuestion: boolean;
  isDetailPage: boolean;
}) => {
  return (
    <div>
      <div className="title-top">Breadcrumb</div>
      <div className="title-center">
        <h1>Title</h1>
        <div>
          <span>PlayCount</span>
          {isSetting && (
            <div className="setting-box">
              <div>
                <span>게임 플레이 횟수</span>
                <span>playCount</span>
              </div>
              <div>
                <span>랭킹</span>
                <span>#ranking</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="title-bottom">
        <div className="title-bottom-left">
          <div className="left-top">
            <span>SkillStack</span>
            <span>Level</span>
            <span>Category</span>
          </div>
          <div className="left-bottom">
            <p>latest update date</p>
          </div>
        </div>
        <div className="title-bottom-left">
          {!isSetting ? (
            isDetailPage ? (
              <div>
                <span>userId</span>
                <span>postingDate</span>
              </div>
            ) : (
              <div>
                <span>postingDate</span>
              </div>
            )
          ) : null}
        </div>
        <div className="title-bottom-right">{isMyQuestion && <IconBox isDetailPage={false} />}</div>
      </div>
      <hr />
    </div>
  );
};
