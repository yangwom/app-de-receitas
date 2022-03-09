import React from 'react';
import PropTypes from 'prop-types';

export default function FoodsCategory({ foodsCategory }) {
  console.log(foodsCategory);
  const arrayCategory = foodsCategory !== undefined;
  const number = 5;
  return (
    <ul>
      {arrayCategory === true
        ? foodsCategory
          .filter((food) => foodsCategory.indexOf(food) < number)
          .map((food) => (
            <li
              data-testid={ `${food.strCategory}-category-filter` }
              key={ food.strCategory }
            >
              <button type="button">{food.strCategory}</button>

            </li>
          ))
        : 'carregando'}
    </ul>
  );
}

FoodsCategory.propTypes = {
  foodsCategory: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}.isRequired;
