import React, { Component } from 'react';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import { fetchAPIdata } from '../../services/fetchAPI';

const API_KEY = '13752483-76278f8ed6ace6d5706001d0d';

class App extends Component {
  state = {
    images: [],
    modalIsOpen: false,
    currentImg: null,
    currentPage: 0,
    query: '',
  };

  // componentDidMount() {
  //   const { currentPage, query } = this.state;

  //   fetchAPIdata({ API_KEY, currentPage, query }).then(data =>
  //     this.setState({
  //       images: [...data],
  //     }),
  //   );
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { query, currentPage, images } = this.state;

  //   if (prevState.query === query && prevState.currentPage !== currentPage) {
  //     fetchAPIdata({ API_KEY, query, currentPage }).then(data => {
  //       this.setState(
  //         {
  //           images: [...images, ...data],
  //         },
  //         () => {
  //           window.scrollTo({
  //             top: document.body.scrollHeight,
  //             behavior: 'smooth',
  //           });
  //         },
  //       );
  //     });
  //   }
  // }

  fetchImages = () => {
    this.setState(
      {
        currentPage: 1,
      },
      () => {
        const { query, currentPage } = this.state;
        fetchAPIdata({ API_KEY, query, currentPage }).then(data => {
          this.setState({
            images: data,
          });
        });
      },
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchImages();
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      query: value,
    });
  };

  handleClose = () => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen,
    }));
  };

  handleOpen = e => {
    const link = e.target.closest('div').childNodes[0].src;
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen,
      currentImg: link,
    }));
  };

  fetchImagesMore = () => {
    const { query, currentPage } = this.state;

    fetchAPIdata({ API_KEY, query, currentPage }).then(data => {
      this.setState(
        state => ({
          images: [...state.images, ...data],
        }),
        () => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        },
      );
    });
  };

  handleClickMore = () => {
    this.setState(
      state => ({
        currentPage: state.currentPage + 1,
      }),
      () => this.fetchImagesMore(),
    );
  };

  render() {
    const { images, modalIsOpen, currentImg, query, currentPage } = this.state;
    return (
      <div className="App">
        <SearchForm
          onSubmit={this.handleSubmit}
          value={query}
          onChange={this.handleChange}
        />
        <Gallery images={images} onOpen={this.handleOpen} />
        {modalIsOpen && <Modal src={currentImg} onClose={this.handleClose} />}
        {currentPage !== 0 && (
          <button
            className="button"
            onClick={this.handleClickMore}
            type="button"
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;
