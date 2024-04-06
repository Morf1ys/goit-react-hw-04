import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard.jsx';


const ImageGallery = ({ images }) => {
  console.log(images)
  return (
    <ul className={css['image-gallery']}>
      {images.map(image => (
        <li className={css.liphoto} key={image.id}>
          <ImageCard  image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
