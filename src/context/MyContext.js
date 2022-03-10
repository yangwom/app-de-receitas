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

export const MyContext = createContext();

function MyProvider({ children }) {
  const [foodSearch, setFoodSearch] = useState([]);
  const [drinkSearch, setDrinkSearch] = useState([]);
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);

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

  useEffect(() => {
    getFoods();
    getDrink();
    getFoodsCategory();
    getDrinksCategory();
  }, []);
  const contextValue = {
    foodSearch,
    drinkSearch,
    setFoodSearch,
    setDrinkSearch,
    drinks,
    foodCategory,
    foods,
    drinkCategory,
    getSearchByCategory,
    getFetchDrinkByCategory,
    setFoods,
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
