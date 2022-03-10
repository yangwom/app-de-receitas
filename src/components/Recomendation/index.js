import React from 'react';
import PropTypes from 'prop-types';

function Recomendation(props) {
  const { recomendation } = props;
  return (
    <div>
      <h1>Recomendation</h1>
      <ul>
        { recomendation.map((drink, index) => (
          <li
            key={ index }
            data-testid={ `${index}-recomendation-card` }
          >
            { drink.strDrink }
          </li>
        )) }
      </ul>
    </div>
  );
}

Recomendation.propTypes = {
  recomendation: PropTypes.array,
}.isRequired;

export default Recomendation;
