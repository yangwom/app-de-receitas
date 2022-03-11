import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../components/Details';
import { fetchFoodId } from '../../services/fetchApiFood';
import { fetchRecomendationFoods } from '../../services/fetchApiDrink';
import Recomendation from '../../components/Recomendation';
import './styles.css';

function DetailsRecipesFoods() {
  const [useFoods, setUseFoods] = useState([]);
  const [useMeasureAndIngredients, setUseMeasureAndIngredients] = useState([]);
  const [useRecommended, setUseRecommended] = useState([]);

  console.log(useRecommended);

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

  function getmeasureAndIngredients() {
    const measureAndIngredients = [];

    for (let i = 1; i <= NUMBER_INGREDIENTS; i += 1) {
      if (useFoods[0][`strIngredient${i}`]) {
        measureAndIngredients.push(`${useFoods[0][`strIngredient${i}`]}: 
          ${useFoods[0][`strMeasure${i}`]}`);
      }
    }
    setUseMeasureAndIngredients(measureAndIngredients);
  }

  console.log(useFoods[0]);

  useEffect(() => {
    if (useFoods[0] !== undefined) {
      getmeasureAndIngredients();
    }
  }, [useFoods]);

  useEffect(() => {
    getDetailsRecipesFoods();
    getDetailsRecipesRecomendationDrinks();
  }, []);

  return (
    <div className="container">
      {useFoods[0] !== undefined
      && <Details
        src={ useFoods[0].strMealThumb }
        title={ useFoods[0].strMeal }
        category={ useFoods[0].strCategory }
        instructions={ useFoods[0].strInstructions }
        measureAndIngredients={ useMeasureAndIngredients }
        video={ useFoods[0].strYoutube }
      />}
      <div className="container__recomendation">
        <div className="teste">
          {useFoods[0] !== undefined
        && useRecommended.map((recomendation, index) => (
          <div key={ index } className="card__recomendation">
            <Recomendation
              src={ recomendation.strDrinkThumb }
              title={ recomendation.strDrink }
              id={ index }
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsRecipesFoods;
