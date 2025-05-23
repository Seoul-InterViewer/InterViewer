export const Title = () => {
  return (
    <div>
      <div className="title-top">Breadcrumb</div>
      <div className="title-center">
        <h1>Title</h1>
        <div>
          <span>PlayCount</span>
          <span>Ranking</span>
        </div>
      </div>
      <div className="title-bottom">
        <div className="title-bottom-left">
          <span>SkillStack</span>
          <span>Level</span>
          <span>Category</span>
        </div>
        <div className="title-bottom-right">
          <div className="icon-container">
            <span>Heart</span>
            <span>Alarm</span>
            <span>Share</span>
            <span>Bookmark</span>
          </div>
        </div>
      </div>
    </div>
  );
};
