import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import icon from '../../images/shareIcon.svg';

export default function CardsDone({
  id,
  index,
  name,
  date,
  category,
  img,
  tags,
  type,
  nationality,
  alcoholicOrNot,
}) {
  const [copy, setCopy] = useState(false);
  const typeVerification = type === 'food' ? nationality : alcoholicOrNot;
  return (
    <div key={ id } className="container__cardFavorite">
      <div className="cardFavorite__img">
        <Link key={ id } to={ `/${type}s/${id}` }>
          <img data-testid={ `${index}-horizontal-image` } src={ img } alt="" />
        </Link>
      </div>
      <div className="cardFavorite__infos">
        <Link key={ id } to={ `/${type}s/${id}` } className="cardFavorite__infos--name">
          <p data-testid={ `${index}-horizontal-name` }>{`Name: ${name}`}</p>
        </Link>
        <p
          data-testid={ `${index}-horizontal-top-text` }
          className="cardFavorite__infos--category"
        >
          {`Category:  ${typeVerification} - ${category}`}
        </p>
        <p
          data-testid={ `${index}-horizontal-done-date` }
          className="cardFavorite__infos--category"
        >
          {`Date: ${date}`}

        </p>
        <span>
          {tags.map((tag) => (
            <span key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
              {` ${tag}`}
            </span>
          ))}
        </span>
        <button
          onClick={ () => {
            navigator.clipboard.writeText(`${window.location.origin}/${type}s/${id}`);
            setCopy(true);
          } }
          src={ icon }
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
        >
          Share
        </button>
        { copy && <p>Link copied!</p>}
      </div>
    </div>
  );
}

CardsDone.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
