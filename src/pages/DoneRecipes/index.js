import React, { useEffect, useState } from 'react';
import CardsDone from '../../components/cardsDone';
import doneRecipes from '../../services/doneRecipesInLocalStorage';
import Header from '../../components/Header';

function DoneRecipes() {
  const [btnPressured, setBtnPressured] = useState('all');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = doneRecipes.get();
    if (getRecipes) {
      setRecipes(getRecipes);
    }
  }, []);

  return (
    <div>
      <Header>Done Recipes</Header>
      <button
        type="button"
        onClick={ () => setBtnPressured('all') }
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        onClick={ () => setBtnPressured('food') }
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        onClick={ () => setBtnPressured('drink') }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      <ul>
        {btnPressured === 'all' ? recipes.map((recipe, index) => (

          <CardsDone
            type={ recipe.type }
            key={ recipe.id }
            id={ recipe.id }
            img={ recipe.image }
            index={ index }
            category={ recipe.category }
            name={ recipe.name }
            date={ recipe.doneDate }
            tags={ recipe.tags }
            nationality={ recipe.nationality }
            alcoholicOrNot={ recipe.alcoholicOrNot }
          />

        )) : recipes
          .filter((recipe) => recipe.type === btnPressured)
          .map((recipe, index) => (
            <CardsDone
              key={ recipe.id }
              stateBtn={ btnPressured }
              type={ recipe.type }
              id={ recipe.id }
              img={ recipe.image }
              index={ index }
              category={ recipe.category }
              name={ recipe.name }
              date={ recipe.doneDate }
              tags={ recipe.tags }
              nationality={ recipe.nationality }
              alcoholicOrNot={ recipe.alcoholicOrNot }
            />
          ))}
      </ul>
    </div>
  );
}

export default DoneRecipes;
