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
    <li key={ id }>
      <Link key={ id } to={ `/${type}s/${id}` }>
        <img data-testid={ `${index}-horizontal-image` } src={ img } alt="" />
        <p data-testid={ `${index}-horizontal-name` }>{`Name: ${name}`}</p>
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>
        {`Category:  ${typeVerification} - ${category}`}
      </p>
      <p data-testid={ `${index}-horizontal-done-date` }>{`Date: ${date}`}</p>
      <span>
        Tags:
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
    </li>
  );
}

CardsDone.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
