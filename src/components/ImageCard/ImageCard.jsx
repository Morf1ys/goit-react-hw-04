import css from './ImageCard.module.css';





const ImageCard = ({ image }) => {
  const { urls, alt_description } = image;

  return (
    <div className={css['image-card']}>
      <img src={urls.regular} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
