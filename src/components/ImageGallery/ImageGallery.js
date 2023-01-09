import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem
          searchQuery={this.props.searchQuery}
          toggleModal={this.props.toggleModal}
          onImageClick={this.props.onImageClick}
          page={this.props.page}
        />
      </ul>
    );
  }
}
