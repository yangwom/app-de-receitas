import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Details from '../../components/Details';
import { fetchDrinkId } from '../../services/fetchApiDrink';
import { fetchRecomendationDrinks } from '../../services/fetchApiFood';
import Recomendation from '../../components/Recomendation';
import './styles.css';
import getmeasureAndIngredients from '../../services/measureAndIngredients';
import doneRecipes from '../../services/doneRecipesInLocalStorage';
import recipesInProgress from '../../services/recipesInProgress';

const TYPE = 'cocktails';

function DetailsRecipesDrinks() {
  const [useDrinks, setUseDrinks] = useState([]);
  const [useMeasureAndIngredients, setUseMeasureAndIngredients] = useState([]);
  const [useRecommended, setUseRecommended] = useState([]);
  const [useCopyVisible, setUseCopyVisible] = useState(false);
  const [done, setDone] = useState([]);
  const [inProgress, setInProgress] = useState([]);

  const { id } = useParams();
  const { pathname } = useLocation();
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

  const CopyLocationClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setUseCopyVisible(true);
  };

  useEffect(() => {
    if (useDrinks[0] !== undefined) {
      setUseMeasureAndIngredients(getmeasureAndIngredients(useDrinks[0]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useDrinks]);

  useEffect(() => {
    getDetailsRecipesDrinks();
    getDetailsRecipesRecomendationFoods();
    setDone(doneRecipes.get(TYPE));
    setInProgress(recipesInProgress.getAllFromType(TYPE));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="container__recomendation">
        <div className="teste">
          {useDrinks[0] !== undefined
      && useRecommended.map((recomendation, index) => (
        <div className="card__recomendation" key={ index }>
          <Recomendation
            src={ recomendation.strMealThumb }
            title={ recomendation.strMeal }
            id={ index }
          />
        </div>
      ))}
        </div>
      </div>
      {useDrinks[0] !== undefined
      && <Details
        src={ useDrinks[0].strDrinkThumb }
        title={ useDrinks[0].strDrink }
        category={ useDrinks[0].strCategory }
        nationality=""
        id={ useDrinks[0].idDrink }
        alcoholic={ useDrinks[0].strAlcoholic }
        instructions={ useDrinks[0].strInstructions }
        measureAndIngredients={ useMeasureAndIngredients }
        video={ useDrinks[0].strYoutube }
        copyUrl={ CopyLocationClipboard }
        copyVisible={ useCopyVisible }
        type="drink"
        pathname={ pathname }
        recipesInProgressfromType={ inProgress }
        recipesDone={ done }
      />}
    </div>
  );
}

export default DetailsRecipesDrinks;
