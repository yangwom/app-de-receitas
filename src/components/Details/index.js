import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Link } from 'react-router-dom';
import heartIconWhite from '../../images/whiteHeartIcon.svg';
import heartIconBlack from '../../images/blackHeartIcon.svg';
import share from '../../images/shareIcon.svg';

function Details(props) {
  const {
    src,
    title,
    category,
    instructions,
    video,
    measureAndIngredients,
    alcoholic,
    copyUrl,
    copyVisible,
    favorite,
    isFavorite,
    thumbVideo,
    pathname,
  } = props;

  const route = `${pathname}/in-progress`;

  console.log(thumbVideo);
  console.log(video);

  function urlYouTube(url) {
    const urlVideo = url.split('=')[1];
    return `https://www.youtube.com/embed/${urlVideo}`;
  }

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
          <button
            type="button"
            value="favorite"
            onClick={ favorite }
            className="details__btns"
          >
            <img
              data-testid="favorite-btn"
              src={ isFavorite ? heartIconBlack : heartIconWhite }
              alt="favorite"
            />
          </button>
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
      <Link to={ route }>
        <div className="container__btn">
          <button
            type="button"
            className="btn__start-recipe"
            data-testid="start-recipe-btn"
          >
            Start Recipe
          </button>

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
  alcoholic: PropTypes.string,
  copyUrl: PropTypes.func,
  copyVisible: PropTypes.bool,
  favorite: PropTypes.func,
  thumbVideo: PropTypes.string,
}.isRequired;

export default Details;
