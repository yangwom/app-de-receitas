import React from 'react';
import PropTypes from 'prop-types';

export default function Cards({ id, src, name, index }) {
  return (

    <li data-testid={ `${index}-recipe-card` } key={ id }>
      <div className="card-food">
        <img
          data-testid={ `${index}-card-img` }
          src={ src }
          alt="imagem"
        />
        <h4 data-testid={ `${index}-card-name` }>{ name }</h4>
      </div>
    </li>

  );
}

Cards.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
