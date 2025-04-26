import Modal from 'react-modal';
import { UnsplashImage } from '../../types/index';
import css from './ImageModal.module.css';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    image: UnsplashImage;
}

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }: Props) {
    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
    >
        <img
        className={css.image}
        src={image.urls.regular}
        alt={image.alt_description}
        />
    </Modal>
    );
}