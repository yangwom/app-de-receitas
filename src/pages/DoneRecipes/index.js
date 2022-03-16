import React, { useState } from 'react';
import CardsDone from '../../components/cardsDone';
import Header from '../../components/Header';

function DoneRecipes() {
  const [btnPressured, setBtnPressured] = useState('all');
  const getRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  return (
    <div>
      <Header>Done Recipes</Header>
      {getRecipes.length > 0 ? (
        <div>
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
            {btnPressured === 'all'
              ? getRecipes.map((recipe, index) => (
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
              ))
              : getRecipes
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
      ) : (
        'It\'s time to cook'
      )}
    </div>
  );
}

export default DoneRecipes;
