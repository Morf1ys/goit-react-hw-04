import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard.jsx';


const ImageGallery = ({ images, onClick }) => {
  console.log(images)
  return (
    <ul className={css['image-gallery']}>
      {images.map(image => (
        <li className={css.liphoto} key={image.id}>
          <ImageCard image={image}
            onClick={() => onClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
