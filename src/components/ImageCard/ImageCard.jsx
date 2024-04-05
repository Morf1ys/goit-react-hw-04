import css from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className={css['image-card']}>
      <img src={image.urls.small} alt={image.alt_description} />
      {/* Додайте будь-яку іншу інформацію про зображення, яку ви хочете відобразити */}
    </div>
  );
};

export default ImageCard;
