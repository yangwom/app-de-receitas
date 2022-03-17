import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Cards({ id, index, name, pathName, src }) {
  return (
    <div
      key={ id }
      className="container__card--content"
    >
      <div>
        <Link to={ `${pathName}/${id}` } className="card__content">
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
          <div className="card__content--name">
            <h4
              data-testid={ `${index}-card-name` }
            >
              { name }
            </h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

Cards.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  pathName: PropTypes.string,
  src: PropTypes.string,
}.isRequired;
