import React from 'react';

export default function Cards({ foodList }) {
  const arrayFood = foodList !== undefined;
  const number = 12;
  return (
    <ul>
      {arrayFood === true
        ? foodList
          .filter((food) => foodList.indexOf(food) < number)
          .map((food, index) => (
            <li data-testid={ `${index}-recipe-card` } key={ food.idMeal }>
              <div>
                <img src={ food.strMealThumb } alt="imagem" />
                <h1>{food.strMeal}</h1>
              </div>
            </li>
          ))
        : 'carregando'}
    </ul>
  );
}

Cards.propTypes = {
  foodsCategory: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}.isRequired;
