import { useState } from 'react';
import fetchImages from '../api.js';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import Particle from './components/Particle/Particl.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [query, setQuery] = useState(''); 
  const [page, setPage] = useState(1); 
  const perPage = 12; 
  
  const handleSearchSubmit = async (query) => {
    setLoading(true);
    try {
      const fetchedImages = await fetchImages(query, 1, perPage);
      setImages(fetchedImages);
      setPage(1);
      setQuery(query); 
      setError(null);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const nextPageImages = await fetchImages(query, page + 1, perPage); 
      setImages([...images, ...nextPageImages]); 
      setPage(page + 1); 
      setError(null);
    } catch (error) {
      console.error('Error fetching more images:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false); 
  };

  return (
    <>
      <Particle />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage error={error} />}
      {!error && images.length > 0 && <ImageGallery images={images} onClick={handleImageClick}/>}
      {loading && <Loader />}
      
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      
    </>
  );
}
