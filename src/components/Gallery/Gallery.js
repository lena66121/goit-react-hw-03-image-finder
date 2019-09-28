import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ images, onOpen }) => {
  return (
    <ul className="gallery">
      {images.map(img => (
        <li key={img.id} data-id={img.id}>
          <PhotoCard
            src={img.webformatURL}
            comments={img.comments}
            likes={img.likes}
            views={img.views}
            downloads={img.downloads}
            handleOpen={onOpen}
          />
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  onOpen: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Gallery;
