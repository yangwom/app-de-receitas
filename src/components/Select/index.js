import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Select(props) {
  const { dataTestid, handleChange, id, name, options, type, value } = props;
  return (
    <select
      data-testid={ dataTestid }
      id={ id }
      name={ name }
      onChange={ handleChange }
      value={ value }
    >
      {options.map((option, i) => {
        if (type === 'nationality') {
          return (
            <option
              data-testid={ `${option.strArea}-option` }
              key={ i }
              value={ option.strArea }
            >
              {option.strArea}
            </option>);
        }
        return (
          <option
            key={ i }
            value={ option.strCategory }
          >
            {option.strCategory}
          </option>);
      })}
    </select>
  );
}

Select.propTypes = {
  dataTestid: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Select;
