import React, { useState } from 'react';
import Header from '../../components/Header';
import CardsFavorite from '../../components/CardsFavorite';

function FavoriteRecipes() {
  const [btnPressured, setBtnPressured] = useState('all');
  const getRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(getRecipes);

  return (
    <div>
      <Header>Favorite Recipes</Header>
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
      <div>
        {btnPressured === 'all' ? getRecipes.map((recipe, index) => (
          <CardsFavorite
            type={ recipe.type }
            key={ recipe.id }
            id={ recipe.id }
            img={ recipe.image }
            index={ index }
            category={ recipe.category }
            name={ recipe.name }
            date={ recipe.doneDate }
            nationality={ recipe.nationality }
            alcoholicOrNot={ recipe.alcoholicOrNot }
          />

        )) : getRecipes
          .filter((recipe) => recipe.type === btnPressured)
          .map((recipe, index) => (
            <CardsFavorite
              key={ recipe.id }
              stateBtn={ btnPressured }
              type={ recipe.type }
              id={ recipe.id }
              img={ recipe.image }
              index={ index }
              category={ recipe.category }
              name={ recipe.name }
              date={ recipe.doneDate }
              nationality={ recipe.nationality }
              alcoholicOrNot={ recipe.alcoholicOrNot }
            />
          ))}
      </div>
    </div>
  );
}

export default FavoriteRecipes;
