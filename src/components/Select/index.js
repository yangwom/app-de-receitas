import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { dataTestid, value, name, id, options, handleChange, type } = props;
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
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Select;
