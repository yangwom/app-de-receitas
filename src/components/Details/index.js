import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Link } from 'react-router-dom';

function Details(props) {
  const {
    src,
    title,
    category,
    instructions,
    video,
    measureAndIngredients,
    alcoholic } = props;

  return (
    <div>
      <img
        src={ src }
        alt="profile"
        data-testid="recipe-photo"
      />
      <input
        type="button"
        data-testid="share-btn"
        value="share"
      />
      <input
        type="button"
        data-testid="favorite-btn"
        value="favorite"
      />
      <h3
        data-testid="recipe-category"
      >
        { category }
        { alcoholic }

      </h3>
      <h1
        data-testid="recipe-title"
      >
        {title}
      </h1>
      <ol>
        { measureAndIngredients.map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { ingredient }
          </li>
        )) }
      </ol>
      <h3
        data-testid="instructions"
      >
        { instructions }
      </h3>
      <video
        data-testid="video"
        src={ video }
        width="320"
        height="240"
        controls
      >
        <track kind="captions" />
      </video>
      <Link to="/foods:id/in-progress">
        <div className="container__btn">
          <input
            className="btn__start-recipe"
            type="button"
            value="start recipe"
            data-testid="start-recipe-btn"
          />
        </div>
      </Link>

    </div>

  );
}

Details.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  instructions: PropTypes.string,
  video: PropTypes.video,
  measureAndIngredients: PropTypes.array,
}.isRequired;

export default Details;
