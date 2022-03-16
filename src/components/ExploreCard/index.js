import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/MyContext';

export default function ExploreCard({ name, index, src, type }) {
  const { setIngredient } = useContext(MyContext);
  const route = type === 'foods' ? '/foods' : '/drinks';
  return (
    <Link
      onClick={ () => setIngredient({
        type,
        title: name,
      }) }
      to={ route }
    >
      <div data-testid={ `${index}-ingredient-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ src }
          alt="imagem"
        />
        <h4
          data-testid={ `${index}-card-name` }
        >
          {name}
        </h4>
      </div>
    </Link>
  );
}

ExploreCard.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  src: PropTypes.string,
}.isRequired;
