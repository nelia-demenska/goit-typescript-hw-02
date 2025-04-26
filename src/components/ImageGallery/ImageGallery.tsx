import { UnsplashImage } from '../../types/index';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface Props {
    images: UnsplashImage[];
    onImageClick: (image: UnsplashImage) => void;
}

export default function ImageGallery({ images, onImageClick }: Props) {
    return (
    <ul className={css.gallery}>
        {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={onImageClick} />
        ))}
    </ul>
    );
}