import React, { useContext, useRef } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import './styles.css';
import {
  fetchIngredientFood,
  fetchNameFood,
  fetchFirstLetterFood } from '../../services/fetchApiFood';

import {
  fetchIngredientDrink,
  fetchNameDrink,
  fetchFirstLetterDrink } from '../../services/fetchApiDrink';
import { MyContext } from '../../context/MyContext';

const FIRST_LETTER = 'First letter';

function SearchBar() {
  const { setFoods, setDrinks } = useContext(MyContext);

  const nameInput = useRef(null);
  const radioInput = useRef(null);
  const useRoute = useRouteMatch();
  const history = useHistory();
  let resultRecipes = '';

  async function handleFoods(name, type) {
    if (type === FIRST_LETTER) {
      if (name.length === 1) {
        resultRecipes = await fetchFirstLetterFood(name);
      } else {
        global.alert('Your search must have only 1 (one) character');
        return;
      }
    } else if (type === 'Ingredient') {
      resultRecipes = await fetchIngredientFood(name);
    } else {
      resultRecipes = await fetchNameFood(name);
    }

    if (resultRecipes.meals === null) {
      return global
        .alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (resultRecipes.meals.length === 1) {
      history.push(`/foods/${resultRecipes.meals[0].idMeal}`);
    }
    if (resultRecipes.meals.length > 1) return setFoods(resultRecipes.meals);
  }

  async function handleDrinks(name, type) {
    if (type === FIRST_LETTER) {
      if (name.length === 1) {
        resultRecipes = await fetchFirstLetterDrink(name);
      } else {
        global.alert('Your search must have only 1 (one) character');
        return;
      }
    } else if (type === 'Ingredient') {
      resultRecipes = await fetchIngredientDrink(name);
    } else {
      resultRecipes = await fetchNameDrink(name);
    }

    if (resultRecipes.drinks === null) {
      return global
        .alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (resultRecipes.drinks.length === 1) {
      history.push(`/drinks/${resultRecipes.drinks[0].idDrink}`);
    }
    if (resultRecipes.drinks.length > 1) return setDrinks(resultRecipes.drinks);
  }

  function handleClick() {
    if (useRoute.path === '/foods' && useRoute.isExact) {
      handleFoods(nameInput.current.value, radioInput.current);
    }
    if (useRoute.path === '/drinks' && useRoute.isExact) {
      handleDrinks(nameInput.current.value, radioInput.current);
    }
  }

  return (
    <div className="container__filter">
      <input
        data-testid="search-input"
        onChange={ ({ target: value }) => {
          nameInput.current = value;
        } }
        type="text"
      />
      <div className="container__filter-radio">
        <label
          className="label__filter"
          htmlFor="inputSearchRadio"
          onChange={ ({ target: { value } }) => { radioInput.current = value; } }
        >
          Ingredient
          <input
            data-testid="ingredient-search-radio"
            id="inputSearchRadio"
            name="radioInput"
            type="radio"
            value="Ingredient"
          />
          <span>Name</span>
          <input
            id="inputSearchRadio"
            name="radioInput"
            type="radio"
            value="Name"
            data-testid="name-search-radio"
          />

          First letter
          <input
            data-testid="first-letter-search-radio"
            id="inputSearchRadio"
            name="radioInput"
            type="radio"
            value="First letter"
          />
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        onClick={ () => handleClick() }
        type="button"
      >
        search
      </button>

    </div>
  );
}

export default SearchBar;
