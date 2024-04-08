import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.loadMoreBtnContainer}>
      <button className={css.loadMoreBtn} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
