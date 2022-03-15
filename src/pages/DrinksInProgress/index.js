import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CardRecipe from '../../components/CardRecipe';
import { fetchDrinkId } from '../../services/fetchApiDrink';
import getmeasureAndIngredients from '../../services/measureAndIngredients';
import recipesInProgress from '../../services/recipesInProgress';
import './styles.css';

const TYPE = 'cocktails';

function DrinksInProgress() {
  const { id } = useParams();
  const [drinkInProgress, setDrinkInProgress] = useState(undefined);
  const [ingredients, setIngredients] = useState(undefined);
  const [finishEnabled, setFinishEnabled] = useState(false);
  const [favorite, setFavorite] = useState(false);

  function createRecipeInProgressLocalStorage(ingredientsWithDone) {
    const recipeInLocalStorage = recipesInProgress.get(id, TYPE);
    if (recipeInLocalStorage) {
      ingredientsWithDone.forEach((ingredient) => {
        const exists = recipeInLocalStorage
          .some((inLocalStorage) => inLocalStorage === ingredient.ingredient);
        if (exists) {
          ingredient.done = true;
        }
      });
    }
  }

  async function getRecipesDrinkInProgress() {
    const response = await fetchDrinkId(id);
    setDrinkInProgress(response.drinks[0]);
    const ingredientsAndMeasures = getmeasureAndIngredients(response.drinks[0]);
    const ingredientsWithDone = Object.values(ingredientsAndMeasures)
      .map((ingredient) => ({ ingredient, done: false }));

    createRecipeInProgressLocalStorage(ingredientsWithDone);
    setIngredients(ingredientsWithDone);
  }

  useEffect(() => {
    getRecipesDrinkInProgress();
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorites !== null) {
      const findFavorite = favorites.find((_favorite) => _favorite.id === id);
      if (findFavorite !== undefined) {
        setFavorite(true);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (ingredients) {
      const ingredientsDone = ingredients.filter((ingredient) => ingredient.done)
        .map((ingredient) => ingredient.ingredient);
      recipesInProgress.add(id, ingredientsDone, TYPE);
      setFinishEnabled(ingredients.every((ingredient) => ingredient.done));
    }
  }, [ingredients, id]);

  return (
    <div>
      { drinkInProgress !== undefined && (
        <CardRecipe
          srcThumb={ drinkInProgress.strDrinkThumb }
          favorite={ favorite }
          setFavorite={ setFavorite }
          category={ drinkInProgress.strCategory }
          title={ drinkInProgress.strDrink }
          type="drink"
          alcoholic={ drinkInProgress.strAlcoholic }
          id={ drinkInProgress.idDrink }
          area=""
          ingredients={ ingredients }
          instructions={ drinkInProgress.strInstructions }
          setIngredients={ setIngredients }
          finishEnabled={ finishEnabled }
        />)}
    </div>
  );
}

export default DrinksInProgress;
