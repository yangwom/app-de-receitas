import React from 'react';
import PropTypes from 'prop-types';

function Recomendation(props) {
  const { recomendation } = props;
  console.log(recomendation);
  return (
    <div>
      <h1>Recomendation</h1>
      { recomendation.map((item, index) => (
        <ul
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          <li>
            <img src={ item.strDrinksThumb } alt="item" />
          </li>
        </ul>
      )) }
    </div>
  );
}

Recomendation.propTypes = {
  recomendation: PropTypes.array,
}.isRequired;

export default Recomendation;
