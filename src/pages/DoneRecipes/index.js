import React, { useEffect, useState } from 'react';
import CardsDone from '../../components/cardsDone';
import doneRecipes from '../../services/doneRecipesInLocalStorage';
import Header from '../../components/Header';
import './styles.css';

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
      <div className="container__content">
        <div className="container__content__buttons">
          <div className="container__buttons--foodsdrinks">
            <button
              type="button"
              onClick={ () => setBtnPressured('food') }
              data-testid="filter-by-food-btn"
              className="btn"
            >
              Food
            </button>
            <button
              type="button"
              onClick={ () => setBtnPressured('drink') }
              data-testid="filter-by-drink-btn"
              className="btn"
            >
              Drinks
            </button>
          </div>
          <div className="container__buttons--all">
            <button
              type="button"
              onClick={ () => setBtnPressured('all') }
              data-testid="filter-by-all-btn"
              className="btn"
            >
              All
            </button>
          </div>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default DoneRecipes;
