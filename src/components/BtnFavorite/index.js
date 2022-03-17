import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import heartIconWhite from '../../images/whiteHeartIcon.svg';
import heartIconBlack from '../../images/blackHeartIcon.svg';
import {
  removeFavoriteRecipes,
  setFavoriteRecipes } from '../../services/others/favorites';

const BtnFavorite = (props) => {
  const {
    alcoholic,
    category,
    id,
    image,
    index,
    name,
    nationality,
    type,
  } = props;
  const [useFavorite, setUseFavorite] = useState(false);

  const FavoriteRecipes = () => {
    const obj = {
      id,
      type,
      nationality,
      category,
      alcoholicOrNot: alcoholic || '',
      name,
      image,
    };
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorites === null) {
      setFavoriteRecipes(obj);
      setUseFavorite(true);
    } else {
      const findFavorite = favorites.find((favorite) => favorite.id === id);
      if (findFavorite === undefined) {
        setFavoriteRecipes(obj);
        setUseFavorite(true);
      } else {
        removeFavoriteRecipes(obj.id);
        window.location.reload();
        setUseFavorite(false);
      }
    }
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorites !== null) {
      const findFavorite = favorites.find((favorite) => favorite.id === id);
      if (findFavorite !== undefined) {
        setUseFavorite(true);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      type="button"
      value="favorite"
      onClick={ FavoriteRecipes }
      className="details__btns"
    >
      <img
        data-testid="favorite-btn"
        src={ useFavorite ? heartIconBlack : heartIconWhite }
        alt="favorite"
      />
      <img
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ useFavorite ? heartIconBlack : heartIconWhite }
        alt="favorite"
        style={ { width: '1px', padding: '0', margin: '0' } }
      />
    </button>
  );
};

BtnFavorite.propTypes = {
  alcoholic: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  isFavorite: PropTypes.func,
  name: PropTypes.string,
  nationality: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default BtnFavorite;
