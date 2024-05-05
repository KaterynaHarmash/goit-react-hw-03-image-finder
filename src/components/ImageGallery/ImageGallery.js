import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            webformatImg={image.webformatURL}
            tags={image.tags}
            largeImageURL={image.largeImageURL}
          />
        );
      })}
    </Gallery>
  );
};
