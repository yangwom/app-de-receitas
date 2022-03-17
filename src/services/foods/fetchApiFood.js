export const fetchFoods = async () => {
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(urlFoods);
  const data = await response.json();
  return data;
};

export const fetchAllFoodCategories = async () => {
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(urlFoods);
  const data = await response.json();
  return data;
};

export const fetchForFoodsByCategory = async (foodName) => {
  const urlSeachCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodName}`;
  const response = await fetch(urlSeachCategory);
  const data = await response.json();
  return data;
};

export const fetchSurpriseFood = async () => {
  const urlSurprise = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response = await fetch(urlSurprise);
  const data = await response.json();
  return data;
};

export const fetchListOfAllFoodIngredients = async () => {
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(urlFoods);
  const data = await response.json();
  return data;
};

export const fetchForDrinkRecommendations = async () => {
  const endpointRecomendation = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(endpointRecomendation);
  const data = await response.json();
  return data;
};

export const fetchFoodByIngredient = async (ingredient) => {
  try {
    const endpointIgredient = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(endpointIgredient);
    const data = await response.json();
    return data;
  } catch (e) {
    return undefined;
  }
};

export const fetchFoodByName = async (name) => {
  try {
    const endpointName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    const response = await fetch(endpointName);
    const data = await response.json();
    return data;
  } catch (e) {
    return undefined;
  }
};

export const fetchFoodByFirstLetter = async (firstLetter) => {
  try {
    const endpointFirstLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
    const response = await fetch(endpointFirstLetter);
    const data = await response.json();
    return data;
  } catch (e) {
    return undefined;
  }
};

export const fetchFoodById = async (id) => {
  try {
    const endpointFirstLetter = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(endpointFirstLetter);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchForFoodByNationality = async (nationality) => {
  const urlNationality = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`;
  const response = await fetch(urlNationality);
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    return undefined;
  }
};
