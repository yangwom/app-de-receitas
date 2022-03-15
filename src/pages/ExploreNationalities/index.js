import React, { memo, useContext, useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Select from '../../components/Select';
import { MyContext } from '../../context/MyContext';

function ExploreNationalities() {
  const { foods,
    foodCategory,
    nationalities,
    // getSearchByCategory,
    // getFoods,
    // category,
    // setCategory
  } = useContext(MyContext);
  const [filter, setFilter] = useState('');

  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const slicedCategory = foodCategory.slice(0, MAX_CATEGORY);
  const slicedFoods = foods.slice(0, MAX_RECIPES);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <>
      <div>
        <Header>
          Explore Nationalities
        </Header>
        <div>
          <Select
            dataTestid="explore-by-nationality-dropdown"
            id="nationality"
            name="nationality"
            handleChange={
              ({ target: { value } }) => setFilter(value)
            }
            value={ filter }
            options={ nationalities.length !== 0 ? nationalities.meals : [] }
          />
        </div>
        <div>
          <select
            data-testid="explore-by-nationality-dropdown"
          >
            {foodCategory.length !== 0 && slicedCategory
              .map(({ strCategory }, index) => (
                <option
                  key={ index }
                  data-testid={ `${strCategory}-option` }
                  value={ strCategory }
                >
                  {strCategory}
                </option>
              ))}
          </select>
        </div>

      </div>
      <div className="container__foods--recipes">
        {foods.length !== 0 && slicedFoods.map((food, index) => (
          <div key={ index } className="container__foods--card">
            <Cards
              key={ food.idMeal }
              index={ index }
              src={ food.strMealThumb }
              id={ food.idMeal }
              name={ food.strMeal }
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default memo(ExploreNationalities);

/*               onClick={() => {
                if (category === strCategory) {
                  getFoods();
                  setCategory();
                } else {
                  getSearchByCategory(strCategory);
                  setCategory(strCategory);
                    <button
      type="button"
      data-testid="All-category-filter"
      onClick={() => {
        getFoods();
      } }
    >
        All
      </button>} */
