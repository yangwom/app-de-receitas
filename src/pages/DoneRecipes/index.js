import React, { useState } from 'react';
import CardsDone from '../../components/cardsDone';
import Header from '../../components/Header';

const favoriteRecipes = [
  {
    id: '52771',
    type: 'food',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image:
      'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

const setFavoritesRecipes = () => localStorage.setItem('setFavoritesRecipes',
  JSON.stringify(favoriteRecipes));

setFavoritesRecipes();

function DoneRecipes() {
  const [btnPressured, setBtnPressured] = useState('all');
  const getRecipes = JSON.parse(localStorage.getItem('setFavoritesRecipes'));
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
        {btnPressured === 'all' ? getRecipes.map((recipe, index) => (

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

        )) : getRecipes
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
