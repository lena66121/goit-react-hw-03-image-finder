import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({ src, likes, views, comments, downloads, handleOpen }) => (
  <div className="photo-card">
    <img src={src} alt="" className="img" />

    <div className="stats">
      <p className="stats-item">
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className="stats-item">
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className="stats-item">
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className="stats-item">
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>
    <button type="button" className="fullscreen-button" onClick={handleOpen}>
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

PhotoCard.propTypes = {
  src: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default PhotoCard;
