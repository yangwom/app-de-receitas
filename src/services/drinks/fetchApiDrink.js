export const fetchDrinks = async () => {
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(urlDrinks);
  const data = await response.json();
  return data;
};

export const fetchAllDrinkCategories = async () => {
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(urlDrinks);
  const data = await response.json();
  return data;
};

export const fetchForDrinksByCategory = async (drinkName) => {
  const urlSeachCategory = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkName}`;
  const response = await fetch(urlSeachCategory);
  const data = await response.json();
  return data;
};

export const fetchSurpriseDrink = async () => {
  const urlSurprise = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const response = await fetch(urlSurprise);
  const data = await response.json();
  return data;
};

export const fetchListOfAllDrinkIngredients = async () => {
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(urlDrinks);
  const data = await response.json();
  return data;
};

export const fetchDrinkByIngredient = async (ingredient) => {
  const endpointIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(endpointIngredient);
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchDrinkByName = async (name) => {
  const endpointName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(endpointName);
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchDrinkByFirstLetter = async (firstLetter) => {
  const endpointIFirstLetter = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(endpointIFirstLetter);
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchDrinkById = async (id) => {
  try {
    const endpointFirstLetter = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(endpointFirstLetter);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchForFoodRecommendations = async () => {
  const endpointRecomendation = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(endpointRecomendation);
  const data = await response.json();
  return data;
};
