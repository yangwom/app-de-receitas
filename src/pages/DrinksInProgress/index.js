import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchDrinkId } from '../../services/fetchApiDrink';
import getmeasureAndIngredients from '../../services/ingredients';

function DrinksInProgress() {
  const [drinkInProgress, setDrinkInProgress] = useState(undefined);
  const [ingredients, setIngredients] = useState(undefined);
  const { id } = useParams();

  async function getRecipesDrinkInProgress() {
    const response = await fetchDrinkId(id);
    setDrinkInProgress(response.drinks[0]);
    setIngredients(getmeasureAndIngredients(response.drinks[0]));
  }

  useEffect(() => {
    getRecipesDrinkInProgress();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <ul>
            {ingredients !== undefined && ingredients.map((ingredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-step` }
              >
                <input
                  type="checkbox"
                  value={ ingredient }
                />
                {ingredient}
              </li>
            ))}
          </ul>
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
