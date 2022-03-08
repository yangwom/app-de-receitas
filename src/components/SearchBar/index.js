import React, { useContext, useRef } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
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
  const { setFoodSearch, setDrinkSearch } = useContext(MyContext);

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
        return global.alert('Your search must have only 1 (one) character');
      }
    }
    if (type === 'Ingredient') {
      resultRecipes = await fetchIngredientFood(name);
    }
    resultRecipes = await fetchNameFood(name);
    setFoodSearch(resultRecipes.meals);

    if (resultRecipes.meals === null || resultRecipes.meals.length === 0) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }

    if (resultRecipes.meals && resultRecipes.meals.length === 1) {
      history.push(`/foods/${resultRecipes.meals[0].idMeal}`);
    }
  }

  async function handleDrinks(name, type) {
    if (type === FIRST_LETTER) {
      if (name.length === 1) {
        resultRecipes = await fetchFirstLetterDrink(name);
      } else {
        return global.alert('Your search must have only 1 (one) character');
      }
    }
    if (type === 'Ingredient') {
      resultRecipes = await fetchIngredientDrink(name);
    }
    resultRecipes = await fetchNameDrink(name);
    setDrinkSearch(resultRecipes.drinks);

    if (resultRecipes.drinks === null || resultRecipes.drinks.length === 0) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }

    if (resultRecipes.drinks && resultRecipes.drinks.length === 1) {
      history.push(`/drinks/${resultRecipes.drinks[0].idDrink}`);
    }
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
    <div>
      <input
        data-testid="search-input"
        onChange={ ({ target: value }) => {
          nameInput.current = value;
        } }
        type="text"
      />
      <label
        htmlFor="inputSearchRadio"
        onChange={ ({ target: { value } }) => { radioInput.current = value; } }
      >
        {' '}
        Ingredient
        <input
          data-testid="ingredient-search-radio"
          id="inputSearchRadio"
          name="radioInput"
          type="radio"
          value="Ingredient"
        />

        Name
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
      <input
        data-testid="exec-search-btn"
        onClick={ () => handleClick() }
        type="button"
        value="Search"
      />
    </div>
  );
}

export default SearchBar;
