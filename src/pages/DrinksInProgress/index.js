import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchDrinkId } from '../../services/fetchApiDrink';
import getmeasureAndIngredients from '../../services/ingredients';
import './styles.css';

const CHAVE_RECIPES_IN_PROGRESS = 'inProgressRecipes';

function DrinksInProgress() {
  const { id } = useParams();
  const [drinkInProgress, setDrinkInProgress] = useState(undefined);
  const [ingredients, setIngredients] = useState(undefined);
  const ingredientsDone = [];

  function saveRecipesInProgress() {
    localStorage.setItem(CHAVE_RECIPES_IN_PROGRESS, JSON
      .stringify({ cocktails: {
        [id]: ingredientsDone,
      },
      meals: { } }));
  }

  async function getRecipesDrinkInProgress() {
    const response = await fetchDrinkId(id);
    setDrinkInProgress(response.drinks[0]);
    const ingredientsAndMeasures = getmeasureAndIngredients(response.drinks[0]);
    const ingredientsWithDone = Object.values(ingredientsAndMeasures)
      .map((ingredient) => ({ ingredient, done: false }));
    setIngredients(ingredientsWithDone);
    setIngredients(ingredientsWithDone);
  }

  useEffect(() => {
    getRecipesDrinkInProgress();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (ingredients !== undefined) {
      ingredients.forEach((ingredient) => {
        if (ingredient.done) {
          ingredientsDone.push(ingredient);
          saveRecipesInProgress();
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, ingredients]);

  function handleDone(index) {
    setIngredients((prevState) => {
      prevState[index].done = !prevState[index].done;
      return [...prevState];
    });
  }

  return (
    <div>
      { drinkInProgress !== undefined && (
        <>
          <img
            src={ drinkInProgress.strDrinkThumb }
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
            {drinkInProgress.strCategory}

          </h3>
          <h1
            data-testid="recipe-title"
          >
            {drinkInProgress.strDrink}
          </h1>
          <div>
            {ingredients !== undefined && ingredients
              .map(({ ingredient, done }, index) => (
                <label
                  htmlFor={ `ingredient${index}` }
                  key={ index }
                  data-testid={ `${index}-ingredient-step` }
                  className={ done ? 'done' : '' }
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
            {drinkInProgress.strInstructions}
          </p>
          <input type="button" data-testid="finish-recipe-btn" value="Finish Recipe" />
        </>)}
    </div>
  );
}

export default DrinksInProgress;
