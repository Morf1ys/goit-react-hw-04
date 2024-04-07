import Modal from "react-modal";
import css from './ImageModal.module.css'

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ image, isOpen, onRequestClose }) => {
 
  if (!image) return null;
  
  const { urls, alt_description } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className={css['cont-modal-img']}>
        <img src={urls.regular} alt={alt_description} className={css.img} />
        </div>
    </Modal>
  );
};

export default ImageModal;
