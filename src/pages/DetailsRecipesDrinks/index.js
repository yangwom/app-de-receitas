import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../components/Details';
import { fetchDrinkId } from '../../services/fetchApiDrink';
import { fetchRecomendationDrinks } from '../../services/fetchApiFood';
import Recomendation from '../../components/Recomendation';

function DetailsRecipesDrinks() {
  const [useDrinks, setUseDrinks] = useState([]);
  const [useIngredients, setUseIngredients] = useState([]);
  const [useRecommended, setUseRecommended] = useState([]);

  const { id } = useParams();
  const NUMBER_INGREDIENTS = 20;
  const NUMBER_RECOMMENDED = 6;

  async function getDetailsRecipesDrinks() {
    const response = await fetchDrinkId(id);
    setUseDrinks(response.drinks);
  }

  async function getDetailsRecipesRecomendationFoods() {
    const response = await fetchRecomendationDrinks();
    response.meals.splice(NUMBER_RECOMMENDED);
    setUseRecommended(response.meals);
  }

  function getIngredients() {
    const ingredients = [];
    for (let i = 1; i <= NUMBER_INGREDIENTS; i += 1) {
      if (useDrinks[0][`strIngredient${i}`]) {
        ingredients.push(useDrinks[0][`strIngredient${i}`]);
      }
    }
    setUseIngredients(ingredients);
  }

  console.log(useIngredients);
  console.log(useDrinks[0]);
  console.log(useRecommended);

  useEffect(() => {
    if (useDrinks[0] !== undefined) {
      getIngredients();
    }
  }, [useDrinks]);

  useEffect(() => {
    getDetailsRecipesDrinks();
    getDetailsRecipesRecomendationFoods();
  }, []);

  return (
    <div>
      <h1>oi</h1>
      {useDrinks[0] !== undefined
      && <Details
        src={ useDrinks[0].strMealThumb }
        title={ useDrinks[0].srtMeal }
        category={ useDrinks[0].strCategory }
        instructions={ useDrinks[0].strInstructions }
        ingredients={ useIngredients }
        video={ useDrinks[0].strYoutube }
        recomendation={ useRecommended }
      />}
      {useDrinks[0] !== undefined
      && <Recomendation
        recomendation={ useRecommended }
      />}
    </div>
  );
}

export default DetailsRecipesDrinks;
