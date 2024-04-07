import css from './ImageCard.module.css';





const ImageCard = ({ image, onClick }) => {
  const { urls, alt_description } = image;

  return (
    <div className={css['image-card']}>
      <img src={urls.regular} alt={alt_description} onClick={onClick}/>
    </div>
  );
};

export default ImageCard;
