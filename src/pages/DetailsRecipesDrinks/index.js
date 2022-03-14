import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Details from '../../components/Details';
import { fetchDrinkId } from '../../services/fetchApiDrink';
import { fetchRecomendationDrinks } from '../../services/fetchApiFood';
import {
  setFavoriteRecipes, removeFavoriteRecipes } from '../../services/favorites';
import Recomendation from '../../components/Recomendation';
import './styles.css';
import getmeasureAndIngredients from '../../services/measureAndIngredients';

function DetailsRecipesDrinks() {
  const [useDrinks, setUseDrinks] = useState([]);
  const [useMeasureAndIngredients, setUseMeasureAndIngredients] = useState([]);
  const [useRecommended, setUseRecommended] = useState([]);
  const [useCopyVisible, setUseCopyVisible] = useState(false);
  const [useFavorite, setUseFavorite] = useState(false);

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

  const FavoriteRecipes = () => {
    const { idDrink, strDrink, strCategory, strAlcoholic, strDrinkThumb } = useDrinks[0];
    const obj = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorites === null) {
      setFavoriteRecipes(obj);
      setUseFavorite(true);
    } else {
      const findFavorite = favorites.find((favorite) => favorite.id === idDrink);
      if (findFavorite === undefined) {
        setFavoriteRecipes(obj);
        setUseFavorite(true);
      } else {
        removeFavoriteRecipes(obj.id);
        setUseFavorite(false);
      }
    }
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorites !== null) {
      const findFavorite = favorites.find((favorite) => favorite.id === id);
      if (findFavorite !== undefined) {
        setUseFavorite(true);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (useDrinks[0] !== undefined) {
      setUseMeasureAndIngredients(getmeasureAndIngredients(useDrinks[0]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useDrinks]);

  useEffect(() => {
    getDetailsRecipesDrinks();
    getDetailsRecipesRecomendationFoods();
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
        alcoholic={ useDrinks[0].strAlcoholic }
        instructions={ useDrinks[0].strInstructions }
        measureAndIngredients={ useMeasureAndIngredients }
        video={ useDrinks[0].strYoutube }
        copyUrl={ CopyLocationClipboard }
        copyVisible={ useCopyVisible }
        favorite={ FavoriteRecipes }
        isFavorite={ useFavorite }
        pathname={ pathname }
      />}
    </div>
  );
}

export default DetailsRecipesDrinks;
