import { Component } from 'react';
import { fetchSerchQuery } from 'api/api';
import { Loader } from 'components/Loader/Loader';

export class ImageGalleryItem extends Component {
  state = {
    images: [],
    status: 'idle',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchQuery !== this.props.searchQuery ||
      prevState.page !== this.props.page
    ) {
      this.setState({ status: 'pending' });

      try {
        const response = await fetchSerchQuery(
          this.props.searchQuery,
          this.props.page
        );
        this.setState({ images: response, status: 'resolved' });
      } catch (error) {}
    }
  }

  render() {
    const { status, images } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          {images.hits.map(item => (
            <li key={item.id} className="ImageGalleryItem">
              <img
                onClick={() => {
                  this.props.toggleModal();
                  this.props.onImageClick(item.largeImageURL);
                }}
                className="ImageGalleryItem-image"
                src={item.webformatURL}
                alt={item.tags}
              />
            </li>
          ))}
        </>
      );
    }
  }
}
