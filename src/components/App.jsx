import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchimages } from './API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    requestData: {
      q: 'qqq',
      page: 0,
    },
    images: [],
  };
  // Подумати як обійти що при запиті + сторінка 1 при оновленому запиті неможливо зробити фетч, бо номер сторінки не змінився
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.requestData !== this.state.requestData) {
      try {
        const images = await fetchimages(
          this.state.requestData.q,
          this.state.requestData.page
        );
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
        }));
      } catch (error) {}
    }
  }
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
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} />
        {this.state.images.length !== 0 && (
          <div className="main">
            <ImageGallery images={this.state.images} />
            <Button onClick={this.onLoadMore} />
          </div>
        )}
      </div>
    );
  }
}
