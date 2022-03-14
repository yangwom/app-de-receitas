import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import heartIconWhite from '../../images/whiteHeartIcon.svg';
import heartIconBlack from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import { setFavoriteRecipes, removeFavoriteRecipes } from '../../services/favorites';

function CardRecipe({
  srcThumb,
  favorite,
  setFavorite,
  category,
  title,
  type,
  id,
  area,
  alcoholic,
  ingredients,
  instructions,
  setIngredients,
  finishEnabled,
}) {
  const history = useHistory();
  const [linkCopied, setLinkCopied] = useState(false);

  function handleDone(index) {
    setIngredients((prevState) => {
      prevState[index].done = !prevState[index].done;
      return [...prevState];
    });
  }
  function copyLinkUrlFood() {
    const url = window.location.href.split('/');
    url.pop();
    navigator.clipboard.writeText(url.join('/'));
    setLinkCopied(true);
  }
  // referencia para copiar o link para o ClipBoard: https://www.codegrepper.com/code-examples/javascript/react+onclick+copy+to+clipboard
  const FavoriteRecipes = () => {
    const obj = {
      id,
      type,
      nationality: area,
      category,
      alcoholicOrNot: alcoholic,
      name: title,
      image: srcThumb,
    };
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorites === null) {
      setFavoriteRecipes(obj);
      setFavorite(true);
    } else {
      const findFavorite = favorites.find((_favorite) => _favorite.id === id);
      if (findFavorite === undefined) {
        setFavoriteRecipes(obj);
        setFavorite(true);
      } else {
        removeFavoriteRecipes(obj.id);
        setFavorite(false);
      }
    }
  };

  return (
    <>
      <img
        src={ srcThumb }
        alt="profile"
        data-testid="recipe-photo"
      />
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyLinkUrlFood }
      >
        <img
          src={ shareIcon }
          alt="share-button"
        />
      </button>
      <button
        type="button"
        value="favorite"
        onClick={ FavoriteRecipes }
        className="details__btns"
      >
        <img
          src={ favorite ? heartIconBlack : heartIconWhite }
          alt="favorite"
          data-testid="favorite-btn"
        />
      </button>
      {linkCopied && <span>Link copied!</span>}
      <h3
        data-testid="recipe-category"
      >
        {category}
        { alcoholic }

      </h3>
      <h1
        data-testid="recipe-title"
      >
        {title}
      </h1>
      <div>
        {ingredients !== undefined && ingredients
          .map(({ ingredient, done }, index) => (
            <label
              htmlFor={ `ingredient${index}` }
              key={ index }
              data-testid={ `${index}-ingredient-step` }
              className={ done ? 'done' : '' }
            >
              <input
                id={ `ingredient${index}` }
                type="checkbox"
                checked={ done }
                onChange={ () => handleDone(index) }
              />
              {ingredient}
            </label>
          ))}
      </div>
      <p
        data-testid="instructions"
      >
        {instructions}
      </p>
      <input
        type="button"
        data-testid="finish-recipe-btn"
        value="Finish Recipe"
        onClick={ () => history.push('/done-recipes') }
        disabled={ !finishEnabled }
      />
    </>);
}

CardRecipe.propTypes = {
  srcThumb: PropTypes.string,
  favorite: PropTypes.string,
  setFavorite: PropTypes.func,
  category: PropTypes.string,
  title: PropTypes.string,
  linkCopied: PropTypes.string,
  setLinkCopied: PropTypes.func,
  id: PropTypes.string,
  area: PropTypes.string,
  alcoholic: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.objectOf),
  instructions: PropTypes.string,
  setIngredients: PropTypes.func,
  finishEnabled: PropTypes.string,

}.isRequired;

export default CardRecipe;
