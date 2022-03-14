import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchFoodId } from '../../services/fetchApiFood';
import getmeasureAndIngredients from '../../services/measureAndIngredients';
import recipesInProgress from '../../services/recipesInProgress';
import './styles.css';

const TYPE = 'meals';

function FoodsInProgress() {
  const { id } = useParams();
  const [foodInProgress, setFoodInProgress] = useState(undefined);
  const [ingredients, setIngredients] = useState(undefined);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (ingredients) {
      const ingredientsDone = ingredients.filter((ingredient) => ingredient.done)
        .map((ingredient) => ingredient.ingredient);
      recipesInProgress.add(id, ingredientsDone, TYPE);
    }
  }, [ingredients, id]);

  function handleDone(index) {
    setIngredients((prevState) => {
      prevState[index].done = !prevState[index].done;
      return [...prevState];
    });
  }

  console.log(ingredients);
  return (
    <div>
      { foodInProgress !== undefined && (
        <>
          <img
            src={ foodInProgress.strMealThumb }
            alt="profile"
            data-testid="recipe-photo"
          />
          <input
            type="button"
            data-testid="share-btn"
            value="share"
          />
          <input
            type="button"
            data-testid="favorite-btn"
            value="favorite"
          />
          <h3
            data-testid="recipe-category"
          >
            {foodInProgress.strCategory}

          </h3>
          <h1
            data-testid="recipe-title"
          >
            {foodInProgress.strMeal}
          </h1>
          <div>
            {ingredients !== undefined && ingredients
              .map(({ ingredient, done }, index) => (
                <label
                  htmlFor={ `ingredient${index}` }
                  key={ index }
                  className={ done ? 'done' : '' }
                  data-testid={ `${index}-ingredient-step` }
                >
                  <input
                    id={ `ingredient${index}` }
                    type="checkbox"
                    checked={ done }
                    onChange={ () => handleDone(index) }
                  />
                  {ingredient}
                </label>
              ))}
          </div>
          <p
            data-testid="instructions"
          >
            {foodInProgress.strInstructions}
          </p>
          <input
            type="button"
            data-testid="finish-recipe-btn"
            value="Finish Recipe"
            disabled
          />
        </>)}
    </div>
  );
}

export default FoodsInProgress;
