import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  fetchFoodsCategory,
  fetchFoods,
  fetchDrinksCards,
  fetchDrinksCategory,
  fetchSeachByCategory,
  fetchDrinkByCategory,
} from '../services/fechApi';
import {
  fetchIngredientsFoodList,
  fetchIngredientsDrinkList,
} from '../services/ingredientsList';
import { fetchIngredientDrink } from '../services/fetchApiDrink';
import { fetchIngredientFood } from '../services/fetchApiFood';

export const MyContext = createContext();

function MyProvider({ children }) {
  const [ingredient, setIngredient] = useState({
    type: '',
    title: '',
  });
  const [listIngredientDrinks, setlistIngredientDrinks] = useState([]);
  const [listIngredientFoods, setlistIngredientFoods] = useState([]);
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [category, setCategory] = useState();

  const getFoods = async () => {
    const data = await fetchFoods();
    setFoods(data.meals);
  };

  const getFoodsCategory = async () => {
    const data = await fetchFoodsCategory();
    setFoodCategory(data.meals);
  };

  const getDrink = async () => {
    const data = await fetchDrinksCards();
    setDrinks(data.drinks);
  };

  const getDrinksCategory = async () => {
    const data = await fetchDrinksCategory();
    setDrinkCategory(data.drinks);
  };

  const getSearchByCategory = async (categoryName) => {
    const data = await fetchSeachByCategory(categoryName);
    setFoods(data.meals);
  };

  const getFetchDrinkByCategory = async (drinkName) => {
    const data = await fetchDrinkByCategory(drinkName);
    setDrinks(data.drinks);
  };

  const getIngredientsListFood = async () => {
    const data = await fetchIngredientsFoodList();
    setlistIngredientFoods(data.meals);
  };

  const getIngredientsListDrinks = async () => {
    const data = await fetchIngredientsDrinkList();
    setlistIngredientDrinks(data.drinks);
  };

  const getIngredientByType = async ({ type, title }) => {
    if (type === 'foods') {
      const data = await fetchIngredientFood(title);
      if (data) {
        setFoods(data.meals);
      }
    } else {
      const data = await fetchIngredientDrink(title);
      if (data) {
        setDrinks(data.drinks);
      }
    }
  };

  useEffect(() => {
    getFoods();
    getDrink();
    getFoodsCategory();
    getDrinksCategory();
    getIngredientsListDrinks();
    getIngredientsListFood();
  }, []);

  useEffect(() => {
    getIngredientByType(ingredient);
    console.log(ingredient);
  }, [ingredient]);

  const contextValue = {
    getFoods,
    setFoods,
    setDrinks,
    drinks,
    foodCategory,
    foods,
    drinkCategory,
    getSearchByCategory,
    getFetchDrinkByCategory,
    getDrink,
    category,
    setCategory,
    listIngredientDrinks,
    listIngredientFoods,
    ingredient,
    setIngredient,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default MyProvider;
