import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Recomendation(props) {
  const { src, title, id } = props;

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
  src: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default Recomendation;
