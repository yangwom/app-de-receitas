import React, { useContext, useState } from 'react';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MyContext } from '../../context/MyContext';

function Foods() {
  const [category, setCategory] = useState();
  const { foods, foodCategory,
    getSearchByCategory, getFoods } = useContext(MyContext);

  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const slicedCategory = foodCategory.slice(0, MAX_CATEGORY);
  const slicedFoods = foods.slice(0, MAX_RECIPES);

  return (
    <div>
      <Header>
        Foods
      </Header>
      <div className="container__foods">
        { foodCategory && slicedCategory
          .map(({ strCategory }, index) => (
            <button
              data-testid={ `${strCategory}-category-filter` }
              key={ index }
              type="button"
              onClick={ () => {
                if (category === strCategory) {
                  getFoods();
                  setCategory();
                } else {
                  getSearchByCategory(strCategory);
                  setCategory(strCategory);
                }
              } }
            >
              { strCategory }
            </button>
          ))}
        <ul style={ { display: 'grid', gridTemplateColumns: 'repeat(3, 100px' } }>
          { foods.length !== 0 && slicedFoods.map((food, index) => (
            <Cards
              key={ food.idMeal }
              index={ index }
              src={ food.strMealThumb }
              id={ food.idMeal }
              name={ food.strMeal }
            />
          ))}

        </ul>
        <Footer />
      </div>
    </div>
  );
}

export default Foods;
