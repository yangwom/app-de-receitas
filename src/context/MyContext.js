import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  fetchAllFoodCategories,
  fetchFoods,
  fetchForFoodsByCategory,
  fetchSurpriseFood,
  fetchListOfAllFoodIngredients,
  fetchFoodByIngredient } from '../services/foods/fetchApiFood';

import {
  fetchDrinks,
  fetchAllDrinkCategories,
  fetchForDrinksByCategory,
  fetchSurpriseDrink,
  fetchListOfAllDrinkIngredients,
  fetchDrinkByIngredient } from '../services/drinks/fetchApiDrink';

export const MyContext = createContext();

function MyProvider({ children }) {
  const [category, setCategory] = useState();
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [foods, setFoods] = useState([]);
  const [ingredient, setIngredient] = useState({
    type: '',
    title: '',
  });
  const [listIngredientDrinks, setlistIngredientDrinks] = useState([]);
  const [listIngredientFoods, setlistIngredientFoods] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [surpriseFood, setSurpriseFood] = useState([]);
  const [surpriseDrink, setSurpriseDrink] = useState([]);

  const getFoods = async () => {
    const data = await fetchFoods();
    if (data) {
      setFoods(data.meals);
    }
  };

  const getAllFoodCategories = async () => {
    const data = await fetchAllFoodCategories();
    setFoodCategory(data.meals);
  };

  const getSurpriseFood = async () => {
    const data = await fetchSurpriseFood();
    setSurpriseFood(data.meals);
  };

  const getListOfAllFoodIngredients = async () => {
    const data = await fetchListOfAllFoodIngredients();
    setlistIngredientFoods(data.meals);
  };

  const getForFoodsByCategory = async (categoryName) => {
    if (categoryName !== 'All') {
      const data = await fetchForFoodsByCategory(categoryName);
      setFoods(data.meals);
    } else {
      getFoods();
    }
  };

  const getDrinks = async () => {
    const data = await fetchDrinks();
    setDrinks(data.drinks);
  };

  const getAllDrinkCategories = async () => {
    const data = await fetchAllDrinkCategories();
    setDrinkCategory(data.drinks);
  };

  const getForDrinksByCategory = async (drinkName) => {
    const data = await fetchForDrinksByCategory(drinkName);
    setDrinks(data.drinks);
  };

  const getListOfAllDrinkIngredients = async () => {
    const data = await fetchListOfAllDrinkIngredients();
    setlistIngredientDrinks(data.drinks);
  };

  const getIngredientByType = async ({ type, title }) => {
    if (type === 'foods') {
      const data = await fetchFoodByIngredient(title);
      if (data) {
        setFoods(data.meals);
      }
    } else {
      const data = await fetchDrinkByIngredient(title);
      if (data) {
        setDrinks(data.drinks);
      }
    }
  };

  const getSurpriseDrink = async () => {
    const data = await fetchSurpriseDrink();
    setSurpriseDrink(data.drinks);
  };

  async function getListNationalities() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    if (data) {
      setNationalities([...data.meals, { strArea: 'All' }]);
    }
  }

  useEffect(() => {
    getFoods();
    getDrinks();
    getAllFoodCategories();
    getAllDrinkCategories();
    getListOfAllDrinkIngredients();
    getListOfAllFoodIngredients();
    getSurpriseDrink();
    getSurpriseFood();
    getListNationalities();
  }, []);

  useEffect(() => {
    getIngredientByType(ingredient);
  }, [ingredient]);

  const contextValue = {
    getFoods,
    setFoods,
    setDrinks,
    drinks,
    foodCategory,
    foods,
    drinkCategory,
    getForFoodsByCategory,
    getForDrinksByCategory,
    getDrink: getDrinks,
    category,
    setCategory,
    listIngredientDrinks,
    listIngredientFoods,
    ingredient,
    setIngredient,
    surpriseFood,
    surpriseDrink,
    nationalities,
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

export default memo(MyProvider);
