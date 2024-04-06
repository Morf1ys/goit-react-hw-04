import Modal from 'react-modal';
import css from './ImageModal.module.css'
const ImageModal = ({ isOpen, image, onRequestClose }) => {
  const { urls, alt_description } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css['image-modal']}
      overlayClassName={css['overlay']}
    >
      <img src={urls.regular} alt={alt_description} />
    </Modal>
  );
};

export default ImageModal;
