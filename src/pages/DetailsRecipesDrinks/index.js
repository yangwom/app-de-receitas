import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../components/Details';
import { fetchDrinkId } from '../../services/fetchApiDrink';
import { fetchRecomendationDrinks } from '../../services/fetchApiFood';
import Recomendation from '../../components/Recomendation';

function DetailsRecipesDrinks() {
  const [useDrinks, setUseDrinks] = useState([]);
  const [useMeasureAndIngredients, setUseMeasureAndIngredients] = useState([]);
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

  function getmeasureAndIngredients() {
    const measureAndIngredients = [];

    for (let i = 1; i <= NUMBER_INGREDIENTS; i += 1) {
      if (useDrinks[0][`strIngredient${i}`]) {
        measureAndIngredients.push(`${useDrinks[0][`strIngredient${i}`]}: 
          ${useDrinks[0][`strMeasure${i}`]}`);
      }
    }
    setUseMeasureAndIngredients(measureAndIngredients);
  }

  useEffect(() => {
    if (useDrinks[0] !== undefined) {
      getmeasureAndIngredients();
    }
  }, [useDrinks]);

  useEffect(() => {
    getDetailsRecipesDrinks();
    getDetailsRecipesRecomendationFoods();
  }, []);

  console.log(useDrinks);

  return (
    <div>
      {useDrinks[0] !== undefined
      && <Details
        src={ useDrinks[0].strMealThumb }
        title={ useDrinks[0].strDrink }
        category={ useDrinks[0].strCategory }
        alcoholic={ useDrinks[0].strAlcoholic }
        instructions={ useDrinks[0].strInstructions }
        measureAndIngredients={ useMeasureAndIngredients }
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
