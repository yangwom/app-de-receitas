import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CardRecipe from '../../components/CardRecipe';
import doneRecipes from '../../services/doneRecipesInLocalStorage';
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

  function createRecipeInProgressLocalStorage(ingredientsWithDone) {
    const recipeInLocalStorage = recipesInProgress.get(id, TYPE)
    || recipesInProgress.add(id, [], TYPE);
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

  function DoneRecipesInLocalStorage() {
    const objDoneRecipe = {
      id: foodInProgress.idMeal,
      type: 'food',
      nationality: foodInProgress.strArea,
      category: foodInProgress.strCategory,
      alcoholicOrNot: '',
      name: foodInProgress.strMeal,
      image: foodInProgress.strMealThumb,
      doneDate: new Date(),
      tags: foodInProgress.strTags ? [foodInProgress.strTags] : [],
    };
    const finishedRecipe = ingredients.every((ingredient) => ingredient.done);
    if (finishedRecipe) {
      setFinishEnabled(finishedRecipe);
      recipesInProgress.remove(id, TYPE);
      doneRecipes.add(objDoneRecipe);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (ingredients) {
      const ingredientsDone = ingredients.filter((ingredient) => ingredient.done)
        .map((ingredient) => ingredient.ingredient);
      recipesInProgress.add(id, ingredientsDone, TYPE);
      DoneRecipesInLocalStorage();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredients, id]);

  return (
    <div>
      { foodInProgress !== undefined && (
        <CardRecipe
          srcThumb={ foodInProgress.strMealThumb }
          category={ foodInProgress.strCategory }
          title={ foodInProgress.strMeal }
          type="food"
          alcoholic=""
          id={ foodInProgress.idMeal }
          nationality={ foodInProgress.strArea }
          ingredients={ ingredients }
          instructions={ foodInProgress.strInstructions }
          setIngredients={ setIngredients }
          finishEnabled={ finishEnabled }
        />)}
    </div>
  );
}

export default FoodsInProgress;
