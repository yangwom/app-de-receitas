import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import CardsFavorite from '../../components/CardsFavorite';
import './styles.css';

function FavoriteRecipes() {
  const [btnPressured, setBtnPressured] = useState('all');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getRecipes) {
      setFavorites(getRecipes);
    }
  }, []);

  return (
    <div>
      <Header>Favorite Recipes</Header>
      <div className="container__content">
        <div className="container__content__buttons">
          <div className="container__buttons--foodsdrinks">
            <button
              type="button"
              className="btn"
              onClick={ () => setBtnPressured('food') }
              data-testid="filter-by-food-btn"
            >
              Food
            </button>
            <button
              type="button"
              className="btn"
              onClick={ () => setBtnPressured('drink') }
              data-testid="filter-by-drink-btn"
            >
              Drinks
            </button>
          </div>
          <div className="container__buttons--all">
            <button
              type="button"
              className="btn"
              onClick={ () => setBtnPressured('all') }
              data-testid="filter-by-all-btn"
            >
              All
            </button>
          </div>
        </div>
        <div>
          {btnPressured === 'all' ? favorites.map((recipe, index) => (
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

          )) : favorites
            .filter((recipe) => recipe.type === btnPressured)
            .map((recipe, index) => (
              <CardsFavorite
                type={ recipe.type }
                stateBtn={ btnPressured }
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
            ))}
        </div>
      </div>
    </div>
  );
}

export default FavoriteRecipes;
