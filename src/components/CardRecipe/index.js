import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import shareIcon from '../../images/shareIcon.svg';
import BtnFavorite from '../BtnFavorite';

function CardRecipe(props) {
  const { srcThumb,
    category,
    title,
    type,
    id,
    nationality,
    alcoholic,
    ingredients,
    instructions,
    setIngredients,
    finishEnabled,
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
    <>
      <img
        src={ srcThumb }
        alt="profile"
        data-testid="recipe-photo"
      />
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyLinkUrlClipBoard }
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
