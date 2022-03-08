import React from 'react';

function Details() {
  return (
    <div>
      <img
        src="???"
        alt="profile"
        data-testid="recipe-photo"
      />
      <h1
        data-testid="recipe-title"
      >
        { }
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
        { }

      </h3>
      <ul>
        {map((ingredient, _, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingredient}
          </li>
        ))}
      </ul>
      <h3
        data-testid="instructions"
      >
        { }
      </h3>
      <video
        data-testid="video"
        src="???"
        width="320"
        height="240"
        controls
      >
        <track kind="captions" />
      </video>
      {/* <recomentdados
        data-testid={ `${index}-recomendation-card` }
      /> */}
      <input
        type="button"
        data-testid="start-recipe-btn"
      />
    </div>

  );
}

export default Details;
