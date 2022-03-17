import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import icon from '../../images/shareIcon.svg';
import './styles.css';

export default function CardsDone({
  alcoholicOrNot,
  category,
  date,
  id,
  img,
  index,
  name,
  nationality,
  tags,
  type,
}) {
  const [copy, setCopy] = useState(false);
  const typeVerification = type === 'food' ? nationality : alcoholicOrNot;

  const LIMIT_NUMBER = 10;

  const dataFormatter = date.substring(0, LIMIT_NUMBER);

  return (
    <div key={ id } className="container__cardDoneRecipes">
      <div className="cardDoneRecipes__img">
        <Link key={ id } to={ `/${type}s/${id}` }>
          <img data-testid={ `${index}-horizontal-image` } src={ img } alt="" />
        </Link>
      </div>
      <div className="cardDoneRecipes__infos">
        <Link key={ id } to={ `/${type}s/${id}` } className="cardFavorite__infos--name">
          <p data-testid={ `${index}-horizontal-name` }>{name}</p>
        </Link>
        <p
          data-testid={ `${index}-horizontal-top-text` }
          className="cardFavorite__infos--category"
        >
          {`Category:  ${typeVerification} - ${category}`}
        </p>
        <span
          className="cardFavorite__infos--category"
        >
          {tags.map((tag) => (
            <span key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
              { tag }
            </span>
          ))}
        </span>
        <p
          data-testid={ `${index}-horizontal-done-date` }
          className="cardFavorite__infos--category"
        >
          { dataFormatter }

        </p>
        <div className="cardFavorite__infos--share">
          <button
            onClick={ () => {
              navigator.clipboard.writeText(`${window.location.origin}/${type}s/${id}`);
              setCopy(true);
            } }
            src={ icon }
            type="button"
            className="btn-share"
            data-testid={ `${index}-horizontal-share-btn` }
          >
            <img src={ icon } alt="" className="iconShare" />
          </button>
          { copy && <p>Link copied!</p>}
        </div>
      </div>
    </div>
  );
}

CardsDone.propTypes = {
  alcoholicOrNot: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.string,
  nationality: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
}.isRequired;
