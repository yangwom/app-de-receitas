import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { useHistory, Link } from 'react-router-dom';

export default function Cards({ id, src, name, index }) {
  const history = useHistory();
  const pathName = history.location.pathname;
  return (
    <div
      key={ id }
      className="container__card--content"
    >
      <div>
        <Link to={ `${pathName}${id}` } className="card__content">
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
  src: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
