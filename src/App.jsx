import { useState } from 'react';
import fetchImages from '../api.js';
import './index.module.css';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';

export default function App() {
  const [images, setImages] = useState([]);

  
  const handleSearchSubmit = async (query) => {
    try {
     
      const fetchedImages = await fetchImages(query);
      
      setImages(fetchedImages);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <>
      
      <SearchBar onSubmit={handleSearchSubmit} />
      
      <ImageGallery images={images} />
    </>
  );
}
