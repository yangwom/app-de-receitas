import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../components/Details';
import { fetchFoodId } from '../../services/fetchApiFood';
import { fetchRecomendationFoods } from '../../services/fetchApiDrink';
import Recomendation from '../../components/Recomendation';
import './styles.css';
import getmeasureAndIngredients from '../../services/ingredients';

function DetailsRecipesFoods() {
  const [useFoods, setUseFoods] = useState([]);
  const [useMeasureAndIngredients, setUseMeasureAndIngredients] = useState([]);
  const [useRecommended, setUseRecommended] = useState([]);

  const { id } = useParams();
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

  useEffect(() => {
    if (useFoods[0] !== undefined) {
      setUseMeasureAndIngredients(getmeasureAndIngredients(useFoods[0]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useFoods]);

  useEffect(() => {
    getDetailsRecipesFoods();
    getDetailsRecipesRecomendationDrinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
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
      {useFoods[0] !== undefined
      && <Details
        src={ useFoods[0].strMealThumb }
        title={ useFoods[0].strMeal }
        category={ useFoods[0].strCategory }
        instructions={ useFoods[0].strInstructions }
        measureAndIngredients={ useMeasureAndIngredients }
        video={ useFoods[0].strYoutube }
        id={ useFoods[0].idMeal }
        type="food"
      />}
    </div>
  );
}

export default DetailsRecipesFoods;
