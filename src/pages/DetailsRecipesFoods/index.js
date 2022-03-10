import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../components/Details';
import { fetchFoodId } from '../../services/fetchApiFood';
import { fetchRecomendationFoods } from '../../services/fetchApiDrink';
import Recomendation from '../../components/Recomendation';

function DetailsRecipesFoods() {
  const [useFoods, setUseFoods] = useState([]);
  const [useIngredients, setUseIngredients] = useState([]);
  const [useRecommended, setUseRecommended] = useState([]);

  const { id } = useParams();
  const NUMBER_INGREDIENTS = 20;
  const NUMBER_RECOMMENDED = 6;

  async function getDetailsRecipesFoods() {
    const response = await fetchFoodId(id);
    setUseFoods(response.meals);
  }

  async function getDetailsRecipesRecomendationDrinks() {
    const response = await fetchRecomendationFoods();
    response.drinks.splice(NUMBER_RECOMMENDED);
    setUseRecommended(response.drinks);
  }

  function getIngredients() {
    const ingredients = [];
    for (let i = 1; i <= NUMBER_INGREDIENTS; i += 1) {
      if (useFoods[0][`strIngredient${i}`]) {
        ingredients.push(useFoods[0][`strIngredient${i}`]);
      }
    }
    setUseIngredients(ingredients);
  }

  console.log(useIngredients);
  console.log(useFoods[0]);
  console.log(useRecommended);

  useEffect(() => {
    if (useFoods[0] !== undefined) {
      getIngredients();
    }
  }, [useFoods]);

  useEffect(() => {
    getDetailsRecipesFoods();
    getDetailsRecipesRecomendationDrinks();
  }, []);

  return (
    <div>
      <h1>oi</h1>
      {useFoods[0] !== undefined
      && <Details
        src={ useFoods[0].strMealThumb }
        title={ useFoods[0].srtMeal }
        category={ useFoods[0].strCategory }
        instructions={ useFoods[0].strInstructions }
        ingredients={ useIngredients }
        video={ useFoods[0].strYoutube }
        recomendation={ useRecommended }
      />}
      {useFoods[0] !== undefined
      && <Recomendation
        recomendation={ useRecommended }
      />}
    </div>
  );
}

export default DetailsRecipesFoods;
