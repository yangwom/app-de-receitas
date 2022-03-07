import React, { useState } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import SearchBar from '../SearchBar';
import ButtonSearch from '../ButtonSearch';

function Header({ children, history }) {
  const [ShouldSearchBar, setShouldSearchBar] = useState(false);
  const verify = children === 'Foods' || children === 'Drinks' || children
    === 'Explore Nationalities';

  return (
    <header>
      <button
        type="button"
        onClick={ () => history.push('/profile') }
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Profile"
        />
      </button>
      <h1
        data-testid="page-title"
      >
        { children }
      </h1>
      { verify && <ButtonSearch
        setShouldSearchBar={ setShouldSearchBar }
        ShouldSearchBar={ ShouldSearchBar }
      />}
      { ShouldSearchBar && <SearchBar /> }
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.string,
  history: PropTypes.string,
}.isRequired;

export default Header;
