import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Details from '../../components/Details';
import { fetchFoodId } from '../../services/fetchApiFood';
import { fetchRecomendationFoods } from '../../services/fetchApiDrink';
import Recomendation from '../../components/Recomendation';
import './styles.css';
import getmeasureAndIngredients from '../../services/measureAndIngredients';

function DetailsRecipesFoods() {
  const [useFoods, setUseFoods] = useState([]);
  const [useMeasureAndIngredients, setUseMeasureAndIngredients] = useState([]);
  const [useRecommended, setUseRecommended] = useState([]);
  const [useCopyVisible, setUseCopyVisible] = useState(false);

  const { id } = useParams();
  const { pathname } = useLocation();
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

  const CopyLocationClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setUseCopyVisible(true);
  };

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
      {useFoods[0] !== undefined
      && <Details
        src={ useFoods[0].strMealThumb }
        title={ useFoods[0].strMeal } //
        category={ useFoods[0].strCategory } //
        nationality={ useFoods[0].strArea } //
        id={ useFoods[0].idMeal } //
        instructions={ useFoods[0].strInstructions }
        measureAndIngredients={ useMeasureAndIngredients }
        video={ useFoods[0].strYoutube }
        copyUrl={ CopyLocationClipboard }
        copyVisible={ useCopyVisible }
        pathname={ pathname }
      />}
      <div className="container__recomendation">
        <div className="teste">
          {useFoods[0] !== undefined
        && useRecommended.map((recomendation, index) => (
          <div
            key={ index }
            className="card__recomendation"

          >
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
