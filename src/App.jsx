// App.jsx
import { useState } from 'react';
import fetchImages from '../api.js';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import ParticleBackground from './components/ParticleBackground/ParticleBackground.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchSubmit = async (query) => {
    setLoading(true);
    try {
      const fetchedImages = await fetchImages(query);
      setImages(fetchedImages);
      setError(null);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage error={error} />}
      {!error && !loading && <ImageGallery images={images} />}
      {loading && <Loader />}
      <ParticleBackground />
    </>
  );
}
