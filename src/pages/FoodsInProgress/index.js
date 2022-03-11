import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchFoodId } from '../../services/fetchApiFood';
import getmeasureAndIngredients from '../../services/ingredients';
import './styles.css';

function FoodsInProgress() {
  const [foodInProgress, setFoodInProgress] = useState(undefined);
  const [ingredients, setIngredients] = useState(undefined);
  const { id } = useParams();

  async function getRecipesFoodInProgress() {
    const response = await fetchFoodId(id);
    setFoodInProgress(response.meals[0]);
    const ingredientsAndMeasures = getmeasureAndIngredients(response.meals[0]);
    const ingredientsWithDone = Object.values(ingredientsAndMeasures)
      .map((ingredient) => ({ ingredient, done: false }));
    setIngredients(ingredientsWithDone);
  }

  useEffect(() => {
    getRecipesFoodInProgress();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDone(index) {
    setIngredients((prevState) => {
      prevState[index].done = !prevState[index].done;
      return [...prevState];
    });
  }

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

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
            {foodInProgress.strInstructions}
          </p>
          <input type="button" data-testid="finish-recipe-btn" value="Finish Recipe" />
        </>)}
    </div>
  );
}

export default FoodsInProgress;
