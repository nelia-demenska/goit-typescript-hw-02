import { UnsplashImage } from '../../types/index';
import css from './ImageCard.module.css';

interface Props {
    image: UnsplashImage;
    onClick: (image: UnsplashImage) => void;
}

export default function ImageCard({ image, onClick }: Props) {
    return (
    <li className={css.imageCard}>
        <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
        />
    </li>
    );
}
