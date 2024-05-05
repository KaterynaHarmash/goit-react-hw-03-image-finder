import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { ModalBox } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatImg, tags, id, largeImageURL } = this.props;

    return (
      <GalleryItem id={id}>
        <GalleryItemImage
          src={webformatImg}
          alt={tags}
          onClick={evt => {
            this.openModal(evt, largeImageURL);
          }}
        />
        <ModalBox
          large={largeImageURL}
          alt={tags}
          isModalOpen={isModalOpen}
          closeModal={this.closeModal}
        />
      </GalleryItem>
    );
  }
}
