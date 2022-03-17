import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import shareIcon from '../../images/shareIcon.svg';
import BtnFavorite from '../BtnFavorite';
import './styles.css';

function CardRecipe(props) {
  const {
    alcoholic,
    category,
    id,
    finishEnabled,
    ingredients,
    instructions,
    nationality,
    setIngredients,
    srcThumb,
    title,
    type,
  } = props;

  const history = useHistory();
  const [linkCopied, setLinkCopied] = useState(false);

  function handleDone(index) {
    setIngredients((prevState) => {
      prevState[index].done = !prevState[index].done;
      return [...prevState];
    });
  }

  function copyLinkUrlClipBoard() {
    const url = window.location.href.split('/');
    url.pop();
    navigator.clipboard.writeText(url.join('/'));
    setLinkCopied(true);
  }
  // referencia para copiar o link para o ClipBoard: https://www.codegrepper.com/code-examples/javascript/react+onclick+copy+to+clipboard

  return (
    <div className="container__inProgress">
      <div className="container__inProgress__image-gradient">
        <div className="container__inProgress-image">
          <img
            src={ srcThumb }
            alt="profile"
            data-testid="recipe-photo"
          />
        </div>
      </div>
      <div className="container__inProgress__titleAndCategory">
        <h1
          data-testid="recipe-title"
        >
          {title}
        </h1>
        <span
          data-testid="recipe-category"
        >
          {category}
          { alcoholic }

        </span>
        <div className="container__inProgress-shareFavorite">
          <button
            type="button"
            data-testid="share-btn"
            onClick={ copyLinkUrlClipBoard }
            className="share-btn"
          >
            <img
              src={ shareIcon }
              alt="share-button"
            />
          </button>
          <BtnFavorite
            id={ id }
            name={ title }
            nationality={ nationality }
            category={ category }
            image={ srcThumb }
            alcoholic={ alcoholic }
            type={ type }
          />
          {linkCopied && <span>Link copied!</span>}
        </div>
      </div>
      <div className="container__inProgress-ingredients">
        <h2>
          Ingredients!
        </h2>
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
                className="checkbox"
              />
              {ingredient}
            </label>
          ))}

      </div>
      <div className="container__inProgress-instructions">
        <h2>
          Instructions!
        </h2>
        <p
          data-testid="instructions"
        >
          {instructions}
        </p>
      </div>

      <input
        type="button"
        className="btn-finish"
        data-testid="finish-recipe-btn"
        value="Finish Recipe"
        onClick={ () => history.push('/done-recipes') }
        disabled={ !finishEnabled }
      />
    </div>);
}

CardRecipe.propTypes = {
  alcoholic: PropTypes.string,
  category: PropTypes.string,
  finishEnabled: PropTypes.string,
  id: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.objectOf),
  instructions: PropTypes.string,
  nationality: PropTypes.string,
  setIngredients: PropTypes.func,
  srcThumb: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default CardRecipe;
