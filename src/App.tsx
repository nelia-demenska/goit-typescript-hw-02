import { useState } from "react";
import { fetchImages } from "./services/unsplashApi.";
import "./App.css";
import { UnsplashImage } from "./types";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster, toast } from "react-hot-toast";

export default function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  const handleSearch = async (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setLoading(true);
    setError(null);

    try {
      const results = await fetchImages(newQuery, 1);
      setImages(results);
      if (results.length === 0) {
        toast.error("No images found. Try another search term.");
      }
    } catch (err) {
      setError("Something went wrong. Try to reload the page");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    setError(null);
    try {
      const nextPage = page + 1;
      setPage(nextPage);
      const newImages = await fetchImages(query, nextPage);
      setImages(prev => [...prev, ...newImages]);
    } catch (err) {
      setError("Could not load more images.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image: UnsplashImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={openModal} />
      {!loading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}
