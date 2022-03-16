export const fetchIngredientsFoodList = async () => {
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(urlFoods);
  const data = await response.json();
  return data;
};

export const fetchIngredientsDrinkList = async () => {
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(urlDrinks);
  const data = await response.json();
  return data;
};
