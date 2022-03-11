import React from 'react';
import PropTypes from 'prop-types';

function Recomendation(props) {
  const { src, title, id } = props;

  console.log(id);

  return (
    <div data-testid={ `${id}-recomendation-card` }>

      <p data-testid={ `${id}-recomendation-title` }>
        {title}
      </p>

      <img src={ src } alt="item" />

    </div>
  );
}

Recomendation.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default Recomendation;
