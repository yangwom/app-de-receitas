import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import icon from '../../images/shareIcon.svg';
import BtnFavorite from '../BtnFavorite';
import './styles.css';

export default function CardsFavorite({
  id,
  index,
  name,
  /* date, */
  category,
  img,
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
          <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
        </Link>
        <p
          data-testid={ `${index}-horizontal-top-text` }
          className="cardFavorite__infos--category"
        >
          { `Category: ${typeVerification} - ${category}`}
        </p>
        <div className="cardFavorites__infos--btns">
          <button
            className="btn-share"
            onClick={ () => {
              navigator.clipboard.writeText(`${window.location.origin}/${type}s/${id}`);
              setCopy(true);
            } }
            src={ icon }
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
          >
            <img src={ icon } alt="share" />
          </button>
          <BtnFavorite
            id={ id }
            nationality={ nationality }
            category={ category }
            alcoholic={ alcoholicOrNot }
            name={ name }
            image={ img }
            index={ index }
          />
          { copy && <p className="linkCopied">Link copied!</p>}
        </div>
      </div>
    </div>
  );
}

CardsFavorite.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  setidFavoriteRecipes: PropTypes.func,
}.isRequired;
