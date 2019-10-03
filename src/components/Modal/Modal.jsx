import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    const { onClose } = this.props;
    if (e.code !== 'Escape') return;
    onClose();
  };

  handleCloseOverlay = ({ target }) => {
    const { onClose } = this.props;
    const { current } = this.backdropRef;
    if (current !== target) return;
    onClose();
  };

  render() {
    const { src } = this.props;
    return (
      <div
        className="overlay"
        ref={this.backdropRef}
        onClick={this.handleCloseOverlay}
        onKeyPress={this.handleCloseOverlay} // for an accessibility
      >
        <div className="modal">
          <img src={src} alt="img" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default Modal;
