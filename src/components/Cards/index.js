import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Cards({ id, src, name, index }) {
  return (

    <div
      data-testid={ `${index}-recipe-card` }
      key={ id }
      className="container__card--content"
    >
      <div className="card__content--img">
        <img
          data-testid={ `${index}-card-img` }
          src={ src }
          alt="imagem"
        />
      </div>
      <h4
        data-testid={ `${index}-card-name` }
        className="card__content--name"
      >
        { name }
      </h4>
    </div>

  );
}

Cards.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
