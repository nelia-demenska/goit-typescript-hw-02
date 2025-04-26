export interface Image {
    id: string;
    alt_description: string;
    urls: {
    small: string;
    regular: string;
    };
}

export interface UnsplashImage {
    id: string;
    alt_description: string;
    urls: {
    small: string;
    regular: string;
    full: string;
    };
}



export interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export interface ImageGalleryProps {
    images: Image[];
    onImageClick: (url: string) => void;
}

export interface ImageGalleryItemProps {
    image: Image;
    onClick: (url: string) => void;
}

export interface ModalProps {
    largeImageURL: string;
    onClose: () => void;
}