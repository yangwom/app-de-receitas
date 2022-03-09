export const fetchFoods = async () => {
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(urlFoods);
  const data = await response.json();
  return data;
};

export const fetchFoodsCategory = async () => {
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(urlFoods);
  const data = await response.json();
  return data;
};

export const fetchDrinksCards = async () => {
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(urlDrinks);
  const data = await response.json();
  return data;
};

export const fetchDrinksCategory = async () => {
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(urlDrinks);
  const data = await response.json();
  return data;
};

export const fetchSeachByCategory = async (categoryName) => {
  const urlSeachCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  const response = await fetch(urlSeachCategory);
  const data = await response.json();
  return data;
};

export const fetchDrinkByCategory = async (drinkName) => {
  const urlSeachCategory = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkName}`;
  const response = await fetch(urlSeachCategory);
  const data = await response.json();
  return data;
};
