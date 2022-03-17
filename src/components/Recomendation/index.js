import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Recomendation(props) {
  const { id, src, title } = props;

  return (
    <div
      className="card"
    >
      <div className="card__image-gradient" data-testid={ `${id}-recomendation-card` }>

        <div className="card__image">
          <img src={ src } alt="item" />
        </div>

      </div>

      <div className="card__recomendation-title">
        <p data-testid={ `${id}-recomendation-title` }>
          {title}
        </p>
      </div>

    </div>
  );
}

Recomendation.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default Recomendation;
