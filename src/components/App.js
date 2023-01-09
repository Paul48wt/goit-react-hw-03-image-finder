import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Button } from './Button/Button';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    url: '',
    page: 1,
  };
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  imageForModalHandler = data => {
    this.setState({ url: data });
  };

  loadMoreHandler = data => {
    this.setState({ page: data });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          toggleModal={this.toggleModal}
          onImageClick={this.imageForModalHandler}
          page={this.state.page}
        />
        <Button onClick={this.loadMoreHandler} />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.url} alt="" />
          </Modal>
        )}
        <ToastContainer />
      </>
    );
  }
}
