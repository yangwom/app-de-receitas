import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import SearchBar from '../SearchBar';
import ButtonSearch from '../ButtonSearch';
import Camera from '../../images/camera.png';
import './style.css';

function Header({ children }) {
  const history = useHistory();
  const [ShouldSearchBar, setShouldSearchBar] = useState(false);
  const verify = children === 'Foods' || children === 'Drinks' || children
    === 'Explore Nationalities';

  function visibleIcons() {
    if (ShouldSearchBar) {
      return 'none';
    }
    return '';
  }

  return (
    <header>
      <div className="container-camera">
        <img
          src={ Camera }
          alt="camera"
          className="camera"
        />
      </div>
      <div className="container-header">
        <button
          style={ { display: visibleIcons() } }
          className="button-profile"
          type="button"
          onClick={ () => history.push('/profile') }
        >
          <img
            className="profile-icon icon"
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Profile"
          />
        </button>
        <h1
          style={ { display: visibleIcons() } }
          data-testid="page-title"
        >
          { children }
        </h1>
        <div className="container-searchBar">
          { verify && <ButtonSearch
            setShouldSearchBar={ setShouldSearchBar }
            ShouldSearchBar={ ShouldSearchBar }
          />}
          { ShouldSearchBar && <SearchBar /> }
        </div>
      </div>
    </header>

  );
}

Header.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Header;
