import React, { useContext } from 'react';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MyContext } from '../../context/MyContext';

function Foods() {
  const { foods, foodCategory,
    getSearchByCategory } = useContext(MyContext);
  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const slicedFoods = foods.slice(0, MAX_RECIPES);
  const slicedCategory = foodCategory.slice(0, MAX_CATEGORY);

  return (
    <>
      <Header>
        Foods
      </Header>
      <ul>
        { foods.length !== 0 && slicedFoods
          .map((food, index) => (
            <Cards
              key={ food.idMeal }
              index={ index }
              src={ food.strMealThumb }
              id={ food.idMeal }
              name={ food.strMeal }
            />
          ))}

      </ul>

      { foodCategory.length !== 0 && slicedCategory
        .map((category, index) => (
          <button
            data-testid={ `${category.strCategory}-category-filter` }
            key={ index }
            type="button"
            onClick={ () => getSearchByCategory(category.strCategory) }
          >
            { category.strCategory }
          </button>
        ))}
      <Footer />
    </>
  );
}

export default Foods;
