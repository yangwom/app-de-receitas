import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../images/searchIcon.svg';

function ButtonSearch({ ShouldSearchBar, setShouldSearchBar }) {
  return (
    <button
      type="button"
      onClick={ () => setShouldSearchBar(!ShouldSearchBar) }
    >
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="Search"
      />
    </button>
  );
}

ButtonSearch.propTypes = {
  ShouldSearchBar: PropTypes.bool,
  setShouldSearchBar: PropTypes.bool,
}.isRequired;

export default ButtonSearch;
