import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchFoodId } from '../../services/fetchApiFood';
import getmeasureAndIngredients from '../../services/ingredients';

function FoodsInProgress() {
  const [foodInProgress, setFoodInProgress] = useState(undefined);
  const [ingredients, setIngredients] = useState(undefined);
  const { id } = useParams();

  async function getRecipesDrinkInProgress() {
    const response = await fetchFoodId(id);
    setFoodInProgress(response.meals[0]);
    setIngredients(getmeasureAndIngredients(response.meals[0]));
  }

  useEffect(() => {
    getRecipesDrinkInProgress();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <ol>
            {ingredients !== undefined && ingredients.map((ingredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-step` }
              >
                {ingredient}
              </li>
            ))}
          </ol>
          <p
            data-testid="instructions"
          >
            {foodInProgress.strInstructions}
          </p>
          <input type="button" data-testid="finish-recipe-btn" value="Finish Recipe" />
        </>)}
    </div>
  );
}

export default FoodsInProgress;
