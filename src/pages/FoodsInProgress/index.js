import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CardRecipe from '../../components/CardRecipe';
import { fetchFoodId } from '../../services/fetchApiFood';
import getmeasureAndIngredients from '../../services/measureAndIngredients';
import recipesInProgress from '../../services/recipesInProgress';
import './styles.css';

const TYPE = 'meals';

function FoodsInProgress() {
  const { id } = useParams();
  const [foodInProgress, setFoodInProgress] = useState(undefined);
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

  async function getRecipesFoodInProgress() {
    const response = await fetchFoodId(id);
    setFoodInProgress(response.meals[0]);
    const ingredientsAndMeasures = getmeasureAndIngredients(response.meals[0]);
    const ingredientsWithDone = Object.values(ingredientsAndMeasures)
      .map((ingredient) => ({ ingredient, done: false }));

    createRecipeInProgressLocalStorage(ingredientsWithDone);
    setIngredients(ingredientsWithDone);
  }

  useEffect(() => {
    getRecipesFoodInProgress();
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
      { foodInProgress !== undefined && (
        <CardRecipe
          srcThumb={ foodInProgress.strMealThumb }
          favorite={ favorite }
          setFavorite={ setFavorite }
          category={ foodInProgress.strCategory }
          title={ foodInProgress.strMeal }
          type="food"
          alcoholic=""
          id={ foodInProgress.idMeal }
          area={ foodInProgress.strArea }
          ingredients={ ingredients }
          instructions={ foodInProgress.strInstructions }
          setIngredients={ setIngredients }
          finishEnabled={ finishEnabled }
        />)}
    </div>
  );
}

export default FoodsInProgress;
