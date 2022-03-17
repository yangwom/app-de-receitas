import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import share from '../../images/shareIcon.svg';
import BtnFavorite from '../BtnFavorite';
import './styles.css';

function Details(props) {
  const [isInProgress, setIsInProgress] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const history = useHistory();

  const {
    src,
    title,
    category,
    nationality,
    id,
    instructions,
    video,
    measureAndIngredients,
    alcoholic,
    copyUrl,
    copyVisible,
    thumbVideo,
    pathname,
    type,
    recipesInProgressfromType,
    recipesDone,
  } = props;

  const route = `${pathname}/in-progress`;

  function urlYouTube(url) {
    const urlVideo = url.split('=')[1];
    return `https://www.youtube.com/embed/${urlVideo}`;
  }

  useEffect(() => {
    const recipesInProgress = Object.keys(recipesInProgressfromType).filter(
      (key) => key === id,
    );
    if (recipesInProgress.length > 0) {
      setIsInProgress(true);
    }

    if (recipesDone) {
      const recipesIsDone = recipesDone.filter((key) => key.id === id);
      if (recipesIsDone.length > 0) {
        setIsDone(true);
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipesInProgressfromType, recipesDone]);

  return (
    <div className="container__details">
      <div className="container__details__image-gradient">
        <div className="container__details-image">
          <img
            src={ src }
            alt="profile"
            data-testid="recipe-photo"
          />
        </div>
      </div>
      <div className="container__details-titleAndCategory">
        <h1
          data-testid="recipe-title"
        >
          {title}
        </h1>
        <span
          data-testid="recipe-category"
        >
          { category }
          { alcoholic }

        </span>
        <div className="container__details-shareFavorite">
          <button
            type="button"
            data-testid="share-btn"
            onClick={ copyUrl }
            className="details__btns"
          >
            <img
              src={ share }
              alt="share"
            />
          </button>
          <BtnFavorite
            id={ id }
            name={ title }
            nationality={ nationality }
            category={ category }
            image={ src }
            alcoholic={ alcoholic }
            type={ type }
          />

          <span
            className="copyUrl"
            style={ { display: copyVisible ? 'block' : 'none' } }
          >
            Link copied!
          </span>
        </div>
      </div>
      <div className="container__details-ingredients">
        <h2>
          Ingredients!
        </h2>
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
      </div>
      <div className="container__details-instructions">
        <h2>
          Instructions!
        </h2>
        <p
          data-testid="instructions"
        >
          { instructions }
        </p>
      </div>
      <iframe
        style={ { display: thumbVideo ? 'block' : 'none' } }
        className="container__details-video"
        data-testid="video"
        title={ title }
        src={ video ? urlYouTube(video) : '' }
        frameBorder="0"
      />

      {!isDone && (
        <div
          className="container__btn"
        >
          <button
            type="button"
            className="btn__start-recipe"
            data-testid="start-recipe-btn"
            onClick={ () => history.push(route) }
          >
            { isInProgress ? 'Continue Recipe' : 'Start Recipe' }
          </button>
        </div>
      )}

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
  recipesInProgressfromType: PropTypes.array,
  done: PropTypes.array,
  alcoholic: PropTypes.string,
  copyUrl: PropTypes.func,
  copyVisible: PropTypes.bool,
  favorite: PropTypes.func,
  thumbVideo: PropTypes.string,
  nationality: PropTypes.string,
}.isRequired;

export default Details;
