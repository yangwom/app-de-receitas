import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../components/Details';
import { fetchFoodId } from '../../services/fetchApiFood';

function DetailsRecipesFoods() {
  const [useFoods, setUseFoods] = useState([]);
  const [useIngredients, setUseIngredients] = useState([]);

  const { id } = useParams();
  const NUMBER_INGREDIENTS = 20;

  async function getDetailsRecipesFoods() {
    const response = await fetchFoodId(id);
    setUseFoods(response.meals);
  }

  async function getIngredients() {
    for (let i = 1; i <= NUMBER_INGREDIENTS; i += 1) {
      const ingredient = useFoods[0][`strIngredient${i}`];
      if (ingredient) {
        setUseIngredients([...useIngredients, ingredient]);
      }
    }
  }

  console.log(useIngredients);
  console.log(useFoods[0]);

  useEffect(() => {
    getDetailsRecipesFoods();
    getIngredients();
  }, []);

  return (
    <div>
      <h1>oi</h1>
      {useFoods[0] !== undefined
      && <Details
        src={ useFoods[0].strMealThumb }
        title={ useFoods[0].srtMeal }
        category={ useFoods[0].strCategory }
        instructions={ useFoods[0].strInstructions }
        video={ useFoods[0].strYoutube }
      />}
    </div>
  );
}

export default DetailsRecipesFoods;
