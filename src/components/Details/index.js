import React from 'react';
import PropTypes from 'prop-types';

function Details(props) {
  const { src, title, category, instructions, video, ingredients } = props;
  return (
    <div>
      <img
        src={ src }
        alt="profile"
        data-testid="recipe-photo"
      />
      <h1
        data-testid="recipe-title"
      >
        {title}
      </h1>
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

      </h3>
      <ul>
        { ingredients.map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { ingredient }
          </li>
        )) }
      </ul>
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
      <input
        type="button"
        value="start recipe"
        data-testid="start-recipe-btn"
      />
    </div>

  );
}

Details.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  instructions: PropTypes.string,
  video: PropTypes.video,
  ingredients: PropTypes.array,
}.isRequired;

export default Details;
