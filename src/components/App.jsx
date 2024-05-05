import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchimages } from './API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ThreeDots } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    requestData: {
      q: 'qqq',
      page: 0,
    },
    images: [],
    onLoading: false,
    loadbtnClickableStatus: true,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.requestData !== this.state.requestData) {
      this.setState({ onLoading: true });
      try {
        const images = await fetchimages(
          this.state.requestData.q,
          this.state.requestData.page
        );
        if (images.hits.length < 40) {
          toast.success('We loaded all images for this theme!');
          this.setState({ loadbtnClickableStatus: false });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
        }));
      } catch (error) {
        toast.error(error);
      } finally {
        this.setState({ onLoading: false });
      }
    }
  }
  onImageClick = (evt, largeImageURL) => {};
  onLoadMore = async () => {
    this.setState(prevState => ({
      requestData: {
        ...prevState.requestData,
        page: prevState.requestData.page + 1,
      },
    }));
  };
  onSubmit = async val => {
    this.setState({
      images: [],
      requestData: {
        q: val,
        page: 1,
      },
    });
  };
  render() {
    const { images, onLoading } = this.state;
    return (
      <div className="App">
        <Toaster />
        <SearchBar onSubmit={this.onSubmit} />
        <div className="main">
          {images.length !== 0 && <ImageGallery images={images} />}
          {onLoading === true && (
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          )}
          {images.length !== 0 && <Button onClick={this.onLoadMore} />}
        </div>
      </div>
    );
  }
}
