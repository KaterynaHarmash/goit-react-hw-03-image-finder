import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatImg, tags, id }) => {
  return (
    <GalleryItem id={id}>
      <GalleryItemImage src={webformatImg} alt={tags} />
    </GalleryItem>
  );
};
