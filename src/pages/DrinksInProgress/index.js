import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CardRecipe from '../../components/CardRecipe';
import doneRecipes from '../../services/doneRecipes';
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
      id: drinkInProgress.idDrink,
      type: 'drink',
      nationality: drinkInProgress.strArea ? drinkInProgress.strArea : '',
      category: drinkInProgress.strCategory,
      alcoholicOrNot: drinkInProgress.strAlcoholic,
      name: drinkInProgress.strDrink,
      image: drinkInProgress.strDrinkThumb,
      doneDate: new Date(),
      tags: drinkInProgress.strTags ? [drinkInProgress.strTags] : [],
    };
    const finishedRecipe = ingredients.every((ingredient) => ingredient.done);
    if (finishedRecipe) {
      setFinishEnabled(finishedRecipe);
      recipesInProgress.remove(id, TYPE);
      doneRecipes.add(TYPE, objDoneRecipe);
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
      { drinkInProgress !== undefined && (
        <CardRecipe
          srcThumb={ drinkInProgress.strDrinkThumb }
          category={ drinkInProgress.strCategory }
          title={ drinkInProgress.strDrink }
          type="drink"
          alcoholic={ drinkInProgress.strAlcoholic }
          id={ drinkInProgress.idDrink }
          nationality=""
          ingredients={ ingredients }
          instructions={ drinkInProgress.strInstructions }
          setIngredients={ setIngredients }
          finishEnabled={ finishEnabled }
        />)}
    </div>
  );
}

export default DrinksInProgress;
