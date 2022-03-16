import React, { memo, useContext, useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Select from '../../components/Select';
import { MyContext } from '../../context/MyContext';
import fetchNationality from '../../services/fetchNationality';

const MAX_RECIPES = 12;
const MAX_CATEGORY = 5;

function ExploreNationalities() {
  const { foods,
    foodCategory,
    nationalities,
    setFoods,
    getSearchByCategory,
    // getFoods,

  } = useContext(MyContext);
  const [filterNationality, setFilterNationality] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const slicedCategory = foodCategory.slice(0, MAX_CATEGORY);
  slicedCategory.push({ strCategory: 'All' });
  const slicedFoods = foods.slice(0, MAX_RECIPES);

  async function createListFromNationality() {
    const response = await fetchNationality(filterNationality);
    if (response) {
      setFoods(response.meals);
    }
  }

  useEffect(() => {
    if (filterNationality !== '') {
      createListFromNationality();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterNationality]);

  useEffect(() => {
    if (filterCategory !== '') {
      getSearchByCategory(filterCategory);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCategory]);

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
              ({ target: { value } }) => setFilterNationality(value)
            }
            value={ filterNationality }
            type="nationality"
            options={ nationalities.length !== 0 ? nationalities.meals : [] }
          />
        </div>
        <div>
          <Select
            dataTestid="explore-by-nationality-dropdown"
            id="nationality"
            name="nationality"
            handleChange={
              ({ target: { value } }) => setFilterCategory(value)
            }
            value={ filterCategory }
            options={ foodCategory.length !== 0 ? slicedCategory : [] }
          />
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
