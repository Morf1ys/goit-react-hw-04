import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import { ColorRing } from 'react-loader-spinner';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error('Please enter a search query');
    }

    setLoading(true);

    try {
      await onSubmit(query);
      setQuery('');
    } catch (error) {
      toast.error('Failed to fetch images. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css['search-container']}>
      <header className={css['head-cont']}>
        <form onSubmit={handleSubmit}>
          <input
            className={css.inp}
            type="text"
            value={query}
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit" disabled={loading}>
            <FaSearch size={15} />
          </button>
        </form>
      </header>
      {loading && (
        <div className={css['loader-container']}>
          <ColorRing 
        visible={true}
        height="180"
        width="180"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
