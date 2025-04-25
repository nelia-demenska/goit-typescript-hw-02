import ImageCard from "./ImageCard.jsx";
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
    return (
    <ul className={css.gallery}>
        {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
        ))}
    </ul>
    );
}