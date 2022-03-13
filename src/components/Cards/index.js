import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { useHistory, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Cards({ id, src, name, index }) {
  const history = useHistory();
  const pathName = history.location.pathname;
  return (
    <div
      data-testid={ `${index}-recipe-card` }
      key={ id }
      className="container__card--content"
    >
      <div className="card__content--img">
    <Link to={ `${pathName}/${id}` }>
      <div
        className="card-food"
        data-testid={ `${index}-recipe-card` }
        key={ id }
      >
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
    </Link>
  );
}

Cards.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
