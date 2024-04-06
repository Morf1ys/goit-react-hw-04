import PropTypes from 'prop-types';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore, disabled }) => {
  return (
    <button className={css.btn} onClick={onLoadMore} disabled={disabled}>
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default LoadMoreBtn;
