import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ value, onChange, onSubmit }) => (
  <form className="search-form" onSubmit={onSubmit}>
    <input
      type="text"
      autoComplete="off"
      placeholder="Search images..."
      value={value}
      onChange={onChange}
    />
  </form>
);
SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
