import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatImg,
  tags,
  id,
  largeImageURL,
  onImageClick,
}) => {
  return (
    <GalleryItem id={id}>
      <GalleryItemImage
        src={webformatImg}
        alt={tags}
        onClick={evt => {
          onImageClick(evt, largeImageURL);
        }}
      />
    </GalleryItem>
  );
};
